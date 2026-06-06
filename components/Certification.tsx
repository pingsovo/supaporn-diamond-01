import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const pillars = [
  {
    k: "Cut Grade",
    th: "การเจียระไน",
    d: "The most precise cut — the single grade that releases a diamond's fire.",
  },
  {
    k: "Symmetry",
    th: "สัดส่วน",
    d: "Flawless proportion, so light returns evenly to the eye.",
  },
  {
    k: "Polish",
    th: "การขัดเงา",
    d: "A mirror finish across every facet, with no drag on the light.",
  },
];

export function Certification() {
  return (
    <section id="certification" className="bg-cream-deep py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Triple Excellence */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-white">
              <Image
                src="/site/anatomy.webp"
                alt="Anatomy of a Triple-Excellent diamond"
                fill
                sizes="(max-width:1024px) 90vw, 600px"
                className="object-contain p-6"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">GIA &amp; HRD · Triple Excellence</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso sm:text-5xl">
                Three perfect grades,
                <span className="italic text-gold"> or none at all.</span>
              </h2>
              <p className="mt-5 max-w-[52ch] font-body text-base leading-relaxed text-espresso-soft">
                Unlike most houses, we keep only diamonds rated Excellent in all three
                disciplines — Triple Excellence. It is the difference you see the moment the
                stone meets the light.
              </p>
            </Reveal>

            <RevealGroup className="mt-10 space-y-5">
              {pillars.map((p) => (
                <RevealItem key={p.k}>
                  <div className="flex items-baseline justify-between gap-6 border-t border-champagne/50 pt-4">
                    <div>
                      <span className="font-display text-2xl font-medium text-espresso">
                        {p.k}
                      </span>
                      <span className="ml-3 font-body text-sm text-gold">{p.th}</span>
                    </div>
                    <p className="max-w-[34ch] text-right font-body text-sm leading-relaxed text-espresso-soft">
                      {p.d}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>

        <div className="gold-rule my-20" />

        {/* Heart & Arrow */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">Ideal Scope</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso sm:text-5xl">
              Eight arrows above.
              <span className="block italic text-gold">Eight hearts below.</span>
            </h2>
            <p className="mt-5 max-w-[52ch] font-body text-base leading-relaxed text-espresso-soft">
              Triple-Excellent perfection reveals itself through a special loupe: arrows
              radiating from the crown, hearts blooming from the pavilion. A signature of
              cutting precision that the eye reads as pure brilliance — เพชร Heart &amp;
              Arrow.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Image
                src="/site/gia.webp"
                alt="GIA certification"
                width={140}
                height={64}
                className="h-auto w-[140px] object-contain"
              />
              <span className="font-body text-xs uppercase tracking-[0.22em] text-espresso-soft">
                Certified by GIA &amp; HRD
              </span>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-[440px] overflow-hidden rounded-[4px]">
              <Image
                src="/products/earrings-studio.webp"
                alt="Hearts and Arrows brilliance in a Supaporn diamond"
                fill
                sizes="(max-width:1024px) 80vw, 440px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
