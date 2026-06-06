import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BrandIntro } from "@/components/BrandIntro";
import { About } from "@/components/About";
import { Certification } from "@/components/Certification";
import { Signature } from "@/components/Signature";
import { Brides } from "@/components/Brides";
import { Instagram } from "@/components/Instagram";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <BrandIntro />
        <About />
        <Certification />
        <Signature />
        <Brides />
        <Instagram />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
