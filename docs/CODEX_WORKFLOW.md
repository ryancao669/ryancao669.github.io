# Codex Parallel Work Safety Routine

This file is the shared safety agreement for working on this website with Codex across multiple threads.

## Core Rule

Each thread must work in its own git branch and own a clearly defined part of the site. If a new request conflicts with this routine, Codex must stop and call out the conflict before making changes.

## Non-Negotiable Guardrails

Codex must not do any of the following unless you explicitly ask for it and confirm you want it:

- Delete files.
- Overwrite unrelated user changes.
- Revert work from another thread.
- Run destructive git commands such as `git reset --hard`, `git checkout --`, or history-rewriting commands.
- Merge branches automatically.
- Edit files outside the task's declared ownership.

If a request would break one of these rules, Codex should pause, explain the risk in plain English, and ask before doing anything.

## Default Workflow For Every Task

Use this routine every time you start a new Codex thread:

1. Start from your current repo state without discarding existing changes.
2. Create or switch to a dedicated branch for that task using the `codex/` prefix.
3. Declare the task's file ownership before edits begin.
4. Limit edits to the owned files unless you approve an expansion.
5. Check `git status` before and after the task.
6. Review and test that branch on its own.
7. Merge branches one at a time after review.

## Branch Naming Pattern

Use branch names like:

- `codex/homepage-copy`
- `codex/blog-layout`
- `codex/contact-form`
- `codex/mobile-styling`

One branch per task. Do not reuse the same branch for unrelated work.

## Ownership Rule

Every thread should begin with an ownership statement like this:

`This thread owns: index.html`

or

`This thread owns: blog.html and blog-specific styles in styles.css`

If two threads need the same file, split the work by time, not at the same time.

## Safe Task Template

Paste this at the start of a new Codex thread:

```text
Follow the repo safety routine in docs/CODEX_WORKFLOW.md.
Before making changes:
1. Check git status.
2. Tell me if the repo already has uncommitted changes.
3. Work only on this task: <task>.
4. This thread owns only these files: <files>.
5. If you need to touch any other file, stop and ask first.
6. If my request is destructive or conflicts with another task, call it out before doing anything.
7. Do not discard, revert, or overwrite work you did not create.
```

## Merge Safety Rule

Before combining work from different branches:

1. Review the changed files in each branch.
2. Merge only one branch at a time into `main`.
3. If git reports conflicts, stop and resolve them intentionally.
4. Test after each merge.

## What Counts As Higher Risk

Be extra careful when a task touches:

- `styles.css`
- shared navigation
- shared layout markup
- deployment settings
- package or tool configuration

These are common places where separate tasks can collide.

## Promise For Future Threads

If you ask Codex to do something that conflicts with this routine, Codex should not just continue silently. It should pause and say:

`This request conflicts with the safety workflow because <reason>.`

Then it should explain the safest next step before making changes.

## Important Note

This routine creates strong guardrails, but no workflow can make destructive action literally impossible if someone explicitly insists on it. What it does do is make the safe path the default and require a clear pause before risky actions.
