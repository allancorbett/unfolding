import {
  collectCollapsedText,
  collectExpandedText,
  countGroups,
  wordCount,
} from "../lib/nodes.js";

export default function BookView({ book, onBack, onSelectChapter }) {
  let totalCollapsed = 0;
  let totalExpanded = 0;
  let totalNodes = 0;
  const rows = book.chapters.map((ch, i) => {
    const collapsed = wordCount(collectCollapsedText(ch.tree));
    const expanded = wordCount(collectExpandedText(ch.tree));
    const { total } = countGroups(ch.tree);
    totalCollapsed += collapsed;
    totalExpanded += expanded;
    totalNodes += total;
    return { ch, i, collapsed, expanded, total };
  });

  return (
    <div className="page">
      <div className="header-block">
        <div className="meta-row">
          <button className="back-link" onClick={onBack}>
            ← INDEX
          </button>
          <span>BOOK.{book.id.toUpperCase()}</span>
          <span>{String(book.chapters.length).padStart(2, "0")} CH AVAIL</span>
        </div>
        <h1>{book.title.toUpperCase()}</h1>
        <div className="meta-row">
          <span>
            {book.author.toUpperCase()} / {book.year}
          </span>
          <span>—</span>
          <span>{book.era.toUpperCase()}</span>
        </div>
        {book.translator && (
          <div className="meta-row">
            <span>TRANS. {book.translator.toUpperCase()}</span>
          </div>
        )}
      </div>

      <div className="rule double" />

      <section className="manifesto">
        <h2 className="manifesto-title">{book.genre}.</h2>
        <p>{book.preview}</p>
      </section>

      <div className="rule" />

      <div className="instructions">
        <span>&gt;</span> SELECT A CHAPTER TO BEGIN
        <span className="dim"> // EACH CHAPTER UNFOLDS ON ITS OWN</span>
      </div>

      <div className="rule" />

      <ol className="chapter-list">
        {rows.map(({ ch, i, collapsed, expanded, total }) => (
          <li key={ch.meta.id}>
            <button
              className="chapter-row"
              onClick={() => onSelectChapter(ch.meta.id)}
            >
              <span className="chapter-num">
                CH {String(i + 1).padStart(2, "0")}
              </span>
              <span className="chapter-title">{ch.meta.title}</span>
              <span className="chapter-stats">
                <span>{collapsed}→{expanded} WORDS</span>
                <span className="dim"> · </span>
                <span>{total} NODES</span>
              </span>
              <span className="chapter-cta">[ OPEN ]</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="rule" />

      <footer className="book-footer">
        <div className="progress-label">
          <span>TOTAL</span>
          <span>
            {totalCollapsed}→{totalExpanded} WORDS · {totalNodes} NODES
          </span>
        </div>
      </footer>

      <div className="rule double" />
    </div>
  );
}
