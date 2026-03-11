"use client";
import { Reveal } from "./shared";

const industries = [
  "E-Commerce",
  "SaaS",
  "Health Tech",
  "Logistics",
  "Professional Services",
  "Retail",
];

const statNumberBase =
  "font-display text-5xl md:text-6xl lg:text-6xl font-black italic text-white";
const statNumberSm =
  "font-display text-4xl md:text-5xl lg:text-5xl font-black italic";

export function TrustStrip() {
  return (
    <section className="relative py-20 sm:py-28">
      {/* Full-width background break */}
      <div className="absolute inset-0 border-y border-white/[0.04] bg-surface-1/50" />

      <div className="wrap relative">
        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Stat 1: Quote-to-checkout */}
          <Reveal delay={0} className="min-w-0">
            <div className="flex flex-col gap-3">
              <div className={`flex items-baseline gap-2 flex-wrap ${statNumberSm}`}>
                <span className="text-neutral-500">48hrs</span>
                <span className="text-accent not-italic">→</span>
                <span className="text-white">60sec</span>
              </div>
              <p className="font-display text-sm font-semibold text-white">
                Quote-to-checkout
              </p>
              <p className="text-sm text-neutral-400">
                <span className="text-white/40">Create3DParts</span> — replaced
                a 48hr manual process
              </p>
            </div>
          </Reveal>

          {/* Stat 2: Fastest product shipped */}
          <Reveal delay={0.06} className="min-w-0">
            <div className="flex flex-col gap-3">
              <div className={statNumberBase}>{"<1 week"}</div>
              <p className="font-display text-sm font-semibold text-white">
                Fastest product shipped
              </p>
              <p className="text-sm text-neutral-400">
                <span className="text-white/40">LeadsAndSaaS</span> —
                investor-ready SaaS platform
              </p>
            </div>
          </Reveal>

          {/* Stat 3: Average response time */}
          <Reveal delay={0.12} className="min-w-0">
            <div className="flex flex-col gap-3">
              <div className={statNumberBase}>{"<4hr"}</div>
              <p className="font-display text-sm font-semibold text-white">
                Average response time
              </p>
              <p className="text-sm text-neutral-400">
                from first inquiry to proposal
              </p>
            </div>
          </Reveal>

          {/* Stat 4: Code ownership */}
          <Reveal delay={0.18} className="min-w-0">
            <div className="flex flex-col gap-3">
              <div className={statNumberBase}>100%</div>
              <p className="font-display text-sm font-semibold text-white">
                Code ownership
              </p>
              <p className="text-sm text-neutral-400">
                every line, every asset, every credential
              </p>
            </div>
          </Reveal>
        </div>

        {/* Industries */}
        <Reveal delay={0.35}>
          <div className="mt-12 border-t border-white/[0.06] pt-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="mr-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
                Industries:
              </span>
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5 text-[12px] font-medium text-white/50 transition-colors duration-200 hover:text-white/70"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
