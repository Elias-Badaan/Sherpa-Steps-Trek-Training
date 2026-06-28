# Sherpa Steps Trek Training

> Train for Everest Base Camp in a parking garage

**HEADLESS DAY brief spec-0230** · Category: **Fitness & Sports** · Difficulty: **medium**

A Houston program that prepares flatlanders for Himalayan treks using weighted packs, stairwell intervals, and a hypoxic tent room. Graduates' summit photos cover an entire wall of the gym.

---

## Requirements

Your build is judged against these. All of them.

- [ ] 12-week program page with phase breakdown and price
- [ ] Altitude room explainer page
- [ ] Graduate summit gallery — minimum 8 photos
- [ ] Program enrollment form with target trek field
- [ ] Mobile-first responsive design

## Art direction

| | |
|---|---|
| Mood | aspirational · methodical · breathless · summit |
| Primary color | `#2B2D42` |
| Accent color | `#8ECAE6` |

Treat the palette as a starting point — interpret the mood, don't paint by numbers.

## Bonus challenge

Add an elevation-gained leaderboard for current trainees

---

# Creative brief

A richer brief to build from — structure, content, design, SEO, and performance. Hit the requirements above; let this guide how.

## Audience & voice

**Audience.** Houston desk-workers and weekend hikers in their 30s-50s who have booked, or are dreaming about, a high-altitude trek — Everest Base Camp, Kilimanjaro, Annapurna — and quietly fear that living at sea level on a flat coastal plain has left them unprepared for the climb.

**Voice.** methodical · plainspoken · quietly fierce · altitude-honest · coach-direct

**Avoid.** hype adjectives, exclamation-point motivation, summit-bro swagger, vague wellness language, false guarantees about a mountain

## Hero

**Headline.** “Houston is six feet above sea level. We train you for 17,598.”

**Layout.** split contradiction — Houston skyline grounding on one side, summit elevation numeral on the other

**Focal / LCP element.** A single oversized elevation numeral '17,598 ft' rendered as the LCP element over a desaturated stairwell-from-below photograph

**Treatment.** Display face in heavy condensed caps for the elevation numeral, with 'six feet' set small and the summit figure set large to dramatize the gap; a thin cold-blue contour line underlines the number

**On load.** The stairwell ground fades in first, then the elevation numeral counts up from 6 to 17,598 over 900ms, then the headline and single CTA fade up; prefers-reduced-motion shows the final 17,598 and full headline immediately with no count

**Atmosphere.** Deep slate field with a faint topographic contour-line overlay and a low-contrast stairwell photo, no gradient haze

**Primary CTA.** Enroll in the 12-week program

**Mobile.** Numeral and headline stack vertically with the contour rail collapsed to a thin top border; a sticky bottom enroll bar appears on scroll

**The one thing they'll remember.** The vertigo of the number gap — six versus seventeen thousand — that names exactly the fear the program solves

## Sitemap (7 pages)

| Page | Route | Purpose | CTA |
|---|---|---|---|
| Home | `/` | Prove a sea-level program can build a body ready for thin air, then push to enroll | Enroll in the 12-week program |
| The 12-Week Program | `/program` | Lay out the three phases week by week with what each session builds and the price | Enroll in the 12-week program |
| The Altitude Room | `/altitude-room` | Explain the hypoxic tent room, how oxygen is dialed down, and why it matters at 5,000m | Enroll in the 12-week program |
| The Summit Wall | `/summit-wall` | CMS gallery of graduate summit photos with trek, elevation, and graduation date | Enroll in the 12-week program |
| Enroll | `/enroll` | Enrollment form capturing the target trek and departure date into a Wix CMS collection | Submit enrollment |
| Coaches & Method | `/coaches` | Introduce the coaches and the stairwell-and-pack training philosophy | See the program |
| FAQ & Logistics | `/faq` | Answer altitude, fitness-level, scheduling, and trek-readiness questions | Enroll in the 12-week program |

## Homepage flow

1. **Hero** — Houston is six feet above sea level. We send people to 17,598.
2. **The problem** — The mountain doesn't care how many spin classes you did. It cares about your legs, your lungs, and the load on your back.
3. **The three phases** — Twelve weeks. Three phases. Base, load, then thin air. In that order, for a reason.
4. **The altitude room** — We dial the oxygen down to 4,000 meters in a room off I-10. Your body starts adapting before your flight does.
5. **The summit wall** — An entire wall of people who stood on top. Every photo started on a stairwell in Houston.
6. **Coaches** — Coached by people who have been short of breath at altitude and lived to plan your training.
7. **Graduate proof** — What they couldn't do in week one, and where they stood by the end.
8. **Enroll band** — Twelve weeks is the runway. Tell us your departure date and we'll back-plan the training.

## Content to create

Seed these into the CMS — counts and sample rows are the minimum bar.

- **8× SummitPhoto** (on The Summit Wall) — fields: graduateName, trek, peakElevationMeters, graduationDate, photo, caption
  - e.g. Dana Okafor | Everest Base Camp | 5,364m | Graduated March 2024 | A flatlander who couldn't finish the 40th-floor stairwell in week one, standing at the EBC marker with a borrowed prayer flag. | 'Week three I cried in the altitude room. Week twelve I out-walked my whole trek group to Gorak Shep.'
  - e.g. Marcus Vela | Kilimanjaro (Uhuru Peak) | 5,895m | Graduated September 2023 | Summit sign at sunrise, 35-pound pack still on, frost on the straps he trained with for three months. | 'The pack on the stairwell wasn't punishment. It was the exact weight I carried the day it counted.'
- **1× StoryBlock** (on Coaches & Method) — fields: heading, body
  - e.g. Sherpa Steps started in a parking garage off I-10 because there are no mountains in Houston and the founders refused to accept that as a reason to fail at altitude. The first cohort was four people, a stack of weighted packs, and a 40-story stairwell they had permission to climb at 6am before the building filled. They timed every flight, logged every heart rate, and noticed something: the people who trained under load and in thin air arrived at altitude steadier than people who'd only run flat miles. So they built a hypoxic tent room that simulates 4,000 meters, and they wrote a 12-week plan that moves from base fitness to loaded climbing to managed oxygen debt. The summit photos started coming back. Then they covered a wall. The wall is the whole pitch now.
- **3× Review** (on Home) — fields: name, quote, detail
  - e.g. Priya Nathan | 'I live at sea level and work at a desk. Twelve weeks later I walked into Base Camp without a headache.' | Everest Base Camp, departed November 2024.
  - e.g. Tomas Reyes | 'The altitude room is the part no other gym has. My legs were tired on Kili, but my lungs were ready.' | Kilimanjaro, departed February 2024.
  - e.g. Hannah Boateng | 'The stairwell intervals with a 30-pound pack are brutal and exactly right. Nothing on the trail surprised me.' | Annapurna Base Camp, departed October 2023.
- **3× ProgramPhase** (on The 12-Week Program) — fields: phaseName, weeks, focus, sampleSession, price
  - e.g. Base | Weeks 1-4 | Build aerobic base and unloaded stair volume so the legs can take the work | 60-minute continuous stairwell climb, no pack, building from 20 to 45 floors | Included in 12-week tuition $1,290
  - e.g. Load | Weeks 5-8 | Add the pack you'll actually carry and train your legs and back under that weight | Weighted stair intervals: 8 floors loaded, 2 floors recovery, pack rising from 20 to 35 pounds | Included in 12-week tuition $1,290

## Design system

**Aesthetic direction.** Topographic editorial — a clean, map-and-elevation-profile aesthetic where contour lines, altitude numerals, and a single cold-blue accent against deep slate make the whole site read like a trek dossier, fitting a program that is methodical, data-honest, and aimed at the summit.

**Spatial composition.** Vertical-ascent layout: a left-edge elevation rail runs down the page as a thin contour-line spine, sections stack as altitude bands rising from sea level to summit, with deliberate negative space between bands so each phase breathes like a stage on the climb.

**Typography.** Display: `Saira Condensed` · Body: `Source Sans 3` · Saira Condensed 700/800 caps for elevation numerals and headlines against Source Sans 3 400/600 for body and captions
_Source:_ Both via Google Fonts, self-hosted as preloaded woff2 subsets
_Why:_ Saira Condensed has the tall, narrow, instrument-panel feel of altitude readouts and gauge numerals, so the elevation figures that drive the whole site dominate cleanly; Source Sans 3 keeps the methodical phase descriptions and logistics readable at small sizes without competing.

**Color system** — paste into your Tailwind v4 `@theme`:

```css
@theme {
  --color-background: #F2F4F8;
  --color-surface: #FFFFFF;
  --color-text: #1C1E2E;
  --color-text-muted: #4A4E66;
  --color-border: #D2D7E2;
  --color-primary: #2B2D42;
  --color-accent: #1C6E8C;
  --color-dark: #1C1E2E;
  --color-on-dark: #EAF4F8;
}
```

**Signature device.** A thin cold-blue contour/elevation rail that runs down the left edge of every page, with altitude tick marks that mark each section as a band rising from sea level toward the summit.

**Motion.** CSS-first and restrained: elevation numerals count up on view, section bands fade and rise slightly as they enter; no parallax or autoplay video; reduced-motion snaps to final values.

**Imagery.** Cool, slightly desaturated documentary photography of training under load — stairwells shot from below, packs and plates, the altitude tent room — paired with authentic graduate summit photos kept warm and real against the cool site so the wins pop.

**Avoid in imagery.** stock fitness-model gym shots · mirror-and-dumbbell aesthetics · warm golden-hour everything · drone-glamour mountain stock with no people · glossy supplement-ad lighting

## Conversion & forms

**Primary action.** Enroll in the 12-week program — via @wix/data (CMS Enrollments inquiry collection) → `/enroll`

**Repeat at.** hero · altitude room band · mobile sticky bar · footer

**Secondary (ghost).** See the 12-week plan

**Form fields.** name, email, phone, targetTrek, departureDate, currentFitnessLevel, trainingNote

**Success message.** “You're in the queue. A coach will reach out within two days to set your start date and back-plan the twelve weeks against your departure.”

**Reassurance.** No commitment yet. Tell us the trek and the date, and we'll be honest about whether twelve weeks is enough runway.

## FAQ

Real questions to answer on the site (and feed FAQPage JSON-LD).

**I live at sea level and I'm not very fit. Is this for me?**

Yes. Most of our cohort starts at a desk and gets winded on a stairwell in week one. The 12-week plan assumes flatlander legs and builds from base fitness up. What we need is twelve weeks of runway before your trek, not a marathon time.

**Does the altitude room actually do anything?**

It simulates the lower oxygen of about 4,000 meters by reducing the oxygen you breathe, so your body starts the adaptation process before your flight. It is not a guarantee against altitude sickness — nothing is — but graduates consistently arrive steadier, and we pair room time with a managed-effort plan.

**How long before my trek should I start?**

Twelve weeks is the runway the program is built around. Start sooner if you can; we can compress to ten weeks in a pinch, but below that we'll tell you honestly that the load and altitude phases get squeezed.

**What treks do you train people for?**

Everest Base Camp, Kilimanjaro, Annapurna Base Camp, Inca Trail, and similar multi-day high-altitude treks. Tell us your target on the enrollment form and we tailor the load and elevation targets to that route.

**What's the price and what's included?**

The full 12-week program is $1,290 and includes all coached stairwell sessions, programmed pack training, and altitude room access. It does not include your trek, gear, or flights — we train the body, you book the mountain.

**Do I need my own weighted pack?**

We have loaner packs and plates for every session. By the load phase we strongly recommend training in the exact pack you'll carry on the trail, and we'll help you fit and weight it.

## SEO

**Primary keyword.** Everest Base Camp training Houston

**Secondary.** altitude training Houston · trek fitness program · hypoxic tent training · Kilimanjaro training program

**Schema.org type.** `ExerciseGym`

**JSON-LD per page.** Course (The 12-Week Program) · ExerciseGym (Home) · FAQPage (FAQ & Logistics) · SportsActivityLocation (Coaches & Method)

**Business facts.** Houston, TX · Mon-Fri 5:30am-9pm, Sat 7am-2pm, closed Sunday · $$ · est. 2019

**Differentiators.** Hypoxic tent room simulating 4,000m; loaded-pack stairwell intervals; a 12-week plan back-planned to your trek departure date

**Socials.** @sherpasteps.houston · @summitwall

## Performance & accessibility

**LCP element.** Hero elevation numeral '17,598 ft' over the desaturated stairwell photo

**Top moves.**
- Serve the hero stairwell photo as responsive AVIF/WebP with explicit width/height and fetchpriority=high
- Self-host Saira Condensed and Source Sans 3 as preloaded woff2 subsets with font-display:swap
- Drive the elevation count-up and section band reveals with CSS scroll-driven animations instead of JS scroll listeners

**Hydration plan.**
- `MobileEnrollStickyBar` → `client:load` (Above-fold per-visitor conversion control that must be tappable immediately)
- `NavEnrollButton` → `client:load` (Primary conversion in the header, interactive on first paint)
- `SummitWallGrid` → `client:visible` (CMS-driven gallery only needs to hydrate as it enters the viewport)
- `EnrollmentForm` → `client:idle` (Below-fold form can defer hydration until the main thread is free)

**Defer as facades.** Map of the gym location loaded as a static image facade that swaps to interactive on click · Optional altitude-room walkthrough video loaded as a poster-image facade on tap

**Targets.** LCP < 2.5s · INP < 200ms · CLS < 0.1 · Lighthouse mobile ≥ 90

**Accessibility baseline.** Text contrast 4.5:1 · UI 3:1 · 44px tap targets · visible focus · honor reduced-motion · alt text required · semantic landmarks

---

# How to build this with Wix Headless

This is the same flow HEADLESS DAY itself was built and deployed with.
Any frontend framework works; the steps below use Astro + React.

## 1. Create the project

```bash
npm create @wix/new@latest my-site
cd my-site
```

This scaffolds an Astro project preconfigured with the `@wix/astro`
integration and links it to a new Wix Headless project in your account
(it will open a browser to authenticate). Already have a project?
Run `npm create @wix/new@latest -- headless link` inside it instead.

## 2. Develop

```bash
npm run dev
```

- Pages live in `src/pages/` (Astro routes). Use React islands
  (`client:load`) for interactive pieces.
- Talk to Wix from code with the SDK:

```ts
import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const wix = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: import.meta.env.PUBLIC_WIX_CLIENT_ID }),
});
```

- Need content collections (menus, galleries, listings)? Create CMS
  collections in your project dashboard (CMS → Collections) and query
  them with `@wix/data`. Need bookings, stores, or events? Install the
  app on the project and use the matching `@wix/...` SDK module.
- Your OAuth client ID is in the dashboard under
  **Settings → Headless Settings → OAuth apps**; put it in `.env.local`
  as `PUBLIC_WIX_CLIENT_ID`.

## 3. Deploy on Wix

```bash
npx wix build
npx wix release
```

`release` prints your live `*.wix-site-host.com` URL. Redeploys are the
same two commands. That URL is what you submit.

## 4. Submit

Paste your live URL into **My Spec → Submit your build** on the
HEADLESS DAY site before 16:00. Good luck. 🎰
