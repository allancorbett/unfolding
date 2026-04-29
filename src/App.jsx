import { useState, useEffect, useCallback } from "react";
import StoryIndex from "./components/StoryIndex.jsx";
import StoryView from "./components/StoryView.jsx";
import DonQuixoteView from "./components/DonQuixoteView.jsx";
import { getStoryById } from "./lib/stories.js";

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash || null;
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

  const navigateTo = useCallback((id) => {
    window.location.hash = id ? "/" + id : "/";
  }, []);

  const navigateHome = useCallback(() => {
    window.location.hash = "/";
  }, []);

  let view;
  if (route === "don-quixote") {
    view = <DonQuixoteView onBack={navigateHome} />;
  } else if (route) {
    const story = getStoryById(route);
    if (story) {
      // Re-key on route so each story view gets a fresh state
      view = <StoryView key={route} story={story} onBack={navigateHome} />;
    }
  }
  if (!view) view = <StoryIndex onSelect={navigateTo} />;

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
