"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import WorkGrid from "./WorkGrid";
import { photos } from "@/data/photos";

const categories = [
  { label: "All", value: "all" },
  { label: "Portraits", value: "portraits" },
  { label: "Graduation", value: "weddings" },
  { label: "Fine Art", value: "fine-art" },
];

export default function WorkClient() {
  const params = useSearchParams();
  const category = params.get("category");
  const active = category ?? "all";

  const filtered =
    active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <section className="px-8 md:px-16 pt-20 pb-24">
      <div className="mb-14">
        <p
          className="font-jost font-extralight uppercase mb-6"
          style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
        >
          Photography
        </p>

        <div className="flex items-end justify-between">
          <h1
            className="font-cormorant font-light leading-none"
            style={{ fontSize: "64px", color: "var(--text)" }}
          >
            Work
          </h1>
          <span
            className="font-jost font-extralight"
            style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "2px" }}
          >
            {filtered.length} {filtered.length === 1 ? "image" : "images"}
          </span>
        </div>
      </div>

      <div
        className="flex items-center gap-8 mb-12 pb-5"
        style={{ borderBottom: "0.5px solid var(--border)" }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.value}
            href={cat.value === "all" ? "/work" : `/work?category=${cat.value}`}
            className="font-jost font-extralight uppercase pb-1"
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
              color: active === cat.value ? "var(--text)" : "var(--muted)",
              borderBottom:
                active === cat.value
                  ? "0.5px solid var(--accent)"
                  : "0.5px solid transparent",
            }}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      <WorkGrid items={filtered} />
    </section>
  );
}
