import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "owl-creek-bridge",
  title: "An Occurrence at Owl Creek Bridge",
  author: "Ambrose Bierce",
  year: 1890,
  genre: "War / Psychological",
  era: "19th Century",
  preview: "A condemned man imagines escape as he is hanged.",
};

export const tree = [
  G("man", "A condemned man", [
    T("A "),
    G("planter", "Southern planter named Peyton Farquhar", [
      T("Southern planter named "),
      G("farquhar", "Peyton Farquhar, slaveholder and secessionist", [
        T("Peyton Farquhar, slaveholder, secessionist, "),
        G("ardent", "ardent for the Confederate cause", [
          T("ardent for the Confederate cause, kept from the army by an imperious circumstance he need not be told"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("stands", "stands on a railroad bridge", [
    T(" stands "),
    G("plank", "upon the loose plank of a railroad bridge", [
      T("upon the loose plank of a railroad bridge "),
      G("creek", "in northern Alabama, looking down into Owl Creek", [
        T("in northern Alabama, looking down twenty feet into the swift water of Owl Creek"),
      ]),
    ]),
    T(", with a "),
    G("rope", "rope close around his neck", [
      T("rope closely encircling his neck, attached to a stout cross-timber above his head, "),
      G("hands-tied", "his wrists bound behind him", [
        T("his wrists bound behind him with cord, his ankles bound likewise"),
      ]),
    ]),
  ]),
  T(" "),
  G("hanged", "to be hanged,", [
    T(", "),
    G("flanked", "flanked by silent Federal infantry", [
      T("flanked by silent ranks of Federal infantry "),
      G("at-attention", "at parade attention along each rail", [
        T("at parade attention along each rail of the bridge, their bayonets fixed and their faces wholly without expression"),
      ]),
    ]),
    T(", "),
    G("captured", "having been caught attempting to burn the bridge", [
      T("having been taken the night before "),
      G("scout", "by a Federal scout disguised as a grey rider", [
        T("by a Federal scout disguised in grey, who had warned him of the death awaiting any civilian found tampering with the railroad"),
      ]),
    ]),
  ]),
  T(" "),
  G("dreams", "imagines a daring escape", [
    T(". As the sergeant stepped aside from the plank, the rope broke, and Farquhar "),
    G("plunged", "plunged into the creek", [
      T("plunged through the deck and down into the creek, "),
      G("freed", "his hands free of the cord by some miracle", [
        T("his hands somehow free of the cord, the noose loose about his neck, the cold water closing over his head"),
      ]),
    ]),
    T(". He "),
    G("swam", "swam beneath the bullets", [
      T("swam strongly beneath the surface as "),
      G("bullets", "bullets whipped the water white about him", [
        T("Minié balls and grapeshot whipped the water white all about him, the gunners on the bridge firing without aim"),
      ]),
    ]),
    T(", and was carried by a great whirl of current "),
    G("downstream", "far downstream into a silent wood", [
      T("a mile downstream and flung up at last on a "),
      G("sand", "bank of golden sand", [
        T("bank of golden sand, where each grain glittered like a jewel, and each leaf above shone with a strange and magical colour"),
      ]),
    ]),
    T(", whence he set out "),
    G("home", "to walk home through the forest", [
      T("walking all night through a wild and untravelled forest "),
      G("toward-home", "toward his plantation and his beautiful wife", [
        T("toward his plantation and his beautiful wife, whom he could already see standing on the veranda waiting"),
      ]),
    ]),
  ]),
  T(" "),
  G("hangs", "as he is hanged.", [
    T(". As he stepped onto the wide white walk and stretched out his arms to embrace her, he felt "),
    G("blow", "a stunning blow upon the back of his neck", [
      T("a stunning blow upon the back of his neck — "),
      G("dazzling", "a blinding white light blazed all about him", [
        T("a blinding white light blazed all about him with a sound like the shock of a cannon — and then all is darkness, and silence"),
      ]),
    ]),
    T(". Peyton Farquhar was "),
    G("dead", "dead, his body swinging beneath the bridge", [
      T("dead; his body, with a broken neck, "),
      G("swinging", "swung gently from side to side beneath the timbers", [
        T("swung gently from side to side beneath the timbers of the Owl Creek bridge"),
      ]),
    ]),
    T("."),
  ]),
];
