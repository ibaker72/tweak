import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getSupabaseEnv } from "@/lib/supabase/env";

export async function POST(request: Request) {
  if (!getSupabaseEnv()) {
    const { origin } = new URL(request.url);
    return NextResponse.redirect(`${origin}/login?error=config`, { status: 302 });
  }

  const supabase = await createClient();
  await supabase.auth.signOut();

  const { origin } = new URL(request.url);
  return NextResponse.redirect(`${origin}/login`, { status: 302 });
}
