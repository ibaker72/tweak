"use client";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Circle } from "lucide-react";
import { Reveal } from "./shared";
import { metrics, recentLaunches } from "@/lib/data";

/* ── Recent launches strip ── */
function RecentLaunches() {
  return (
    <div className="mt-12 sm:mt-14">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
        Recent launches
      </div>
      <div className="grid gap-2.5 sm:grid-cols-3">
        {recentLaunches.map((l) => (
          <div
            key={l.name}
            className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all duration-200 hover:border-white/[0.1]"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-white truncate">{l.name}</span>
                {l.status === "live" && (
                  <span className="flex items-center gap-1 rounded-md border border-emerald-400/20 bg-emerald-400/8 px-1.5 py-0.5">
                    <Circle size={5} fill="#22C55E" className="text-emerald-400" />
                    <span className="text-[9px] font-bold text-emerald-400">LIVE</span>
                  </span>
                )}
              </div>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="font-mono text-[10px] text-dim">{l.type}</span>
                <span className="text-white/10">·</span>
                <span className="font-mono text-[10px] text-cyan">{l.result}</span>
              </div>
            </div>
            <ArrowUpRight size={13} className="flex-shrink-0 text-dim opacity-0 transition-all group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Trust metrics ── */
function TrustStrip() {
  return (
    <div className="mt-14 sm:mt-16">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-4 sm:gap-8">
        {metrics.map((m, i) => (
          <div key={m.label} className="text-center" style={{ animation: `fadeUp 0.5s ease ${0.1 + i * 0.08}s both` }}>
            <div className="font-display text-[clamp(24px,3vw,32px)] font-black tracking-tight text-white">{m.value}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">{m.label}</div>
          </div>
        ))}
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  );
}

/* ── Hero ── */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Clean background — single subtle gradient, no layered glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-surface-0 to-transparent" />

      <div className="wrap relative pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-[140px]">
        {/* Status signal */}
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] text-gray-400">Currently accepting projects</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="max-w-[680px] font-display text-[clamp(34px,7vw,56px)] font-black leading-[1.06] tracking-[-0.035em] text-white sm:text-[clamp(44px,5.5vw,64px)]">
            Product studio for founders{" "}
            <span className="gradient-text">who need to ship.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 max-w-[520px] text-[15px] leading-[1.8] text-body sm:mt-6 sm:text-[16px]">
            We design and engineer websites, web apps, and automation systems. Senior developers, fixed pricing, and full code ownership — from first call to production.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row">
            <Link href="/contact" className="btn-v justify-center sm:justify-start">
              Start a project <ArrowRight size={15} />
            </Link>
            <Link href="/work" className="btn-o justify-center sm:justify-start">
              View our work
            </Link>
          </div>
        </Reveal>

        {/* Client names — editorial */}
        <Reveal delay={0.24}>
          <div className="mt-8 sm:mt-10">
            <p className="text-[11px] uppercase tracking-[0.08em] text-dim">Shipped for</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1">
              {["Create3DParts", "LeadsAndSaaS", "Meridian Health", "Atlas Freight", "Vow Studios"].map((name, i) => (
                <span key={name} className="flex items-center gap-2 font-mono text-[12px] font-medium text-gray-400">
                  {i > 0 && <span className="text-white/[0.1]">/</span>}
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Recent launches */}
        <Reveal delay={0.3}>
          <RecentLaunches />
        </Reveal>

        {/* Trust metrics */}
        <Reveal delay={0.35}>
          <TrustStrip />
        </Reveal>
      </div>
    </section>
  );
}
