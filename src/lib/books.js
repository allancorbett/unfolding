// Books are collections of chapter-stories. Each chapter is a normal story
// module ({ meta, tree }) — the book registry just groups them and supplies
// shared metadata (author, era, preview).
//
// To add a chapter:
//   1. Create src/stories/<book-slug>/ch-NN.js (export { meta, tree })
//      with meta.book = { id: "<book-slug>", part, chapter }
//   2. Import it below
//   3. Append it to the book's `chapters` array in source order

import * as dqCh01 from "../stories/don-quixote/ch-01.js";
import * as dqCh02 from "../stories/don-quixote/ch-02.js";
import * as dqCh03 from "../stories/don-quixote/ch-03.js";

export const books = [
  {
    id: "don-quixote",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    translator: "John Ormsby (1885)",
    year: "1605–1615",
    era: "17th Century",
    genre: "Chivalric Romance",
    preview:
      "A country gentleman, deranged by chivalric romances, sets out as a knight-errant — one chapter at a time.",
    chapters: [dqCh01, dqCh02, dqCh03],
  },
];

export function getBookById(id) {
  return books.find((b) => b.id === id);
}

export function getBookForChapter(chapterId) {
  for (const b of books) {
    const idx = b.chapters.findIndex((c) => c.meta.id === chapterId);
    if (idx !== -1) return { book: b, index: idx };
  }
  return null;
}
