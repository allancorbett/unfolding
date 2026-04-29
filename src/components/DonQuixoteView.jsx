import { useState, useEffect, useCallback } from "react";

const TEXT_URL = "https://www.gutenberg.org/cache/epub/996/pg996.txt";

const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
function romanToInt(s) {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = ROMAN[s[i]], nxt = ROMAN[s[i + 1]];
    n += nxt > cur ? -cur : cur;
  }
  return n;
}

const CHAPTER_RE = /^CHAPTER ([IVXLCDM]+)\.\s*$/;

function parseChapters(raw) {
  // Trim Gutenberg wrapper
  const startIdx = raw.search(/\*{3} START OF (THE|THIS) PROJECT GUTENBERG/i);
  const endIdx   = raw.search(/\*{3} END OF (THE|THIS) PROJECT GUTENBERG/i);
  const body = raw.slice(startIdx > -1 ? startIdx : 0, endIdx > -1 ? endIdx : undefined);

  const lines = body.split("\n");
  const all = [];
  let part = 1;
  let lastNum = 0;
  let i = 0;

  while (i < lines.length) {
    const m = lines[i].trim().match(CHAPTER_RE);
    if (!m) { i++; continue; }

    const num = romanToInt(m[1]);
    // When chapter numbering resets after accumulating many chapters, we've hit Part II
    if (num < lastNum && lastNum > 20) part = 2;
    lastNum = num;
    i++;

    // Skip blank lines
    while (i < lines.length && !lines[i].trim()) i++;

    // Chapter subtitle: contiguous all-caps lines immediately after the header
    const subtitleParts = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      lines[i].trim() === lines[i].trim().toUpperCase()
    ) {
      subtitleParts.push(lines[i].trim());
      i++;
    }

    // Skip blank lines before body
    while (i < lines.length && !lines[i].trim()) i++;

    // Body text until next chapter header
    const bodyLines = [];
    while (i < lines.length && !lines[i].trim().match(CHAPTER_RE)) {
      bodyLines.push(lines[i]);
      i++;
    }

    all.push({
      part,
      num,
      subtitle: subtitleParts.join(" "),
      text: bodyLines.join("\n").trim(),
    });
  }

  // Deduplicate by (part, num) — keep last occurrence, drop stub entries
  const map = new Map();
  for (const ch of all) {
    if (ch.text.length > 150) map.set(`${ch.part}-${ch.num}`, ch);
  }

  return [...map.values()].sort((a, b) =>
    a.part !== b.part ? a.part - b.part : a.num - b.num
  );
}

function ChapterRow({ chapter }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);
  const paragraphs = chapter.text.split(/\n\n+/);

  return (
    <div className="dq-chapter">
      <button className="dq-chapter-btn" onClick={toggle}>
        <span className="dq-ch-num">{chapter.num}</span>
        <span className="dq-ch-subtitle">{chapter.subtitle}</span>
        <span className="dq-ch-caret">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="dq-chapter-body">
          {paragraphs.map((p, j) => (
            <p key={j}>{p.replace(/\s*\n\s*/g, " ").trim()}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DonQuixoteView({ onBack }) {
  const [status, setStatus] = useState("loading");
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch(TEXT_URL)
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      })
      .then((text) => {
        setChapters(parseChapters(text));
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  const part1 = chapters.filter((c) => c.part === 1);
  const part2 = chapters.filter((c) => c.part === 2);

  return (
    <div className="page">
      <div className="header-block">
        <div className="meta-row">
          <button className="back-link" onClick={onBack}>
            ← INDEX
          </button>
          <span>DON-QUIXOTE.TXT</span>
          <span>
            {status === "ready" ? `${chapters.length} CHAPTERS` : "···"}
          </span>
        </div>
        <h1>DON QUIXOTE</h1>
        <div className="meta-row">
          <span>MIGUEL DE CERVANTES / 1605–1615</span>
          <span>—</span>
          <span>TRANS. ORMSBY 1885</span>
        </div>
      </div>

      <div className="rule" />

      {status === "loading" && (
        <p className="dq-status">FETCHING FROM PROJECT GUTENBERG…</p>
      )}

      {status === "error" && (
        <p className="dq-status dq-error">
          FETCH FAILED — CHECK CONNECTION AND RELOAD.
          <br />
          <span className="dq-url">{TEXT_URL}</span>
        </p>
      )}

      {status === "ready" && (
        <>
          <div className="instructions">
            <span>&gt;</span> TAP A CHAPTER TO READ
            <span className="dim"> // TAP AGAIN TO COLLAPSE</span>
          </div>

          <div className="rule" />

          <div className="dq-part-label">PART I — 1605</div>
          <div className="dq-chapter-list">
            {part1.map((ch) => (
              <ChapterRow key={`1-${ch.num}`} chapter={ch} />
            ))}
          </div>

          <div className="dq-part-label">PART II — 1615</div>
          <div className="dq-chapter-list">
            {part2.map((ch) => (
              <ChapterRow key={`2-${ch.num}`} chapter={ch} />
            ))}
          </div>

          <div className="dq-source">
            SOURCE: PROJECT GUTENBERG #996 — PUBLIC DOMAIN (ORMSBY TRANS.)
          </div>
        </>
      )}

      <div className="rule double" />
    </div>
  );
}
