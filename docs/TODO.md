# Website Notes And Future TODOs

This file is a shared context note for future Codex threads.

## What This Website Is

- This repo powers Ryan Cao's personal website.
- It is currently a static site hosted on GitHub Pages.
- The site currently has a home page, a blog, and a Cash Quest page.
- The codebase is simple HTML, CSS, and a small amount of JavaScript.

## Current Structure

- `index.html` is the home page.
- `blog.html` lists blog posts.
- `blog-top-3-stocks.html` and `blog-ebay-depop.html` are individual blog posts.
- `cashquest.html` is the current Cash Quest page.
- `styles.css` holds shared styling.
- `transitions.js` handles page transitions.

## What Ryan Wants

- Keep the personal site simple and polished.
- Explore building Cash Quest into a more interactive experience.
- Leave room for more interactive features on the website in the future.
- Use Codex safely across multiple threads without overwriting unrelated work.

## Current Strengths

- The site is lightweight and easy to host.
- GitHub Pages is a good fit for a simple personal site.
- The design is clean and readable.
- The project is approachable for a non-coder.

## Current Limitations

- Shared page parts like navigation and layout are repeated across multiple HTML files.
- Site-wide changes may require editing many files by hand.
- The blog is hand-maintained page by page.
- The current setup will become harder to manage as interactivity grows.
- GitHub Pages is not ideal for features like user accounts, saved progress, databases, or protected server logic.

## Recommended Architecture Options

### Option 1: Stay Static And Improve The Current Setup

Best if:

- The site remains mostly a personal website with lightweight interactive features.
- Cash Quest stays simple, browser-only, and does not need accounts or saved data.

Possible improvements:

- Clean up repeated page structure.
- Make blog publishing easier.
- Improve organization without changing hosting.

### Option 2: Move The Whole Site To A Beginner-Friendly Framework

Best if:

- Ryan wants a more scalable structure for both the website and interactive features.
- The site will keep growing in pages, shared layouts, and content.

Possible improvements:

- Reusable layouts and components.
- Easier long-term maintenance.
- Better structure for future features.

### Option 3: Keep The Personal Site On GitHub Pages And Build Cash Quest Separately

Best if:

- The personal site should stay simple.
- Cash Quest is likely to become a real app with richer interactions.
- Cash Quest may eventually need accounts, stored progress, or backend features.

Possible improvements:

- Keep the main website low-maintenance.
- Let Cash Quest grow on a platform better suited for apps.
- Avoid forcing app complexity into a simple static site setup.

## Current Recommendation

- Do not rush off GitHub Pages yet.
- Keep the personal site on GitHub Pages for now.
- Treat Cash Quest as the area most likely to outgrow the current setup.
- Revisit the hosting decision when Cash Quest needs saved data, authentication, or backend logic.

## Good Future Tasks

- Decide whether Cash Quest is a content project, an interactive learning tool, or a full app.
- Improve the homepage copy and positioning.
- Make the blog structure easier to update.
- Reduce duplicated layout and navigation code.
- Decide whether to introduce a framework later.
- Plan a future split between the personal site and the Cash Quest app if needed.

## Notes For Future Codex Threads

- Follow the safety routine in `docs/CODEX_WORKFLOW.md`.
- Check `git status` before making edits.
- Call out workflow conflicts before doing anything risky.
- Prefer small, clear improvements over large rewrites unless Ryan asks for a bigger migration.
