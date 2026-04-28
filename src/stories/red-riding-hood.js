import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "red-riding-hood",
  title: "Little Red Riding Hood",
  author: "Charles Perrault",
  year: 1697,
  genre: "Fairy Tale",
  era: "17th Century",
  preview: "A girl visits her grandmother and meets a wolf.",
};

export const tree = [
  G("girl", "A girl", [
    T("A "),
    G("little-girl", "little girl in a red hood", [
      T("little girl, "),
      G("loved-by-all", "loved by everyone in the village", [
        T("loved by everyone who saw her, "),
        G("called", "called Little Red Riding Hood", [
          T("called Little Red Riding Hood for the "),
          G("velvet-hood", "scarlet velvet hood", [
            T("scarlet velvet hood her grandmother had stitched for her"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("visits", "sets out to visit", [
    T(" set out one bright morning to "),
    G("carry", "carry a basket of cakes and wine", [
      T("carry a "),
      G("basket", "wicker basket of fresh cakes and wine", [
        T("wicker basket of fresh-baked cakes and a small bottle of wine"),
      ]),
      T(" through "),
      G("woods", "the deep woods", [
        T("the deep, "),
        G("dark-woods", "dark woods of the old country", [
          T("dark and tangled woods of the old country, where the trees grew so close that little sunlight ever reached the path"),
        ]),
      ]),
    ]),
    T(" to "),
  ]),
  G("granny", "her grandmother,", [
    T("her "),
    G("old-granny", "ailing old grandmother", [
      T("ailing old grandmother, "),
      G("lived-alone", "who lived alone in a cottage", [
        T("who lived alone in "),
        G("cottage", "a small thatched cottage at the edge of the wood", [
          T("a small thatched cottage at the far edge of the wood, beneath a great oak tree"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("meets", "but along the way meets", [
    T(" but along the way she "),
    G("met-on-path", "fell into easy conversation with", [
      T("fell into easy conversation with "),
    ]),
  ]),
  G("wolf", "a wolf.", [
    T("a "),
    G("great-wolf", "great wolf of the forest", [
      T("great grey wolf of the forest, "),
      G("cunning", "cunning and old", [
        T("cunning and old, "),
        G("hungry", "and very hungry indeed", [
          T("and very hungry indeed, though he made his voice as gentle as a friend's"),
        ]),
      ]),
    ]),
    T(", who, "),
    G("learned", "having learned where she was bound", [
      T("having coaxed from her where she was bound, and what she carried, "),
      G("ran-ahead", "ran ahead by a shorter path", [
        T("ran ahead by a shorter path through the bracken"),
      ]),
    ]),
    T(", and "),
    G("at-cottage", "reached the cottage first", [
      T("reached the cottage first, where he "),
      G("ate-granny", "swallowed the grandmother whole", [
        T("swallowed the poor grandmother whole, "),
        G("disguised", "and dressed himself in her cap and bedclothes", [
          T("and dressed himself in her nightcap and her bedclothes, drawing the covers up to his snout"),
        ]),
      ]),
    ]),
    T(". When the girl arrived, and remarked, "),
    G("what-big", "'Grandmother, what big eyes you have!'", [
      T("'Grandmother, what big eyes you have!' — and 'what big ears!' — and "),
      G("what-teeth", "'what big teeth you have!'", [
        T("'what big teeth you have!'"),
      ]),
      T(", the wolf "),
      G("threw-off", "threw off the covers", [
        T("threw off the covers and "),
        G("devoured", "devoured her at a single bound", [
          T("devoured her also at a single bound — though in some tellings, a passing woodcutter heard the commotion and arrived in time to slit the wolf's belly and free them both, alive and unharmed"),
        ]),
      ]),
    ]),
    T("."),
  ]),
];
