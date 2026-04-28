// Add new stories here. Each module must export { meta, tree }.
// To add a new story:
//   1. Create src/stories/your-story.js (export { meta, tree })
//   2. Import it below
//   3. Add it to the `stories` array

import * as tellTaleHeart from "../stories/tell-tale-heart.js";
import * as threeLittlePigs from "../stories/three-little-pigs.js";
import * as redRidingHood from "../stories/red-riding-hood.js";
import * as yellowWallpaper from "../stories/yellow-wallpaper.js";
import * as theNecklace from "../stories/the-necklace.js";
import * as giftOfTheMagi from "../stories/gift-of-the-magi.js";
import * as monkeysPaw from "../stories/monkeys-paw.js";
import * as owlCreekBridge from "../stories/owl-creek-bridge.js";
import * as hanselAndGretel from "../stories/hansel-and-gretel.js";
import * as theOpenWindow from "../stories/the-open-window.js";
import * as ladyOrTiger from "../stories/lady-or-tiger.js";
import * as bluebeard from "../stories/bluebeard.js";

export const stories = [
  tellTaleHeart,
  threeLittlePigs,
  redRidingHood,
  yellowWallpaper,
  theNecklace,
  giftOfTheMagi,
  monkeysPaw,
  owlCreekBridge,
  hanselAndGretel,
  theOpenWindow,
  ladyOrTiger,
  bluebeard,
];

export function getStoryById(id) {
  return stories.find((s) => s.meta.id === id);
}
