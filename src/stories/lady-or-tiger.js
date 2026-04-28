import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "lady-or-tiger",
  title: "The Lady, or the Tiger?",
  author: "Frank R. Stockton",
  year: 1882,
  genre: "Riddle",
  era: "19th Century",
  preview: "A princess must choose her lover's fate.",
};

export const tree = [
  G("king", "A king", [
    T("A "),
    G("semi-barbaric", "semi-barbaric king of antiquity", [
      T("semi-barbaric king of antiquity, "),
      G("fancy", "of florid fancy and unfettered authority", [
        T("a man of florid fancy and unfettered authority, "),
        G("self-pleasing", "with a taste for spectacle that pleased only himself", [
          T("given to schemes whose only purpose was to make crooked things straight, and to please himself"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("arena", "tries the princess's lover", [
    T(" had built a "),
    G("amphitheatre", "vast public amphitheatre", [
      T("vast public amphitheatre "),
      G("encircled", "encircled by galleries and shaded by silken canopies", [
        T("encircled by galleries and shaded by silken canopies, "),
        G("for-justice", "where his subjects were tried by chance", [
          T("where any man accused of a crime sufficiently important to interest the king was tried by the impartial verdict of chance"),
        ]),
      ]),
    ]),
    T(", in which the accused was made to stand alone before "),
    G("two-doors", "two identical doors", [
      T("two identical doors set side by side in the wall, "),
      G("doors-mean", "behind one a tiger, behind the other a lady", [
        T("behind one of which crouched the "),
        G("fiercest-tiger", "fiercest tiger that could be procured", [
          T("fiercest and most cruel tiger that could be procured, to tear the offender to pieces"),
        ]),
        T(", and behind the other a "),
        G("loveliest-lady", "lovely lady of suitable age", [
          T("loveliest lady of suitable age, to whom he was instantly married before the assembled multitude, regardless of any wife or sweetheart he might already have"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("youth", "in his arena —", [
    T(". Now it happened that the king's daughter, "),
    G("princess", "the king's beautiful and headstrong daughter", [
      T("a princess as beautiful and as semi-barbaric as her father, "),
      G("loved", "had taken a lover beneath her station", [
        T("had taken a lover, "),
        G("youth-courtier", "a courtier of low birth but exceedingly handsome", [
          T("a courtier of low birth but exceedingly handsome and brave, the kind of youth a princess might love"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("loves", "lady", [
    T(", and when the affair was discovered, the king "),
    G("flung", "flung the youth into prison and set the day", [
      T("flung the youth into prison at once, and set the day for his trial in the arena, "),
      G("crowds", "and the crowds came pouring in to watch", [
        T("and the crowds came pouring in from far and near to watch as they had never watched before, the lover of a princess being a rare occasion"),
      ]),
    ]),
  ]),
  T(" "),
  G("riddle", "or tiger?", [
    T(". The princess, by means known only to one of her birth and station, had "),
    G("learned-secret", "learned which door held which", [
      T("learned which door concealed the tiger, and which the lady, "),
      G("knew-lady", "and she knew the lady well", [
        T("and she knew the lady well — a fair courtier of her own household, on whom her lover had once dared to look with admiration"),
      ]),
    ]),
    T(". On the day of the trial, when the youth came forth into the arena and lifted his eyes to her seat, she "),
    G("signal", "made a slight, quick movement of her hand to the right", [
      T("made a slight, quick movement of her hand to the right — "),
      G("understood", "and he understood at once, and went without hesitation to the right-hand door", [
        T("and he, understanding at once with the perfect understanding of lovers, went without an instant's hesitation across the sand to the right-hand door"),
      ]),
    ]),
    T(". And now comes the question: "),
    G("question", "did the lady, or the tiger, come out?", [
      T("which came out of the door — "),
      G("which", "the lady, or the tiger?", [
        T("the lady, or the tiger? It is a question to be considered, not lightly, but with calm and deliberate thought, and with a knowledge of the human heart"),
      ]),
    ]),
    T(". The author leaves it not for him, but for "),
    G("you", "you to decide.", [
      T("the reader, to decide"),
    ]),
    T("."),
  ]),
];
