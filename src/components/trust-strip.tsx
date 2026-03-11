"use client";
import { Reveal, Counter } from "./shared";

const industries = ["E-Commerce", "SaaS", "Health Tech", "Logistics", "Professional Services", "Retail"];

/* Shared number classes for Stats 2-4 */
const numClasses = "font-display text-[clamp(32px,4vw,46px)] font-black tracking-[-0.03em] text-white";
/* Stat 1 gets a slightly smaller size so "48hrs → 60sec" fits in one line */
const numClassesSm = "font-display text-[clamp(26px,3.4vw,42px)] font-black tracking-[-0.03em]";

export function TrustStrip() {
  return (
    <section className="relative py-20 sm:py-28">
      {/* Full-width background break */}
      <div className="absolute inset-0 border-y border-white/[0.04] bg-surface-1/50" />

      <div className="wrap relative">
        {/* Stats grid — explicit columns with generous gap */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Stat 1: Before → After */}
          <Reveal delay={0}>
            <div className="flex flex-col gap-1.5">
              <div className={numClassesSm}>
                <span className="text-neutral-500">48hrs</span>
                <span className="mx-2 text-accent">→</span>
                <span className="text-white">60sec</span>
              </div>
              <div className="font-display text-[14px] font-semibold text-white/70">
                Quote-to-checkout
              </div>
              <div className="text-[12px] leading-[1.6] text-dim">
                <span className="text-white/40">Create3DParts</span> — replaced a 48hr manual process
              </div>
            </div>
          </Reveal>

          {/* Stat 2: <1 week */}
          <Reveal delay={0.06}>
            <div className="flex flex-col gap-1.5">
              <div className={numClasses}>
                <Counter end={1} prefix="<" suffix={" week"} />
              </div>
              <div className="font-display text-[14px] font-semibold text-white/70">
                Fastest product shipped
              </div>
              <div className="text-[12px] leading-[1.6] text-dim">
                <span className="text-white/40">LeadsAndSaaS</span> — investor-ready SaaS platform
              </div>
            </div>
          </Reveal>

          {/* Stat 3: <4hr */}
          <Reveal delay={0.12}>
            <div className="flex flex-col gap-1.5">
              <div className={numClasses}>
                <Counter end={4} prefix="<" suffix="hr" />
              </div>
              <div className="font-display text-[14px] font-semibold text-white/70">
                Average response time
              </div>
              <div className="text-[12px] leading-[1.6] text-dim">
                from first inquiry to proposal
              </div>
            </div>
          </Reveal>

          {/* Stat 4: 100% */}
          <Reveal delay={0.18}>
            <div className="flex flex-col gap-1.5">
              <div className={numClasses}>
                <Counter end={100} suffix="%" />
              </div>
              <div className="font-display text-[14px] font-semibold text-white/70">
                Code ownership
              </div>
              <div className="text-[12px] leading-[1.6] text-dim">
                every line, every asset, every credential
              </div>
            </div>
          </Reveal>
        </div>

        {/* Industries */}
        <Reveal delay={0.35}>
          <div className="mt-12 border-t border-white/[0.06] pt-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="mr-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">Industries:</span>
              {industries.map((ind) => (
                <span key={ind} className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5 text-[12px] font-medium text-white/50 transition-colors duration-200 hover:text-white/70">
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
