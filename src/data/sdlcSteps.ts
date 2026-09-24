export interface SdlcStep {
  id: string
  title: string
  description: string
}

export const sdlcSteps: SdlcStep[] = [
  {
    id: 'understand',
    title: '1. Understand the requirement',
    description:
      'Read CLAUDE.md (project rules) and the resume (PRACHI_VATS.pdf) to establish who this site is for and what it needs to say.',
  },
  {
    id: 'inspect',
    title: '2. Inspect the existing code',
    description:
      'Found an unmodified Vite + React + TypeScript starter template — no components, no content, no CI.',
  },
  {
    id: 'intent',
    title: '3. Create the intent doc',
    description:
      'Wrote intent.md: goals, design direction, content sources, and the section plan (Intro, Experience, Skills, Education, Internships, SDLC process, Projects, Contact).',
  },
  {
    id: 'plan',
    title: '4. Propose an implementation plan',
    description:
      'Wrote spec.md (requirements, architecture, data model, CI/CD design) and plan.md (a 13-task breakdown, one PR per task).',
  },
  {
    id: 'approval',
    title: '5. Wait for human approval',
    description:
      'spec.md and plan.md were reviewed and every open question (contact info, CI/CD branch model, repo name, visual direction) resolved before any code was written.',
  },
  {
    id: 'implement',
    title: '6. Implement the approved plan',
    description:
      'Built the site task by task from plan.md: profile.ts data layer, then Intro, Experience, Skills, Education, Projects, Contact, Nav — each as a small, reviewable change.',
  },
  {
    id: 'test',
    title: '7. Run tests and checks',
    description:
      'Ran tsc -b, npm run lint, and npm run build after every task. No unit test runner exists yet, so that gap is called out explicitly rather than skipped silently.',
  },
  {
    id: 'review',
    title: '8. Review the resulting diff',
    description:
      'Checked each new component and the built bundle for correctness before moving on — including catching and fixing a JSX unicode-escape bug during review.',
  },
  {
    id: 'report',
    title: '9. Report what changed',
    description:
      'Each task ended with a summary: what changed, files touched, checks run, and any risks — like this section itself explains its own build process to you, live.',
  },
  {
    id: 'cicd',
    title: '10. CI/CD & deployment',
    description:
      'GitHub Actions workflows for CI (lint + build) and deploy were set up early. In practice, fast design iteration happened via direct pushes to main rather than the planned work-branch → feature-pv → main PR flow — branch protection and required PR review are the next step before treating this as production-grade.',
  },
  {
    id: 'security',
    title: '11. Security considerations',
    description:
      'No secrets or API keys live in the codebase. The public page never renders a phone number or email as visible or crawlable text — even though the source resume PDF does — to avoid scraper harvesting. All resume and profile data flows through one typed data file, so nothing sensitive is hardcoded into components.',
  },
]
