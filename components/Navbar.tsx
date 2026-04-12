"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "Work",   href: "/work"   },
  { label: "Series", href: "/series" },
  { label: "About",  href: "/about"  },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".nav-logo",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" }
      );
      gsap.fromTo(".nav-link-item",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(".nav-cta",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.62, ease: "power2.out" }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // ── Hover underline ───────────────────────────────────────────────────────
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.to(e.currentTarget.querySelector(".nav-underline"), {
      scaleX: 1, duration: 0.3, ease: "power2.out", transformOrigin: "left",
    });
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.to(e.currentTarget.querySelector(".nav-underline"), {
      scaleX: 0, duration: 0.2, ease: "power2.in", transformOrigin: "right",
    });
  };

  return (
    <nav
      ref={navRef}
      className="relative w-full px-8 md:px-16 h-16 flex items-center justify-between"
      style={{ backgroundColor: "var(--bg)", borderBottom: "0.5px solid var(--border)" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="nav-logo font-cormorant font-light text-2xl tracking-wide"
        style={{ color: "var(--text)" }}
        onClick={() => setMenuOpen(false)}
      >
        Yazan
        <span style={{ color: "var(--accent)" }} className="italic"> Tahseen</span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="nav-link-item">
              <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <Link
                  href={link.href}
                  className="font-jost font-extralight uppercase"
                  style={{ color: "var(--text)", fontSize: "10px", letterSpacing: "4px" }}
                >
                  {link.label}
                </Link>
                <span
                  className="nav-underline absolute -bottom-1 left-0 right-0 block"
                  style={{ height: "0.5px", background: "var(--accent)", transform: "scaleX(0)", transformOrigin: "left" }}
                />
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="nav-cta font-jost font-extralight uppercase px-5 py-2.5"
          style={{ border: "0.5px solid var(--accent)", color: "var(--accent)", fontSize: "10px", letterSpacing: "4px" }}
        >
          Book a Session
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center gap-[6px] p-1"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span
          style={{
            display: "block",
            width: "22px",
            height: "0.5px",
            background: "var(--text)",
            transition: "opacity 0.2s",
          }}
        />
        <span
          style={{
            display: "block",
            width: "22px",
            height: "0.5px",
            background: "var(--text)",
            transition: "opacity 0.2s",
          }}
        />
      </button>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 z-50"
          style={{
            backgroundColor: "var(--bg)",
            borderBottom: "0.5px solid var(--border)",
            padding: "28px 32px 32px",
          }}
        >
          <ul className="flex flex-col gap-6 mb-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-jost font-extralight uppercase"
                  style={{ color: "var(--text)", fontSize: "10px", letterSpacing: "4px" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="font-jost font-extralight uppercase px-5 py-2.5 inline-block"
            style={{ border: "0.5px solid var(--accent)", color: "var(--accent)", fontSize: "10px", letterSpacing: "4px" }}
            onClick={() => setMenuOpen(false)}
          >
            Book a Session
          </Link>
        </div>
      )}
    </nav>
  );
}
