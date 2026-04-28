import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "hansel-and-gretel",
  title: "Hansel and Gretel",
  author: "Brothers Grimm",
  year: 1812,
  genre: "Fairy Tale",
  era: "19th Century",
  preview: "Two children are lost in the woods and meet a witch.",
};

export const tree = [
  G("children", "Two children", [
    T("Two "),
    G("hansel-gretel", "children, Hansel and Gretel", [
      T("children, "),
      G("brother-sister", "a brother and sister called Hansel and Gretel", [
        T("a brother and sister called Hansel and Gretel, "),
        G("woodcutter", "the children of a poor woodcutter", [
          T("the children of a poor woodcutter and his cold-hearted second wife, who had not bread enough in the house for four mouths"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("abandoned", "are left in the woods", [
    T("are taken at dawn "),
    G("deep-into", "deep into the great forest", [
      T("deep into the great forest by their parents, "),
      G("on-pretext", "on the pretext of cutting wood", [
        T("on the pretext of cutting wood, "),
        G("really", "and there abandoned to die", [
          T("and there abandoned beside a small fire to die, the stepmother having so insisted to save what little food remained"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("lost", "and lose their way,", [
    T(". Hansel had cleverly "),
    G("dropped-bread", "dropped a trail of breadcrumbs behind him", [
      T("dropped a trail of breadcrumbs behind him as they walked, "),
      G("eaten", "but the birds had eaten every crumb", [
        T("but the birds of the wood had eaten every crumb before moonrise, "),
        G("no-path", "and not a trace of the path remained", [
          T("and not a trace of the path remained beneath the dark trees"),
        ]),
      ]),
    ]),
    T(", so the children wandered "),
    G("three-days", "three days and three nights", [
      T("three days and three nights through the wood, "),
      G("hungry", "starving and weeping by turns", [
        T("growing weak with hunger and weeping by turns, sleeping under hedges and drinking from cold streams"),
      ]),
    ]),
  ]),
  T(" "),
  G("witch-house", "find a house of cake,", [
    T(", until at last they came upon a "),
    G("little-house", "little house in a clearing", [
      T("strange little house standing all alone in a sunlit clearing, "),
      G("made-of", "made of bread and cake", [
        T("the walls "),
        G("walls", "walls of gingerbread and the roof of cake", [
          T("walls of fragrant gingerbread, the roof of sweet cake, "),
          G("windows", "and the windows of clear sugar", [
            T("and the windows panes of clear spun sugar that glittered in the sun"),
          ]),
        ]),
      ]),
    ]),
    T(", from which the famished children "),
    G("ate-roof", "broke off pieces and ate", [
      T("broke off great pieces and ate hungrily, scarcely able to believe their fortune"),
    ]),
  ]),
  T(" "),
  G("meet-witch", "and meet a witch.", [
    T(". But the door creaked open, and out hobbled an "),
    G("old-woman", "old, old woman with red eyes", [
      T("old, old woman leaning on a crutch, "),
      G("red-eyes", "with red eyes and a long nose", [
        T("with red eyes that could not see far but could smell little children a mile off, "),
        G("really-witch", "for she was a wicked witch in disguise", [
          T("for she was in truth a wicked witch who had built her cottage of cakes to lure children to her oven"),
        ]),
      ]),
    ]),
    T(". She "),
    G("locked-hansel", "locked Hansel in a cage to fatten him", [
      T("locked Hansel in an iron cage in the yard "),
      G("fatten", "and fed him sweetmeats to fatten him", [
        T("and fed him sweetmeats every day to fatten him for the pot, "),
        G("gretel-slave", "while Gretel was made to scrub and cook", [
          T("while Gretel was set to scrub the floors and cook the meals from before dawn until long after dark"),
        ]),
      ]),
    ]),
    T(". When at last the witch lit the great oven and bid Gretel "),
    G("test", "look in to see if it was hot", [
      T("creep inside to see if it was hot enough for the baking, "),
      G("pushed-in", "Gretel pretended she could not fit", [
        T("Gretel pretended she could not fit, "),
        G("witch-in", "and when the witch leaned in to show her", [
          T("and when the witch leaned impatiently into the oven to show her how, "),
          G("shoved", "Gretel gave a great shove and slammed the iron door", [
            T("Gretel gave her a great shove from behind and slammed the iron door fast upon her, leaving her to burn to a cinder within"),
          ]),
        ]),
      ]),
    ]),
    T(". The children "),
    G("freed", "freed each other and fled", [
      T("freed each other, "),
      G("filled-pockets", "filled their pockets with the witch's pearls and jewels", [
        T("filled their pockets and aprons with the witch's hoard of pearls and jewels"),
      ]),
      T(", and "),
      G("home", "found their way home to their father", [
        T("found their way home to their father — whose wicked wife had died in their absence — and lived together in plenty thereafter"),
      ]),
    ]),
    T("."),
  ]),
];
