# CLAUDE.md
## Project Overview

This repository contains my personal portfolio website.

The project is also being used as a practical learning project for an AI-native software development lifecycle (SDLC).

The goal is to use AI-assisted development while keeping human decisions, code review, testing, and CI/CD as important checkpoints.

## Tech Stack

* React
* TypeScript
* Vite
* CSS (plain stylesheets; no framework yet — update this line if that changes)
* GitHub for version control
* Claude Code for AI-assisted development

## Development Principles

* Do not make large changes without first explaining the approach.
* Prefer small, focused changes.
* Reuse existing components and utilities where possible.
* Avoid unnecessary dependencies.
* Keep TypeScript types explicit and safe.
* Do not introduce `any` unless there is a clear reason.
* Keep components simple and maintainable.
* Follow the existing project structure and conventions.

## AI-Native SDLC Rules

Follow this workflow for significant changes:

1. Understand the requirement.
2. Inspect the existing code.
3. Create or update the relevant plan/intent.
4. Propose an implementation plan.
5. Wait for human approval before making significant changes.
6. Implement the approved plan.
7. Run relevant tests and checks.
8. Review the resulting diff.
9. Report what changed and any remaining issues.

Do not skip testing or verification just because the change appears small.

A change counts as "significant" if any of the following apply: it adds/removes a dependency, changes project structure or config (build, lint, TS), adds a new route/page, touches more than a couple of files, or changes shared/reusable components. Otherwise it can be treated as small.

## Task Intake

* Current (feature/build work): direct prompting in chat, as today. No ticket board, no ticket files to create — do not add a tickets folder or ticket-style docs unless asked.
* Future (once bug-fixing work starts): move to a Trello board for bug tracking. At that point, the user will paste ticket content (or a Trello/MCP integration may be added) and Claude will reference the ticket in commits/PRs. This has not started yet — do not pre-build tooling or docs for it.
* Do not fetch or assume ticket content from an external tracker via generic web tools (e.g. WebFetch) — authenticated boards won't load that way. Ticket content comes from the user directly.

## Before Modifying Code

Before making significant changes:

* Inspect the relevant files.
* Identify existing patterns and dependencies.
* Explain what will be changed.
* Identify potential risks or side effects.
* Ask for approval if the change is substantial or ambiguous.

## Code Quality

After implementation, run the relevant available checks such as:

* Type checking
* Linting
* Unit tests
* Build

Do not claim that a check passed unless it was actually run.

No test runner is set up yet (no Vitest/Jest, no test files). Until one exists, "unit tests" is not an available check — say so explicitly rather than skipping the step silently. Adding a test runner is itself a significant change and needs approval first.

## Git Rules

* Do not modify or delete unrelated work.
* Do not reset, rebase, or force-push unless explicitly requested.
* Keep changes focused on the current task.
* Do not create commits unless explicitly requested.
* Do not push to GitHub unless explicitly requested.

## CI/CD

No CI pipeline exists yet (no `.github/workflows`). When one is added, it should at minimum run lint, type check, and build on pull requests; add tests once a test runner exists. Setting up CI is a significant change and needs a proposed plan first.

## Security

* Never expose secrets, API keys, tokens, or credentials.
* Do not hardcode secrets into source code.
* Do not disable security checks merely to make a build pass.
* Treat external input as untrusted.

## Communication

When completing a task, report:

* What was changed
* Files affected
* Tests/checks executed
* Any issues or risks
* Any follow-up work that may be needed
