import Script from "next/script";
import Reveal from "@/components/ui/Reveal";

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-bg2 py-14 sm:py-18 lg:py-20">
      <div className="section-pad relative mx-auto max-w-6xl">
        <Reveal>
          <div
            className="elfsight-app-53e9f9ca-37e6-444d-9cfe-e06200ddaffb"
            data-elfsight-app-lazy
          />
        </Reveal>
      </div>

      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </section>
  );
}
