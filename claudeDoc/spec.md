# Spec: Portfolio Site Implementation

Status: **Draft — awaiting approval** (CLAUDE.md step 4/5: propose plan, wait for human approval before implementation)
Source: [`intent.md`](./intent.md)
Applies to: existing `sdlc-port` repo (Vite + React 19 + TypeScript, currently the unmodified starter template)

---

## 1. Purpose & scope

Turn the current Vite/React starter into Prachi Vats's personal portfolio site, per `intent.md`. Scope is the full single-page site: intro, experience, skills, education, an interactive "how this was built" section, a projects section (this repo), and contact/resume. No backend, no CMS, no multi-page routing (see §4).

Out of scope (per intent.md non-goals): CMS/backend, additional dependencies beyond what's justified below, project case studies other than this repo.

---

## 2. Requirements (from intent.md)

| # | Requirement | Source |
|---|---|---|
| R1 | Intro/summary section | intent.md content plan #1 |
| R2 | Experience section, reverse-chronological: Taxmann Technologies (current), Newgen Software, CodeInvicta, UpGrad instructor role | content plan #2 |
| R3 | Skills grouped by category (Frontend / State Management / Testing / Tools), not a flat list | content plan #3 |
| R4 | Internships section (GirlScript, Bashank Infotech) | content plan #4 |
| R5 | Education section | content plan #5 |
| R6 | Dedicated **interactive** section explaining the AI-native SDLC process used to build the site | content plan #6, Decisions |
| R7 | Projects section featuring this repo, linked to its GitHub source; no other project links | content plan #7 |
| R8 | Contact/links: GitHub, LinkedIn, downloadable resume | content plan #8, Decisions |
| R9 | Resume downloadable as a file; replacing it later requires no code change | Decisions, Content update mechanism |
| R10 | Skills/experience data kept separate from components so content updates don't require editing JSX | Content update mechanism |
| R11 | Design must be calm/readable, non-repetitive, not a generic template | Design direction |
| R12 | Deploy to GitHub Pages | Decisions |

---

## 3. Non-functional requirements & standards applied

No project-specific brand guidelines, design system, or formal security/UX policy exist for this repo beyond what's in `CLAUDE.md` (generic dev principles) and `intent.md` (design direction in prose). In the absence of a documented standard, this spec applies general, defensible defaults and calls them out explicitly so they can be reviewed rather than silently assumed:

- **Accessibility**: WCAG 2.1 AA baseline — semantic HTML landmarks, sufficient color contrast, keyboard-operable interactive section (R6), alt text on images, no color-only signaling.
- **Performance**: static site, no runtime data fetching; images optimized (the existing `hero.png` should be checked/compressed); target Lighthouse performance ≥ 90 on the built site.
- **Responsive design**: mobile-first layout; single-column collapse below ~640px.
- **SEO basics**: descriptive `<title>`, meta description, Open Graph tags for link previews (LinkedIn/GitHub shares) — currently `index.html` only has a bare title.
- **Browser support**: evergreen browsers (Chrome/Edge/Firefox/Safari, last 2 versions) — no legacy IE/polyfill requirement.

---

## 4. Architecture

### 4.1 Routing

**Recommendation: no router, single-page with anchor-linked sections.** All 8 content sections (§2) live on one page, navigated via an in-page nav with anchor links and smooth scroll. This avoids adding `react-router` (or similar) entirely, which:
- satisfies CLAUDE.md's "avoid unnecessary dependencies,"
- sidesteps the standard GitHub Pages pitfall where client-side routers 404 on refresh/deep-link unless extra rewrite tricks (`404.html` redirect hacks) are added — not needed if there's nothing to route.

If a future need arises for a real multi-page site (e.g., individual project case-study pages), routing can be introduced then as its own significant change per CLAUDE.md, not preemptively.

### 4.2 File structure (additions to current repo)

```
public/
  resume.pdf                 # R9 — swap file to update, no code change
src/
  data/
    profile.ts                # R10 — typed content: summary, experience, skills, education, links
  components/
    Nav.tsx
    Intro.tsx
    Experience.tsx
    Skills.tsx
    Education.tsx
    SdlcProcess.tsx            # R6 — the interactive section
    Projects.tsx
    Contact.tsx
  App.tsx                      # composes the above sections
```

This is a straightforward extension of the existing `src/` layout (currently just `App.tsx` + assets) — no restructuring of existing config.

### 4.3 Data model (`src/data/profile.ts`)

Single source of truth, typed, imported by components — satisfies R10:

```ts
export interface ExperienceEntry {
  company: string
  role: string
  start: string   // ISO date, e.g. "2025-03-03"
  end: string | 'present'
  current: boolean
  stack: string[]
  highlights: string[]
  newSkillsLearned?: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export const profile = {
  summary: string,
  experience: ExperienceEntry[],
  skillGroups: SkillGroup[],
  education: EducationEntry[],
  internships: ExperienceEntry[],
  links: { github: string; linkedin: string; resume: string },
}
```

Updating a role, skill, or date becomes an edit to this one file — no JSX changes required, addressing R10 directly.

### 4.4 The interactive SDLC section (R6)

Proposal: a **clickable step sequence** (not a static timeline image), mirroring the actual 9-step workflow already defined in `CLAUDE.md` (understand → inspect → intent → plan → approval → implement → test → review → report). Each step, on click/focus, expands to show what actually happened at that step for *this* project (e.g., "Plan" step shows a snippet from this very `spec.md`).

- Implemented as plain React state (`useState` for selected step) — no new dependency needed.
- Content sourced from a small local data array (step name, short description, optional link to the real doc/commit), not fetched live — keeps it static-site-friendly for GitHub Pages.
- Keyboard accessible: steps are buttons, arrow-key or tab navigable, `aria-expanded` on the active step.

This directly demonstrates the process to a visitor rather than just describing it, per intent.md's requirement that "anyone understand the process too."

---

## 5. Resume handling (R9) & contact info (resolved)

- File lives at `public/resume.pdf`. A "Download resume" link/button in Contact section points to `/resume.pdf` with `download` attribute.
- Updating: replace the file in `public/`, no rebuild-breaking change, no component edit.
- **Decision**: the public page shows **only GitHub + LinkedIn** as contact links. No phone number, no email address anywhere in the rendered HTML. The downloadable resume PDF may still contain the phone/email (it's a personal document the visitor chooses to download), but the page itself never renders them as text — this avoids scraper harvesting of contact details from crawlable HTML while still letting the resume serve its normal purpose.

---

## 6. CI/CD & Deployment — GitHub Pages (R12, resolved)

### 6.1 Known limitation of GitHub Pages

GitHub Pages publishes exactly one live site from a single source; there is no built-in per-PR preview deployment (unlike Vercel/Netlify). A reviewer sees the code diff, not a rendered preview, unless separate preview infrastructure is built — **not included in this plan**, flagged as a deliberate scope limit rather than an oversight. Deploy must therefore be decoupled from PR checks: checks run on every PR, deploy runs only after merge to `main`.

### 6.2 Branch model (decided)

Two-tier flow, not a single `main`-only pipeline:

- **Work branches** (e.g. `work/skills-section`, `work/sdlc-interactive`) — one per task, per CLAUDE.md's "keep changes focused" rule.
- **`feature-pv`** — shared integration branch. Work branches PR **into `feature-pv`**, not into `main`. This is where pieces land and get combined/reviewed before anything is considered production-ready. `feature-pv` is *not* deployed.
- **`main`** — production/live only. When `feature-pv` is stable and ready, it gets merged into `main` via its own PR. **Only `main` triggers the live GitHub Pages deploy.**

So there are two review points: work branch → `feature-pv` (integration review), and `feature-pv` → `main` (release review). Both go through the same PR checks/approval gate (§6.3) — this isn't a lighter-weight path, just a staging step before anything goes live.

### 6.3 Pipeline (decided: required human approval + automated AI review, both)

- **`.github/workflows/ci.yml`** — triggers on every PR (both `→ feature-pv` and `feature-pv → main`): `npm run lint`, `tsc -b` (via `npm run build`'s type-check step or standalone), `npm run build`. Set as a required status check in branch protection on **both** `feature-pv` and `main`.
- **Automated review step** — an AI code-review GitHub Action runs on PR open/synchronize (both PR types) and posts review comments automatically. Advisory, not a merge gate by itself.
- **Branch protection on `feature-pv` and `main`**: require the CI status check to pass **and** at least one human-approved review before merge, on both. The automated bot's comments inform the human reviewer; they don't replace the approval requirement.
- **`.github/workflows/deploy.yml`** — triggers only on push to `main` (i.e., after a `feature-pv → main` PR merges): builds and publishes via `actions/deploy-pages`. Never runs on work branches or `feature-pv`, so nothing pre-release can reach the live site.
- **One-time manual step** (not code): repo Settings → Pages → Source = "GitHub Actions," plus creating the `feature-pv` branch and setting up its branch protection rule. Someone with repo admin access does this once.
- No `base` config needed in `vite.config.ts` — the repo will be renamed to `prachi0513.github.io` (see §10), which GitHub Pages serves from the root, so the default `base: '/'` is correct. No SPA-fallback `404.html` trick needed either, since there's no client-side router (§4.1).

This whole CI/CD setup is a **significant change** per CLAUDE.md's own definition (new workflow files + branch protection + repo settings) — implemented and reviewed as its own step, separate from the page-building work, per §9 sequencing.

### 6.4 Feedback loop on failure

Every gate above needs a defined "what happens when it fails," not just a pass path:

- **CI check fails on a PR** (lint/typecheck/build error): the PR is blocked from merging by branch protection — nothing else needed to enforce that. Fix is pushed as a new commit to the same branch; CI re-runs automatically on push. No manual re-trigger needed.
- **Automated AI review flags a concern**: it's a comment, not a blocking check. You (as sole reviewer) decide whether it's worth addressing before approving — either push a fix commit (same as above) or approve as-is if the comment doesn't apply.
- **You (human review) reject/request changes on a PR**: standard GitHub "request changes" review — merge stays blocked until you re-review and approve. Same fix-push-recheck loop.
- **`feature-pv → main` PR fails CI or review**: `main` is untouched — nothing broken reaches production. Fix happens on `feature-pv` (or its own sub-branch) before retrying the merge.
- **Deploy workflow itself fails** (after merge to `main`, e.g. a build step error slipping through, or a GitHub Pages/Actions outage): the live site simply keeps serving whatever was last successfully deployed — a failed deploy does not take the site down or publish a broken build. GitHub notifies (via the Actions tab / email, depending on your notification settings) that the workflow failed. Fix: push a new commit to `main` (typically via a follow-up PR through the same `feature-pv` flow, not a direct push) to re-trigger deploy.
- **General principle**: every failure stops forward progress at that gate rather than silently continuing — nothing merges or deploys on a red check. The loop back is always "fix on a branch → CI re-validates → re-review → retry merge," never a manual override or skipped check.

---

## 7. Areas of concern / where policies conflict or are undefined

This section directly addresses the request to flag anything unresolved:

1. **No formal brand guideline or design system exists.** `intent.md` gives prose direction ("eye-soothing," "not templated") but no color palette, type scale, or component library is specified. This spec does not invent a locked visual design — that should be a separate, explicit design-approval step (mockup or design tokens) before component styling is implemented, so the "not another templated portfolio" goal isn't accidentally undermined by defaulting to generic choices.

2. **No formal security policy exists beyond CLAUDE.md's generic rules** ("never expose secrets," "treat external input as untrusted"). Those don't directly apply to a static, backend-less personal site with no user input — there's no login, no form submission, no stored data. **Resolved**: the public page shows only GitHub + LinkedIn; no phone number or email is rendered as visible/crawlable text anywhere on the page (§5).

3. **No formal UX/accessibility standard was named.** WCAG 2.1 AA (§3) is applied as a reasonable default for a public professional site, not because it was requested. If a different standard is expected, say so before implementation.

4. **GitHub Pages base path is unknown** — needs the actual repo name (will it stay `sdlc-port`, or get renamed for the live site, e.g. `prachivats.github.io`?) before `vite.config.ts` can be set correctly. A `username.github.io` repo name would serve from the root and remove the `base` config need entirely — worth deciding now since it changes the deploy config.

5. **No dependency additions are strictly required** by this plan (no router, no UI kit, no animation library) beyond what's already in `package.json`. If the "distinctive, not templated" visual goal later calls for something like a lightweight animation library, that would be a new significant-change decision, not assumed here.

---

## 8. Testing & verification plan (CLAUDE.md Code Quality gate)

- **Type checking**: `tsc -b` — must pass with the new `profile.ts` typed data and components.
- **Linting**: `npm run lint` — existing ESLint flat config applies as-is to new files.
- **Build**: `npm run build` — verifies the GitHub Pages `base` path and static asset resolution end-to-end.
- **Unit tests**: none exist yet (already documented as a gap in CLAUDE.md). Not blocking this spec, but adding component-level tests (e.g., the interactive SDLC section's expand/collapse behavior) would be a reasonable, separate significant change once a test runner (Vitest, recommended for Vite-native integration) is approved and added.
- **Manual check**: since this is a UI-heavy change, dev-server walkthrough of all sections, responsive breakpoints, and keyboard navigation of the SDLC section before calling it done — per the project's own "test UI features in a browser" standard.

---

## 9. Sequencing (proposed implementation order)

1. `src/data/profile.ts` (data layer, no visual risk)
2. Static sections in order: Intro → Experience → Skills → Education/Internships → Projects → Contact (with resume download)
3. Interactive SDLC section (most novel piece, benefits from the rest of the page/layout existing first)
4. Responsive + accessibility pass
5. GitHub Pages deploy config + workflow
6. Full verification per §8

Each numbered step above ~2 files should be proposed/approved individually per CLAUDE.md's "significant change" threshold, rather than landed as one large diff.

---

## 10. Approval checklist

Resolved:
- [x] §5 — contact info: GitHub + LinkedIn only, no phone/email rendered on page
- [x] §6.2/§6.3 — CI/CD: two-tier branch model (work → `feature-pv` → `main`), required human approval + automated AI review on both PR tiers, deploy only from `main`

- [x] Repo/site name: repo will be renamed to **`prachi0513.github.io`** (matches GitHub username), serving the site from the clean root URL `https://prachi0513.github.io/` with no subpath. This removes the need for a `base` config in `vite.config.ts` (default `/` is correct for a `username.github.io` repo).
- [x] §4.4 — interactive SDLC section concept (clickable step sequence) approved as proposed, no changes requested.
- [x] Visual design direction: **professional** look — no specific color/tone spec provided beyond that, so a professional palette/typography direction will be proposed as part of implementation for approval (not locked yet, but "professional" is now the guiding constraint instead of undefined).
- [x] Human reviewer for required PR approval: **Prachi (repo owner) is the sole reviewer** on both `→ feature-pv` and `feature-pv → main` PRs. Note: GitHub allows self-approval by default (no separate-reviewer restriction like GitLab's), so this works without extra config.
- [x] Automated AI review: GitHub Action for automated PR review, confirmed to proceed.

All items resolved. Ready to move to implementation per §9 sequencing.
