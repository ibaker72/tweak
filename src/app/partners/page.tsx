"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Layers,
  RefreshCcw,
  Palette,
  Megaphone,
  Lightbulb,
  Users,
  FileText,
  UserCheck,
  Link2,
  File,
  Mail,
  LayoutDashboard,
  MessageCircle,
  Unlock,
  ChevronDown,
  Send,
  Loader2,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared";

/* ─── Commission Cards ─── */
const commissionTiers = [
  {
    icon: Zap,
    name: "Rapid Build",
    commission: "10%",
    range: "on $2,500 – $8,000 projects",
    example: "Refer a $5,000 project → earn $500",
    payout: "Paid 14 days after client payment",
  },
  {
    icon: Layers,
    name: "Custom Engineering",
    commission: "10%",
    range: "on $8,000 – $30,000+ projects",
    example: "Refer a $20,000 project → earn $2,000",
    payout: "Paid per milestone as client pays",
  },
  {
    icon: RefreshCcw,
    name: "Growth Retainer",
    commission: "10% for 3 months",
    range: "on $2,000 – $5,000/month retainers",
    example: "Refer a $3,000/mo retainer → earn $900 over 3 months",
    payout: "Paid monthly for first 3 months",
  },
];

/* ─── How it works ─── */
const steps = [
  {
    num: "01",
    title: "Apply & get approved",
    desc: "Submit a quick application. We review within 48 hours and send you your unique referral link, a partner kit, and intro templates.",
  },
  {
    num: "02",
    title: "Share your link",
    desc: "When you meet someone who needs a website, web app, or product built — send them to tweakandbuild.com using your unique link. Or introduce us directly via email.",
  },
  {
    num: "03",
    title: "We close & deliver",
    desc: "We handle the strategy call, proposal, and the entire build. You don\u2019t need to sell, scope, or manage anything. We keep you updated on status.",
  },
  {
    num: "04",
    title: "You get paid",
    desc: "When the client pays, your commission hits your account within 14 days. Track everything in your partner dashboard.",
  },
];

/* ─── Partner Personas ─── */
const personas = [
  { icon: Palette, title: "Brand Designers", desc: "You design the brand — we build the site. Earn on every client you refer for development." },
  { icon: Megaphone, title: "Marketing Consultants", desc: "Your clients need a web presence that converts. Send them our way and earn on the build." },
  { icon: Lightbulb, title: "Startup Advisors & Coaches", desc: "Founders in your network need MVPs and websites. Make the intro, earn the commission." },
  { icon: Users, title: "Community Operators", desc: "You run events, groups, or co-working spaces. Turn your network into recurring income." },
  { icon: FileText, title: "Copywriters & Content Creators", desc: "You write the copy — we build the site it lives on. A natural partnership." },
  { icon: UserCheck, title: "Past Clients", desc: "You\u2019ve seen the quality firsthand. Refer a friend, earn a commission." },
];

/* ─── Partner Toolkit ─── */
const toolkit = [
  { icon: Link2, title: "Unique referral link", desc: "Personalized URL with 90-day tracking" },
  { icon: File, title: "Partner one-pager", desc: "PDF you can share with prospects — our services, pricing, and results" },
  { icon: Mail, title: "Intro email templates", desc: "Pre-written emails to make warm introductions" },
  { icon: LayoutDashboard, title: "Partner dashboard", desc: "Track your referrals, conversions, and earnings" },
  { icon: MessageCircle, title: "Direct line to Iyad", desc: "Priority communication for partner questions" },
  { icon: Unlock, title: "No exclusivity", desc: "Work with anyone — no non-compete, no restrictions" },
];

/* ─── FAQ ─── */
const partnerFaqs = [
  {
    q: "How much can I realistically earn?",
    a: "Our average project is $8,000\u2013$15,000. At 10% commission, one referral per month puts $800\u2013$1,500 in your pocket. Partners who actively make introductions typically earn $2,000\u2013$5,000 per quarter.",
  },
  {
    q: "Do I need to sell or close deals?",
    a: "No. You make the introduction — we handle the strategy call, proposal, pricing, and the entire project. You don\u2019t need to understand our tech stack or scope projects.",
  },
  {
    q: "When do I get paid?",
    a: "14 days after we receive payment from the client. For milestone-based projects, you earn as each milestone is paid. For retainers, you earn monthly for the first 3 months.",
  },
  {
    q: "How do I track my referrals?",
    a: "Every partner gets a unique referral link. When someone visits our site through your link, they\u2019re tracked for 90 days. You can also introduce clients directly via email — we\u2019ll manually attribute the referral.",
  },
  {
    q: "What if someone I refer doesn\u2019t convert right away?",
    a: "Your referral link has a 90-day attribution window. If they click your link today and submit an inquiry 60 days later, you still get credit.",
  },
  {
    q: "Is there a minimum number of referrals required?",
    a: "No minimums, no quotas. Refer one client a year or ten a month — you earn on every one.",
  },
  {
    q: "Can I refer myself?",
    a: "The partner program is for referring others. If you need development work yourself, reach out through our contact page and we\u2019ll scope it directly.",
  },
];

/* ─── Referral Estimate Options ─── */
const referralOptions = ["1-2", "3-5", "5-10", "10+"];

export default function PartnersPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    description: "",
    howYouMeet: "",
    estimatedReferrals: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const s = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description || !form.howYouMeet || !form.estimatedReferrals) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/partner-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pb-24 pt-36 sm:pt-40">
      <div className="wrap">
        {/* ══════════════════════════════════════════════════
            SECTION 1 — Hero
        ══════════════════════════════════════════════════ */}
        <Reveal>
          <div className="mx-auto max-w-[680px] text-center">
            <span className="section-label">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Partner Program
            </span>
            <h1 className="mt-5 font-display text-[clamp(32px,5vw,52px)] font-black leading-[1.05] tracking-[-0.04em] text-white">
              Earn commissions for every client you refer.
            </h1>
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.75] text-body">
              We pay 10% on every deal. Fixed pricing means your referrals know the cost upfront — no awkward surprises. You introduce, we build, you get paid.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#apply" className="btn-v w-full justify-center sm:w-auto">
                Apply to become a partner <ArrowRight size={13} />
              </a>
              <a href="#how-it-works" className="text-[13px] font-semibold text-dim transition-colors hover:text-white">
                See how it works
              </a>
            </div>
          </div>
        </Reveal>

        <div className="divider mt-16" />

        {/* ══════════════════════════════════════════════════
            SECTION 2 — Commission Structure
        ══════════════════════════════════════════════════ */}
        <section id="commission" className="py-24 sm:py-32">
          <Reveal>
            <div className="mx-auto mb-14 max-w-[520px] text-center">
              <span className="section-label">Commissions</span>
              <h2 className="section-title mt-4">What you earn</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-body">
                Transparent commissions on every engagement.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-[1060px] items-stretch gap-5 md:grid-cols-3">
            {commissionTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={0.06 + i * 0.06}>
                <div
                  className="group relative flex h-full flex-col overflow-visible rounded-[20px] border-[1.5px] border-white/10 px-7 pb-7 pt-7 transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                  style={{ background: "rgba(255,255,255,0.012)" }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                  <tier.icon className="mb-4 h-8 w-8 text-neutral-500" strokeWidth={1.5} />
                  <h3 className="font-display text-[20px] font-bold text-white">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="font-display text-[clamp(28px,3.5vw,36px)] font-black leading-none tracking-[-0.03em] text-accent">
                      {tier.commission}
                    </span>
                  </div>
                  <p className="mt-1.5 font-mono text-[11px] text-dim">{tier.range}</p>
                  <div className="mt-5 rounded-xl border border-accent/[0.12] bg-accent/[0.04] px-4 py-2.5 font-mono text-[11px] text-accent/80">
                    {tier.example}
                  </div>
                  <p className="mt-auto pt-5 font-mono text-[10px] leading-[1.6] text-dim">{tier.payout}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <p className="mx-auto mt-10 max-w-[700px] text-center font-mono text-[11px] leading-[1.7] text-dim">
              Commissions are paid via Stripe or PayPal, 14 days after we receive client payment. 90-day attribution window on all referral links.
            </p>
          </Reveal>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════════
            SECTION 3 — How It Works
        ══════════════════════════════════════════════════ */}
        <section id="how-it-works" className="scroll-mt-24 py-24 sm:py-32">
          <Reveal>
            <div className="mx-auto mb-14 max-w-[520px] text-center">
              <span className="section-label">Process</span>
              <h2 className="section-title mt-4">How it works</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-body">
                Four steps. You make an introduction, we handle everything else.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto max-w-[720px] space-y-3">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div
                  className="relative overflow-hidden rounded-[18px] border border-white/[0.05] p-6"
                  style={{ background: "linear-gradient(170deg, rgba(200,255,0,0.02), rgba(14,14,24,0.9))" }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08]">
                      <span className="font-mono text-[13px] font-bold text-accent">{step.num}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-[13px] leading-[1.7] text-body">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════════
            SECTION 4 — Who This Is For
        ══════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32">
          <Reveal>
            <div className="mx-auto mb-14 max-w-[560px] text-center">
              <span className="section-label">For You</span>
              <h2 className="section-title mt-4">Built for people who already talk to our clients</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-body">
                You don&apos;t need to be a salesperson. You just need to know people who need things built.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-[800px] gap-4 sm:grid-cols-2">
            {personas.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div
                  className="flex items-start gap-4 rounded-[18px] border border-white/[0.05] p-5 transition-all duration-200 hover:border-white/[0.12]"
                  style={{ background: "rgba(255,255,255,0.012)" }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.06]">
                    <p.icon size={18} className="text-accent/70" />
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] font-bold text-white">{p.title}</h3>
                    <p className="mt-1 text-[13px] leading-[1.65] text-body">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════════
            SECTION 5 — What Partners Get
        ══════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32">
          <Reveal>
            <div className="mx-auto mb-14 max-w-[520px] text-center">
              <span className="section-label">Toolkit</span>
              <h2 className="section-title mt-4">Your partner toolkit</h2>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-[800px] gap-4 sm:grid-cols-2">
            {toolkit.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="flex items-start gap-4 rounded-[16px] border border-white/[0.05] p-5" style={{ background: "rgba(255,255,255,0.012)" }}>
                  <item.icon size={18} className="mt-0.5 flex-shrink-0 text-accent/60" />
                  <div>
                    <h4 className="text-[14px] font-semibold text-white">{item.title}</h4>
                    <p className="mt-0.5 text-[13px] text-body">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════════
            SECTION 6 — FAQ
        ══════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-[780px]">
            <Reveal>
              <div className="mb-14 text-center">
                <span className="section-label">FAQ</span>
                <h2 className="section-title mt-4">Common questions</h2>
              </div>
            </Reveal>
            <div className="space-y-2">
              {partnerFaqs.map((faq, i) => (
                <Reveal key={i} delay={i * 0.03}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-all duration-200",
                      faqOpen === i ? "border-accent/[0.15] bg-accent/[0.02]" : "border-white/[0.05] bg-white/[0.015]",
                    )}
                  >
                    <button
                      suppressHydrationWarning
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-[18px] text-left"
                    >
                      <span className={cn("text-[15px] font-semibold", faqOpen === i ? "text-white" : "text-gray-300")}>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={cn("flex-shrink-0 transition-transform duration-300", faqOpen === i ? "rotate-180 text-accent" : "text-dim")}
                      />
                    </button>
                    <div className="overflow-hidden transition-[max-height] duration-300" style={{ maxHeight: faqOpen === i ? 300 : 0 }}>
                      <p className="px-6 pb-5 text-sm leading-[1.75] text-body">{faq.a}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════════
            SECTION 7 — Application Form
        ══════════════════════════════════════════════════ */}
        <section id="apply" className="scroll-mt-24 py-24 sm:py-32">
          <Reveal>
            <div className="mx-auto mb-10 max-w-[520px] text-center">
              <span className="section-label">Apply</span>
              <h2 className="section-title mt-4">Apply to become a partner</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-body">
                Takes 2 minutes. We review every application within 48 hours.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto max-w-[560px]">
              <div className="card overflow-hidden rounded-2xl p-6 sm:p-8">
                {status === "success" ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] border border-accent/[0.15] bg-accent/[0.06]">
                      <Check size={18} className="text-accent" />
                    </div>
                    <p className="font-display text-[17px] font-bold text-white">Application received!</p>
                    <p className="mt-1.5 text-[13px] text-dim">
                      We&apos;ll review it and get back to you within 48 hours with your referral link and partner kit.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-3.5">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">Full name *</label>
                        <input className="field" placeholder="Jane Smith" value={form.name} onChange={s("name")} required />
                      </div>
                      <div>
                        <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">Email *</label>
                        <input className="field" type="email" placeholder="jane@company.com" value={form.email} onChange={s("email")} required />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">Company / brand</label>
                        <input className="field" placeholder="Acme Inc." value={form.company} onChange={s("company")} />
                      </div>
                      <div>
                        <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">Website or LinkedIn</label>
                        <input className="field" type="url" placeholder="https://" value={form.website} onChange={s("website")} />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">How would you describe what you do? *</label>
                      <textarea className="field" rows={2} placeholder="Brand designer, marketing consultant, startup advisor..." value={form.description} onChange={s("description")} required />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">How do you typically meet potential clients for us? *</label>
                      <textarea className="field" rows={2} placeholder="Through my design clients, startup community events..." value={form.howYouMeet} onChange={s("howYouMeet")} required />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">Estimated referrals per quarter *</label>
                      <select
                        className={cn("field", form.estimatedReferrals ? "text-white" : "text-white/[0.15]")}
                        value={form.estimatedReferrals}
                        onChange={s("estimatedReferrals")}
                        required
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {referralOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    {status === "error" && (
                      <p className="text-[13px] text-red-400">Something went wrong. Please try again.</p>
                    )}
                    <button type="submit" disabled={status === "loading"} className="btn-v w-full justify-center disabled:opacity-60">
                      {status === "loading" ? <Loader2 size={15} className="animate-spin" /> : <Send size={13} />}
                      {status === "loading" ? "Submitting..." : "Submit application"}
                    </button>
                  </form>
                )}
              </div>
              {status !== "success" && (
                <p className="mt-4 text-center font-mono text-[11px] text-dim">
                  We review every application personally. You&apos;ll hear back within 48 hours with your referral link and partner kit.
                </p>
              )}
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
