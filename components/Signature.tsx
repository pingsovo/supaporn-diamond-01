import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/products";

export function Signature() {
  return (
    <section id="collection" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
      <Reveal className="max-w-[44ch]">
        <p className="eyebrow">Signature Pieces</p>
        <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso sm:text-5xl lg:text-6xl">
          Made larger than life,
          <span className="italic text-gold"> to the carat.</span>
        </h2>
        <p className="mt-5 font-body text-base leading-relaxed text-espresso-soft">
          Each piece below is photographed exactly as it is — every stone, prong and gram of
          gold. Only the light is ours.
        </p>
      </Reveal>

      <div className="mt-16 space-y-24 lg:space-y-32">
        {products.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={p.slug}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              {/* studio image */}
              <Reveal
                className={`lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-white">
                  <Image
                    src={p.studio}
                    alt={`${p.name} — studio`}
                    fill
                    sizes="(max-width:1024px) 92vw, 760px"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              {/* detail */}
              <Reveal className={`lg:col-span-5 ${flip ? "lg:order-1 lg:row-start-1" : ""}`}>
                <div className="flex items-start gap-5">
                  <div className="relative hidden aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-[4px] sm:block">
                    <Image
                      src={p.worn}
                      alt={`${p.name} — worn`}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-body text-sm text-gold">{p.nameTh}</p>
                    <h3 className="mt-1 font-display text-3xl font-medium leading-tight text-espresso sm:text-4xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 max-w-[42ch] font-body text-[0.95rem] leading-relaxed text-espresso-soft">
                      {p.tagline}
                    </p>
                  </div>
                </div>

                <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
                  {p.specs.map((s) => (
                    <div key={s.label} className="border-t border-champagne/50 pt-2.5">
                      <dt className="font-body text-[0.66rem] uppercase tracking-[0.18em] text-espresso/55">
                        {s.label}
                      </dt>
                      <dd className="mt-0.5 font-body text-sm tabular-nums text-espresso">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {[`Colour ${p.color}`, `Clarity ${p.clarity}`, p.faceLook].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gold/40 px-3.5 py-1.5 font-body text-[0.7rem] uppercase tracking-[0.12em] text-gold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
