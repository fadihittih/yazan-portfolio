"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  // Only activate after first client render — prevents SSR overlay flash
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = overlayRef.current;
    if (!el) return;

    // Skip on initial mount
    if (prevPathname.current === null) {
      prevPathname.current = pathname;
      return;
    }

    // Same page — no transition
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.killTweensOf(el);
    gsap.set(el, { xPercent: 100, display: "block", pointerEvents: "all" });

    gsap
      .timeline({
        onComplete: () => {
          gsap.set(el, { display: "none", pointerEvents: "none" });
        },
      })
      .to(el, { xPercent: 0, duration: 0.5, ease: "power2.inOut" })
      .to(el, { xPercent: -100, duration: 0.4, ease: "power2.inOut" });
  }, [pathname, mounted]);

  return (
    <>
      {/* Overlay: hidden by default (display:none), GSAP shows it on route change */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          display: "none",
          position: "fixed",
          inset: 0,
          backgroundColor: "var(--bg)",
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      {children}
    </>
  );
}
