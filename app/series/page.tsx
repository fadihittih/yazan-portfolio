import WorkGrid from "@/app/work/WorkGrid";
import { photos } from "@/data/photos";

const seriesOrder = ["Series I", "Series II", "Series III"] as const;

export default function SeriesPage() {
  return (
    <section className="px-8 md:px-16 pt-20 pb-24">
      <div className="mb-14">
        <p
          className="font-jost font-extralight uppercase mb-6"
          style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "4px" }}
        >
          Collections
        </p>

        <h1
          className="font-cormorant font-light leading-none"
          style={{ fontSize: "64px", color: "var(--text)" }}
        >
          Series
        </h1>
      </div>

      <div className="flex flex-col gap-20">
        {seriesOrder.map((seriesName) => {
          const items = photos.filter((photo) => photo.series === seriesName);

          return (
            <section key={seriesName}>
              <div className="flex items-center justify-between mb-8">
                <h2
                  className="font-cormorant font-light"
                  style={{ fontSize: "36px", color: "var(--text)" }}
                >
                  {seriesName}
                </h2>
                <span
                  className="font-jost font-extralight uppercase"
                  style={{ color: "var(--muted)", fontSize: "10px", letterSpacing: "3px" }}
                >
                  {items.length} images
                </span>
              </div>

              <WorkGrid items={items} />
            </section>
          );
        })}
      </div>
    </section>
  );
}
