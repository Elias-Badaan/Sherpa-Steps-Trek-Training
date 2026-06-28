import { useEffect, useMemo, useState } from "react";
import type { SummitPhoto } from "../lib/cms";

/**
 * CMS-driven gallery. Hydrated client:visible (spec hydration plan) — the SSR'd
 * markup shows immediately; hydration adds trek filtering + a photo lightbox.
 */
export default function SummitWallGrid({ photos }: { photos: SummitPhoto[] }) {
  const treks = useMemo(
    () => ["All", ...Array.from(new Set(photos.map((p) => p.trek)))],
    [photos],
  );
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<SummitPhoto | null>(null);
  const shown = active === "All" ? photos : photos.filter((p) => p.trek === active);

  // Close lightbox on Escape; lock background scroll while open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {treks.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`label-caps border px-4 py-2 transition ${
              active === t
                ? "border-primary bg-primary text-white"
                : "border-line bg-surface text-muted hover:border-primary hover:text-primary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((p) => (
          <figure key={p._id} className="lift group flex flex-col border border-line bg-surface">
            <button
              type="button"
              onClick={() => p.photo && setSelected(p)}
              className="relative block aspect-[3/4] w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              aria-label={p.photo ? `View ${p.graduateName}'s summit photo` : p.trek}
            >
              {p.photo ? (
                <img
                  src={p.photo}
                  alt={`${p.graduateName} at ${p.trek}`}
                  loading="lazy"
                  className="zoom h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-dark text-on-dark/40">
                  <span className="label-caps">{p.trek}</span>
                </div>
              )}
              <div className="absolute right-3 top-3 bg-accent px-2 py-1 font-display text-xs font-bold text-white">
                {p.peakElevationMeters.toLocaleString()}m
              </div>
              {p.photo && (
                <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-dark/70 text-on-dark opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                </span>
              )}
            </button>
            <figcaption className="flex flex-grow flex-col p-5">
              <h3 className="font-display text-xl font-bold uppercase leading-tight text-primary">
                {p.graduateName}
              </h3>
              <p className="label-caps mt-1 text-muted">{p.trek}</p>
              <p className="label-caps mt-1 text-[11px] text-accent">{p.graduationDate}</p>
              <blockquote className="mt-4 border-t border-line/60 pt-4 text-sm italic text-ink/90">
                {p.caption}
              </blockquote>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.graduateName} — ${selected.trek}`}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-on-dark transition-colors hover:text-accent-hi"
            aria-label="Close"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></svg>
          </button>
          <figure
            className="flex max-h-full w-full max-w-4xl flex-col overflow-auto bg-surface md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.photo}
              alt={`${selected.graduateName} at ${selected.trek}`}
              className="w-full object-cover md:max-h-[80vh] md:w-1/2"
            />
            <figcaption className="flex flex-col p-6 md:w-1/2 md:p-8">
              <span className="font-display text-3xl font-extrabold text-accent">
                {selected.peakElevationMeters.toLocaleString()}m
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase text-primary">
                {selected.graduateName}
              </h3>
              <p className="label-caps mt-1 text-muted">{selected.trek}</p>
              <p className="label-caps mt-1 text-[11px] text-accent">{selected.graduationDate}</p>
              <blockquote className="mt-5 border-t border-line/60 pt-5 italic text-ink">
                {selected.caption}
              </blockquote>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
