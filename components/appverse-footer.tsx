"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Создаем и запускаем рекламные кампании, ориентируясь на людей, которые уже пользуются услугами вашего бизнеса.",
  copyright: '© 2022 PTY LTD "GOLFUI"',
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      {/* <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
              Contact us
            </a>
          </Button>
        </div>
      </div> */}

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">ОПТИМИЗИРУЙТЕ ВАШИ ЗАПУСКИ</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Используйте модель фричайзинга
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Позволяет сокращать ошибки на старте, уменьшать расходы на тесты и стабильно масштабировать каждый следующий запуск рекламной кампании
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  {/* Lazy-loaded video fills the screen */}
                  <LazyVideo
                    src="https://ru-msk-dl-1.kinescopecdn.net/download/7e1eeb41-ede5-47c4-9091-c793544ff4e3/video/bae7355a-103d-437d-aec7-a9a0825e0bd4/1080p?filename=%D0%9D%D0%BE%D0%B2%D1%8B%D0%B8%CC%86_%D0%BF%D0%BE%D0%B4%D1%85%D0%BE%D0%B4_%D0%BA_%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82%D1%83_%E2%80%93_%D0%A0%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B0_%D0%B8_%D0%BD%D0%B5%D0%B8%CC%86%D1%80%D0%BE%D1%81%D0%B5%D1%82%D1%8C_%D0%B2_%D0%B4%D0%B5%D0%BB%D0%B5_%23shorts-1080p.mp4&kin_sign=b66acf05&kin_ttl=4650544512"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="Skitbit app preview - approvals made easy"
                  />
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-lime-300">Новинка</div>
                      {/* <p className="text-xs text-white/80">From feedback to approval in a single flow</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
                        Zero Hassle
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/icons/skitbit-white.svg" alt="Skitbit logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-semibold text-white">ГОЛЬФУЙ</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              {/* <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navigation</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Home", "Features", "Testimonials", "Pricing", "Blog", "Download"].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="hover:text-lime-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>  */}

              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Соцсети</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {/* <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://twitter.com/theskitbit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Follow skitbit on Twitter"
                    >
                      X/Twitter
                    </a>
                  </li> */}
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://www.youtube.com/@freelancerpotipako"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      // aria-label="Subscribe to skitbit on YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com/hipackme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Follow skitbit on Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  {/* <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://threads.com/theskitbit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Follow skitbit on Threads"
                    >
                      Threads
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/revisions" className="hover:text-lime-300">
                Revision Policy
              </Link>
              <Link href="/t&c" className="hover:text-lime-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
