"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const RESIDENTIAL_LINKS = [
  { label: "Smart Home Integration", href: "/residential/smart-home-integration" },
  { label: "Home Theater", href: "/residential#home-theatre" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
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

  const closeMenu = () => {
    setMenuOpen(false);
    setResidentialOpen(false);
  };

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-bg/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--bg4)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad flex h-20 items-center justify-between sm:h-[var(--header-h)]">
        <Link href="/" className="relative block h-12 w-48 shrink-0 sm:h-18 sm:w-68">
          <Image
            src="/images/logo.png"
            alt="Lowell Edwards Home Integration"
            fill
            priority
            sizes="320px"
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1.5 font-body text-md font-bold tracking-[0.12em] uppercase text-cream/80 transition-colors duration-300 hover:text-gold group-focus-within:text-gold"
            >
              Residential
              <ChevronDown
                aria-hidden
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                strokeWidth={2}
              />
            </button>

            <div className="invisible absolute top-full left-0 -translate-y-1 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <ul className="min-w-64 border border-bg4 bg-bg py-2 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                {RESIDENTIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-5 py-3 font-body text-sm text-cream/75 transition-colors duration-300 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-md font-bold tracking-[0.12em] uppercase text-cream/80 transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center text-cream md:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" strokeWidth={1.25} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.25} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="section-pad flex flex-col gap-6 bg-bg py-10 md:hidden"
          >
            <div>
              <button
                type="button"
                onClick={() => setResidentialOpen((v) => !v)}
                aria-expanded={residentialOpen}
                className="flex w-full items-center justify-between font-display text-3xl text-cream transition-colors duration-300 hover:text-gold"
              >
                Residential
                <ChevronDown
                  aria-hidden
                  className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
                    residentialOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              <AnimatePresence>
                {residentialOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    {RESIDENTIAL_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="block py-3 font-body text-lg text-cream/70 transition-colors duration-300 hover:text-gold"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-display text-3xl text-cream transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
