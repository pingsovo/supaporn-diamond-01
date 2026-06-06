import { NextResponse } from "next/server";
import { getInstagramFeed } from "@/lib/instagram";

export const revalidate = 90;

export async function GET() {
  const feed = await getInstagramFeed();
  return NextResponse.json(feed, {
    headers: {
      "Cache-Control": "public, s-maxage=90, stale-while-revalidate=300",
    },
  });
}
