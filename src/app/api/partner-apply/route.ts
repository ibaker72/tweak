import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, company, website, description, howYouMeet, estimatedReferrals } = data;

    if (!name || !email || !description || !howYouMeet || !estimatedReferrals) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    // Send notification email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "hello@tweakandbuild.com";

    if (resendKey && resendKey !== "re_xxxxxxxxxxxx") {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Tweak & Build <noreply@tweakandbuild.com>",
        to: [to],
        replyTo: email,
        subject: `Partner Application from ${name}${company ? ` (${company})` : ""}`,
        html: `<div style="font-family:-apple-system,sans-serif;max-width:560px">
          <h2 style="color:#C8FF00;background:#0a0a12;padding:16px;border-radius:8px">New Partner Application</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#888;width:140px">Name</td><td style="padding:8px 0;color:#222">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0;color:#222">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Company</td><td style="padding:8px 0;color:#222">${company || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Website/LinkedIn</td><td style="padding:8px 0;color:#222">${website || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#888">What they do</td><td style="padding:8px 0;color:#222">${description}</td></tr>
            <tr><td style="padding:8px 0;color:#888">How they meet clients</td><td style="padding:8px 0;color:#222">${howYouMeet}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Est. referrals/quarter</td><td style="padding:8px 0;color:#222">${estimatedReferrals}</td></tr>
          </table>
        </div>`,
      });
    }

    // Add to Loops as a partner-applicant contact
    const loopsKey = process.env.LOOPS_API_KEY;
    if (loopsKey) {
      await fetch("https://app.loops.so/api/v1/contacts/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${loopsKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" ") || "",
          source: "partner-application",
          userGroup: "partner-applicant",
          company: company || "",
          website: website || "",
        }),
      }).catch(() => {
        // Non-critical: don't fail the request if Loops is down
      });
    }

    console.log("Partner application received:", { name, email, company, description, howYouMeet, estimatedReferrals });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partner application error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
