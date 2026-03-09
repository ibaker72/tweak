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
        <div className="grid gap-16 lg:grid-cols-[400px,1fr] lg:gap-20">
          {/* Left: sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <span className="section-label">How we work</span>
              <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
                Four steps.
                <br />
                <span className="text-body">Zero mystery.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-body">
                A proven process that turns your idea into a shipped product. Fixed pricing,
                weekly demos, and full transparency at every stage.
              </p>
            </Reveal>

            {/* Guarantee */}
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/[0.15] bg-accent/[0.04] px-6 py-5">
                <Shield size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                <div>
                  <div className="text-[14px] font-semibold text-white">Milestone-based billing guarantee</div>
                  <p className="mt-1 text-[13px] leading-[1.6] text-body">
                    If we don&apos;t deliver the agreed scope for a milestone, full refund for that milestone. No exceptions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: steps */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gradient-to-b from-accent/20 via-white/[0.06] to-transparent lg:block" />

            <div className="space-y-3">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.1}>
                  <div className="group relative flex gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.025] lg:p-8">
                    {/* Step number */}
                    <div className="relative z-10 flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-surface-0">
                      <span className="font-mono text-[13px] font-bold text-accent">{step.num}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-[20px] font-bold text-white">{step.title}</h3>
                        <step.icon size={16} className="text-dim" />
                      </div>
                      <p className="mt-2 text-[14px] leading-[1.75] text-body">{step.desc}</p>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/[0.12] bg-accent/[0.04] px-3 py-1">
                        <div className="h-1 w-1 rounded-full bg-accent" />
                        <span className="font-mono text-[10px] font-medium text-accent">{step.detail}</span>
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
