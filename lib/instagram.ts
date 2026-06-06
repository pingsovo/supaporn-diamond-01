export type IgMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export interface IgMediaItem {
  id: string;
  type: IgMediaType;
  isReel: boolean;
  url: string; // image src or video src
  thumbnailUrl?: string; // poster for video
  permalink: string;
  caption?: string;
  views?: string;
}

export interface IgFeedResponse {
  items: IgMediaItem[];
  fetchedAt: string;
  stale: boolean;
}

const HANDLE = "supaporndiamond";

// Last-known-good fallback built from real assets (used when the IG token
// is absent or the Graph API errors). Reels point at local product videos.
const FALLBACK: IgMediaItem[] = [
  { id: "f1", type: "VIDEO", isReel: true, url: "/reels/ring.mp4", thumbnailUrl: "/products/ring-hand.webp", permalink: `https://instagram.com/${HANDLE}`, caption: "แหวนเพชรประกบ หน้าเทียบ 5 กะรัต", views: "128K" },
  { id: "f2", type: "IMAGE", isReel: false, url: "/products/ring-studio.webp", permalink: `https://instagram.com/${HANDLE}`, caption: "Composite cluster · ~5 ct face" },
  { id: "f3", type: "VIDEO", isReel: true, url: "/reels/earrings.mp4", thumbnailUrl: "/products/earrings-ear.webp", permalink: `https://instagram.com/${HANDLE}`, caption: "ต่างหูเพชรประกบ Princess + Marquise", views: "94K" },
  { id: "f4", type: "IMAGE", isReel: false, url: "/products/bracelet-studio.webp", permalink: `https://instagram.com/${HANDLE}`, caption: "Tennis bracelet · 9.30 ct · D · VS1" },
  { id: "f5", type: "VIDEO", isReel: true, url: "/reels/bracelet.mp4", thumbnailUrl: "/products/bracelet-wrist.webp", permalink: `https://instagram.com/${HANDLE}`, caption: "สร้อยข้อมือเพชร Triple Excellent", views: "210K" },
  { id: "f6", type: "IMAGE", isReel: false, url: "/products/earrings-studio.webp", permalink: `https://instagram.com/${HANDLE}`, caption: "Hearts & Arrows brilliance" },
];

function mapGraph(node: Record<string, unknown>): IgMediaItem {
  const mediaType = String(node.media_type ?? "IMAGE") as IgMediaType;
  const isReel = mediaType === "VIDEO";
  return {
    id: String(node.id),
    type: mediaType,
    isReel,
    url: String(node.media_url ?? node.thumbnail_url ?? ""),
    thumbnailUrl: node.thumbnail_url ? String(node.thumbnail_url) : undefined,
    permalink: String(node.permalink ?? `https://instagram.com/${HANDLE}`),
    caption: node.caption ? String(node.caption) : undefined,
  };
}

export async function getInstagramFeed(): Promise<IgFeedResponse> {
  const token = process.env.IG_ACCESS_TOKEN;
  const userId = process.env.IG_USER_ID;
  const limit = process.env.IG_FEED_LIMIT ?? "12";

  if (!token || !userId) {
    return { items: FALLBACK, fetchedAt: new Date().toISOString(), stale: true };
  }

  try {
    const fields =
      "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
    const url = `https://graph.facebook.com/v23.0/${userId}/media?fields=${fields}&limit=${limit}&access_token=${token}`;
    const res = await fetch(url, { next: { revalidate: 90 } });
    if (!res.ok) throw new Error(`IG ${res.status}`);
    const json = (await res.json()) as { data?: Record<string, unknown>[] };
    const items = (json.data ?? []).map(mapGraph).filter((i) => i.url);
    if (!items.length) throw new Error("empty");
    return { items, fetchedAt: new Date().toISOString(), stale: false };
  } catch {
    return { items: FALLBACK, fetchedAt: new Date().toISOString(), stale: true };
  }
}
