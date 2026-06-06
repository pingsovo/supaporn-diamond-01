import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const brides = [
  { name: "Bella", img: "/site/bella.webp" },
  { name: "Yaya", img: "/site/yaya.webp" },
  { name: "Paula", img: "/site/paula.webp" },
];

export function Brides() {
  return (
    <section id="brides" className="bg-espresso py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Their Day, Our Diamonds</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              The brides who said
              <span className="block italic text-lightgold">yes in Supaporn.</span>
            </h2>
            <p className="mt-6 max-w-[48ch] font-body text-base leading-relaxed text-cream/75">
              From James Ji &amp; Bella to a generation of Thai celebrities, the most
              photographed engagements have one quiet thing in common — diamonds chosen at
              ห้างเพชรทองสุภาพร.
            </p>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-2xl italic leading-snug text-lightgold">
              “The fire is unmistakable — everyone asks where it&rsquo;s from.”
            </blockquote>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {brides.map((b, i) => (
                <figure
                  key={b.name}
                  className={`relative overflow-hidden rounded-[4px] ${
                    i === 1 ? "mt-8" : ""
                  }`}
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={b.img}
                      alt={`${b.name} wearing Supaporn Diamond`}
                      fill
                      sizes="(max-width:768px) 30vw, 200px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso/80 to-transparent p-3 font-body text-xs uppercase tracking-[0.18em] text-cream">
                    {b.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
