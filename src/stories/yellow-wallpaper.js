import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "yellow-wallpaper",
  title: "The Yellow Wallpaper",
  author: "Charlotte Perkins Gilman",
  year: 1892,
  genre: "Psychological Horror",
  era: "19th Century",
  preview: "A woman is shut in a room and loses her mind.",
};

export const tree = [
  G("woman", "A young woman", [
    T("A "),
    G("young-wife", "young wife of nervous disposition", [
      T("young wife of "),
      G("nervous", "nervous, imaginative disposition", [
        T("nervous, imaginative disposition, "),
        G("recent-mother", "recently delivered of a child", [
          T("recently delivered of a child she is forbidden to tend"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("shut", "is shut", [
    T(" is "),
    G("by-husband", "shut up by her physician husband", [
      T("shut up by her physician husband John, "),
      G("rest-cure", "for the celebrated rest cure", [
        T("for the celebrated rest cure of perfect quiet, "),
        G("forbidden", "forbidden any work or company", [
          T("forbidden any work, any writing, and almost all company, "),
          G("john-laughs", "while he laughs gently at her fancies", [
            T("while he laughs gently at her fancies and pats her on the head"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("room", "in an upstairs room", [
    T(" in an "),
    G("nursery", "old nursery at the top of a colonial mansion", [
      T("old nursery at the top of a "),
      G("colonial", "colonial mansion taken for the summer", [
        T("colonial mansion the family has taken for the summer, "),
        G("barred", "with barred windows and a nailed-down bedstead", [
          T("with barred windows, and a great bedstead nailed fast to the floor"),
        ]),
      ]),
      T(", whose walls are covered in a "),
      G("paper", "hideous yellow wallpaper", [
        T("hideous yellow wallpaper, "),
        G("smouldering", "of a smouldering, unclean yellow", [
          T("of a smouldering, unclean yellow, faded by sun and stained in spots, "),
          G("pattern", "with a pattern that follows no law", [
            T("its pattern committing every artistic sin known, and following no law of radiation or repetition"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("mad", "and slowly loses her mind.", [
    T(", and there, alone with the paper for company, she "),
    G("watches", "watches the wallpaper for hours", [
      T("watches the wallpaper for hours each day, "),
      G("sees-pattern", "until she sees a pattern within the pattern", [
        T("until she begins to see, behind the front design, "),
        G("woman-behind", "a woman creeping behind the bars", [
          T("a woman, stooped and creeping, shaking the bars of the outer pattern as if she meant to climb through"),
        ]),
      ]),
    ]),
    T(". By moonlight "),
    G("by-moon", "the woman behind grows clearer", [
      T("the woman grows clearer and clearer, "),
      G("creeps", "and at last creeps about the garden by day", [
        T("and at last she sees her creeping about the garden in daylight, fast as a cloud's shadow"),
      ]),
    ]),
    T(". On the final night, "),
    G("strips", "she strips the paper from the walls", [
      T("she locks the door, throws the key out into the lane, "),
      G("tearing", "and spends the night tearing the paper down in long, damp strips", [
        T("and spends the night tearing the paper down in long, damp strips, "),
        G("freed", "to free the woman trapped behind", [
          T("to free the woman she is now sure is trapped behind it"),
        ]),
      ]),
    ]),
    T(". When John breaks in at last, he finds her "),
    G("creeping-too", "creeping along the wall herself", [
      T("creeping along the wall herself, "),
      G("declaration", "declaring she has got out at last", [
        T("declaring 'I've got out at last, in spite of you and Jane! And I've pulled off most of the paper, so you can't put me back!' — at which he faints clean away across her path"),
      ]),
    ]),
    T("."),
  ]),
];
