import { stories } from "../lib/stories.js";
import {
  collectCollapsedText,
  collectExpandedText,
  countGroups,
  wordCount,
} from "../lib/nodes.js";

export default function StoryIndex({ onSelect }) {
  return (
    <div className="page">
      <div className="header-block">
        <div className="meta-row">
          <span>INDEX</span>
          <span>UNFOLDING.LIB</span>
          <span>{String(stories.length).padStart(3, "0")} TITLES</span>
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
        {stories.map((s, idx) => {
          const collapsed = wordCount(collectCollapsedText(s.tree));
          const expanded = wordCount(collectExpandedText(s.tree));
          const { total } = countGroups(s.tree);

          return (
            <button
              key={s.meta.id}
              className="card"
              onClick={() => onSelect(s.meta.id)}
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

      <div className="rule" />

      <div className="instructions">
        <span>&gt;</span> LONG FORM
        <span className="dim"> // FULL NOVELS — TEXT FETCHED FROM PROJECT GUTENBERG</span>
      </div>

      <div className="rule" />

      <div className="card-grid">
        <button className="card dq-index-card" onClick={() => onSelect("don-quixote")}>
          <div className="card-num">NOVEL</div>
          <div className="card-genre">SATIRE / ADVENTURE</div>
          <h2 className="card-title">Don Quixote</h2>
          <div className="card-author">Miguel de Cervantes · 1605–1615</div>
          <div className="card-preview">"In a village of La Mancha, the name of which I have no desire to call to mind…"</div>
          <div className="card-stats">
            <div className="stat-cell">
              <div className="stat-num">2</div>
              <div className="stat-lbl">PARTS</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">126</div>
              <div className="stat-lbl">CHAPTERS</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">430k</div>
              <div className="stat-lbl">WORDS</div>
            </div>
          </div>
          <div className="card-cta">[ OPEN BOOK ]</div>
        </button>
      </div>

      <div className="rule double" />
    </div>
  );
}
