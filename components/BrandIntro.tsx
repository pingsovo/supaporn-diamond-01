import { Reveal } from "@/components/Reveal";

const categories = [
  "เพชรร่วง · Loose Diamonds",
  "แหวนเพชร · Diamond Rings",
  "แหวนแต่งงาน · Wedding Bands",
  "ต่างหูเพชร · Earrings",
  "จี้ & สร้อยคอ · Pendants",
  "สร้อยข้อมือเพชร · Bracelets",
  "กำไลเพชร · Bangles",
  "สร้อยทองเคอิตาลี · Italian Gold",
];

export function BrandIntro() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">The House</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso sm:text-5xl">
            ห้างเพชรทองสุภาพร
          </h2>
          <p className="mt-3 font-body text-sm uppercase tracking-[0.2em] text-gold">
            A Yaowarat house of fine diamonds
          </p>
        </Reveal>

        <Reveal>
          <p className="max-w-[60ch] font-body text-lg leading-relaxed text-espresso-soft">
            From loose certified stones to finished pieces, every diamond is chosen with the
            knowledge and experience of a family house — quality, modern design, and genuine
            variety at a price that respects our clients. This is jewellery meant to be worn
            for a lifetime, and passed on.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-2">
            {categories.map((c) => (
              <div
                key={c}
                className="border-b border-champagne/40 pb-3 font-body text-sm text-espresso/85"
              >
                {c}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
