# Project Intent

## What this is

A personal portfolio website for Prachi Vats, a frontend software engineer with ~4 years of experience (React / React Native).

This is also the **first project** applying an AI-native SDLC: using Claude Code as a development partner while keeping human review, intent/planning docs, testing, and CI/CD as real checkpoints — not just "vibe coding." The portfolio itself should reflect this by including a section on the AI-native SDLC approach used to build it, since that's a skill being learned and demonstrated alongside the code.

## Goals

- Present as a credible, experienced (4 yrs) frontend engineer across web and mobile (React, React Native, TypeScript, Next.js).
- Show breadth: state management, API integration, performance optimization, testing, mentoring/leadership.
- Show current learning direction: GenAI / AI-assisted development, applied through this very project.
- Be genuinely distinctive — not another templated "hero + cards + timeline" portfolio clone.

## Design direction

- Clean, easy to read, visually calm ("eye-soothing") — not loud, not trend-chasing.
- No filler repetition (don't restate the same accomplishment in multiple sections).
- Avoid recognizable/generic portfolio patterns — the layout and interaction should feel considered and specific to this person, not a reskinned template.
- Exact visual/layout direction to be worked out collaboratively before implementation (per CLAUDE.md: propose a plan, get approval, then build).

## Content sources

- Resume: `PRACHI_VATS.pdf` (provided) — summary, skills, work experience, internships, education.
- GitHub profile: https://github.com/prachi0513
- LinkedIn profile: https://www.linkedin.com/in/prachi-vats-08981a194
- Current role details (not on resume yet, to be added manually):

  **Software Engineer — Taxmann Technologies**
  Mar 3, 2025 – Present
  - Stack: React, React Native, and others (same core stack as prior roles).
  - New things learned in this role:
    - Indexing
    - Building web applications with **Tauri** (web app → native/desktop-style app)
    - SSO (Single Sign-On) integration
    - Taking an app from "web app" to a shippable "website" product

## Content plan (sections, not yet final layout)

1. Intro / summary — who she is, current focus areas.
2. Experience — reverse-chronological:
   - Taxmann Technologies (current — Mar 3, 2025 – Present)
   - Newgen Software (Jan 2025 – Feb 27, 2025; resume's "Present" is outdated and should be corrected to this end date)
   - CodeInvicta (Jul 2022 – Oct 2024)
   - Frontend Instructor, UpGrad (Aug – Dec 2022)
3. Skills — grouped (Frontend / State Management / Testing / Tools) rather than a flat tag cloud.
4. Internships — GirlScript Foundation, Bashank Infotech.
5. Education.
6. "How this site was built" — a **dedicated, interactive** section walking through the AI-native SDLC process (intent → plan → approval → build → test → review) used to build this very site. This is a highlight, not a footnote — exact interaction design (timeline? clickable steps? before/after diffs?) to be proposed in spec.md.
7. Projects — this portfolio repo itself, linked to its GitHub source (no other project links for now).
8. Contact / links — GitHub, LinkedIn, resume download.

## Open questions for the user

None outstanding — all resolved.

## Decisions

- Company names (Taxmann Technologies, Newgen Software, CodeInvicta) may be mentioned publicly by name.
- Resume is downloadable from the site (not just described inline).
- Resume/content needs to be easy to update later without touching component code — see "Content update mechanism" below.
- No project case studies/links for now. This repo itself (the portfolio project) is presented as the project/work sample, linking to its own GitHub repo.
- Deploy target: **GitHub Pages**.
- No fixed tone/color preference dictated — open to a considered creative direction, as long as it stays true to the "eye-soothing, not templated" goal above.
- The AI-native SDLC section should be a **separate, interactive** section (not just a paragraph) — the goal is for a visitor to actually understand the process used to build this site (intent → plan → approval → build → test → review), not just be told it happened. This is meant to be a highlighted, distinctive part of the portfolio, not a footnote.

## Content update mechanism (recommendation)

To make resume and skills easy to update later without editing components each time:

- **Resume file**: store the PDF under `public/resume.pdf` (or similarly named). The download button/link points at that static path. Updating the resume later = replace the file, no code change needed.
- **Skills & experience data**: keep as a single structured data file (e.g. `src/data/profile.ts`) — typed objects for skills, work experience, education, links — imported by the components that render them. This keeps content separate from presentation, so updating a skill list, adding a new role, or tweaking dates is a data edit, not a JSX edit. This matches CLAUDE.md's "reuse existing structure, avoid unnecessary dependencies" — no CMS needed for this scale.
- This mechanism to be finalized in the implementation plan (spec.md), not built yet.

## Non-goals (for now)

- No backend/CMS — content can start static/hardcoded, revisit only if there's a real need (e.g. blog).
- No unnecessary dependencies — CLAUDE.md principle: reuse existing structure (Vite + React + TS) before reaching for new libraries.

## Next step

Per CLAUDE.md workflow: this intent doc is step 3. Next is step 4 — propose an implementation plan (structure, routing/sections, styling approach) for approval before any code changes.
