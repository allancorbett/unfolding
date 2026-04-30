import { standalone } from "../lib/stories.js";
import { books } from "../lib/books.js";
import {
  collectCollapsedText,
  collectExpandedText,
  countGroups,
  wordCount,
} from "../lib/nodes.js";

function bookStats(book) {
  let collapsed = 0;
  let expanded = 0;
  let nodes = 0;
  for (const ch of book.chapters) {
    collapsed += wordCount(collectCollapsedText(ch.tree));
    expanded += wordCount(collectExpandedText(ch.tree));
    nodes += countGroups(ch.tree).total;
  }
  return { collapsed, expanded, nodes };
}

export default function StoryIndex({ onSelectStory, onSelectBook }) {
  const totalTitles = standalone.length + books.length;

  return (
    <div className="page">
      <div className="header-block">
        <div className="meta-row">
          <span>INDEX</span>
          <span>UNFOLDING.LIB</span>
          <span>{String(totalTitles).padStart(3, "0")} TITLES</span>
        </div>
        <h1>THE UNFOLDING</h1>
        <div className="meta-row">
          <span>A LIBRARY OF COLLAPSIBLE STORIES</span>
          <span>—</span>
          <span>EST. {new Date().getFullYear()}</span>
        </div>
      </div>

      <div className="rule double" />

      <section className="manifesto">
        <h2 className="manifesto-title">Progressive disclosure for prose.</h2>
        <p>
          Software has long let users start simple and dig in. The Unfolding
          applies that to stories — each starts as a single sentence and grows
          outward as you tap. You choose how much story you want.
        </p>
      </section>

      <div className="rule" />

      <div className="instructions">
        <span>&gt;</span> SELECT A TITLE TO BEGIN
        <span className="dim"> // EACH STORY EXPANDS FROM A SINGLE LINE</span>
      </div>

      <div className="rule" />

      <div className="card-grid">
        {standalone.map((s, idx) => {
          const collapsed = wordCount(collectCollapsedText(s.tree));
          const expanded = wordCount(collectExpandedText(s.tree));
          const { total } = countGroups(s.tree);

          return (
            <button
              key={s.meta.id}
              className="card"
              onClick={() => onSelectStory(s.meta.id)}
            >
              <div className="card-num">№ {String(idx + 1).padStart(2, "0")}</div>
              <div className="card-genre">{s.meta.genre.toUpperCase()}</div>
              <h2 className="card-title">{s.meta.title}</h2>
              <div className="card-author">
                {s.meta.author} · {s.meta.year}
              </div>
              <div className="card-preview">"{s.meta.preview}"</div>
              <div className="card-stats">
                <div className="stat-cell">
                  <div className="stat-num">{collapsed}</div>
                  <div className="stat-lbl">WORDS<br />COLLAPSED</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-num">{expanded}</div>
                  <div className="stat-lbl">WORDS<br />EXPANDED</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-num">{total}</div>
                  <div className="stat-lbl">NODES<br />TO REVEAL</div>
                </div>
              </div>
              <div className="card-cta">[ OPEN ]</div>
            </button>
          );
        })}
      </div>

      {books.length > 0 && (
        <>
          <div className="rule" />

          <div className="instructions">
            <span>&gt;</span> BOOKS
            <span className="dim"> // LONG WORKS, READ ONE CHAPTER AT A TIME</span>
          </div>

          <div className="rule" />

          <div className="card-grid">
            {books.map((b, idx) => {
              const stats = bookStats(b);
              return (
                <button
                  key={b.id}
                  className="card book"
                  onClick={() => onSelectBook(b.id)}
                >
                  <div className="card-num">
                    BOOK № {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="card-genre">
                    {b.chapters.length} CHAPTERS
                  </div>
                  <h2 className="card-title">{b.title}</h2>
                  <div className="card-author">
                    {b.author} · {b.year}
                  </div>
                  <div className="card-preview">"{b.preview}"</div>
                  <div className="card-stats">
                    <div className="stat-cell">
                      <div className="stat-num">{b.chapters.length}</div>
                      <div className="stat-lbl">CHAPTERS<br />AVAILABLE</div>
                    </div>
                    <div className="stat-cell">
                      <div className="stat-num">{stats.collapsed}</div>
                      <div className="stat-lbl">WORDS<br />COLLAPSED</div>
                    </div>
                    <div className="stat-cell">
                      <div className="stat-num">{stats.expanded}</div>
                      <div className="stat-lbl">WORDS<br />EXPANDED</div>
                    </div>
                  </div>
                  <div className="card-cta">[ OPEN BOOK ]</div>
                </button>
              );
            })}
          </div>
        </>
      )}

      <div className="rule double" />
    </div>
  );
}
