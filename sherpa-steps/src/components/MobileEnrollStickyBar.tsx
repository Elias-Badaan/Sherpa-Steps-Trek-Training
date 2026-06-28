import { useEffect, useState } from "react";

/**
 * Above-fold per-visitor conversion control. client:load so it is tappable
 * immediately (spec hydration plan). Appears on scroll on mobile only.
 */
export default function MobileEnrollStickyBar({ label }: { label: string }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 z-50 w-full border-t-2 border-accent bg-primary transition-transform duration-300 md:hidden ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="/enroll"
        className="flex h-16 w-full items-center justify-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-white"
      >
        {label}
      </a>
    </div>
  );
}
