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
      <div className="wrap flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
            <Terminal size={14} className="text-surface-0" />
          </div>
          <span className="font-display text-[17px] font-extrabold tracking-[-0.03em] text-white">
            tweak<span className="text-accent">&amp;</span>build
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-[13px] font-medium text-white/50 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-v !py-2.5 !text-[13px]">
            Start a project <ArrowRight size={13} />
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white transition-colors hover:border-white/[0.12] lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.05] bg-surface-1/95 px-7 pb-6 pt-4 backdrop-blur-lg lg:hidden">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-gray-400 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-v mt-3 w-full justify-center">
            Start a project <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </header>
  );
}
