# Sherpa Steps Trek Training

Marketing site for a Houston gym that prepares sea-level flatlanders for high-altitude
treks (Everest Base Camp, Kilimanjaro, Annapurna) using weighted-pack stairwell intervals
and a hypoxic altitude room.

**Live:** https://sherpa-steps.com

> *"Houston is six feet above sea level. We train you for 17,598."*

## Stack

- **Wix Headless** (CMS, Contacts/CRM, hosting) via `@wix/astro`
- **Astro 5** + **React** islands
- **Tailwind CSS v4** (`@theme` design tokens), self-hosted fonts (Saira Condensed + Source Sans 3)
- Deployed with the Wix CLI (`wix build` / `wix release`)

## Pages

Home · The 12-Week Program · The Altitude Room · The Summit Wall · Enroll · Coaches & Method ·
FAQ & Logistics · Leaderboard (bonus)

## CMS collections

`SummitPhotos` · `Reviews` · `ProgramPhases` · `StoryBlocks` · `Enrollments` (form target).
Enrollments are also mirrored into Wix **Contacts** (tagged by trek) to drive a new-lead
email automation.

## Develop

```bash
cd sherpa-steps
npm install
npx wix env pull   # writes .env.local with your Wix project credentials
npm run dev        # http://localhost:4321
```

## Deploy

```bash
cd sherpa-steps
npx wix build
npx wix release
```

## Repo layout

- `sherpa-steps/` — the Astro + Wix Headless application
- `stitch_ui/` — the original Google Stitch UI/design export (design system + per-page mockups)
- `spec-0230-sherpa-steps-trek-training.md` — the original build brief

## Notes

- Design system: "Topographic Editorial" — deep slate + cold-blue accent, condensed display
  type, a scroll-reactive elevation rail down the left edge.
- Lighthouse (mobile): Performance 95 · Accessibility 95 · Best Practices 100 · SEO 100.

🤖 Built with [Claude Code](https://claude.com/claude-code)
