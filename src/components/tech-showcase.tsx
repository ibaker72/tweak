"use client";
import { Reveal } from "./shared";
import { Check } from "lucide-react";

const techStack = [
  { name: "Next.js", color: "#fff" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Stripe", color: "#635BFF" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "Node.js", color: "#68A063" },
  { name: "Vercel", color: "#fff" },
  { name: "Shopify", color: "#7AB55C" },
];

const differentiators = [
  {
    title: "Senior engineers only",
    desc: "No juniors, no handoffs, no learning on your dime. Every project is built by engineers with 5+ years of production experience.",
  },
  {
    title: "Fixed pricing, always",
    desc: "You get a locked price before we write a line of code. No hourly billing, no scope creep, no surprise invoices.",
  },
  {
    title: "Product thinking built in",
    desc: "We don't just build to spec. We challenge assumptions, optimize for conversion, and make sure every feature serves a business goal.",
  },
  {
    title: "You own everything",
    desc: "100% of the source code, design assets, and documentation transfer to you on final payment. No lock-in. No licensing fees.",
  },
];

export function TechShowcase() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="wrap">
        <Reveal>
          <div className="mb-14">
            <span className="section-label">Why us</span>
            <h2 className="mt-4 max-w-[500px] font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
              Not another generic agency.
            </h2>
            <p className="mt-4 max-w-[480px] text-[15px] leading-[1.75] text-body">
              We&apos;re a small, senior team that treats your product like our own.
            </p>
          </div>
        </Reveal>

        {/* Differentiators - 2x2 grid with asymmetric sizing */}
        <div className="grid gap-3 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.025]">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.06]">
                  <Check size={14} className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-2 font-display text-[17px] font-bold text-white">{d.title}</h3>
                  <p className="text-[14px] leading-[1.75] text-body">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tech stack bar */}
        <Reveal delay={0.3}>
          <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">Our stack</div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: t.color }} />
                  <span className="font-mono text-[11px] font-medium text-gray-400">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
