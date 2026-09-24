# Implementation Plan: Portfolio Site

Status: **Awaiting developer review** (CLAUDE.md step 4/5 — this is the concrete plan; nothing below is implemented yet)
Source: [`spec.md`](./spec.md) (requirements/design, approved) · [`intent.md`](./intent.md) (original intent)

This turns spec.md §9's sequencing into a discrete, reviewable task list. Each task = one PR, following the branch model from spec.md §6.2: work branch → PR into `feature-pv` → (once all tasks land) `feature-pv` → PR into `main` → live deploy.

Each task below is sized to stay under CLAUDE.md's "significant change" threshold where possible (≤ a couple files), so review stays easy. Tasks are ordered by dependency — later tasks assume earlier ones are merged into `feature-pv`.

---

## Task 0 — Repo & Pages setup (manual, one-time, not a PR)

- Rename repo to `prachi0513.github.io` (spec.md §10).
- Repo Settings → Pages → Source = "GitHub Actions."
- Create `feature-pv` branch from `main`.
- Set branch protection on `main` and `feature-pv`: require CI status check + 1 approving review (spec.md §6.3).

**Owner**: you (needs repo admin access). **Blocks**: Task 12's deploy workflow, but not Tasks 1–11 (those can proceed against the current repo name in the meantime).

---

## Task 1 — Data layer: `src/data/profile.ts`

- Add typed `profile` object per spec.md §4.3 (experience, skills, education, internships, links).
- Populate with real content from `intent.md` §Content sources (resume + Taxmann details), using the corrected dates (Newgen ends Feb 27 2025, Taxmann starts Mar 3 2025).
- **No visual output** — this task only adds data, not UI. Lowest-risk task, good first PR.
- **Files**: `src/data/profile.ts` (new)
- **Checks**: `tsc -b`, `npm run lint`
- **Branch**: `work/profile-data`

---

## Task 2 — Intro section

- `src/components/Intro.tsx` — renders `profile.summary`.
- **Files**: `src/components/Intro.tsx` (new), `src/App.tsx` (mount it)
- **Checks**: `tsc -b`, `npm run lint`, `npm run build`, manual browser check
- **Branch**: `work/intro-section`

## Task 3 — Experience section

- `src/components/Experience.tsx` — reverse-chronological list from `profile.experience`, each entry showing company/role/dates/highlights/new-skills-learned (R2).
- **Files**: `src/components/Experience.tsx` (new), `src/App.tsx`
- **Checks**: same as Task 2
- **Branch**: `work/experience-section`

## Task 4 — Skills section

- `src/components/Skills.tsx` — grouped by category from `profile.skillGroups`, not a flat tag list (R3).
- **Files**: `src/components/Skills.tsx` (new), `src/App.tsx`
- **Checks**: same as Task 2
- **Branch**: `work/skills-section`

## Task 5 — Education & Internships section

- `src/components/Education.tsx` — covers both education and internships (R4, R5); can be one component or two small ones depending on layout once Task 2–4 establish the visual pattern.
- **Files**: `src/components/Education.tsx` (new), `src/App.tsx`
- **Checks**: same as Task 2
- **Branch**: `work/education-section`

## Task 6 — Projects section

- `src/components/Projects.tsx` — features this repo, linking to its GitHub source (R7). No other project links per intent.md decision.
- **Files**: `src/components/Projects.tsx` (new), `src/App.tsx`
- **Checks**: same as Task 2
- **Branch**: `work/projects-section`

## Task 7 — Contact section + resume download

- `public/resume.pdf` — add the actual resume file.
- `src/components/Contact.tsx` — GitHub + LinkedIn links only, plus "Download resume" link with `download` attribute pointing at `/resume.pdf`. **No phone/email text rendered** (spec.md §5, confirmed decision).
- **Files**: `public/resume.pdf` (new), `src/components/Contact.tsx` (new), `src/App.tsx`
- **Checks**: same as Task 2, plus manually verify the download actually works in a built preview (`npm run preview`)
- **Branch**: `work/contact-resume`

## Task 8 — Nav + page composition

- `src/components/Nav.tsx` — in-page anchor nav linking to each section (spec.md §4.1, no router).
- Finalize `App.tsx` composing all sections in order (R1–R8 content plan order from spec.md §2).
- **Files**: `src/components/Nav.tsx` (new), `src/App.tsx` (finalized)
- **Checks**: same as Task 2, plus manual check that anchor links + smooth scroll work
- **Branch**: `work/nav-composition`

---

## Task 9 — Interactive SDLC section

- `src/components/SdlcProcess.tsx` — clickable step sequence per spec.md §4.4, mirroring CLAUDE.md's 9-step workflow, each step expandable with real content about what happened at that step for this project.
- Small local data array for step content (can live in the same file or `src/data/sdlcSteps.ts`).
- Keyboard accessible: buttons, tab-navigable, `aria-expanded`.
- **Files**: `src/components/SdlcProcess.tsx` (new), possibly `src/data/sdlcSteps.ts` (new), `src/App.tsx`
- **Checks**: same as Task 2, plus manual keyboard-only navigation check (this is the one place accessibility matters most — it's the interactive piece)
- **Branch**: `work/sdlc-interactive`
- **Note**: most novel/highest-effort task; deliberately sequenced after the rest of the page exists (per spec.md §9) so it has real layout context to sit in.

---

## Task 10 — Responsive + accessibility pass

- Cross-cutting pass over all components from Tasks 2–9: mobile breakpoint (~640px collapse), color contrast check, alt text audit, landmark/heading structure review (spec.md §3).
- **Files**: touches most component files + shared CSS — larger diff, flagged as its own reviewable task rather than folded into earlier ones.
- **Checks**: manual check at multiple viewport widths + a quick contrast check (e.g. browser devtools) + `npm run lint` + `tsc -b`
- **Branch**: `work/responsive-a11y-pass`

## Task 11 — SEO & meta basics

- `index.html` — descriptive `<title>`, meta description, Open Graph tags (spec.md §3).
- **Files**: `index.html`
- **Checks**: `npm run build`, manual check of rendered `<head>`
- **Branch**: `work/seo-meta`

---

## Task 12 — CI/CD workflows

- `.github/workflows/ci.yml` — lint, typecheck, build on every PR (both `→ feature-pv` and `feature-pv → main`).
- `.github/workflows/deploy.yml` — build + `actions/deploy-pages`, triggered only on push to `main`.
- Wire in the automated AI review GitHub Action (spec.md §6.3).
- Depends on Task 0 (repo rename, branch protection) being done first for the workflows to actually gate anything.
- **Files**: `.github/workflows/ci.yml` (new), `.github/workflows/deploy.yml` (new), possibly a review-action config file
- **Checks**: verify by opening a throwaway test PR and confirming both workflows trigger and branch protection blocks merge until green + approved
- **Branch**: `work/ci-cd-setup`
- This is its own significant change per spec.md §6.3 — reviewed independently of the content tasks.

---

## Task 13 — Final verification & `feature-pv → main` release PR

- Full checklist from spec.md §8 run against the assembled `feature-pv` branch: type check, lint, build, manual full-page walkthrough (all breakpoints, keyboard nav on SDLC section, resume download, all external links).
- Open the `feature-pv → main` PR — this is the one that, once approved and merged, goes live (Task 0/12's deploy workflow fires).
- **Branch**: `feature-pv` → `main` (release PR, not a new work branch)

---

## Definition of done (applies to every task above)

A task is done when:
1. `tsc -b` and `npm run lint` pass with no new errors.
2. `npm run build` succeeds.
3. For UI tasks: manually verified in the dev server (`npm run dev`), not just "should work."
4. PR opened against `feature-pv` (or `main` for Task 13), CI green, AI review comments addressed or consciously dismissed, and approved by you before merge (spec.md §6.3/§6.4).
5. No task is marked complete on the strength of an unrun check — per CLAUDE.md Code Quality gate.

---

## What's still explicitly deferred (not in this plan)

- Unit tests (no test runner yet — spec.md §8, CLAUDE.md gap).
- PR preview deployments (spec.md §6.1 known limitation, out of scope).
- Any dependency beyond current `package.json` (no router, no UI kit, no animation lib) — see spec.md §7.5. If a task turns out to need one, that's raised as its own decision before proceeding, not folded in silently.

---

## Review ask

As developer, please review:
- Task breakdown and ordering — anything you'd split differently or reorder?
- Branch names — fine as proposed (`work/<task-name>`), or do you want a different naming convention?
- Whether Task 9 (interactive SDLC) and Task 10 (responsive/a11y) are sized right, or should be split further.

Once approved, implementation starts at Task 1.
