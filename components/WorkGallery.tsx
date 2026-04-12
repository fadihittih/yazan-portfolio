"use client";

import { useState } from "react";
import Image from "next/image";

const PLACEHOLDER = "/images/placeholder.jpg";

const CATEGORIES = ["All", "Portraits", "Weddings", "Fine Art"] as const;
type Category = (typeof CATEGORIES)[number];

const photos = [
  { id: 1, series: "Portraits",  seriesLabel: "Series I",   title: "Golden Hour" },
  { id: 2, series: "Weddings",   seriesLabel: "Series II",  title: "The First Look" },
  { id: 3, series: "Fine Art",   seriesLabel: "Series III", title: "Silence" },
  { id: 4, series: "Portraits",  seriesLabel: "Series I",   title: "Afternoon Light" },
  { id: 5, series: "Weddings",   seriesLabel: "Series II",  title: "Together" },
  { id: 6, series: "Fine Art",   seriesLabel: "Series III", title: "Solitude" },
  { id: 7, series: "Portraits",  seriesLabel: "Series I",   title: "Dusk" },
  { id: 8, series: "Weddings",   seriesLabel: "Series II",  title: "Joy" },
  { id: 9, series: "Fine Art",   seriesLabel: "Series III", title: "Stillness" },
];

interface Props {
  blurDataURL: string;
}

export default function WorkGallery({ blurDataURL }: Props) {
  const [active, setActive] = useState<Category>("All");

  const visible =
    active === "All" ? photos : photos.filter((p) => p.series === active);

  return (
    <>
      {/* Filter row */}
      <div className="px-8 md:px-16 pb-10 flex items-center gap-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="font-jost font-extralight uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
              color: active === cat ? "var(--text)" : "var(--muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              // Active indicator: hairline underline
              borderBottom: active === cat ? "0.5px solid var(--accent)" : "0.5px solid transparent",
              paddingBottom: "4px",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="px-8 md:px-16 pb-24 grid grid-cols-3 gap-[3px]">
        {visible.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden"
            style={{ aspectRatio: "3/4", background: "var(--surface)" }}
          >
            <Image
              src={PLACEHOLDER}
              fill
              alt={photo.title}
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={blurDataURL}
            />

            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{ background: "rgba(9,13,10,0.60)" }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="font-jost font-extralight uppercase block mb-2"
                  style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
                >
                  {photo.seriesLabel}
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
    </>
  );
}
