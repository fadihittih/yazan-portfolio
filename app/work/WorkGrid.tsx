"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Photo } from "@/data/photos";

export type { Photo };

const BLUR_DATA_URL = `data:image/svg+xml;base64,${btoa(
  '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#111A12"/></svg>'
)}`;

export default function WorkGrid({ items }: { items: Photo[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(".work-item");

      // Scroll reveal
      gsap.fromTo(
        els,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      // GSAP hover: image scale + overlay fade
      els.forEach((item) => {
        const img = item.querySelector("img");
        const overlay = item.querySelector<HTMLElement>(".work-overlay");

        item.addEventListener("mouseenter", () => {
          if (img) gsap.to(img, { scale: 1.04, duration: 0.6, ease: "power2.out" });
          if (overlay) gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
        });
        item.addEventListener("mouseleave", () => {
          if (img) gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
          if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.25, ease: "power2.in" });
        });
      });
    }, gridRef);

    return () => ctx.revert();
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  if (items.length === 0) {
    return (
      <p
        className="font-cormorant italic"
        style={{ fontSize: "20px", color: "var(--muted)" }}
      >
        No images in this series yet.
      </p>
    );
  }

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3px]">
      {items.map((photo) => (
        <div
          key={photo.id}
          className="work-item relative overflow-hidden"
          style={{ aspectRatio: "3/4", background: "var(--surface)", opacity: 0 }}
        >
          <Image
            src={photo.src}
            fill
            alt={photo.alt}
            loading="lazy"
            sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 768px) calc(50vw - 64px), calc(33vw - 64px)"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
          <div
            className="work-overlay absolute inset-0"
            style={{ background: "rgba(9,13,10,0.62)", opacity: 0 }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span
                className="font-jost font-extralight uppercase block mb-2"
                style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
              >
                {photo.series}
              </span>
              <span
                className="font-cormorant font-light block"
                style={{ fontSize: "22px", color: "var(--text)" }}
              >
                {photo.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
