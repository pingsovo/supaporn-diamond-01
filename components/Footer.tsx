import Link from "next/link";

const cols = [
  {
    title: "Collection",
    links: ["Diamond Rings", "Earrings", "Bracelets", "Loose Diamonds", "Italian Gold"],
  },
  {
    title: "The House",
    links: ["Certification", "Bespoke", "Brides", "Journal"],
  },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="gold-rule" />
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-2xl font-semibold tracking-[0.18em]">SUPAPORN</p>
            <p className="text-[0.6rem] tracking-[0.4em] text-gold">DIAMOND</p>
            <p className="mt-4 max-w-[34ch] font-body text-sm leading-relaxed text-cream/70">
              ห้างเพชรทองสุภาพร — GIA &amp; HRD certified Triple-Excellent diamonds, Yaowarat,
              Bangkok.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#collection"
                      className="font-body text-sm text-cream/75 transition-colors hover:text-lightgold"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-cream/75">
              <li>Yaowarat Rd, Bangkok</li>
              <li className="tabular-nums">02-223-4185</li>
              <li className="tabular-nums">06-3134-4263</li>
              <li>info@supaporndiamond.com</li>
              <li>
                <a
                  href="https://instagram.com/supaporndiamond"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightgold hover:underline"
                >
                  @supaporndiamond
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/15 pt-6 font-body text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Supaporn Diamond · ห้างเพชรทองสุภาพร</span>
          <span className="tracking-[0.18em]">GIA · HRD · TRIPLE EXCELLENT · HEARTS &amp; ARROWS</span>
        </div>
      </div>
    </footer>
  );
}
