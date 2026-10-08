"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Photo from "@/components/ui/Photo";
import { smartHomeImages, homeTheatreImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const RESIDENTIAL_CATEGORIES = [
  {
    label: "Smart Home",
    description: "Lighting, audio, video and more.",
    href: "/residential/smart-home-integration",
    image: smartHomeImages.hero,
  },
  {
    label: "Home Theater",
    description: "Cinematic experiences.",
    href: "/residential/home-theatre",
    image: homeTheatreImages.hero,
  },
  {
    label: "Lighting & Shades",
    description: "Beautifully designed control.",
    href: "/residential/lighting-shades",
    image: smartHomeImages.systems.lighting,
  },
  {
    label: "Networking",
    description: "Reliable performance.",
    href: "/residential/smart-home-integration#systems",
    image: smartHomeImages.systems.networking,
  },
  {
    label: "Security",
    description: "Advanced protection.",
    href: "/residential/smart-home-integration#systems",
    image: smartHomeImages.systems.security,
  },
  {
    label: "Audio & Video",
    description: "Multi-room sound and picture.",
    href: "/residential/smart-home-integration#systems",
    image: smartHomeImages.systems.audioVideo,
  },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileResidentialOpen, setMobileResidentialOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const residentialRef = useRef<HTMLDivElement>(null);

  // The navbar reads as transparent only at the very top of the hero; any
  // scroll — and the opened mobile drawer, so the hamburger/X stays legible
  // against it — flips it to the solid cream state.
  const solid = scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!megaOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!residentialRef.current?.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [megaOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileResidentialOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
        solid
          ? "border-bg4 bg-ivory shadow-[0_8px_30px_-12px_rgba(26,26,46,0.14)]"
          : "border-white/35 bg-transparent shadow-none"
      }`}
    >
      <div
        className={`h-[3px] w-full bg-gradient-to-r from-gold3 via-gold to-gold-light transition-opacity duration-500 ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="section-pad grid h-20 grid-cols-[auto_1fr_auto] items-center gap-2 sm:h-(--header-h) xl:gap-4">
        <Link href="/" className="relative block h-12 w-44 shrink-0 sm:h-14 sm:w-48 xl:h-18 xl:w-68">
          <Image
            src="/images/logo.png"
            alt="Lowell Edwards Home Integration"
            fill
            priority
            sizes="320px"
            className={`object-contain object-left transition-[filter] duration-500 ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden items-center justify-self-center lg:flex">
          <div
            ref={residentialRef}
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen((v) => !v)}
              className={`relative flex items-center gap-2 px-3 py-2 font-body text-[13px] font-medium tracking-[0.16em] whitespace-nowrap uppercase transition-colors duration-500 xl:px-6 xl:text-sm xl:tracking-[0.2em] ${
                solid
                  ? `text-cream/65 hover:text-gold ${megaOpen ? "text-gold" : ""}`
                  : `text-white/90 hover:text-white ${megaOpen ? "text-white" : ""}`
              }`}
            >
              Residential
              <ChevronDown
                aria-hidden
                className={`h-3 w-3 transition-transform duration-300 ${
                  megaOpen ? "rotate-180" : ""
                } ${solid ? "text-gold/70" : "text-white/70"}`}
                strokeWidth={1.5}
              />
              <span
                className={`absolute bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-current transition-all duration-300 ease-out ${
                  megaOpen ? "w-6" : "w-0"
                }`}
              />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="fixed inset-x-0 top-[calc(3px+var(--header-h))]"
                >
                  <div className="section-pad flex flex-col gap-6 border-t border-bg4 bg-ivory py-7 shadow-[0_32px_64px_-20px_rgba(26,26,46,0.22)] lg:flex-row lg:items-start lg:gap-8">
                    <div className="shrink-0 lg:w-48">
                      <p className="eyebrow text-gold">Residential</p>
                      <h3 className="mt-2 font-display text-xl leading-[1.1] text-cream">
                        Smarter Living
                        <br />
                        Starts Here.
                      </h3>
                      <p className="mt-2 max-w-48 font-body text-xs leading-relaxed text-cream/55">
                        Integrated technology for modern homes.
                      </p>
                    </div>

                    <ul className="grid flex-1 grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-6">
                      {RESIDENTIAL_CATEGORIES.map((category) => (
                        <li key={category.label}>
                          <Link
                            href={category.href}
                            onClick={() => setMegaOpen(false)}
                            className="group/card block"
                          >
                            <div className="relative aspect-square overflow-hidden">
                              <div className="h-full w-full transition-transform duration-500 ease-out group-hover/card:scale-105">
                                <Photo
                                  src={category.image.src}
                                  alt={category.image.alt}
                                  sizes="120px"
                                />
                              </div>
                            </div>
                            <div className="mt-2 flex items-start justify-between gap-1">
                              <div>
                                <p className="font-display text-[13px] leading-tight text-cream transition-colors duration-300 group-hover/card:text-gold">
                                  {category.label}
                                </p>
                                <p className="mt-0.5 font-body text-[10px] leading-snug text-cream/50">
                                  {category.description}
                                </p>
                              </div>
                              <ArrowRight
                                aria-hidden
                                className="mt-0.5 h-3 w-3 shrink-0 text-cream/30 transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:text-gold"
                                strokeWidth={1.5}
                              />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative px-3 py-2 font-body text-[13px] font-medium tracking-[0.16em] whitespace-nowrap uppercase transition-colors duration-500 xl:px-6 xl:text-sm xl:tracking-[0.2em] ${
                solid ? "text-cream/65 hover:text-gold" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-current transition-all duration-500 ease-out group-hover:w-6" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <Link
            href="/contact"
            className={`hidden items-center gap-1.5 border px-3 py-2 font-body text-[10px] font-medium tracking-[0.16em] whitespace-nowrap uppercase transition-[background-color,border-color,color] duration-500 lg:inline-flex xl:gap-2 xl:px-6 xl:py-2.5 xl:text-[11px] xl:tracking-[0.2em] ${
              solid
                ? "border-gold bg-gold text-white hover:bg-gold2 hover:border-gold2"
                : "border-white bg-transparent text-white hover:border-gold2 hover:bg-gold/15"
            }`}
          >
            Request Consultation
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
          </Link>

          <button
            type="button"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`flex h-10 w-10 items-center justify-center transition-colors duration-500 lg:hidden ${
              solid ? "text-cream" : "text-white"
            }`}
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.25} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="section-pad flex max-h-[calc(100svh-5rem)] flex-col overflow-y-auto border-t border-bg4 bg-ivory py-6 lg:hidden"
          >
            <div className="border-b border-bg4">
              <button
                type="button"
                onClick={() => setMobileResidentialOpen((v) => !v)}
                aria-expanded={mobileResidentialOpen}
                className="group flex w-full items-center justify-between py-5 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-body text-xs tracking-[0.2em] text-gold">01</span>
                  <span className="font-display text-2xl text-cream transition-colors duration-300 group-hover:text-gold">
                    Residential
                  </span>
                </span>
                <ChevronDown
                  aria-hidden
                  className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                    mobileResidentialOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              <AnimatePresence>
                {mobileResidentialOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden"
                  >
                    {RESIDENTIAL_CATEGORIES.map((category) => (
                      <li key={category.label}>
                        <Link
                          href={category.href}
                          onClick={closeMenu}
                          className="block border-t border-bg4 py-4 pl-11 first:border-t-0"
                        >
                          <span className="block font-body text-base text-cream transition-colors duration-300 hover:text-gold">
                            {category.label}
                          </span>
                          <span className="mt-0.5 block font-body text-xs text-cream/50">
                            {category.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-baseline gap-4 border-b border-bg4 py-5"
              >
                <span className="font-body text-xs tracking-[0.2em] text-gold">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl text-cream transition-colors duration-300 group-hover:text-gold">
                  {link.label}
                </span>
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-6 flex items-center justify-center gap-2 bg-gold px-6 py-4 font-body text-[12px] font-medium tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-gold2"
            >
              Request Consultation
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
