import type { Metadata } from "next";
import { Cormorant, Montserrat, Noto_Serif_Thai, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const notoSerifThai = Noto_Serif_Thai({
  variable: "--font-noto-serif-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://supaporndiamond.com"),
  title: "Supaporn Diamond — ห้างเพชรทองสุภาพร | GIA & HRD Certified Diamonds",
  description:
    "ห้างเพชรทองสุภาพร — เพชรร่วงพร้อมใบรับประกัน GIA และ HRD คัดเฉพาะ Triple Excellence และ Heart & Arrow แหวนเพชร ต่างหูเพชร สร้อยข้อมือเพชร เยาวราช กรุงเทพฯ",
  keywords: ["Supaporn Diamond", "เพชรสุภาพร", "GIA", "HRD", "Heart and Arrow", "แหวนเพชร", "Yaowarat"],
  openGraph: {
    title: "Supaporn Diamond — ห้างเพชรทองสุภาพร",
    description: "GIA & HRD certified Triple-Excellent diamonds. Yaowarat, Bangkok.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${cormorant.variable} ${montserrat.variable} ${notoSerifThai.variable} ${notoSansThai.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso">{children}</body>
    </html>
  );
}
