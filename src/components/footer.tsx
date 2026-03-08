"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Mail, Clock, ArrowRight, ArrowUp, Terminal, Check, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./shared";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-1 to-surface-0" />
      <div className="relative mx-auto max-w-[780px] px-7">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title mt-3">Common questions</h2>
            <p className="mx-auto mt-4 max-w-[400px] text-[15px] leading-[1.7] text-body">
              Everything you need to know before getting started.
            </p>
          </div>
        </Reveal>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div className={cn(
                "overflow-hidden rounded-[16px] border transition-all duration-200",
                open === i ? "border-v/[0.15] bg-gradient-to-br from-v/[0.03] to-cyan/[0.01]" : "border-white/[0.05]"
              )}>
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-[18px] text-left">
                  <span className={cn("text-[15px] font-semibold", open === i ? "text-white" : "text-gray-300")}>{faq.q}</span>
                  <ChevronDown size={18} className={cn("flex-shrink-0 transition-transform duration-300", open === i ? "rotate-180 text-v-light" : "text-dim")} />
                </button>
                <div className="overflow-hidden transition-[max-height] duration-300" style={{ maxHeight: open === i ? 300 : 0 }}>
                  <p className="px-6 pb-5 text-sm leading-[1.75] text-body">{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06),transparent_60%)]" />
      <div className="wrap relative">
        <Reveal>
          <div className="mx-auto max-w-[680px] text-center">
            <span className="section-label">Ready to build?</span>
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,52px)] font-black leading-[1.06] tracking-[-0.03em] text-white">
              Your next project<br />deserves <span className="gradient-text">real engineering.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[500px] text-[16px] leading-[1.75] text-body">
              Fixed pricing. Senior engineers. A clear process from day one. Whether it&apos;s a landing page or a full product build, we&apos;re ready when you are.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-v justify-center text-[15px]">
                Start a project <ArrowRight size={15} />
              </Link>
              <Link href="/#pricing" className="btn-o justify-center text-[15px]">
                View pricing
              </Link>
            </div>

            {/* Trust reinforcement */}
            <div className="mx-auto mt-10 grid max-w-[520px] grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Shield, text: "Milestone-based billing" },
                { icon: Check, text: "Fixed-price proposals" },
                { icon: Clock, text: "Response in under 4 hours" },
              ].map(item => (
                <div key={item.text} className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.015] px-4 py-2.5">
                  <item.icon size={13} className="flex-shrink-0 text-v-light" />
                  <span className="text-[11px] font-medium text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:iyadbaker.dev@gmail.com" className="flex items-center gap-2 text-sm text-body transition-colors hover:text-white">
                <Mail size={14} className="text-v-light" /> iyadbaker.dev@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    { h: "Services", links: [{ l: "Web Applications", href: "/#services" }, { l: "Landing Pages", href: "/#services" }, { l: "E-Commerce", href: "/#services" }, { l: "Automation & AI", href: "/#services" }] },
    { h: "Company", links: [{ l: "Case Studies", href: "/work" }, { l: "About", href: "/about" }, { l: "Process", href: "/#process" }, { l: "Contact", href: "/contact" }] },
  ];

  return (
    <footer className="border-t border-white/[0.04]">
      <div className="wrap py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-v to-v-deep shadow-[0_2px_12px_rgba(139,92,246,0.15)]">
                <Terminal size={13} className="text-white" />
              </div>
              <span className="font-display text-[15px] font-extrabold text-white">
                tweak<span className="text-v-light">&amp;</span>build
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dim">
              Product engineering studio. We build high-converting websites, web apps, and automation systems for founders who ship.
            </p>
            <a href="mailto:iyadbaker.dev@gmail.com" className="mt-3 block text-sm text-dim transition-colors hover:text-v-light">iyadbaker.dev@gmail.com</a>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-dim">{c.h}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(l => (
                  <li key={l.l}><Link href={l.href} className="text-sm text-dim transition-colors hover:text-white">{l.l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.04] pt-8 sm:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs text-dim">&copy; {new Date().getFullYear()} Bedrock Alliance LLC</span>
            <Link href="/privacy" className="text-xs text-dim transition-colors hover:text-body">Privacy</Link>
            <Link href="/terms" className="text-xs text-dim transition-colors hover:text-body">Terms</Link>
          </div>
          <span className="text-xs text-dim">Engineered by Tweak &amp; Build</span>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [v, setV] = useState(false);
  useEffect(() => { const fn = () => setV(window.scrollY > 500); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);
  if (!v) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-surface-2/90 text-dim shadow-lg backdrop-blur-sm transition-all hover:border-v/[0.2] hover:text-v"
      aria-label="Back to top">
      <ArrowUp size={16} />
    </button>
  );
}
