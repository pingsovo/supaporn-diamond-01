"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#collection", label: "Collection" },
  { href: "#about", label: "The House" },
  { href: "#certification", label: "Certification" },
  { href: "#brides", label: "Brides" },
  { href: "#feed", label: "Journal" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-champagne/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="group leading-none">
          <span className="block font-display text-2xl font-semibold tracking-[0.18em] text-espresso">
            SUPAPORN
          </span>
          <span className="mt-0.5 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
          <span className="text-[0.6rem] tracking-[0.4em] text-gold">DIAMOND</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-body text-[0.78rem] uppercase tracking-[0.16em] text-espresso/80 transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#visit"
            className="rounded-[3px] border border-gold px-5 py-2.5 font-body text-[0.74rem] uppercase tracking-[0.18em] text-gold transition-all hover:bg-gold hover:text-cream active:translate-y-[1px]"
          >
            Book a Viewing
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-espresso md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-champagne/30 bg-cream/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-body text-sm uppercase tracking-[0.16em] text-espresso/85"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#visit"
                  onClick={() => setOpen(false)}
                  className="block rounded-[3px] bg-gold px-5 py-3 text-center font-body text-[0.78rem] uppercase tracking-[0.18em] text-cream"
                >
                  Book a Viewing
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
