import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
      <a href="https://t.me/semyonfedoseev" target="_blank" rel="noopener noreferrer">
        Предложить тендер
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/skitbit-white.svg" alt="Skitbit logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">ГОЛЬФУЙ</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">БОМБОВАЯ</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">УПАКОВКА</span>
            <span className="block">БРЕНДА</span>
          </h1>
          <div className="mt-6">{buttonNew}</div>

          {/* Phone grid mimic */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            {/* <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
              {tone === "calm" ? "skitbit app" : tone}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
const phoneData = [
  {
    title: "Конверсии",
    sub: "Превращайте клики в платящих клиентов.",
    tone: "results",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc:
      "https://ru-msk-dl-2.kinescopecdn.net/download/7e1eeb41-ede5-47c4-9091-c793544ff4e3/video/6842c4bc-0374-43e8-a57c-2b5bbfc93734/360p?filename=%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%A1%D1%85%D0%B5%D0%BC%D1%8B_%D0%90%D0%B2%D1%82%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BA%D0%B8_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D1%81%D0%B5%D1%82%D0%B8_%E2%80%93_%D0%92%D0%B0%D1%88%D0%B8_%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%CC%86%D0%BA%D0%B8%2C_%D0%9D%D0%B0%D1%88%D0%B8_%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%8B_%23shorts-360p.mp4&kin_sign=bf0e2c56&kin_ttl=4650544098",
  },
  {
    title: "Скорость",
    sub: "Запускайте за дни, а не недели.",
    tone: "speed",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
    videoSrc: "https://ru-msk-dl-2.kinescopecdn.net/download/7e1eeb41-ede5-47c4-9091-c793544ff4e3/video/4054cc58-db4e-4996-af04-1bbf4b6a6495/1080p?filename=%D0%9D%D0%BE%D0%B2%D1%8B%D0%B8%CC%86_%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81_%D0%90%D0%B2%D1%82%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BA%D0%B8_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D1%81%D0%B5%D1%82%D0%B8_%E2%80%93_Figma%2C_Tilda_%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F%2C_%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D0%BE_%23shorts-1080p.mp4&kin_sign=39fb3d58&kin_ttl=4650542924"
  },
  {
    title: "Для соцсетей",
    sub: "Создано для IG, TikTok и Meta.",
    tone: "social",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc:
      "https://ru-msk-dl-2.kinescopecdn.net/download/7e1eeb41-ede5-47c4-9091-c793544ff4e3/video/f867455e-d621-441d-8407-546cd9e770b1/1080p?filename=3_%D1%81%D0%B5%D0%BA%D1%83%D0%BD%D0%B4%D1%8B_%E2%80%93_%D0%9A%D0%B0%D0%BA_%D0%A3%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D1%8C_%D0%97%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8F_%D0%B8_%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C_%D0%92%D0%B8%D0%B4%D0%B5%D0%BE_%23shorts-1080p.mp4&kin_sign=15596940&kin_ttl=4650543651",
  },
  {
    title: "Выделяйтесь",
    sub: "Будьте тем продуктом, мимо которого не пролистывают.",
    tone: "standout",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
    videoSrc: "https://ru-msk-dl-2.kinescopecdn.net/download/7e1eeb41-ede5-47c4-9091-c793544ff4e3/video/341a9ccf-70a0-417e-8927-913008fa8d81/1080p?filename=%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F_%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BE%D0%B2_%E2%80%93_%D0%9F%D0%B0%D0%B8%CC%86%D0%BF%D0%BB%D0%B0%D0%B8%CC%86%D0%BD%D1%8B%2C_%D0%A7%D0%B5%D0%B8%CC%86%D0%BD%D0%B8%D0%BD%D0%B3_%D0%B8_%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%BA%D0%B8-1080p.mp4&kin_sign=6461f13c&kin_ttl=4650543789"
  },
  {
    title: "Премиум",
    sub: "Выглядите как лидер рынка.",
    tone: "premium",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
    videoSrc: "https://ru-msk-dl-2.kinescopecdn.net/download/7e1eeb41-ede5-47c4-9091-c793544ff4e3/video/5bf86ca0-835e-4ce3-b28e-c15da003cdae/360p?filename=%D0%A4%D1%80%D0%B8%D1%87%D0%B0%D0%B8%CC%86%D0%B7%D0%B8%D0%BD%D0%B3_%E2%80%93_Open_Source_%D0%B4%D0%BB%D1%8F_%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE_%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0_%23shorts-360p.mp4&kin_sign=b698d874&kin_ttl=4650544195"
  },
]
