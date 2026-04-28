# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install deps
npm run dev        # start Vite dev server
npm run build      # production build to dist/
npm run preview    # serve the built dist/ locally
```

There is no test suite, no linter, and no type-checker configured. The build (`npm run build`) is the only mechanical verification step.

## Architecture

The Unfolding is a single-page React app that renders "collapsible stories" — each story is a tree of nodes that the reader expands by tapping bracketed phrases.

### The node model (`src/lib/nodes.js`)

Stories are built from two node constructors:

- `T("text")` — plain text, always rendered
- `G(id, "short", [children])` — a group that renders `short` when collapsed and `children` when expanded. Children are themselves nodes, so groups nest arbitrarily.

`G` nodes carry an `isExpanded` flag. All tree updates go through immutable helpers — `setExpanded(nodes, id, value)` and `setAll(nodes, value)` — that return a new tree. Never mutate nodes in place.

Three read-only walks compute different views of a tree:

- `collectText(nodes)` — current rendered text (respects each group's `isExpanded`)
- `collectCollapsedText(nodes)` — text as if every group were collapsed
- `collectExpandedText(nodes)` — text as if every group were expanded

`StoryIndex` uses the collapsed/expanded variants to show static word counts per card; `StoryView` uses `collectText` for the live count.

### Story modules (`src/stories/*.js`)

Each story file exports `{ meta, tree }`. `meta` requires `id`, `title`, `author`, `year`, `genre`, `era`, and `preview`. `tree` is an array of `T`/`G` nodes built with the constructors from `lib/nodes.js`.

Stories are registered manually in `src/lib/stories.js` — there is no auto-discovery. Adding a story is a two-step change: create the file under `src/stories/`, then import it and append to the `stories` array in `lib/stories.js`. `getStoryById` does a linear lookup against `meta.id`.

### Routing & state lifecycle (`src/App.jsx`)

Routing is hash-based (`/#/<story-id>`); `App` listens to `hashchange` and re-derives the route. Two details matter:

- `StoryView` is mounted with `key={route}` so navigating between stories remounts the component and resets the tree state to its fully-collapsed initial form.
- `StoryView` holds the mutable tree in `useState(story.tree)`. Toggle handlers call `setTree(setExpanded(prev, id, value))`.

### Rendering groups (`src/components/StoryView.jsx`)

`renderNodes` recursively walks the tree:

- Collapsed group → `<button class="grp collapsed">[{short}]</button>`
- Expanded group → `<span class="grp expanded">{children}</span>` with an `onClick` that collapses it

Both handlers call `e.stopPropagation()` because expanded groups can contain other expanded groups, and a click on the inner one must not also collapse the outer one.

## Authoring conventions

When writing or editing a story tree:

- The fully-collapsed reading should be ~5–10 words and read as a coherent one-line summary.
- The fully-expanded reading should land at 500+ words.
- Every `G` `id` must be unique within a single story (used as React keys and toggle targets).
- Each `short` string must slot grammatically into the surrounding text — punctuation and spacing belong in the surrounding `T` nodes, not inside `short`.
- Source material must be public domain (pre-1929 in the US) or original.

## Styling

All CSS lives in `src/styles.css`. The aesthetic is intentional brutalist typewriter — `Special Elite` for body text, `JetBrains Mono` for chrome, both loaded from Google Fonts in `index.html`. Don't add a CSS framework or component library; the project deliberately ships with React + Vite as its only runtime dependencies.
