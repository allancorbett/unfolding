import { T, G } from "../lib/nodes.js";

export const meta = {
  id: "gift-of-the-magi",
  title: "The Gift of the Magi",
  author: "O. Henry",
  year: 1905,
  genre: "Sentimental",
  era: "20th Century",
  preview: "A poor couple sell their treasures to buy gifts.",
};

export const tree = [
  G("couple", "A poor young couple", [
    T("A "),
    G("young-couple", "young couple in a shabby furnished flat", [
      T("young couple, "),
      G("jim-della", "Jim and Della Young", [
        T("Jim and Della Young, "),
        G("flat", "in a flat at eight dollars a week", [
          T("crowded into a furnished flat at "),
          G("furnished", "eight dollars a week, the cheapest in town", [
            T("eight dollars a week — a flat that did not quite beggar description, though it had a way of inviting the mendicancy squad to call"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("treasures", "owning two prized treasures", [
    T(", possessing between them "),
    G("two-things", "two possessions of which they were mighty proud", [
      T("only two things in which they took a mighty pride: "),
      G("watch", "Jim's gold watch", [
        T("Jim's "),
        G("grandfather", "gold watch from his grandfather", [
          T("gold watch, that had been his father's, and his grandfather's before him"),
        ]),
      ]),
      T(", and "),
      G("hair", "Della's long brown hair", [
        T("Della's "),
        G("brown-hair", "long, rippling brown hair", [
          T("long, rippling brown hair, that fell about her like a brown cascade and reached below her knee"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("sell", "sell each one", [
    T(", on Christmas Eve, "),
    G("dollar-eighty", "with one dollar and eighty-seven cents to her name", [
      T("counting out one dollar and eighty-seven cents — sixty of it in pennies, bullied one and two at a time from the grocer and the butcher, "),
      G("Della-cried", "Della flung herself on the couch and wept", [
        T("Della flung herself face down on the shabby little couch and howled, on the principle that life is made up of sobs, sniffles, and smiles, with sniffles predominating"),
      ]),
    ]),
    T(". Then she dried her cheeks, "),
    G("ran-out", "ran down into the cold street", [
      T("put on her old brown jacket and her old brown hat, and flew down to the street, "),
      G("madame", "to Madame Sofronie's hair-goods shop", [
        T("where the sign read 'Mme. Sofronie. Hair Goods of All Kinds,' "),
        G("twenty-dollars", "and sold her hair for twenty dollars", [
          T("and sold her splendid hair for twenty dollars cash, taken in a single bill"),
        ]),
      ]),
    ]),
    T(". With the money she "),
    G("bought-fob", "bought a platinum chain for the watch", [
      T("ransacked the stores for Jim's present, and at last found "),
      G("platinum-fob", "a simple platinum fob chain", [
        T("a simple, chaste platinum fob chain, declaring its value by substance alone, as all good things should, and worthy of the watch"),
      ]),
    ]),
  ]),
  T(" "),
  G("for-each-other", "for the other.", [
    T(". Meanwhile Jim, "),
    G("Jim-too", "with the same secret in his heart", [
      T("with the same secret in his heart, "),
      G("sold-watch", "had pawned his grandfather's watch", [
        T("had carried his grandfather's gold watch down to the pawn-shop and given it up"),
      ]),
      T(" to "),
      G("combs", "buy the tortoise-shell combs Della had longed for", [
        T("buy the "),
        G("set-of-combs", "tortoise-shell combs from the Broadway window", [
          T("set of pure tortoise-shell combs, with jewelled rims, that Della had worshipped for months in a Broadway window without the smallest hope of ever owning them"),
        ]),
      ]),
    ]),
    T(". When at last they sat down on Christmas night and unwrapped their parcels, "),
    G("realisation", "they sat in silence for a long moment", [
      T("they sat in silence for a long moment, "),
      G("smiled", "and then smiled", [
        T("and then smiled at one another, "),
        G("foolish", "for they had given the most foolish, and the wisest, of gifts", [
          T("for of all who give and receive gifts, such as these two are wisest — they are the magi"),
        ]),
      ]),
    ]),
    T("."),
  ]),
];
