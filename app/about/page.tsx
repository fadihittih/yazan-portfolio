"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photographerPortrait } from "@/data/photos";

const BLUR_DATA_URL = `data:image/svg+xml;base64,${btoa(
  '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#111A12"/></svg>'
)}`;

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".section-title").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      gsap.fromTo(
        ".about-pullquote",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-pullquote",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-cta-row",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-cta-row",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-parallax",
        { y: -20 },
        {
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-hero-container",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <section className="px-8 md:px-16 pt-10 md:pt-14 pb-8 md:pb-12">
        <div
          className="about-hero-container relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] border"
          style={{
            height: "clamp(320px, 52vw, 560px)",
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="about-parallax absolute"
            style={{ top: -20, bottom: -20, left: 0, right: 0 }}
          >
            <Image
              src={photographerPortrait.src}
              fill
              priority
              alt={photographerPortrait.alt}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              style={{ objectFit: "cover", objectPosition: "center 16%" }}
            />
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pt-20 pb-16">
        <div className="mb-14">
          <p
            className="font-jost font-extralight uppercase mb-6"
            style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
          >
            Portrait photographer — Amman, Jordan
          </p>
          <h1
            className="section-title font-cormorant font-light leading-none"
            style={{
              fontSize: "64px",
              color: "var(--text)",
              clipPath: "inset(0 100% 0 0)",
            }}
          >
            Yazan{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Tahseen</em>
          </h1>
        </div>

        <div style={{ height: "0.5px", background: "var(--border)", marginBottom: "56px" }} />

        <div style={{ maxWidth: "640px" }}>
          <p
            className="font-cormorant font-light mb-8"
            style={{ fontSize: "20px", lineHeight: 2, color: "var(--muted)" }}
          >
            Yazan Tahseen has been documenting human intimacy since 2017 — first
            on the streets of Amman, later in the homes, studios, and ceremony
            halls where people let their guard down and become themselves.
          </p>
          <p
            className="font-cormorant font-light mb-8"
            style={{ fontSize: "20px", lineHeight: 2, color: "var(--muted)" }}
          >
            His work is built on silence. There is no drama manufactured, no
            moment forced into existence. Only the ones that already lived —
            caught in the second before they dissolved into ordinary time.
          </p>
          <p
            className="font-cormorant font-light"
            style={{ fontSize: "20px", lineHeight: 2, color: "var(--muted)" }}
          >
            He shoots on medium format, almost always with available light, and
            almost always after a long conversation. The camera comes out when
            trust has already arrived.
          </p>
        </div>
      </section>

      <section
        className="px-8 md:px-16 py-24"
        style={{ borderTop: "0.5px solid var(--border)" }}
      >
        <blockquote className="about-pullquote" style={{ opacity: 0 }}>
          <p
            className="font-cormorant font-light"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.3,
              fontStyle: "italic",
              color: "var(--accent)",
              maxWidth: "800px",
            }}
          >
            &ldquo;I listen before I look.&rdquo;
          </p>
        </blockquote>
      </section>

      <section
        className="px-8 md:px-16 pb-24 pt-4"
        style={{ borderTop: "0.5px solid var(--border)" }}
      >
        <div
          className="about-cta-row flex items-center justify-between pt-16"
          style={{ opacity: 0 }}
        >
          <p
            className="font-cormorant italic"
            style={{ fontSize: "20px", color: "var(--muted)", maxWidth: "420px", lineHeight: 1.7 }}
          >
            Available for portrait sessions, weddings, and editorial projects
            in Jordan and internationally.
          </p>
          <Link
            href="/contact"
            className="font-jost font-extralight uppercase flex-shrink-0"
            style={{
              border: "0.5px solid #2A4030",
              color: "var(--accent)",
              fontSize: "10px",
              letterSpacing: "4px",
              padding: "14px 28px",
            }}
          >
            Book a session
          </Link>
        </div>
      </section>
    </div>
  );
}
