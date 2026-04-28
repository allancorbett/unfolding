import { useState, useEffect, useCallback } from "react";
import StoryIndex from "./components/StoryIndex.jsx";
import StoryView from "./components/StoryView.jsx";
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

  if (route) {
    const story = getStoryById(route);
    if (story) {
      // Re-key on route so each story view gets a fresh state
      return <StoryView key={route} story={story} onBack={navigateHome} />;
    }
  }

  return <StoryIndex onSelect={navigateTo} />;
}
