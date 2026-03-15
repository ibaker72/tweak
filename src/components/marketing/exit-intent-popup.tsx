"use client";
import { useState, useEffect, useCallback } from "react";
import { X, Send, Check, Loader2, FileCheck } from "lucide-react";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const showPopup = useCallback(() => {
    const dismissed = sessionStorage.getItem("exit-popup-dismissed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    },
    [showPopup]
  );

  useEffect(() => {
    const dismissed = sessionStorage.getItem("exit-popup-dismissed");
    if (dismissed) return;

    let desktopTimer: ReturnType<typeof setTimeout> | null = null;
    let mobileTimer: ReturnType<typeof setTimeout> | null = null;

    if (window.innerWidth >= 1024) {
      desktopTimer = setTimeout(() => {
        document.addEventListener("mouseleave", handleMouseLeave);
      }, 5000);
    } else {
      mobileTimer = setTimeout(() => {
        showPopup();
      }, 5000);
    }

    return () => {
      if (desktopTimer) clearTimeout(desktopTimer);
      if (mobileTimer) clearTimeout(mobileTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave, showPopup]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("exit-popup-dismissed", "true");
  };

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit-intent" }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(dismiss, 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-surface-0/80 backdrop-blur-sm"
        onClick={dismiss}
      />

      <div className="relative w-[92vw] max-w-[440px] overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-1 shadow-2xl shadow-black/50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <button
          onClick={dismiss}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-dim transition-colors hover:text-white"
          aria-label="Close"
        >
          <X size={14} />
        </button>

        <div className="p-5 pt-10 sm:p-8 sm:pt-10">
          {status === "success" ? (
            <div className="py-4 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/[0.2] bg-accent/[0.06]">
                <Check size={20} className="text-accent" />
              </div>
              <p className="font-display text-[18px] font-bold text-white">
                You&apos;re in!
              </p>
              <p className="mt-1.5 text-[13px] text-body">
                Check your inbox for the checklist.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/[0.15] bg-accent/[0.06]">
                  <FileCheck size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent/60">
                    Free Guide
                  </p>
                  <h3 className="font-display text-[18px] font-bold text-white">
                    Before you go
                  </h3>
                </div>
              </div>

              <h4 className="font-display text-[20px] leading-tight font-bold text-white sm:text-[22px]">
                Get our Website Launch Checklist
              </h4>

              <p className="mt-2 text-[13px] leading-[1.7] text-body sm:text-[14px]">
                27 things to verify before pushing live. SEO, performance,
                security, accessibility — everything in one checklist.
              </p>

              <form
                onSubmit={subscribe}
                className="mt-5 flex flex-col gap-2.5 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="field flex-1"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-v flex h-11 w-full items-center justify-center !px-5 disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                </button>
              </form>

              {status === "error" && (
                <p className="mt-2 text-[12px] text-red-400">
                  Something went wrong. Try again.
                </p>
              )}

              <p className="mt-3 text-center text-[11px] text-dim">
                No spam, ever. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}