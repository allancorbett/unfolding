import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "monkeys-paw",
  title: "The Monkey's Paw",
  author: "W. W. Jacobs",
  year: 1902,
  genre: "Horror",
  era: "20th Century",
  preview: "An old man makes three wishes on a cursed paw.",
};

export const tree = [
  G("man", "An old man", [
    T("An "),
    G("old-white", "old Mr White", [
      T("old "),
      G("father", "father in a quiet country parlour", [
        T("father, sitting at chess with his son Herbert in a quiet country parlour, "),
        G("rain", "while the rain beat upon the windows", [
          T("while the rain beat upon the windows and the wind howled in the chimney without"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("receives", "is given a cursed paw", [
    T(", visited that night by his old friend "),
    G("morris", "Sergeant-Major Morris", [
      T("Sergeant-Major Morris, "),
      G("home-from-india", "lately returned from twenty-one years in India", [
        T("lately returned from twenty-one years' service in India, full of strange tales of fakirs and jungle"),
      ]),
    ]),
    T(", who drew from his pocket a "),
    G("paw", "shrivelled little paw", [
      T("shrivelled little paw, "),
      G("mummified", "mummified to the colour of old leather", [
        T("mummified to the colour of old leather, "),
        G("spell", "on which a fakir had set a spell", [
          T("on which a holy fakir had set a spell — "),
          G("three-wishes", "to grant three wishes to three men", [
            T("that three separate men might have three wishes from it, to show that fate ruled people's lives, and that those who interfered with it did so to their sorrow"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("wishes", "and makes three wishes", [
    T(". Morris flung the paw into the fire, but White snatched it out, "),
    G("first-wish", "and wished for two hundred pounds", [
      T("and laughingly wished for "),
      G("pay-mortgage", "two hundred pounds to clear the mortgage", [
        T("two hundred pounds — just enough to clear the mortgage on the house and leave a little besides"),
      ]),
      T(", at which the paw "),
      G("twisted", "twisted in his hand like a snake", [
        T("twisted in his hand like a live snake, and he dropped it with a cry"),
      ]),
    ]),
    T(". The next afternoon a "),
    G("stranger", "grave stranger came to the door", [
      T("grave stranger from "),
      G("maw-meggins", "Maw and Meggins, the works", [
        T("Maw and Meggins, where Herbert had been employed, "),
        G("compensation", "to offer compensation for his death in the machinery", [
          T("to express the firm's deep regret at Herbert's death — caught in the machinery — and to offer, by way of compensation, the sum of two hundred pounds"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("end", "to terrible cost.", [
    T(". They buried him in the great new cemetery two miles distant, and "),
    G("week", "a week of silence followed", [
      T("a week passed in stunned silence, "),
      G("mother-mad", "until the mother, half mad with grief", [
        T("until the mother, half mad with grief, suddenly remembered the paw"),
      ]),
    ]),
    T(", and "),
    G("second-wish", "made the second wish", [
      T("forced her trembling husband to "),
      G("wish-alive", "wish their boy alive again", [
        T("wish their mangled boy alive and home again, though he had lain ten days in the grave"),
      ]),
    ]),
    T(". They waited in the dark, and then there came "),
    G("knocking", "a slow, heavy knocking at the door", [
      T("a slow, heavy knocking at the door — "),
      G("louder", "louder, and louder still", [
        T("first single, then doubling, then a perfect fusillade of blows that echoed through the house"),
      ]),
    ]),
    T(". As his wife flew at the bolt to let in whatever stood without, the old man "),
    G("third-wish", "found the paw and made the third wish", [
      T("groped frantically on the floor for the paw, found it, and "),
      G("breathed", "breathed his last wish", [
        T("breathed his third and last wish quickly, in a hoarse whisper"),
      ]),
    ]),
    T(". The knocking ceased at once. When the door swung open, the "),
    G("empty-road", "street outside lay still and empty", [
      T("street outside lay still and empty under a quiet, deserted moon"),
    ]),
    T("."),
  ]),
];
