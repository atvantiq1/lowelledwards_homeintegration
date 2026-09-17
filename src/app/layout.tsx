import type { Metadata } from "next";
import { fontDisplay, fontBody } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const SITE_DESCRIPTION =
  "Lowell Edwards designs and installs smart home integration, home theater, audio, video, lighting, automation, networking, and security systems across NYC, Northern New Jersey, Westchester County, and Long Island.";

export const metadata: Metadata = {
  title: {
    default: "Home Integration & Smart Home Automation | Lowell Edwards",
    template: "%s | Lowell Edwards Home Integration",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Home Integration",
    "Smart Home Integration",
    "Smart Home Automation",
    "Home Automation",
    "Home Theater Installation",
    "Home Theater Design",
    "Audio Video Integration",
    "Luxury Home Automation",
    "Smart Home Systems",
    "Home Integration Company",
    "Home Theater Systems",
  ],
  openGraph: {
    title: "Home Integration & Smart Home Automation | Lowell Edwards",
    description: SITE_DESCRIPTION,
    siteName: "Lowell Edwards Home Integration",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
