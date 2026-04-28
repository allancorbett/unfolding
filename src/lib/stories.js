// Add new stories here. Each module must export { meta, tree }.
// To add a new story:
//   1. Create src/stories/your-story.js (export { meta, tree })
//   2. Import it below
//   3. Add it to the `stories` array

import * as tellTaleHeart from "../stories/tell-tale-heart.js";
import * as threeLittlePigs from "../stories/three-little-pigs.js";
import * as redRidingHood from "../stories/red-riding-hood.js";

export const stories = [tellTaleHeart, threeLittlePigs, redRidingHood];

export function getStoryById(id) {
  return stories.find((s) => s.meta.id === id);
}
