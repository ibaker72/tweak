"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-300",
      scrolled ? "glass-nav border-b border-white/[0.06]" : "border-b border-transparent"
    )}>
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-accent">
            <Terminal size={14} className="text-surface-0" />
          </div>
          <span className="font-display text-[16px] font-extrabold tracking-[-0.03em] text-white">
            tweak<span className="text-accent">&amp;</span>build
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-white/50 transition-all duration-200 hover:bg-white/[0.04] hover:text-white">
              {l.label}
            </Link>
          ))}
          <div className="ml-3 h-5 w-px bg-white/[0.08]" />
          <Link href="/contact" className="ml-3 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-[13px] font-bold text-surface-0 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(200,255,0,0.18)]">
            Start a project <ArrowRight size={12} />
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.03] text-white transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.05] lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.05] bg-surface-1/95 px-6 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <div className="space-y-0.5">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-[15px] font-medium text-white/60 transition-colors hover:bg-white/[0.03] hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-white/[0.05] pt-4">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-v w-full justify-center">
              Start a project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
