import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "three-little-pigs",
  title: "The Three Little Pigs",
  author: "English Folk Tale",
  year: 1840,
  genre: "Fairy Tale",
  era: "Folk",
  preview: "Three pigs build houses and a wolf attacks.",
};

export const tree = [
  G("pigs", "Three pigs", [
    T("Three "),
    G("little-pigs", "little pigs", [
      T("little pigs, "),
      G("set-out", "having grown up and left their mother", [
        T("having grown up and left their mother to "),
        G("seek-fortune", "seek their fortune in the wide world", [
          T("seek their fortune out in the wide world"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("build", "each build a house", [
    T(", each set about "),
    G("building", "building a house to live in", [
      T("building a house in which to live: "),
      G("first", "the first of straw", [
        T("the "),
        G("first-pig", "first and laziest pig", [T("first and laziest pig")]),
        T(" gathered "),
        G("straw", "a bundle of straw", [
          T("a bundle of "),
          G("yellow-straw", "yellow straw from a passing farmer", [
            T("yellow straw from a passing farmer, and threw it together in an afternoon"),
          ]),
        ]),
      ]),
      T("; "),
      G("second", "the second of sticks", [
        T("the "),
        G("second-pig", "second pig, scarcely more diligent", [
          T("second pig, scarcely more diligent than the first"),
        ]),
        T(", made his of "),
        G("sticks", "twigs and branches", [
          T("twigs and branches "),
          G("from-wood", "gathered hastily from the wood", [
            T("gathered hastily from the wood, and lashed together with vine"),
          ]),
        ]),
      ]),
      T("; and "),
      G("third", "the third of bricks", [
        T("the "),
        G("third-pig", "third pig, who was wise and patient", [
          T("third pig, who was wise and patient"),
        ]),
        T(", "),
        G("laboured", "laboured for many weeks", [
          T("laboured for many weeks at "),
          G("brick-house", "a sturdy house of brick", [
            T("a sturdy house of brick and mortar, with a stout chimney and a heavy oaken door"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("wolf", "A great wolf", [
    T(" Then a "),
    G("big-wolf", "great hungry wolf", [
      T("great hungry "),
      G("grey-wolf", "grey wolf with yellow teeth", [
        T("grey wolf with yellow teeth and "),
        G("eyes", "eyes like burning coals", [
          T("eyes that glowed like burning coals in the dusk"),
        ]),
      ]),
    ]),
    T(" came "),
    G("prowling", "prowling through the country", [
      T("prowling through the country, "),
      G("scenting", "scenting pork upon the wind", [
        T("scenting pork upon the wind, and licking his chops"),
      ]),
    ]),
  ]),
  T(" "),
  G("attacks", "attacks each in turn.", [
    T(" and came in turn to each little house. At the first he called out: "),
    G("call-1", "'Little pig, let me in!'", [
      G("knock-1", "'Little pig, little pig, let me come in!'", [
        T("'Little pig, little pig, let me come in!' But the pig replied, "),
        G("not-by-hair", "'Not by the hair of my chinny-chin-chin!'", [
          T("'Not by the hair of my chinny-chin-chin!'"),
        ]),
      ]),
    ]),
    T(" So the wolf "),
    G("blew-1", "blew the straw house down", [
      T("huffed and he puffed, and "),
      G("blew-down-1", "blew the house of straw clean down", [
        T("blew the house of straw clean down, and "),
        G("ate-1", "swallowed the first pig whole", [
          T("swallowed the first little pig at a single gulp"),
        ]),
      ]),
    ]),
    T(". Onward he went to the house of sticks, where "),
    G("blew-2", "the same thing happened", [
      T("he huffed and puffed once more, and "),
      G("sticks-down", "scattered the twigs across the field", [
        T("scattered the twigs across the field, "),
        G("ate-2", "and ate the second pig also", [
          T("and ate the second pig also, with much smacking of lips"),
        ]),
      ]),
    ]),
    T(". But at the brick house "),
    G("brick-resists", "his huffing did nothing", [
      T("he huffed and puffed, and huffed and puffed, "),
      G("no-budge", "and the bricks did not budge", [
        T("and the bricks did not budge so much as a finger's breadth"),
      ]),
    ]),
    T(", so he climbed onto the roof and "),
    G("chimney", "tried the chimney", [
      T("tried to come down the chimney — but the third pig "),
      G("pot", "had set a great pot upon the fire", [
        T("had set a great cauldron of boiling water upon the hearth, "),
        G("wolf-fell", "and the wolf dropped straight in", [
          T("and the wolf dropped straight in with a tremendous splash, and was never heard from again"),
        ]),
      ]),
    ]),
    T("."),
  ]),
];
