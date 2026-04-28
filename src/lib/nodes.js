// Node constructors --------------------------------------------------

export const T = (text) => ({ type: "text", text });

export const G = (id, short, expanded) => ({
  type: "group",
  id,
  short,
  expanded,
  isExpanded: false,
});

// Tree mutations -----------------------------------------------------

export function setExpanded(nodes, id, value) {
  return nodes.map((n) => {
    if (n.type !== "group") return n;
    if (n.id === id) return { ...n, isExpanded: value };
    return { ...n, expanded: setExpanded(n.expanded, id, value) };
  });
}

export function setAll(nodes, value) {
  return nodes.map((n) => {
    if (n.type !== "group") return n;
    return { ...n, isExpanded: value, expanded: setAll(n.expanded, value) };
  });
}

// Read-only walks ----------------------------------------------------

export function collectText(nodes) {
  return nodes
    .map((n) => {
      if (n.type === "text") return n.text;
      if (n.isExpanded) return collectText(n.expanded);
      return n.short;
    })
    .join("");
}

// Compute the fully-collapsed text without mutating the tree
export function collectCollapsedText(nodes) {
  return nodes
    .map((n) => {
      if (n.type === "text") return n.text;
      return n.short;
    })
    .join("");
}

// Compute the fully-expanded text without mutating the tree
export function collectExpandedText(nodes) {
  return nodes
    .map((n) => {
      if (n.type === "text") return n.text;
      return collectExpandedText(n.expanded);
    })
    .join("");
}

export function countGroups(nodes) {
  let total = 0;
  let expanded = 0;
  const walk = (ns) => {
    ns.forEach((n) => {
      if (n.type === "group") {
        total++;
        if (n.isExpanded) expanded++;
        walk(n.expanded);
      }
    });
  };
  walk(nodes);
  return { total, expanded };
}

export function wordCount(text) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  return cleaned ? cleaned.split(" ").filter(Boolean).length : 0;
}
