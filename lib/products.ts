export type Product = {
  slug: string;
  name: string;
  nameTh: string;
  tagline: string;
  studio: string;
  worn: string;
  specs: { label: string; value: string }[];
  faceLook: string;
  color: string;
  clarity: string;
};

export const products: Product[] = [
  {
    slug: "halo-cluster-ring",
    name: "Composite Cluster Ring",
    nameTh: "แหวนเพชรประกบหน้าใหญ่",
    tagline:
      "Four brilliant diamonds set as one, reading the size of a five-carat solitaire on a whisper-thin band.",
    studio: "/products/ring-studio.webp",
    worn: "/products/ring-hand.webp",
    specs: [
      { label: "Centre", value: "4 round brilliant · 1.25 ct" },
      { label: "Accent", value: "5 round brilliant · 0.23 ct" },
      { label: "Metal", value: "18K white gold · 3.9 g" },
      { label: "Face", value: "11 mm · looks ~5 ct" },
    ],
    faceLook: "~5 ct face",
    color: "F–D",
    clarity: "VS",
  },
  {
    slug: "princess-marquise-studs",
    name: "Princess & Marquise Studs",
    nameTh: "ต่างหูเพชรประกบ",
    tagline:
      "Two princess cuts crowned by eight marquise petals — a full 1.60-carat face that never leaves the everyday.",
    studio: "/products/earrings-studio.webp",
    worn: "/products/earrings-ear.webp",
    specs: [
      { label: "Centre", value: "2 princess cut · 0.54 ct" },
      { label: "Petals", value: "8 marquise · 0.80 ct" },
      { label: "Metal", value: "18K white gold · 2.6 g" },
      { label: "Face", value: "7.5 mm · looks ~1.6 ct" },
    ],
    faceLook: "~1.6 ct face",
    color: "F",
    clarity: "VVS",
  },
  {
    slug: "tennis-bracelet",
    name: "Triple-Excellent Tennis Bracelet",
    nameTh: "สร้อยข้อมือเพชร Tennis",
    tagline:
      "Thirty matched D-colour brilliants, each Triple Excellent with full Hearts & Arrows, in a single river of light.",
    studio: "/products/bracelet-studio.webp",
    worn: "/products/bracelet-wrist.webp",
    specs: [
      { label: "Stones", value: "30 round · ~0.31 ct each" },
      { label: "Total", value: "9.30 ct" },
      { label: "Grading", value: "GIA · Triple Excellent" },
      { label: "Cut", value: "Hearts & Arrows 100%" },
    ],
    faceLook: "9.30 ct total",
    color: "D",
    clarity: "VS1",
  },
];
