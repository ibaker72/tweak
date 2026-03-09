"use client";
import Link from "next/link";
import { ArrowRight, Mail, Clock, Shield, Check } from "lucide-react";
import { Reveal } from "./shared";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Background: subtle grid + accent wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(200,255,0,0.04),transparent)]" />

      <div className="wrap relative">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] font-medium text-accent">2 spots open for March</span>
            </div>

            <h2 className="font-display text-[clamp(36px,6vw,64px)] font-black leading-[0.95] tracking-[-0.04em] text-white">
              Ready to build
              <br />
              something real?
            </h2>
            <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.75] text-body">
              Fixed pricing. Senior engineers. A clear process from day one. Tell us what
              you&apos;re building and we&apos;ll show you how we&apos;d approach it.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-v justify-center text-[15px]">
                Start a project <ArrowRight size={15} />
              </Link>
              <Link href="/#pricing" className="btn-o justify-center text-[15px]">
                View pricing
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mx-auto mt-12 grid max-w-[560px] grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Shield, text: "Milestone-based billing" },
                { icon: Check, text: "Fixed-price proposals" },
                { icon: Clock, text: "Response in under 4 hours" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center justify-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <item.icon size={13} className="flex-shrink-0 text-accent" />
                  <span className="text-[11px] font-medium text-white/60">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="mailto:iyadbaker.dev@gmail.com"
                className="inline-flex items-center gap-2 text-[14px] text-dim transition-colors hover:text-white"
              >
                <Mail size={14} className="text-accent" /> iyadbaker.dev@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
