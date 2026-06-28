/**
 * Primary header conversion. Hydrated client:load so it's interactive on first
 * paint (spec hydration plan). Tracks the click before navigating.
 */
export default function NavEnrollButton() {
  return (
    <a
      href="/enroll"
      onClick={() => {
        try {
          (window as any).dataLayer?.push?.({ event: "enroll_click", source: "nav" });
        } catch {}
      }}
      className="bg-primary px-8 py-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hi)] hover:shadow-lg hover:shadow-primary/20 active:translate-y-0 active:scale-95"
    >
      Enroll
    </a>
  );
}
