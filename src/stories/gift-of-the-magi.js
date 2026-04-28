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
  G("couple", "A poor couple", [
    T("A "),
    G("young-couple", "young couple in a shabby flat", [
      T("young couple, "),
      G("jim-della", "Jim and Della Young", [
        T("Jim and Della Young, "),
        G("flat", "in an eight-dollar-a-week flat", [
          T("in an "),
          G("furnished", "furnished flat at eight dollars a week", [
            T("eight-dollar-a-week furnished flat that beggared description, though it did not exactly beggar the mendicancy squad"),
          ]),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("treasures", "with two treasures", [
    T(", who possessed between them "),
    G("two-things", "two possessions of which they were mighty proud", [
      T("two possessions in which they both took a mighty pride: "),
      G("watch", "Jim's gold watch", [
        T("Jim's "),
        G("grandfather", "gold watch from his grandfather", [
          T("gold watch that had been his father's and his grandfather's before him"),
        ]),
      ]),
      T(", and "),
      G("hair", "Della's long brown hair", [
        T("Della's "),
        G("brown-hair", "long, rippling brown hair", [
          T("long, rippling brown hair that fell about her like a cascade and reached below her knee"),
        ]),
      ]),
    ]),
  ]),
  T(" "),
  G("sell", "sell each treasure", [
    T(", on Christmas Eve, with "),
    G("dollar-eighty", "only one dollar and eighty-seven cents to her name", [
      T("only one dollar and eighty-seven cents in pennies saved by bulldozing the grocer and the butcher, "),
      G("Della-cried", "Della flung herself on the couch and howled", [
        T("Della flung herself on the shabby little couch and howled, on the principle that life is made up of sobs, sniffles, and smiles, with sniffles predominating"),
      ]),
    ]),
    T(". Then she dried her cheeks, "),
    G("ran-out", "ran out into the cold street", [
      T("put on her old brown jacket and old brown hat, and ran down to the street, "),
      G("madame", "to Madame Sofronie's hair-goods shop", [
        T("where the sign read 'Mme. Sofronie. Hair Goods of All Kinds,' "),
        G("twenty-dollars", "and sold her hair for twenty dollars", [
          T("and sold her splendid hair for twenty dollars cash, taken in a single bill"),
        ]),
      ]),
    ]),
    T(". With the money she "),
    G("bought-fob", "bought a platinum watch chain for Jim", [
      T("ransacked the stores for Jim's present and at last found a "),
      G("platinum-fob", "simple platinum fob chain", [
        T("simple, chaste platinum fob chain, properly proclaiming its value by substance alone, worthy of the watch"),
      ]),
    ]),
  ]),
  T(" "),
  G("for-each-other", "for each other.", [
    T(". Meanwhile Jim, "),
    G("Jim-too", "with the same idea", [
      T("with the same secret idea in his heart, "),
      G("sold-watch", "had sold his grandfather's watch", [
        T("had taken his grandfather's gold watch down to the pawn-shop and sold it"),
      ]),
      T(" to "),
      G("combs", "buy the tortoise-shell combs Della had longed for", [
        T("buy the "),
        G("set-of-combs", "pure tortoise-shell combs Della had worshipped in a Broadway window", [
          T("set of pure tortoise-shell combs, with jewelled rims, that Della had worshipped for months in a Broadway window without the least hope of possessing them"),
        ]),
      ]),
    ]),
    T(". When at last they sat down on Christmas night and exchanged their parcels, "),
    G("realisation", "they sat in silence for a moment", [
      T("they sat in silence for a long moment, "),
      G("smiled", "and then smiled", [
        T("and then smiled at one another, "),
        G("foolish", "for they had each given the most foolish and the most wise of gifts", [
          T("for of all who give and receive gifts, such as they are wisest — they are the magi"),
        ]),
      ]),
    ]),
    T("."),
  ]),
];
