import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const stats = [
  { n: "1979", l: "Family house since" },
  { n: "GIA · HRD", l: "Independently certified" },
  { n: "3×EX", l: "Triple Excellent only" },
  { n: "105K", l: "Community on Instagram" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-espresso text-cream">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 15% 0%, rgba(216,165,42,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our Promise</p>
            <h2 className="mt-4 max-w-[18ch] font-display text-4xl font-medium leading-[1.02] sm:text-5xl lg:text-6xl">
              A diamond is forever — so we treat the
              <span className="italic text-lightgold"> choosing</span> that way.
            </h2>
            <p className="mt-6 max-w-[54ch] font-body text-base leading-relaxed text-cream/75">
              For four decades, ห้างเพชรทองสุภาพร has bought the way a family buys for
              itself: refusing any stone that is not Excellent in cut, symmetry and polish.
              No pressure, no markups dressed as discounts — only diamonds we would set for
              our own. That is why a generation of Thailand&rsquo;s brides keeps coming back.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-10 self-center">
            {stats.map((s) => (
              <RevealItem key={s.l}>
                <p className="font-display text-4xl font-medium tabular-nums text-lightgold sm:text-5xl">
                  {s.n}
                </p>
                <p className="mt-2 font-body text-[0.78rem] uppercase tracking-[0.18em] text-cream/65">
                  {s.l}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
