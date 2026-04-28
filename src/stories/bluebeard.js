import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "bluebeard",
  title: "Bluebeard",
  author: "Charles Perrault",
  year: 1697,
  genre: "Fairy Tale",
  era: "17th Century",
  preview: "A young wife discovers her husband's secret room.",
};

export const tree = [
  G("wife", "A young wife", [
    T("A "),
    G("youngest", "younger of two sisters", [
      T("younger of two sisters, "),
      G("married", "newly married against her better judgement", [
        T("newly married against her better judgement, "),
        G("to-rich-man", "to a very rich man with a blue beard", [
          T("to a very rich man with "),
          G("blue-beard", "a frightful blue beard", [
            T("a frightful blue beard, that made him so ugly and terrible to look at that women and children fled at the sight of him"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("given-keys", "is given the keys to every room", [
    T(" is given, soon after the wedding, "),
    G("all-keys", "the keys to every room of his great country house", [
      T("the keys to every room of his great country house, "),
      G("husband-leaves", "while her husband rides away on six weeks' business", [
        T("as her husband, called away on business of the gravest importance, prepares to leave her alone in the house for six full weeks"),
      ]),
    ]),
    T(", and told she may "),
    G("permission", "open every door but one", [
      T("open every door, every cabinet and every chest, "),
      G("little-key", "save only the little closet at the end of the long gallery", [
        T("save only the little closet at the end of the long gallery on the lower floor"),
      ]),
      T(" — "),
      G("warning", "of which she must on no account turn the key", [
        T("of which she must, on no account, turn the small golden key, on pain of his most terrible displeasure"),
      ]),
    ]),
  ]),
  T(" "),
  G("opens", "opens the forbidden door,", [
    T(". The moment the carriage was out of sight, her sister Anne arrived with friends to admire the wealth of the house, and they "),
    G("ran-rooms", "ran from chamber to chamber crying out at the splendours", [
      T("ran from chamber to chamber crying out at the splendours — "),
      G("tapestries", "the gold tapestries, the silver plate, the great mirrors", [
        T("the gold tapestries, the silver plate, the great mirrors taller than a man, the cabinets of jewels and the wardrobes of cloth-of-gold"),
      ]),
    ]),
    T(", but the young wife took no pleasure in any of it, "),
    G("could-not-resist", "for she could think only of the forbidden door", [
      T("for she could think of nothing but the forbidden door at the end of the gallery, "),
      G("trembled", "and trembled with such desire to see what lay within", [
        T("and she trembled with such impatient desire to see what lay within that at last she crept down alone, took the little golden key, and turned it in the lock"),
      ]),
    ]),
  ]),
  T(" "),
  G("finds", "finds his murdered wives,", [
    T(". The door swung open, and at first she could see nothing, for the windows were shuttered; but as her eyes grew used to the dark she saw that "),
    G("floor-clotted", "the floor was clotted with dried blood", [
      T("the floor was clotted with dried blood, "),
      G("on-walls", "and on the walls hung the bodies of women", [
        T("and on the walls hung the bodies of "),
        G("former-wives", "all his former wives, with their throats cut", [
          T("all his former wives, each with her throat cut, the blood reflected over and over in the polished floor"),
        ]),
      ]),
    ]),
    T(". She "),
    G("dropped-key", "dropped the key in her terror", [
      T("dropped the little golden key in her terror, "),
      G("blood-on-key", "and the blood would not wash away", [
        T("and when she snatched it up, the blood upon it would not wash away, no matter how she scrubbed with sand and soap, "),
        G("magic-key", "for the key was enchanted", [
          T("for the key was enchanted, and would betray her crime to her husband the moment he returned"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("rescued", "and is saved at the last moment.", [
    T(". Bluebeard came home that very evening — his journey, he said, having proved needless after all — and "),
    G("demanded-key", "demanded his keys at once", [
      T("demanded his keys at once; and seeing the bloody mark upon the little one, "),
      G("declared", "declared she would die that night", [
        T("roared that she had been where she had been forbidden, and that she should join his other wives upon the wall before the night was out"),
      ]),
    ]),
    T(". She begged for "),
    G("quarter-hour", "a quarter of an hour to say her prayers", [
      T("a quarter of an hour to say her prayers, "),
      G("sister-anne", "and called up to her sister Anne in the high tower", [
        T("and called again and again up to her sister Anne, who watched from the high tower above, "),
        G("anybody-coming", "'Sister Anne, sister Anne, do you see anyone coming?'", [
          T("'Sister Anne, sister Anne, do you see anyone coming?' — but Anne saw only the sun making dust, and the green grass growing"),
        ]),
      ]),
    ]),
    T(". At the very last instant, when Bluebeard had drawn his great sword and seized her by the hair, "),
    G("brothers", "her two brothers galloped through the gate", [
      T("her two brothers, "),
      G("dragoon", "a dragoon and a musketeer", [
        T("a dragoon and a musketeer, came galloping through the gate with their swords drawn, "),
        G("ran-through", "and ran Bluebeard through before he could finish the stroke", [
          T("and ran Bluebeard through the body before he could finish the stroke, leaving the young wife mistress of all his wealth"),
        ]),
      ]),
    ]),
    T("."),
  ]),
];
