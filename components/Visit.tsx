import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone } from "lucide-react";

export function Visit() {
  return (
    <section id="visit" className="bg-cream-deep py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Visit the House</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso sm:text-5xl lg:text-6xl">
              Come and see the
              <span className="italic text-gold"> fire in person.</span>
            </h2>
            <p className="mt-5 max-w-[48ch] font-body text-base leading-relaxed text-espresso-soft">
              ทางร้านขอเชิญท่านมาเลือกชมสินค้าใหม่ ๆ ของเราได้ที่ห้างเพชรทองสุภาพร — a private
              viewing, with a loupe, and time to decide.
            </p>
            <div className="mt-9">
              <Button href="tel:022234185" variant="gold">
                Reserve a Private Viewing
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-7">
              <div className="flex gap-4 border-t border-champagne/50 pt-5">
                <MapPin className="mt-0.5 shrink-0 text-gold" size={20} />
                <div>
                  <p className="font-display text-xl text-espresso">Yaowarat Road, Bangkok</p>
                  <p className="mt-1 font-body text-sm text-espresso-soft">
                    Two boutiques in the heart of Bangkok&rsquo;s gold district.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-champagne/50 pt-5">
                <Clock className="mt-0.5 shrink-0 text-gold" size={20} />
                <div>
                  <p className="font-display text-xl text-espresso">Mon – Sat · 10:30 – 15:30</p>
                  <p className="mt-1 font-body text-sm text-espresso-soft">Closed Sundays</p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-champagne/50 pt-5">
                <Phone className="mt-0.5 shrink-0 text-gold" size={20} />
                <div>
                  <p className="font-display text-xl tabular-nums text-espresso">
                    02-223-4185 · 06-3134-4263
                  </p>
                  <p className="mt-1 font-body text-sm text-espresso-soft">
                    info@supaporndiamond.com
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
