import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "the-necklace",
  title: "The Necklace",
  author: "Guy de Maupassant",
  year: 1884,
  genre: "Realism",
  era: "19th Century",
  preview: "A woman borrows a necklace and pays for ten years.",
};

export const tree = [
  G("woman", "A vain woman", [
    T("A "),
    G("pretty-clerk", "pretty wife of a minor clerk", [
      T("pretty wife of a "),
      G("clerk", "minor clerk in the Ministry of Education", [
        T("minor clerk in the Ministry of Education, "),
        G("yearned", "who yearned for finer things", [
          T("who yearned ceaselessly for "),
          G("finer", "silks, jewels, and elegant suppers", [
            T("silks and jewels, dim drawing rooms hung with old tapestries, and elegant suppers in lamplight"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("borrows", "borrows a necklace", [
    T("was "),
    G("invited", "invited with her husband to a grand ball", [
      T("invited with her husband to a "),
      G("ball", "grand ball at the Ministry", [
        T("grand ball at the Ministry, where the cabinet itself was to be present"),
      ]),
    ]),
    T(", and "),
    G("having-no-jewels", "having no jewels of her own", [
      T("having no jewels of her own to set off the new gown that had cost her husband his hunting savings, "),
      G("called-on", "called upon her rich friend Madame Forestier", [
        T("called upon her rich friend Madame Forestier, "),
        G("loaned", "who loaned her a dazzling diamond necklace", [
          T("who opened a great jewel-case and loaned her a dazzling necklace of diamonds"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("loses", "loses it,", [
    T(", "),
    G("triumphed", "triumphed at the ball", [
      T("triumphed at the ball, "),
      G("danced", "danced with the minister and every gentleman", [
        T("danced till four in the morning with the minister and every gentleman in the room, intoxicated with admiration"),
      ]),
    ]),
    T(", but on returning home in the small hours she "),
    G("looked", "looked into the glass to admire herself", [
      T("looked into the glass to admire herself one final time and "),
      G("found-gone", "found the necklace gone from her throat", [
        T("found the necklace gone — clean gone, no clasp, no chain, no diamond left at all"),
      ]),
    ]),
  ]),
  T(" "),
  G("replaces", "secretly replaces it,", [
    T(". They searched the cab company, the streets, the gutters between the Ministry and home, and "),
    G("found-nothing", "found nothing", [
      T("found nothing, "),
      G("desperate", "and in desperation", [
        T("and in desperation, rather than confess the loss to Madame Forestier"),
      ]),
    ]),
    T(", they "),
    G("borrowed", "borrowed thirty-six thousand francs", [
      T("borrowed "),
      G("ruinous", "thirty-six thousand francs at ruinous rates", [
        T("thirty-six thousand francs at ruinous rates from money-lenders all over Paris"),
      ]),
      T(" to "),
      G("bought", "buy a replacement diamond necklace", [
        T("buy an identical necklace from a jeweller in the Palais-Royal, "),
        G("returned", "and returned it without a word", [
          T("which they returned to Madame Forestier in its case without a word of explanation"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("pays", "and pays for ten years.", [
    T(". Then began the "),
    G("ten-years", "ten long years of poverty", [
      T("ten long years of poverty, "),
      G("she-worked", "in which she scrubbed and bargained and aged", [
        T("in which she dismissed the maid, took a garret under the roof, "),
        G("scrubbing", "scrubbed the floors and carried the slops down each morning", [
          T("scrubbed the greasy pots, washed the dirty linen on her own knuckles, and carried the slops down to the street each morning"),
        ]),
      ]),
    ]),
    T(", until at last the debt was paid, and she was a "),
    G("now-old", "hard, coarse, raw-boned woman", [
      T("hard, coarse, raw-boned woman of the working-poor, "),
      G("hair-rough", "with rough hair and red hands", [
        T("with rough hair and red hands and a loud voice that splashed water about when she washed"),
      ]),
    ]),
    T(". Walking on the Champs-Élysées one Sunday she "),
    G("met-friend", "met Madame Forestier, still beautiful", [
      T("met Madame Forestier, still beautiful and still young-looking, "),
      G("told-truth", "and told her the whole truth at last", [
        T("and told her the whole story of the lost necklace and the ten years of debt"),
      ]),
    ]),
    T(", at which Madame Forestier seized her hands and cried, "),
    G("paste", "'Oh, my poor Mathilde — they were paste!'", [
      T("'Oh, my poor Mathilde! Mine were "),
      G("worth-nothing", "false! Worth, at most, five hundred francs!", [
        T("false. They were worth, at most, five hundred francs!'"),
      ]),
    ]),
  ]),
];
