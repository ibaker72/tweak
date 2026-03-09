"use client";
import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";
import { Reveal } from "./shared";

const clientNames = ["Create3DParts", "LeadsAndSaaS", "Meridian Health", "Atlas Freight", "Vow Studios"];

const liveProjects = [
  { name: "Create3DParts.com", tag: "E-Commerce", result: "+35% orders" },
  { name: "LeadsAndSaaS", tag: "SaaS Platform", result: "Shipped in 5wk" },
  { name: "Meridian Health", tag: "Patient Portal", result: "-40% no-shows" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Top gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(200,255,0,0.04),transparent)]" />

      <div className="wrap relative flex min-h-[100dvh] flex-col justify-center pb-16 pt-24 lg:pb-20 lg:pt-28">
        {/* Top bar: status + availability */}
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] font-medium text-emerald-400">Accepting projects</span>
            </div>
            <span className="font-mono text-[11px] text-dim">2 spots open for March</span>
          </div>
        </Reveal>

        {/* Main headline area */}
        <div className="grid gap-12 lg:grid-cols-[1fr,480px] lg:items-center lg:gap-20">
          {/* Left: copy */}
          <div>
            <Reveal delay={0.05}>
              <h1 className="font-display text-[clamp(40px,7.5vw,80px)] font-black leading-[0.95] tracking-[-0.04em] text-white">
                We build
                <br />
                <span className="text-accent">digital products</span>
                <br />
                that perform.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[520px] text-[17px] leading-[1.75] text-body lg:text-[18px]">
                Tweak & Build is a product engineering studio for founders and businesses
                who need websites, web apps, and automation systems built fast, built right,
                and built to convert.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn-v justify-center sm:justify-start">
                  Start a project <ArrowRight size={15} />
                </Link>
                <Link href="#work" className="btn-o justify-center sm:justify-start">
                  See our work
                </Link>
              </div>
            </Reveal>

            {/* Client logos row */}
            <Reveal delay={0.24}>
              <div className="mt-12 border-t border-white/[0.06] pt-6">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">Shipped for</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {clientNames.map((name) => (
                    <span key={name} className="font-display text-[13px] font-semibold text-white/40 transition-colors hover:text-white/70">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: live studio feed */}
          <Reveal delay={0.15}>
            <div className="relative">
              {/* Outer container - studio monitor */}
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-1">
                {/* Monitor header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Circle size={7} fill="#C8FF00" className="text-accent" />
                    <span className="font-mono text-[11px] font-medium text-white/60">Studio feed</span>
                  </div>
                  <span className="font-mono text-[10px] text-dim">Live</span>
                </div>

                {/* Project rows */}
                <div className="divide-y divide-white/[0.04]">
                  {liveProjects.map((proj, i) => (
                    <div
                      key={proj.name}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08] font-display text-[14px] font-bold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-[14px] font-semibold text-white">{proj.name}</span>
                          <span className="flex-shrink-0 rounded-full bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] text-dim">
                            {proj.tag}
                          </span>
                        </div>
                        <div className="mt-0.5 font-mono text-[11px] text-accent/70">{proj.result}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom stats bar */}
                <div className="grid grid-cols-3 border-t border-white/[0.06]">
                  {[
                    { val: "12+", label: "Shipped" },
                    { val: "<4hr", label: "Response" },
                    { val: "100%", label: "Ownership" },
                  ].map((stat) => (
                    <div key={stat.label} className="border-r border-white/[0.04] px-5 py-4 last:border-r-0">
                      <div className="font-display text-[20px] font-black text-white">{stat.val}</div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-dim">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent detail */}
              <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl border border-accent/20 bg-accent/[0.04]" />
              <div className="absolute -left-2 -top-2 h-16 w-16 rounded-xl border border-white/[0.06] bg-surface-2" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
