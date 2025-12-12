import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Структурированные данные для раздела с ценами
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://theskitbit.com/#pricing",
    name: "Тарифные планы",
    description: "Цены на 3D-анимацию — пакеты Startup, Pro и Premium для любых бизнес-потребностей",
    url: "https://theskitbit.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Услуги 3D-анимации",
      description: "Профессиональные услуги 3D-анимации с тремя тарифными уровнями",
      offers: [
        {
          "@type": "Offer",
          name: "Тариф Startup",
          price: "299",
          priceCurrency: "USD",
          description: "До 15 секунд 3D-анимации с 2 правками",
        },
        {
          "@type": "Offer",
          name: "Тариф Pro",
          price: "699",
          priceCurrency: "USD",
          description: "До 25 секунд 3D-анимации с 4 правками",
        },
        {
          "@type": "Offer",
          name: "Тариф Premium",
          price: "2049",
          priceCurrency: "USD",
          description: "40-60 секунд 3D-анимации с неограниченным числом правок",
        },
      ],
    },
  }

  // Структурированные данные для главной страницы
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://theskitbit.com/",
    name: "Skitbit | 3D-анимация: просто, надежно и масштабируемо",
    description:
      "От запуска продуктов до масштабных кампаний — Skitbit создает 3D-анимацию, которая быстра, стабильна и призвана впечатлить вашу аудиторию.",
    url: "https://theskitbit.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Skitbit",
      url: "https://theskitbit.com",
      sameAs: [
        "https://twitter.com/theskitbit",
        "https://www.youtube.com/@skitbitinternational",
        "https://instagram.com/theskitbit",
        "https://threads.com/theskitbit",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://theskitbit.com/#pricing",
        name: "Раздел с ценами",
        url: "https://theskitbit.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
