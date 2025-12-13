"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)
  const logos = [
    { name: "Сбербанк", image: "https://intelsy.ru/media/brands/%D0%A1%D0%B1%D0%B5%D1%80Color.svg" },
    { name: "Яндекс", image: "https://intelsy.ru/media/brands/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81Color.svg" },
    { name: "VK", image: "https://upload.wikimedia.org/wikipedia/commons/8/82/VK.com-logo.svg" },
    { name: "Тинькофф", image: "https://toplogos.ru/wp-content/uploads/2021/10/tinkoff_bank_logo.png" },
    { name: "Ozon", image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Ozon_logo_2022.svg" },
    { name: "Почта России", image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Pochta_Rossii_logo.svg" },
    { name: "РЖД", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/RZD_logo.svg" },
    { name: "Газпром", image: "https://intelsy.ru/media/brands/colorized_gazprom.svg" },
  ];
  
  const secondRowLogos = [
    { name: "Авито", image: "https://toplogos.ru/wp-content/uploads/2020/12/avito_logo.png" },
    { name: "Роснефть", image: "https://intelsy.ru/media/brands/colorized_rosneft.svg" },
    { name: "Сбербанк", image: "https://intelsy.ru/media/brands/%D0%A1%D0%B1%D0%B5%D1%80Color.svg" },
    { name: "Яндекс", image: "https://intelsy.ru/media/brands/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81Color.svg" },
    { name: "Билайн", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Beeline_logo.svg" },
    { name: "Мегафон", image: "https://intelsy.ru/media/brands/colorized_megafon2.svg" },
    { name: "Лукойл", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Lukoil_logo.svg" },
    { name: "Самокат", image: "https://toplogos.ru/wp-content/uploads/2022/03/samokat_logo.png" },
  ];
  

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={logo.image || "/placeholder.svg"}
            alt={logo.name}
            fill
            className="cover"
            sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
          />
        </div>
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        {/* <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Meet our <span className="text-lime-300">top-tier</span>
            <br />
            customers
          </h2>
          <Button
            variant="outline"
            className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced text-white border-white/20 bg-transparent"
          >
            Learn More
          </Button>
        </div> */}

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
