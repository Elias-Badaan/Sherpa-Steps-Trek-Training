import { useState } from "react";

const TREKS = [
  "Everest Base Camp",
  "Kilimanjaro (Uhuru Peak)",
  "Annapurna Base Camp",
  "Inca Trail",
  "Other high-altitude trek",
];

const FITNESS = [
  "Desk-bound — winded on a stairwell",
  "Weekend hiker / casual cardio",
  "Regularly active / trains 3x+ weekly",
  "Endurance athlete",
];

const field =
  "w-full border border-line bg-surface px-4 py-3.5 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25 placeholder:text-muted/70";
const label = "label-caps mb-2 block text-muted";

/**
 * Below-fold enrollment form. Hydrated client:idle (spec hydration plan).
 * Posts to /api/enroll which writes to the Wix CMS Enrollments collection.
 */
export default function EnrollmentForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("submitting");
    setError("");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Submission failed");
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <section className="topo-bg-light relative overflow-hidden border border-primary bg-dark p-10 text-center text-on-dark md:p-12">
        <div className="text-5xl">✓</div>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase text-white md:text-4xl">
          You're in the queue.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-on-dark/85">
          A coach will reach out within two days to set your start date and back-plan the twelve
          weeks against your departure.
        </p>
        <a
          href="/"
          className="mt-8 inline-block border-2 border-accent-hi px-10 py-3 font-display text-sm font-semibold uppercase tracking-[0.1em] text-accent-hi transition hover:bg-accent-hi hover:text-dark"
        >
          Back to Home
        </a>
      </section>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative z-10 border border-line bg-surface p-6 md:p-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Name</label>
          <input className={field} id="name" name="name" type="text" required placeholder="Your full name" />
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input className={field} id="email" name="email" type="email" required placeholder="you@email.com" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone</label>
          <input className={field} id="phone" name="phone" type="tel" placeholder="(713) 000-0000" />
        </div>
        <div>
          <label className={label} htmlFor="targetTrek">Target Trek</label>
          <select className={field} id="targetTrek" name="targetTrek" required defaultValue="">
            <option value="" disabled>Select your trek</option>
            {TREKS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="departureDate">Departure Date</label>
          <input className={field} id="departureDate" name="departureDate" type="date" required />
        </div>
        <div>
          <label className={label} htmlFor="currentFitnessLevel">Current Fitness Level</label>
          <select className={field} id="currentFitnessLevel" name="currentFitnessLevel" required defaultValue="">
            <option value="" disabled>Be honest — it sets your start</option>
            {FITNESS.map((f) => <option key={f}>{f}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-6">
        <label className={label} htmlFor="trainingNote">
          Training Note <span className="lowercase text-muted/70">(optional)</span>
        </label>
        <textarea
          className={field}
          id="trainingNote"
          name="trainingNote"
          rows={4}
          placeholder="Injuries, prior altitude experience, the pack you'll carry, anything we should know."
        />
      </div>
      {status === "error" && (
        <p className="mt-4 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full bg-primary py-4 font-display text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[var(--color-primary-hi)] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Enrollment"}
      </button>
      <p className="mt-4 text-center text-sm text-muted">
        The full 12-week program is <span className="font-semibold text-primary">$1,290</span>. A
        coach will confirm pricing and your start date before anything is owed.
      </p>
    </form>
  );
}
