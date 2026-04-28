import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "the-open-window",
  title: "The Open Window",
  author: "Saki",
  year: 1914,
  genre: "Comic",
  era: "20th Century",
  preview: "A girl tells a visitor a frightening tale.",
};

export const tree = [
  G("girl", "A girl", [
    T("A "),
    G("self-possessed", "self-possessed young lady of fifteen", [
      T("self-possessed young lady of fifteen "),
      G("vera", "named Vera", [
        T("named Vera, "),
        G("niece", "niece of Mrs Sappleton of the country house", [
          T("niece of Mrs Sappleton, who kept the rambling country house at which the new arrival had a letter of introduction"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("entertains", "entertains a nervous visitor", [
    T(" entertains a "),
    G("framton", "highly nervous visitor named Framton Nuttel", [
      T("highly nervous visitor named Framton Nuttel, "),
      G("rural-cure", "come to the country for his nerve cure", [
        T("come from town to the country on a "),
        G("doctors", "rest cure prescribed by his doctors", [
          T("strict rest cure prescribed by his doctors for his shattered nerves, with stern injunctions against any mental excitement whatever"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("tells", "with a tragic tale", [
    T(", and while they wait for her aunt to come down she "),
    G("explains", "tells him in a low voice", [
      T("tells him in a low, confidential voice that he must forgive her aunt's keeping the "),
      G("french-window", "great French window standing wide open onto the lawn", [
        T("great French window standing wide open onto the lawn, "),
        G("october", "though it was a chill October afternoon", [
          T("though it was a chill October afternoon and the light was already fading from the garden"),
        ]),
      ]),
    ]),
    T(". 'You see,' Vera went on, 'three years ago to this very day, "),
    G("husband", "her husband and two young brothers", [
      T("her husband and her two young brothers, "),
      G("shooting", "went out shooting on the moor", [
        T("went out through that very window for a day's shooting on the moor, "),
        G("never-returned", "and never came back", [
          T("and never came back — "),
          G("bog", "they were swallowed by a treacherous bog", [
            T("the wet treacherous bog of that summer swallowed them up without leaving a trace, and their bodies were never recovered"),
          ]),
        ]),
      ]),
    ]),
    T(". Poor aunt always thinks they will come back some day, "),
    G("walking", "walking in by that window as they used to", [
      T("walking in by that window as they used to do, "),
      G("with-dog", "with their little brown spaniel running ahead", [
        T("with their little brown spaniel running on ahead and one of them singing 'Bertie, why do you bound?' as he always did"),
      ]),
    ]),
    T(". On still evenings like this I get a creepy feeling that they will all walk in through that window —' "),
    G("breaks-off", "Vera broke off with a little shudder", [
      T("Vera broke off with a little shudder, just as her aunt swept into the room"),
    ]),
  ]),
  T(" "),
  G("flees", "and frightens him away.", [
    T(". Mrs Sappleton, all apologies, chattered cheerfully about the shooting and 'they'll be in directly through the window, splashed up to the eyes!' — and Framton, glancing nervously at the niece for sympathy, saw "),
    G("vera-stares", "Vera staring out into the dusk with dawning horror", [
      T("Vera staring out through the open window with dawning horror in her eyes"),
    ]),
    T(". He turned, and "),
    G("three-figures", "three figures came walking across the lawn", [
      T("there in the deepening twilight three figures were walking across the lawn toward the house, "),
      G("guns", "all carrying guns", [
        T("all of them carrying guns under their arms, "),
        G("dog", "and a tired brown spaniel padding at their heels", [
          T("and a tired brown spaniel padding at their heels, "),
          G("singing", "with one of them singing 'Bertie, why do you bound?'", [
            T("with one of them singing in a hoarse young voice 'Bertie, why do you bound?' through the gathering gloom"),
          ]),
        ]),
      ]),
    ]),
    T(". Framton "),
    G("seized", "seized his hat and stick and bolted", [
      T("seized his hat and his stick and "),
      G("ran", "ran headlong out into the dusk", [
        T("ran headlong out of the door, down the drive, and through the gate, all but knocking down a startled cyclist on the lane"),
      ]),
    ]),
    T(". 'A most extraordinary man,' said Mrs Sappleton; 'one would think he had seen a ghost.' Vera, "),
    G("explains-after", "in her quiet voice, supplied the explanation", [
      T("in her quiet, even voice, "),
      G("hyena", "told a tale of a hyena attack in the Ganges", [
        T("said something about a horror of dogs that he had got from being once hunted into a cemetery by a pack of pariah dogs on the banks of the Ganges, and forced to spend a night in a freshly-dug grave with the creatures snarling above"),
      ]),
    ]),
    T(". "),
    G("habit", "Romance at short notice was her speciality.", [
      T("Romance at short notice was her speciality"),
    ]),
    T("."),
  ]),
];
