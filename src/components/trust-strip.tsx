"use client";
import { Reveal, Counter } from "./shared";

const stats = [
  { value: 12, suffix: "+", label: "Products shipped", detail: "across e-commerce, SaaS, and web apps" },
  { value: 2, prefix: "$", suffix: "M+", label: "Client revenue generated", detail: "from platforms we built and launched" },
  { value: 4, prefix: "<", suffix: "hr", label: "Average response time", detail: "from first inquiry to proposal" },
  { value: 100, suffix: "%", label: "Code ownership", detail: "every line, every asset, every credential" },
];

const industries = ["E-Commerce", "SaaS", "Health Tech", "Logistics", "Professional Services", "Retail"];

export function TrustStrip() {
  return (
    <section className="relative py-20 sm:py-24">
      {/* Full-width background break */}
      <div className="absolute inset-0 border-y border-white/[0.04] bg-surface-1/50" />

      <div className="wrap relative">
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="group">
                <div className="font-display text-[clamp(32px,4vw,48px)] font-black tracking-tight text-white">
                  <Counter end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix} />
                </div>
                <div className="mt-1 font-display text-[14px] font-semibold text-white/80">{stat.label}</div>
                <div className="mt-1 text-[12px] leading-[1.5] text-dim">{stat.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Industries */}
        <Reveal delay={0.4}>
          <div className="mt-14 border-t border-white/[0.06] pt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">Industries:</span>
              {industries.map((ind) => (
                <span key={ind} className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-[12px] font-medium text-white/60">
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
