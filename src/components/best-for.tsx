"use client";
import { Users } from "lucide-react";
import { Reveal } from "./shared";
import { bestFitClients } from "@/lib/data";

export function BestFor() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-1/40 to-surface-0" />
      <div className="wrap relative">
        <Reveal>
          <div className="mx-auto max-w-[800px]">
            <div className="mb-8 flex items-center justify-center gap-2.5">
              <Users size={15} className="text-v-light" />
              <span className="section-label">Best fit for</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {bestFitClients.map((c, i) => (
                <div
                  key={c.label}
                  className="group relative rounded-[14px] border border-white/[0.05] px-5 py-3 transition-all duration-200 hover:border-v/[0.12] hover:bg-white/[0.02]"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <span className="text-[13px] font-medium text-gray-300 transition-colors group-hover:text-white">{c.label}</span>
                  {/* Tooltip on hover */}
                  <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/[0.08] bg-surface-2 px-3 py-1.5 text-[11px] text-body opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {c.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
