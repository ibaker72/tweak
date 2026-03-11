"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { setReferralCookie } from "@/lib/referral";

export function ReferralTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      setReferralCookie(ref);
    }
  }, [searchParams]);

  return null;
}
