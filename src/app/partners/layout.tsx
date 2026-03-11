import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program — Earn Commissions for Client Referrals",
  description:
    "Earn 10% commission on every client you refer to Tweak & Build. Fixed pricing, 90-day attribution, and commissions paid within 14 days of client payment.",
  openGraph: {
    title: "Partner Program — Earn Commissions for Client Referrals | Tweak & Build",
    description:
      "Earn 10% commission on every client you refer to Tweak & Build. Fixed pricing, 90-day attribution, and commissions paid within 14 days of client payment.",
    url: "/partners",
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
