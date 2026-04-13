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

      // Cursor-aware hover: subtle zoom + lightweight frame.
      const cleanups: Array<() => void> = [];
      els.forEach((item) => {
        const img = item.querySelector("img");
        const frame = item.querySelector<HTMLElement>(".work-frame");

        const handleMove = (e: MouseEvent) => {
          if (!img) return;
          const rect = item.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;

          gsap.to(img, {
            transformOrigin: `${x}% ${y}%`,
            duration: 0.2,
            ease: "power2.out",
            overwrite: true,
          });
        };

        const handleEnter = () => {
          if (img) gsap.to(img, { scale: 1.055, duration: 0.45, ease: "power2.out" });
          if (frame) gsap.to(frame, { opacity: 1, duration: 0.25, ease: "power2.out" });
        };

        const handleLeave = () => {
          if (img) gsap.to(img, { scale: 1, duration: 0.45, ease: "power2.out" });
          if (frame) gsap.to(frame, { opacity: 0, duration: 0.2, ease: "power2.in" });
        };

        item.addEventListener("mousemove", handleMove);
        item.addEventListener("mouseenter", handleEnter);
        item.addEventListener("mouseleave", handleLeave);

        cleanups.push(() => {
          item.removeEventListener("mousemove", handleMove);
          item.removeEventListener("mouseenter", handleEnter);
          item.removeEventListener("mouseleave", handleLeave);
        });
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
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
            className="work-frame absolute inset-[10px]"
            style={{
              border: "1px solid rgba(196, 166, 108, 0.45)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
              opacity: 0,
              pointerEvents: "none",
            }}
          />
        </div>
      ))}
    </div>
  );
}
