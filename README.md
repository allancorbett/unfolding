# The Unfolding

A library of collapsible stories. Each story starts as a single line — fewer than ten words — and can be progressively unfolded into the full text by tapping bracketed phrases. Brutalist typewriter aesthetic.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

The built output lands in `dist/` and is a static site — drop it on Netlify, Cloudflare Pages, GitHub Pages, or any static host.

## Project structure

```
src/
├── App.jsx                  # hash router (index ↔ story)
├── main.jsx                 # entry
├── styles.css               # all styles
├── lib/
│   ├── nodes.js             # T(), G(), tree utilities
│   └── stories.js           # story registry — edit when adding
├── components/
│   ├── StoryIndex.jsx       # cards grid
│   └── StoryView.jsx        # the reader
└── stories/
    ├── tell-tale-heart.js
    ├── three-little-pigs.js
    └── red-riding-hood.js
```

## How a story is structured

A story is a tree of nodes. Each node is either:

- **`T("text")`** — plain text that always appears
- **`G(id, "short", [...children])`** — a collapsible group that shows `"short"` when collapsed and the children when expanded

Children can themselves contain more `G(...)` nodes, nested as deep as you like. The collapsed form of every group must read as a coherent sentence; the expanded form replaces it with richer detail.

### Example

```js
import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "my-story",
  title: "My Story",
  author: "Anonymous",
  year: 2026,
  genre: "Modern",
  era: "Contemporary",
  preview: "A man walks to a castle.", // shown on the index card
};

export const tree = [
  G("subject", "A man", [
    T("A "),
    G("adj", "weary", [T("weary, rain-soaked")]),
    T(" man"),
  ]),
  T(" "),
  G("verb", "walks", [T("trudges")]),
  T(" to "),
  G("place", "a castle.", [
    T("a "),
    G("ruined", "ruined", [T("half-ruined")]),
    T(" castle by the loch."),
  ]),
];
```

## Adding a new story

1. Create `src/stories/your-story.js` exporting `{ meta, tree }` (see above)
2. Add it to `src/lib/stories.js`:

   ```js
   import * as yourStory from "../stories/your-story.js";
   export const stories = [tellTaleHeart, threeLittlePigs, redRidingHood, yourStory];
   ```

That's it — the index will pick it up automatically.

### Authoring tips

- The fully-collapsed reading should be roughly **5–10 words** — a one-line summary of the story
- The fully-expanded reading should land at **500+ words** for a meaningful unfold
- Every `id` must be unique within the story
- `short` strings should slot grammatically into the surrounding text
- Choose only public-domain texts (anything pre-1929 in the US) or your own writing

## Routing

URLs use hash routing: `/#/tell-tale-heart` opens a specific story. The browser back button returns to the index.

## Tech

Vite + React 18, no other dependencies. Fonts loaded from Google Fonts (Special Elite + JetBrains Mono).
