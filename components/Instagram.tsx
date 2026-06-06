import { getInstagramFeed } from "@/lib/instagram";
import { InstagramGrid, FollowPill } from "@/components/InstagramGrid";
import { Reveal } from "@/components/Reveal";

export async function Instagram() {
  const initial = await getInstagramFeed();

  return (
    <section id="feed" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <p className="eyebrow">Live from the Atelier</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-espresso sm:text-5xl">
            @supaporndiamond
          </h2>
          <p className="mt-3 flex items-center gap-2 font-body text-sm text-espresso-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            105K followers · updated live
          </p>
        </Reveal>
        <Reveal>
          <FollowPill />
        </Reveal>
      </div>

      <div className="mt-12">
        <InstagramGrid initial={initial} />
      </div>
    </section>
  );
}
