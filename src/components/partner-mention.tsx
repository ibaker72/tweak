import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PartnerMention() {
  return (
    <div className="pb-6 pt-0 text-center">
      <Link
        href="/partners"
        className="inline-flex items-center gap-1.5 text-[13px] text-dim transition-colors duration-200 hover:text-white"
      >
        Know someone who needs a product built?{" "}
        <span className="font-semibold text-accent/70">Become a partner</span>
        <ArrowRight size={11} className="text-accent/50" />
      </Link>
    </div>
  );
}
