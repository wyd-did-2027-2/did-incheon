import { MapPin, Phone } from "lucide-react";

import { Section } from "../ui/common-layout";
import { content, type Locale } from "@/lib/content";

interface SponsorSectionProps {
  locale?: Locale;
}

export default function SponsorSection({ locale = "kr" }: SponsorSectionProps) {
  const t = content[locale].sponsor;

  return (
    <Section
      id="sponsor"
      className="min-h-auto overflow-hidden bg-[#FCF2E6] px-0 py-0"
    >
      <div
        className="relative min-h-96 bg-cover bg-center px-16 py-18 max-[1079px]:px-8 max-sm:px-4 max-sm:py-14"
        style={{ backgroundImage: "url('/bg01.png')" }}
      >
        <div className="absolute inset-0 bg-white/48" />
        <div className="relative z-10 flex min-h-60 items-center justify-between gap-12 max-[900px]:flex-col max-[900px]:items-start">
          <div className="max-w-2xl">
            <p className="body01M mb-3 text-gray-700">{t.eyebrow}</p>
            <h2 className="display03B text-gray-950 max-md:heading01B">
              {t.title}
            </h2>
            <p className="heading04M mt-5 max-w-xl text-gray-800 max-md:body01M">
              {t.description}
            </p>
          </div>

          <div className="w-full max-w-xl border-y border-black/20 bg-white/70 backdrop-blur-sm">
            <dl className="divide-y divide-black/10">
              <div className="grid grid-cols-[9rem_1fr] gap-6 px-6 py-6 max-sm:grid-cols-1 max-sm:gap-3 max-sm:px-4">
                <dt className="flex items-center gap-3 heading04B text-gray-950">
                  <MapPin className="size-6 shrink-0" />
                  {t.addressLabel}
                </dt>
                <dd className="body01M leading-8 text-gray-800">
                  {t.address}
                </dd>
              </div>
              <div className="grid grid-cols-[9rem_1fr] gap-6 px-6 py-6 max-sm:grid-cols-1 max-sm:gap-3 max-sm:px-4">
                <dt className="flex items-center gap-3 heading04B text-gray-950">
                  <Phone className="size-6 shrink-0" />
                  {t.phoneLabel}
                </dt>
                <dd className="heading03B text-gray-950">
                  <a href={`tel:${t.phone.replaceAll("-", "")}`}>
                    {t.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
