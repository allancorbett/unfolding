import { useState, useEffect, useCallback } from "react";
import StoryIndex from "./components/StoryIndex.jsx";
import StoryView from "./components/StoryView.jsx";
import BookView from "./components/BookView.jsx";
import { getStoryById } from "./lib/stories.js";
import { getBookById } from "./lib/books.js";

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (!hash) return { kind: "index" };
  const parts = hash.split("/");
  if (parts[0] === "book" && parts[1]) {
    return { kind: "book", id: parts[1] };
  }
  return { kind: "story", id: parts[0] };
}

function routeKey(route) {
  if (route.kind === "index") return "index";
  return route.kind + ":" + route.id;
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handler = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // Reset scroll on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const navigateToStory = useCallback((id) => {
    window.location.hash = id ? "/" + id : "/";
  }, []);

  const navigateToBook = useCallback((id) => {
    window.location.hash = "/book/" + id;
  }, []);

  const navigateHome = useCallback(() => {
    window.location.hash = "/";
  }, []);

  let view;
  if (route.kind === "book") {
    const book = getBookById(route.id);
    if (book) {
      view = (
        <BookView
          key={routeKey(route)}
          book={book}
          onBack={navigateHome}
          onSelectChapter={navigateToStory}
        />
      );
    }
  } else if (route.kind === "story") {
    const story = getStoryById(route.id);
    if (story) {
      view = (
        <StoryView
          key={routeKey(route)}
          story={story}
          onBack={navigateHome}
          onNavigate={navigateToStory}
          onNavigateBook={navigateToBook}
        />
      );
    }
  }
  if (!view) view = <StoryIndex onSelectStory={navigateToStory} onSelectBook={navigateToBook} />;

  return (
    <>
      {view}
      <footer className="site-footer">
        <div className="rule" />
        <div className="meta-row">
          <a
            href="https://github.com/allancorbett/unfolding"
            target="_blank"
            rel="noopener noreferrer"
          >
            [SOURCE @ GITHUB]
          </a>
          <span className="dim">//</span>
          <a
            href="https://superallan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            [SUPERALLAN.COM]
          </a>
        </div>
      </footer>
    </>
  );
}
