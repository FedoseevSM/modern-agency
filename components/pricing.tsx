"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { ExamplesDialog } from "./examples-dialog"

type Feature = { text: string; muted?: boolean }

const ACCENT = "#C6FF3A"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-300" : "text-neutral-100"}`}>{text}</span>
    </li>
  )
}

type Currency = "INR" | "USD"

const PRICES: Record<Currency, { startup: string; pro: string; premium: string; save: string }> = {
  INR: {
    startup: "₹25,000/-",
    pro: "₹55,000/-",
    premium: "₹1,70,500/-",
    save: "Save Flat ₹1,500/-",
  },
  USD: {
    startup: "200.000 Р",
    pro: "от 400.000 Р",
    premium: "от 1.000.000 Р",
    save: "Кэшбек 100.000 Р",
  },
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  return "USD"
}

const startupVideos = [
  "H1h5dHpp1Nw",
  "HXARcSSdfMU",
  "fd8zraQ1JdE",
  "ARQyF2FA3Ec",
  "dEZfHADlFtw",
  "wuyfdfKO6Rc",
  "VakkmhtrUA0",
  "o8DoIg9yNGk",
  "rtReBkFt-To",
]
const proVideos = [
  "ASV2myPRfKA",
  "eTfS2lqwf6A",
  "KALbYHmGV4I",
  "Go0AA9hZ4as",
  "sB7RZ9QCOAg",
  "TK2WboJOJaw",
  "5Xq7UdXXOxI",
  "kMjWCidQSK0",
  "RKKdQvwKOhQ",
]
const premiumVideos = [
  "v2AC41dglnM",
  "pRpeEdMmmQ0",
  "3AtDnEC4zak",
  "JRfuAukYTKg",
  "LsoLEjrDogU",
  "RB-RcX5DS5A",
  "hTWKbfoikeg",
  "YQHsXMglC9A",
  "09R8_2nJtjg",
]

export function Pricing() {
  const [openPlan, setOpenPlan] = useState<null | "Startup" | "Pro" | "Premium">(null)
  const [currency, setCurrency] = useState<Currency>("USD")

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" })
        if (!res.ok) throw new Error("geo failed")
        const data = await res.json()
        if (!cancelled) setCurrency(data?.currency === "INR" ? "INR" : "USD")
      } catch {
        if (!cancelled) setCurrency(guessLocalCurrency())
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="pricing" className="text-white" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid ${ACCENT}` }}
          >
            Пакеты для бизнеса
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" itemProp="name">
            Стоимость.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-300" itemProp="description">
            Без скрытых платежей. Только опыт мирового класса, строго в рамках бюджета.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-5 text-neutral-900 hover:brightness-95"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <Link href="https://forms.yandex.ru/u/6911cf886d2d73018fdd5638" target="_blank">
                Предложить тендер
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Startup */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                Стартовый
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].startup}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-300">(1 месяц)</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <Button
                type="button"
                onClick={() => setOpenPlan("Startup")}
                onTouchStart={() => setOpenPlan("Startup")}
                className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333", cursor: "pointer" }}
              >
                Проекты клиентов
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Аудит и анализ требований",
                  "Проектирование архитектуры",
                  "Frontend разработка",
                  "Адаптивный дизайн",
                  "Базовое тестирование",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <div className="tariff-insert-info" style={{
              maxWidth: '500px',
              padding: '10px',
              margin: '0 20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontFamily: 'Arial, sans-serif',
              // background: '#f9f9f9'
            }}>
              <div style={{ fontSize: '16px', lineHeight: '1.5', color: '#fff' }}>
                Рекламные кампании
                  <CardContent className="pt-0">
                  <ul className="grid gap-2 pt-2" itemProp="description">
                    {[
                      "Подбор воронки продаж",
                      "Запуск тестовых кампаний",
                      "Консультирование"
                    ].map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
              </CardContent>
              </div>
            </div>
            <CardFooter />
          </Card>

          {/* Pro */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
          <div
            className="absolute right-4 top-11 rounded-full px-2 py-0.5 text-[10px]"
            style={{ backgroundColor: "#1f1f1f", color: "#d4d4d4" }}
          >
            {PRICES[currency].save}
          </div>
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                Расширенный
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].pro}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-300">(3 месяца)</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <Button
                type="button"
                onClick={() => setOpenPlan("Pro")}
                onTouchStart={() => setOpenPlan("Pro")}
                className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333", cursor: "pointer" }}
              >
                Проекты клиентов
              </Button>
            </CardHeader>
            
            <CardContent className="pt-0">
                  <ul className="grid gap-2 pt-2" itemProp="description">
                    {[
                      "Полный доступ к экосистеме Freechising",
                    ].map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
              </CardContent>
            <div className="tariff-insert-info" style={{
              maxWidth: '500px',
              padding: '10px',
              margin: '0 20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontFamily: 'Arial, sans-serif',
              background: '#f9f9f9'
            }}>
              <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
                То же самое, что в предыдущем тарифе, плюс дополнительно:
              </p>
            </div>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Документация",
                  "Интеграции API",
                  "Расширенное тестирование",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            
            <div className="tariff-insert-info" style={{
              maxWidth: '500px',
              padding: '10px',
              margin: '0 20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontFamily: 'Arial, sans-serif',
              // background: '#f9f9f9'
            }}>
              <div style={{ fontSize: '16px', lineHeight: '1.5', color: '#fff' }}>
                Рекламные кампании
                  <CardContent className="pt-0">
                  <ul className="grid gap-2 pt-2" itemProp="description">
                    {[
                      "Бюджет до 100.000 Р",
                      "Персональный менеджер",
                      "1 площадка для размещения"
                    ].map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
              </CardContent>
              </div>
            </div>
            
            <CardFooter />
          </Card>

          {/* Premium */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="relative space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                Премиум
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].premium}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-300">(5 месяцев)</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <Button
                type="button"
                onClick={() => setOpenPlan("Premium")}
                onTouchStart={() => setOpenPlan("Premium")}
                className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333", cursor: "pointer" }}
              >
                Проекты клиентов
              </Button>
            </CardHeader>
            
            <CardContent className="pt-0">
                  <ul className="grid gap-2 pt-2" itemProp="description">
                    {[
                      "Полный доступ к экосистеме Freechising",
                    ].map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
              </CardContent>
            <div className="tariff-insert-info" style={{
              maxWidth: '500px',
              padding: '10px',
              margin: '0 20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontFamily: 'Arial, sans-serif',
              background: '#f9f9f9'
            }}>
              <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
                То же самое, что в предыдущем тарифе, плюс дополнительно:
              </p>
            </div>


            <CardContent className="relative pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Выделенная группа разработчиков",
                  "Приоритетная техническая поддержка",
                  "Обучение персонала",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className="text-sm text-neutral-100">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <div className="tariff-insert-info" style={{
              maxWidth: '500px',
              padding: '10px',
              margin: '0 20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontFamily: 'Arial, sans-serif',
              // background: '#f9f9f9'
            }}>
              <div style={{ fontSize: '16px', lineHeight: '1.5', color: '#fff' }}>
                Рекламные кампании
                  <CardContent className="pt-0">
                  <ul className="grid gap-2 pt-2" itemProp="description">
                    {[
                      "Бюджет до 500.000 Р",
                      "Автоматизация",
                      "2 площадки для размещения",
                    ].map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
              </CardContent>
              </div>
            </div>
            <CardFooter />
          </Card>
        </div>
      </div>

      {/* Modals */}
      <ExamplesDialog
        open={openPlan === "Startup"}
        onOpenChange={(v) => setOpenPlan(v ? "Startup" : null)}
        planName="Стартовый"
        price={PRICES[currency].startup}
        videoIds={startupVideos}
      />
      <ExamplesDialog
        open={openPlan === "Pro"}
        onOpenChange={(v) => setOpenPlan(v ? "Pro" : null)}
        planName="Расширенный"
        price={PRICES[currency].pro}
        videoIds={proVideos}
      />
      <ExamplesDialog
        open={openPlan === "Premium"}
        onOpenChange={(v) => setOpenPlan(v ? "Premium" : null)}
        planName="Премиум"
        price={PRICES[currency].premium}
        videoIds={premiumVideos}
      />
    </section>
  )
}
