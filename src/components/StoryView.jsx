import { useState, useCallback, useMemo } from "react";
import {
  setExpanded,
  setAll,
  collectText,
  countGroups,
  wordCount,
} from "../lib/nodes.js";

function renderNodes(nodes, onToggle) {
  const out = [];
  nodes.forEach((n, i) => {
    if (n.type === "text") {
      out.push(<span key={"t-" + i}>{n.text}</span>);
      return;
    }
    if (n.isExpanded) {
      out.push(
        <span
          key={n.id}
          className="grp expanded"
          onClick={(e) => {
            e.stopPropagation();
            onToggle(n.id, false);
          }}
          title="Tap to collapse"
        >
          {renderNodes(n.expanded, onToggle)}
        </span>
      );
    } else {
      out.push(
        <button
          key={n.id}
          className="grp collapsed"
          onClick={(e) => {
            e.stopPropagation();
            onToggle(n.id, true);
          }}
          title="Tap to expand"
        >
          [{n.short}]
        </button>
      );
    }
  });
  return out;
}

export default function StoryView({ story, onBack }) {
  const [tree, setTree] = useState(story.tree);

  const handleToggle = useCallback((id, value) => {
    setTree((prev) => setExpanded(prev, id, value));
  }, []);

  const stats = useMemo(() => countGroups(tree), [tree]);
  const wc = useMemo(() => wordCount(collectText(tree)), [tree]);
  const pct = stats.total ? Math.round((stats.expanded / stats.total) * 100) : 0;

  return (
    <div className="page">
      <div className="header-block">
        <div className="meta-row">
          <button className="back-link" onClick={onBack}>
            ← INDEX
          </button>
          <span>{story.meta.id.toUpperCase()}.TXT</span>
          <span>REV. {String(stats.expanded).padStart(2, "0")}</span>
        </div>
        <h1>{story.meta.title.toUpperCase()}</h1>
        <div className="meta-row">
          <span>
            {story.meta.author.toUpperCase()} / {story.meta.year}
          </span>
          <span>—</span>
          <span>{wc} WORDS</span>
        </div>
      </div>

      <div className="rule" />

      <div className="instructions">
        <span>&gt;</span> TAP <span className="kbd">[BRACKETED]</span> TO EXPAND
        <span className="dim"> // TAP EXPANDED TEXT TO COLLAPSE</span>
      </div>

      <div className="rule" />

      <main>
        <p className="story">{renderNodes(tree, handleToggle)}</p>
      </main>

      <div className="rule" />

      <footer>
        <button onClick={() => setTree(setAll(tree, false))} className="ctrl">
          [COLLAPSE ALL]
        </button>
        <div className="progress-block">
          <div className="progress-label">
            <span>EXPANSION</span>
            <span>{String(pct).padStart(3, "0")}%</span>
          </div>
          <div className="bar">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className={i < Math.round((pct / 100) * 30) ? "tick on" : "tick"}
              >
                |
              </span>
            ))}
          </div>
          <div className="progress-label">
            <span>NODES</span>
            <span>
              {stats.expanded}/{stats.total}
            </span>
          </div>
        </div>
        <button onClick={() => setTree(setAll(tree, true))} className="ctrl">
          [REVEAL ALL]
        </button>
      </footer>

      <div className="rule double" />
    </div>
  );
}
