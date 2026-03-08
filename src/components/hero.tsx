"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, DotGrid } from "./shared";
import { metrics } from "@/lib/data";

/* ── Layered product scene ── */
function ProductScene({ compact = false }: { compact?: boolean }) {
  const base = compact ? "max-w-[340px]" : "max-w-[520px]";
  return (
    <div className={`relative w-full ${base}`}>
      {/* Ambient glow */}
      {!compact && <div className="absolute -inset-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)] blur-[50px]" />}

      {/* Main browser window */}
      <div className="relative overflow-hidden rounded-[16px] border border-white/[0.08] shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_80px_rgba(139,92,246,0.04)]" style={{ background: "linear-gradient(170deg, #0C0C14, #0F0F18)", animation: "heroFloat 7s ease-in-out infinite" }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex gap-[6px]">
            {["#EF4444","#F59E0B","#22C55E"].map(c => <div key={c} className="h-[9px] w-[9px] rounded-full opacity-60" style={{ background: c }} />)}
          </div>
          <div className="ml-3 flex-1 rounded-md bg-white/[0.04] px-3 py-1">
            <span className="font-mono text-[10px] text-dim">app.clientproject.com</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className={compact ? "p-3" : "p-5"}>
          {/* Top nav bar inside app */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-md bg-gradient-to-br from-v/40 to-cyan/20" />
              <span className="font-mono text-[10px] font-medium text-gray-400">Dashboard</span>
            </div>
            <div className="flex gap-1.5">
              {["Overview","Analytics","Settings"].map((t,i) => (
                <span key={t} className={`rounded-md px-2 py-0.5 font-mono text-[9px] ${i === 0 ? "bg-v/[0.12] text-v-light" : "text-dim"}`}>{t}</span>
              ))}
            </div>
          </div>

          {/* Metrics row */}
          <div className={`mb-4 grid grid-cols-3 ${compact ? "gap-2" : "gap-3"}`}>
            {[
              { l: "Revenue", v: "$48.2k", c: "+12.4%", col: "#22C55E" },
              { l: "Visitors", v: "2,847", c: "+8.2%", col: "#06B6D4" },
              { l: "Conversions", v: "184", c: "+23%", col: "#A78BFA" },
            ].map(m => (
              <div key={m.l} className={`rounded-xl border border-white/[0.05] bg-white/[0.02] ${compact ? "p-2" : "p-3"}`}>
                <div className="mb-1 font-mono text-[9px] text-dim">{m.l}</div>
                <div className={`font-display font-bold text-white ${compact ? "text-sm" : "text-lg"}`}>{m.v}</div>
                <div className="mt-0.5 font-mono text-[9px]" style={{ color: m.col }}>{m.c}</div>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[9px] text-dim">Revenue / 12 months</span>
              <span className="font-mono text-[9px] text-emerald-400">+34% YoY</span>
            </div>
            <div className="flex items-end gap-[3px]" style={{ height: compact ? 40 : 56 }}>
              {[30,42,38,55,50,62,58,72,68,82,78,92].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm transition-all" style={{
                  height: `${h}%`,
                  background: `linear-gradient(180deg, rgba(139,92,246,${0.3 + (i/12)*0.5}), rgba(6,182,212,${0.1 + (i/12)*0.3}))`,
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification card - top right */}
      {!compact && (
        <div className="absolute -right-8 top-12 hidden rounded-xl border border-emerald-400/[0.15] px-4 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] lg:flex" style={{ background: "linear-gradient(135deg, #0C0C14, #111119)", animation: "heroFloatAlt 8s ease-in-out infinite" }}>
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <div>
              <div className="font-mono text-[10px] font-medium text-emerald-300">New order received</div>
              <div className="font-mono text-[9px] text-dim">Create3DParts — $847</div>
            </div>
          </div>
        </div>
      )}

      {/* Floating deploy status - bottom left */}
      {!compact && (
        <div className="absolute -bottom-4 -left-6 hidden rounded-xl border border-v/[0.12] px-4 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] lg:flex" style={{ background: "linear-gradient(135deg, #0C0C14, #111119)", animation: "heroFloatAlt 9s ease-in-out infinite 1s" }}>
          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-v/[0.15]">
              <svg className="h-3 w-3 text-v-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <div className="font-mono text-[10px] font-medium text-v-light">Deployed to production</div>
              <div className="font-mono text-[9px] text-dim">v2.4.1 — 2 min ago</div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes heroFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes heroFloatAlt{0%,100%{transform:translate(0,0)}50%{transform:translate(4px,-6px)}}
      `}</style>
    </div>
  );
}

/* ── Trust metrics bar ── */
function TrustStrip() {
  return (
    <div className="mt-14 border-t border-white/[0.06] pt-10 sm:mt-20">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
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

/* ── Hero section ── */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <DotGrid />
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-[40%] bg-gradient-to-t from-surface-0 to-transparent" />
      <div className="pointer-events-none absolute right-[-10%] top-[15%] z-[1] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06),transparent_70%)] blur-[80px]" />
      <div className="pointer-events-none absolute left-[-5%] top-[40%] z-[1] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.03),transparent_70%)] blur-[60px]" />

      <div className="wrap relative z-[3] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-[120px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_520px] lg:gap-16">
          {/* Left: Copy */}
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-v/[0.15] bg-gradient-to-r from-v/[0.06] to-cyan/[0.03] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-v-light sm:text-[11px]">
                <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.35)]" />
                Product Engineering Studio
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="font-display text-[clamp(36px,8vw,56px)] font-black leading-[1.04] tracking-[-0.04em] text-white sm:text-[clamp(48px,5.5vw,72px)]">
                We build the<br />software that<br /><span className="gradient-text">grows your business.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-[480px] text-[15px] leading-[1.85] text-body sm:mt-7 sm:text-[17px]">
                High-converting websites. Production-grade web apps. Automation systems that save real hours. Fixed pricing, senior engineers, and a process built for founders who ship.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <Link href="/contact" className="btn-v justify-center text-[14px] sm:justify-start sm:text-[15px]">
                  Start a project <ArrowRight size={15} />
                </Link>
                <Link href="/work" className="btn-o justify-center text-[14px] sm:justify-start sm:text-[15px]">
                  View our work
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-7 flex items-center gap-3 sm:mt-9">
                <div className="flex -space-x-2">
                  {["DM","RT","PP"].map((initials, i) => (
                    <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface-0 bg-gradient-to-br from-v/30 to-cyan/20 text-[9px] font-bold text-white/80">
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="mt-0.5 text-[11px] text-dim">Trusted by founders and CTOs</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Product scene - desktop */}
          <div className="hidden justify-center lg:flex">
            <Reveal delay={0.3}><ProductScene /></Reveal>
          </div>
        </div>

        {/* Mobile product scene */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Reveal delay={0.25}><ProductScene compact /></Reveal>
        </div>

        {/* Trust metrics */}
        <Reveal delay={0.35}>
          <TrustStrip />
        </Reveal>
      </div>
    </section>
  );
}
