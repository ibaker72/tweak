"use client";
import { Search, FileText, Code2, Rocket, Shield } from "lucide-react";
import { Reveal } from "./shared";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    desc: "30-minute call to define the problem, map your goals, and determine fit. No pitch deck. Just clarity.",
    detail: "Free — no commitment",
    icon: Search,
  },
  {
    num: "02",
    title: "Fixed-price proposal",
    desc: "Within 72 hours you get a locked proposal. Every feature, milestone, timeline, and dollar agreed before we write a line of code.",
    detail: "No hourly billing, ever",
    icon: FileText,
  },
  {
    num: "03",
    title: "Weekly sprints",
    desc: "Live preview links every 7 days. You see real progress and steer the direction at each checkpoint. No surprises at the end.",
    detail: "Full transparency",
    icon: Code2,
  },
  {
    num: "04",
    title: "Launch & handoff",
    desc: "We deploy to production, run QA, hand over documentation, credentials, and full source code. Your code, your IP, your advantage.",
    detail: "30 days post-launch support",
    icon: Rocket,
  },
];

export function ProcessNew() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[380px,1fr] lg:gap-20">
          {/* Left: sticky header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="section-label">How we work</span>
              <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-white">
                Four steps.
                <br />
                <span className="text-body">Zero mystery.</span>
              </h2>
              <p className="mt-5 text-[14px] leading-[1.8] text-body">
                A proven process that turns your idea into a shipped product. Fixed pricing,
                weekly demos, and full transparency at every stage.
              </p>
            </Reveal>

            {/* Guarantee */}
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-start gap-3.5 rounded-2xl border border-accent/[0.12] bg-accent/[0.03] px-6 py-5">
                <Shield size={17} className="mt-0.5 flex-shrink-0 text-accent" />
                <div>
                  <div className="text-[13px] font-bold text-white">Milestone-based billing guarantee</div>
                  <p className="mt-1 text-[12px] leading-[1.65] text-body">
                    If we don&apos;t deliver the agreed scope for a milestone, full refund for that milestone. No exceptions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: steps */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute bottom-0 left-[21px] top-0 hidden w-px bg-gradient-to-b from-accent/20 via-white/[0.06] to-transparent lg:block" />

            <div className="space-y-4">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.08}>
                  <div className="group relative flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-7 shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.025] lg:p-8">
                    {/* Step number */}
                    <div className="relative z-10 flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[10px] border border-accent/20 bg-surface-0">
                      <span className="font-mono text-[12px] font-bold text-accent">{step.num}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-display text-[18px] font-bold tracking-[-0.01em] text-white">{step.title}</h3>
                        <step.icon size={14} className="text-dim" />
                      </div>
                      <p className="mt-2 text-[13px] leading-[1.8] text-body">{step.desc}</p>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/[0.10] bg-accent/[0.03] px-3 py-1">
                        <div className="h-1 w-1 rounded-full bg-accent/70" />
                        <span className="font-mono text-[10px] font-medium text-accent/80">{step.detail}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
