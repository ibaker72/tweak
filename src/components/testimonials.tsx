"use client";
import { Star, Quote } from "lucide-react";
import { Reveal, Tilt } from "./shared";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(139,92,246,0.05),transparent_50%),radial-gradient(ellipse_at_70%_100%,rgba(6,182,212,0.03),transparent_50%)]" />

      <div className="wrap relative">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="section-label">Proof</span>
            <h2 className="section-title mt-3">Don&apos;t take our word for it.</h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-[1.7] text-body">
              Here&apos;s what founders and CTOs say after working with us.
            </p>
          </div>
        </Reveal>

        {/* Featured testimonial */}
        <Reveal delay={0.08}>
          <Tilt>
            <div className="mx-auto mb-6 max-w-[800px] overflow-hidden rounded-[24px] border border-v/[0.1] p-8 sm:p-10" style={{ background: "linear-gradient(170deg, rgba(139,92,246,0.04), rgba(12,12,20,0.95))" }}>
              <div className="flex items-start gap-4">
                <Quote size={28} className="mt-1 flex-shrink-0 text-v/40" />
                <div>
                  <p className="text-[18px] leading-[1.8] text-gray-200 sm:text-[20px]">
                    {testimonials[0].quote}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-v/[0.2] bg-gradient-to-br from-v/[0.15] to-cyan/[0.05]">
                      <span className="font-display text-sm font-bold text-v-light">{testimonials[0].name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="font-display text-[15px] font-bold text-white">{testimonials[0].name}</p>
                      <p className="font-mono text-[11px] text-dim">{testimonials[0].title}</p>
                    </div>
                    <div className="ml-auto hidden items-center gap-1 sm:flex">
                      {Array(testimonials[0].rating).fill(0).map((_, j) => (
                        <Star key={j} size={13} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </Reveal>

        {/* Remaining testimonials */}
        <div className="mx-auto grid max-w-[800px] gap-4 sm:grid-cols-2">
          {testimonials.slice(1).map((t, i) => (
            <Reveal key={t.name} delay={0.15 + i * 0.08}>
              <Tilt className="h-full">
                <div className="flex h-full flex-col rounded-[20px] border border-white/[0.06] p-7" style={{ background: "linear-gradient(170deg, #0C0C14, #111119)" }}>
                  <div className="mb-4 flex gap-0.5">
                    {Array(t.rating).fill(0).map((_, j) => <Star key={j} size={12} fill="#F59E0B" color="#F59E0B" />)}
                  </div>
                  <p className="flex-1 text-[14px] leading-[1.8] text-gray-300">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03]">
                      <span className="font-display text-[10px] font-bold text-gray-400">{t.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-white">{t.name}</p>
                      <p className="font-mono text-[10px] text-dim">{t.title}</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
