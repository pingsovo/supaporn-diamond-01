"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { Play, ArrowUpRight } from "lucide-react";
import type { IgFeedResponse, IgMediaItem } from "@/lib/instagram";

const fetcher = (u: string) => fetch(u).then((r) => r.json() as Promise<IgFeedResponse>);

function ReelTile({ item }: { item: IgMediaItem }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[4px] bg-espresso/5"
    >
      <video
        ref={ref}
        src={item.url}
        poster={item.thumbnailUrl}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-espresso/70 px-2.5 py-1 font-body text-[0.62rem] uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
        Reel
      </span>
      {!playing && (
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-cream/85 text-espresso shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play size={20} className="ml-0.5 fill-espresso" />
          </span>
        </span>
      )}
      {item.views && (
        <span className="absolute bottom-3 right-3 rounded bg-espresso/70 px-2 py-0.5 font-body text-[0.66rem] tabular-nums text-cream backdrop-blur-sm">
          {item.views} views
        </span>
      )}
    </a>
  );
}

function PhotoTile({ item }: { item: IgMediaItem }) {
  return (
    <a
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[4px]"
    >
      <Image
        src={item.url}
        alt={item.caption ?? "Supaporn Diamond on Instagram"}
        width={600}
        height={600}
        sizes="(max-width:768px) 45vw, 300px"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <span className="absolute inset-0 bg-espresso/0 transition-colors duration-300 group-hover:bg-espresso/10" />
    </a>
  );
}

export function InstagramGrid({ initial }: { initial: IgFeedResponse }) {
  const { data } = useSWR("/api/instagram", fetcher, {
    fallbackData: initial,
    refreshInterval: 60_000,
    revalidateOnFocus: true,
  });
  const items = data?.items ?? [];

  if (!items.length) {
    return (
      <div className="rounded-[4px] border border-champagne/40 py-16 text-center">
        <p className="font-body text-sm text-espresso-soft">
          Latest moments are loading — visit us on Instagram in the meantime.
        </p>
      </div>
    );
  }

  return (
    <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
      {items.map((item, i) => {
        const tall = item.isReel;
        return (
          <div
            key={item.id}
            className={`${tall ? "row-span-2 aspect-[3/4]" : "aspect-square"} ${
              i === 0 ? "col-span-2 md:col-span-2" : ""
            }`}
          >
            {item.isReel ? <ReelTile item={item} /> : <PhotoTile item={item} />}
          </div>
        );
      })}
    </div>
  );
}

export function FollowPill() {
  return (
    <a
      href="https://instagram.com/supaporndiamond"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-espresso"
    >
      Follow @supaporndiamond <ArrowUpRight size={18} />
    </a>
  );
}
