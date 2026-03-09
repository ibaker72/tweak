"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./shared";

const featuredProjects = [
  {
    slug: "create3dparts",
    title: "Create3DParts.com",
    category: "E-Commerce Platform",
    description: "Real-time 3D printing quoting engine with instant pricing and Stripe checkout. Replaced a 48-hour manual process.",
    metrics: [
      { label: "Quote time", before: "48 hrs", after: "60 sec" },
      { label: "Orders", value: "+35% month one" },
    ],
    stack: ["Next.js", "TypeScript", "Stripe", "AWS S3"],
    accent: "#C8FF00",
    year: "2025",
    live: true,
  },
  {
    slug: "leadsandsaas",
    title: "LeadsAndSaaS",
    category: "SaaS Platform",
    description: "Multi-tenant platform consolidating agent management, asset storage, and lead distribution into one product.",
    metrics: [
      { label: "Lead response", before: "4 hrs", after: "15 min" },
      { label: "Onboarding", before: "3 days", after: "4 hours" },
    ],
    stack: ["Next.js", "Supabase", "OpenAI", "Vercel"],
    accent: "#8B5CF6",
    year: "2025",
    live: true,
  },
  {
    slug: "vow-studios",
    title: "Vow Studios",
    category: "Headless E-Commerce",
    description: "Headless Shopify storefront with WebGL ring configurator, real-time pricing, and Apple Pay checkout.",
    metrics: [
      { label: "Revenue", value: "+180% in 90 days" },
      { label: "Load time", before: "5.2s", after: "1.1s" },
    ],
    stack: ["Next.js", "Shopify API", "Three.js", "Edge"],
    accent: "#06B6D4",
    year: "2024",
    live: false,
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="wrap">
        <Reveal>
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-label">Selected work</span>
              <h2 className="mt-4 font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
                Real projects.<br />Measurable outcomes.
              </h2>
            </div>
            <Link
              href="/work"
              className="group flex items-center gap-2 self-start font-mono text-[12px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-white sm:self-auto"
            >
              All case studies <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="space-y-4">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.025]">
                  <div className="grid gap-0 lg:grid-cols-[1fr,1fr]">
                    {/* Left: project info */}
                    <div className="flex flex-col justify-between p-8 lg:p-10">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-dim">{project.category}</span>
                          <span className="font-mono text-[11px] text-dim">{project.year}</span>
                          {project.live && (
                            <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-0.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              <span className="font-mono text-[9px] font-bold text-emerald-400">LIVE</span>
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-white transition-colors group-hover:text-accent lg:text-[32px]">
                          {project.title}
                        </h3>
                        <p className="mt-3 max-w-[440px] text-[15px] leading-[1.7] text-body">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.stack.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Right: metrics panel */}
                    <div className="border-t border-white/[0.04] bg-white/[0.015] p-8 lg:border-l lg:border-t-0 lg:p-10">
                      <div className="flex h-full flex-col justify-center gap-6">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">{m.label}</div>
                            {"before" in m ? (
                              <div className="flex items-center gap-3">
                                <span className="text-[15px] text-white/40 line-through">{m.before}</span>
                                <ArrowUpRight size={14} className="text-accent" style={{ transform: "rotate(90deg)" }} />
                                <span className="font-display text-[28px] font-black text-white">{m.after}</span>
                              </div>
                            ) : (
                              <div className="font-display text-[28px] font-black text-accent">{m.value}</div>
                            )}
                          </div>
                        ))}

                        <div className="mt-auto flex items-center gap-2 pt-4 font-mono text-[11px] text-dim opacity-0 transition-opacity group-hover:opacity-100">
                          View case study <ArrowUpRight size={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
