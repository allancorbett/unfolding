import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "tell-tale-heart",
  title: "The Tell-Tale Heart",
  author: "Edgar Allan Poe",
  year: 1843,
  genre: "Gothic Horror",
  era: "19th Century",
  // Used for the index card preview. Keep short.
  preview: "A man kills an old man and confesses.",
};

export const tree = [
  G("man", "A man", [
    T("A "),
    G("man-adj", "nervous man", [
      G("nervous", "nervous", [
        T("dreadfully nervous, though "),
        G("not-mad", "not mad", [
          T("by no means "),
          G("mad-word", "mad", [
            T("mad — for the disease had only sharpened his senses, never destroyed them"),
          ]),
        ]),
      ]),
      T(" man, "),
      G("hearing", "with terrible hearing", [
        T("who heard "),
        G("all-things", "all things", [
          T("all things in the heaven and the earth, and many in hell"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("kills", "kills", [
    G("decides", "resolved to kill", [
      T("resolved, after "),
      G("nights", "seven nights of watching", [
        T("seven long nights of "),
        G("creeping", "creeping into the chamber", [
          T("creeping by midnight into the old man's chamber, "),
          G("lantern", "with a shuttered lantern", [
            T("with a "),
            G("dark-lantern", "dark lantern", [
              T("dark lantern, all closed, closed, so that no light shone out"),
            ]),
            T(", and his head "),
            G("head-in", "thrust slowly in", [
              T("thrust in so slowly it took an hour to pass through the doorway"),
            ]),
          ]),
        ]),
      ]),
      T(", to take the life of "),
    ]),
    G("how", "to murder", [
      T("to "),
      G("smother", "smother him beneath the bed", [
        T("drag him to the floor and pull "),
        G("heavy-bed", "the heavy bed", [T("the heavy wooden bed")]),
        T(" over him, "),
        G("smiling", "smiling at the deed", [
          T("smiling gaily to find "),
          G("deed-done", "the deed so far done", [
            T("the deed so far done, though the heart beat on for many minutes"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("victim", "an old man", [
    T("an "),
    G("old-man", "old man with a vulture eye", [
      T("old man "),
      G("loved", "whom he loved", [
        T("whom he loved — "),
        G("never-wronged", "who had never wronged him", [
          T("who had never wronged him, never given him insult, "),
          G("no-gold", "and whose gold he did not desire", [
            T("and for whose "),
            G("gold", "gold", [T("gold he had no desire")]),
          ]),
        ]),
      ]),
      T(" — but for "),
      G("eye", "his pale blue eye", [
        T("his eye! Yes, it was this. He had "),
        G("vulture-eye", "the eye of a vulture", [
          T("the eye of a vulture — "),
          G("pale-blue", "a pale blue eye with a film", [
            T("a pale blue eye, with a film over it"),
          ]),
        ]),
        T(", and "),
        G("blood-ran-cold", "it made his blood run cold", [
          T("whenever it fell upon him, "),
          G("cold-blood", "his blood ran cold", [
            T("his blood ran cold — and so by degrees, very gradually, he made up his mind to take the life of the old man, and thus rid himself of the eye forever"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("then", "and then", [
    T(" Afterwards, he "),
    G("dismembered", "dismembered the corpse", [
      T("dismembered the corpse with "),
      G("cautious", "cautious silence", [
        T("wise precautions — "),
        G("cut", "he cut off the head and the arms and the legs", [
          T("he cut off the head and the arms and the legs, "),
          G("planks", "took up three planks from the flooring", [
            T("then took up three planks from the flooring of the chamber, "),
            G("hidden", "and deposited all between the scantlings", [
              T("and deposited all between the scantlings, replacing the boards so cleverly that no human eye could detect anything wrong"),
            ]),
          ]),
        ]),
      ]),
    ]),
    T(", and when "),
    G("police", "the police arrived", [
      T("three police officers arrived "),
      G("shriek", "summoned by a neighbour's report of a shriek", [
        T("at four in the morning, "),
        G("neighbour", "a neighbour having heard a shriek in the night", [
          T("a neighbour having heard a shriek in the night and lodged information at the station"),
        ]),
      ]),
      T(", he "),
      G("welcomed", "welcomed them with a smile", [
        T("welcomed them in with a "),
        G("smile-bold", "bold and easy smile", [
          T("bold, easy smile, and bid them search — search well"),
        ]),
      ]),
      T(", "),
      G("seated", "seating them in the very room", [
        T("seating them in the "),
        G("very-spot", "very spot beneath which the body lay", [
          T("very spot beneath which reposed the corpse of the victim"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("confesses", "and confesses.", [
    T(", but soon a "),
    G("ringing", "low ringing began in his ears", [
      T("low, dull, quick sound began in his ears — "),
      G("watch", "such as a watch makes when enveloped in cotton", [
        T("such a sound as a watch makes when enveloped in cotton"),
      ]),
    ]),
    T(", which "),
    G("grew", "grew louder and louder", [
      T("grew "),
      G("louder", "louder, louder, louder!", [
        T("louder — louder — louder! And still the men chatted pleasantly and smiled"),
      ]),
    ]),
    T(" until, "),
    G("certain", "certain it was the dead man's heart", [
      T("certain that it was "),
      G("hideous-heart", "the beating of the hideous heart", [
        T("the beating of the hideous heart of the murdered old man, beneath the floorboards"),
      ]),
    ]),
    T(", he "),
    G("shrieked", "shrieked his confession", [
      T("could bear it no longer and "),
      G("words", "tore up the planks", [
        T("shrieked — "),
        G("villains", "'Villains!' he cried, 'dissemble no more!'", [
          T("'Villains!' he shrieked, 'dissemble no more! I admit the deed! — tear up the planks! — here, here! — it is the beating of his hideous heart!'"),
        ]),
      ]),
    ]),
    T("."),
  ]),
];
