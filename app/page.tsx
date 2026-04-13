"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroPhotos, selectedWork, photographerPortrait } from "@/data/photos";

const BLUR_DATA_URL = `data:image/svg+xml;base64,${btoa(
  '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#111A12"/></svg>'
)}`;

// ─── Gallery hover handlers (GSAP replaces CSS group-hover) ──────────────────
function handleGalleryEnter(e: React.MouseEvent<HTMLDivElement>) {
  const img = e.currentTarget.querySelector("img");
  const overlay = e.currentTarget.querySelector<HTMLElement>(".gallery-overlay");
  gsap.to(img,     { scale: 1.04, duration: 0.6, ease: "power2.out" });
  gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
}
function handleGalleryLeave(e: React.MouseEvent<HTMLDivElement>) {
  const img = e.currentTarget.querySelector("img");
  const overlay = e.currentTarget.querySelector<HTMLElement>(".gallery-overlay");
  gsap.to(img,     { scale: 1, duration: 0.5, ease: "power2.out" });
  gsap.to(overlay, { opacity: 0, duration: 0.25, ease: "power2.in" });
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // ── PAGE LOAD ANIMATIONS ───────────────────────────────────────────────

      gsap.fromTo(".hero-label",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(".hero-title",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.9, ease: "power3.out", delay: 0.5 }
      );
      gsap.fromTo(".hero-subtitle",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.65, ease: "power2.out" }
      );

      gsap.fromTo('[data-photo-col="0"]',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.7 }
      );
      gsap.fromTo('[data-photo-col="1"]',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.08, delay: 0.82 }
      );
      gsap.fromTo('[data-photo-col="2"]',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.08, delay: 0.94 }
      );

      // ── SCROLL TRIGGERS ────────────────────────────────────────────────────

      gsap.utils.toArray<HTMLElement>(".section-title").forEach((el) => {
        gsap.fromTo(el,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      gsap.fromTo(".gallery-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".gallery-section",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(".about-teaser-section",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-teaser-section",
            start: "top 80%",
            once: true,
          },
        }
      );

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>

      {/* ════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 pt-20 pb-16">
        <p
          className="hero-label font-jost font-extralight uppercase mb-10"
          style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px", opacity: 0 }}
        >
          Portrait photography — Jordan
        </p>

        <h1
          className="hero-title font-cormorant font-light leading-none mb-5"
          style={{ fontSize: "72px", color: "var(--text)", clipPath: "inset(0 100% 0 0)" }}
        >
          Light &amp;
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Presence</em>
        </h1>

        <p
          className="hero-subtitle font-cormorant italic mb-14"
          style={{ fontSize: "20px", color: "var(--muted)", opacity: 0 }}
        >
          Capturing the quiet between moments
        </p>

        {/* Hero grid: [2fr | 1fr | 1fr] × 2 rows (desktop); single col (mobile) */}
        <div className="hero-grid w-full">
          {/* Left: tall, spans 2 rows */}
          <div
            data-photo-col="0"
            className="hero-cell-left"
            style={{ background: "var(--surface)", opacity: 0 }}
          >
            <Image
              src={heroPhotos.main.src}
              fill
              priority
              alt={heroPhotos.main.alt}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="(max-width: 768px) calc(100vw - 64px), calc(50vw - 64px)"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>

          {/* Top-middle */}
          <div
            data-photo-col="1"
            className="relative hidden md:block"
            style={{ aspectRatio: "3/4", background: "var(--surface)", opacity: 0 }}
          >
            <Image
              src={heroPhotos.topMiddle.src}
              fill
              loading="lazy"
              alt={heroPhotos.topMiddle.alt}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="(max-width: 1280px) 25vw, 20vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>

          {/* Top-right */}
          <div
            data-photo-col="2"
            className="relative hidden md:block"
            style={{ aspectRatio: "3/4", background: "var(--surface)", opacity: 0 }}
          >
            <Image
              src={heroPhotos.topRight.src}
              fill
              loading="lazy"
              alt={heroPhotos.topRight.alt}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="(max-width: 1280px) 25vw, 20vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>

          {/* Bottom-middle */}
          <div
            data-photo-col="1"
            className="relative hidden md:block"
            style={{ aspectRatio: "3/4", background: "var(--surface)", opacity: 0 }}
          >
            <Image
              src={heroPhotos.bottomMiddle.src}
              fill
              loading="lazy"
              alt={heroPhotos.bottomMiddle.alt}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="(max-width: 1280px) 25vw, 20vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>

          {/* Bottom-right */}
          <div
            data-photo-col="2"
            className="relative hidden md:block"
            style={{ aspectRatio: "3/4", background: "var(--surface)", opacity: 0 }}
          >
            <Image
              src={heroPhotos.bottomRight.src}
              fill
              loading="lazy"
              alt={heroPhotos.bottomRight.alt}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="(max-width: 1280px) 25vw, 20vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. SELECTED WORK
      ════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2
            className="section-title font-cormorant font-light"
            style={{ fontSize: "36px", color: "var(--text)", clipPath: "inset(0 100% 0 0)" }}
          >
            Selected Work
          </h2>
          <Link
            href="/work"
            className="font-jost font-extralight uppercase"
            style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
          >
            View all →
          </Link>
        </div>

        <div className="gallery-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3px]">
          {selectedWork.map((item) => (
            <div
              key={item.title}
              className="gallery-item relative overflow-hidden"
              style={{ aspectRatio: "3/4", background: "var(--surface)", opacity: 0 }}
              onMouseEnter={handleGalleryEnter}
              onMouseLeave={handleGalleryLeave}
            >
              <Image
                src={item.src}
                fill
                loading="lazy"
                alt={item.alt}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 768px) calc(50vw - 64px), calc(33vw - 64px)"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
              <div
                className="gallery-overlay absolute inset-0"
                style={{ background: "rgba(9,13,10,0.60)", opacity: 0 }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    className="font-jost font-extralight uppercase block mb-2"
                    style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
                  >
                    {item.series}
                  </span>
                  <span
                    className="font-cormorant font-light block"
                    style={{ fontSize: "22px", color: "var(--text)" }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. ABOUT TEASER
      ════════════════════════════════════════════════════ */}
      <section className="about-teaser-section px-8 md:px-16 py-20" style={{ opacity: 0 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative" style={{ aspectRatio: "3/4", background: "var(--surface)" }}>
            <Image
              src={photographerPortrait.src}
              fill
              loading="lazy"
              alt={photographerPortrait.alt}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="(max-width: 768px) calc(100vw - 64px), calc(50vw - 64px)"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>

          <div className="flex flex-col gap-7">
            <p
              className="font-jost font-extralight uppercase"
              style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
            >
              About the photographer
            </p>
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ fontSize: "48px", color: "var(--text)" }}
            >
              Stillness
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>as a craft</em>
            </h2>
            <p
              className="font-cormorant"
              style={{ fontSize: "20px", lineHeight: "1.7", color: "var(--muted)" }}
            >
              Based in Amman, Jordan, Yazan Tahseen documents intimacy in its most
              unguarded form — the pause before a laugh, the weight of a glance.
            </p>
            <Link
              href="/about"
              className="font-jost font-extralight uppercase w-fit"
              style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px" }}
            >
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. CONTACT BAR
      ════════════════════════════════════════════════════ */}
      <section
        className="px-8 md:px-16 py-16 flex items-center justify-between"
        style={{
          backgroundColor: "var(--surface)",
          borderTop: "0.5px solid var(--border)",
          borderBottom: "0.5px solid var(--border)",
        }}
      >
        <h2
          className="font-cormorant font-light leading-tight"
          style={{ fontSize: "48px", color: "var(--text)" }}
        >
          Let&apos;s work
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>together</em>
        </h2>
        <div className="flex flex-col items-end gap-5">
          <a
            href="https://instagram.com/yazan_.tahseen"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost font-extralight uppercase"
            style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
          >
            @yazan_.tahseen
          </a>
          <Link
            href="/contact"
            className="font-jost font-extralight uppercase px-5 py-2.5"
            style={{
              border: "0.5px solid #2A4030",
              color: "var(--accent)",
              fontSize: "10px",
              letterSpacing: "4px",
            }}
          >
            Get in touch
          </Link>
        </div>
      </section>

    </div>
  );
}
