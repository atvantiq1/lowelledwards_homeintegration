import Image from "next/image";
import Link from "next/link";

const SITE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Residential", href: "/residential" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  "Audio & Video",
  "Lighting & Shades",
  "Home Automation",
  "Networking & Security",
  "Home Theater",
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M14 21v-7h2.4l.4-3H14V9.2c0-.87.24-1.46 1.5-1.46H17V5.14C16.73 5.1 15.8 5 14.72 5 12.46 5 10.9 6.4 10.9 8.94V11H8.5v3h2.4v7Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="7.5" y1="10" x2="7.5" y2="17" />
        <circle cx="7.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        <path d="M11 17v-4.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V17" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-bg4 bg-bg">
      <div className="section-pad grid grid-cols-2 gap-x-8 gap-y-12 py-14 sm:py-16 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="relative h-16 w-60">
            <Image
              src="/images/logo.png"
              alt="Lowell Edwards Home Integration"
              fill
              sizes="192px"
              className="object-contain object-left"
            />
          </div>
          <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-cream/60">
            Luxury living powered by technology — without the technology
            taking over the design.
          </p>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream/60">
            For more than 40 years, we&rsquo;ve designed and installed
            technology around the way our clients live, entertain, and
            relax — backed by a team that stays with the relationship long
            after installation.
          </p>
        </div>

        <div>
          <p className="eyebrow text-cream/40">Navigate</p>
          <ul className="mt-6 space-y-3">
            {SITE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-cream/70 transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cream/40">Services</p>
          <ul className="mt-6 space-y-3">
            {SERVICES.map((service, i) => (
              <li
                key={i}
                className="font-body text-sm text-cream/70"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cream/40">Contact</p>
          <ul className="mt-6 space-y-3">
            <li className="font-body text-sm leading-relaxed text-cream/70">
            Lowell/Edwards Home Integration, Inc.<br />
              15 Warren St. Suite 25
              <br />
              Hackensack, NJ 07601
            </li>
            <li className="font-body text-sm text-cream/70">
              <a
                href="tel:+15550102030"
                className="transition-colors duration-300 hover:text-gold"
              >
                201-525-3300
              </a>
            </li>
            <li className="font-body text-sm text-cream/70">
              <a
                href="mailto:hello@lowelledwards.com"
                className="transition-colors duration-300 hover:text-gold"
              >
                info@lowelledwards.com
              </a>
            </li>
            <li className="flex gap-4 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-cream/50 transition-colors duration-300 hover:text-gold"
                >
                  <span className="block h-5 w-5">{social.icon}</span>
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="section-pad flex flex-col gap-4 border-t border-bg4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-xs text-cream/40">
          &copy; {new Date().getFullYear()} Lowell Edwards Home Integration.
          All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="font-body text-xs uppercase tracking-widest text-cream/40 transition-colors duration-300 hover:text-gold"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="font-body text-xs uppercase tracking-widest text-cream/40 transition-colors duration-300 hover:text-gold"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
