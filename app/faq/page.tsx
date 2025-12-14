import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Часто задаваемые вопросы</h1>
                  <p className="text-neutral-400 text-lg">
                    Ответы на распространенные вопросы от брендов о создании сайтов и рекламных кампаниях.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. Какие типы сайтов вы создаете?
                  </h2>
                  <p className="text-neutral-300">
                    Мы разрабатываем сайты для разных отраслей — от интернет-магазинов и корпоративных порталов до лендингов, портфолио и кастомных веб-приложений. Будь то простой информационный сайт или сложная платформа с интеграциями, мы адаптируем его под нужды вашего бизнеса.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Сколько времени занимает типичный проект сайта?</h2>
                  <p className="text-neutral-300">
                    Сроки зависят от объема, но стандартный сайт на 5–10 страниц обычно занимает 4–8 рабочих недель после утверждения концепции, включая дизайн, разработку и тестирование.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Работаете ли вы с готовыми дизайнами или контентом?
                  </h2>
                  <p className="text-neutral-300">
                    Да, мы можем доработать ваши дизайны, логотипы или контент, либо создать все с нуля на основе брифа и референсов.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Как формируется цена на услуги по сайтам?</h2>
                  <p className="text-neutral-300">
                    Стоимость зависит от количества страниц, функций вроде e-commerce или CMS, кастомной логики и SEO-настройки. Подробности на нашей {" "}
                    <a href="/#pricing" className="text-lime-300 underline">
                      странице цен
                    </a>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Можно ли вносить изменения после запуска?</h2>
                  <p className="text-neutral-300">
                    Да, правки регулируются нашей {" "}
                    <a href="/revisions" className="text-lime-300 underline">
                      политикой ревизий
                    </a>
                    , которая покрывает обновления без расширения объема.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. Сайт будет соответствовать визуальному стилю бренда?
                  </h2>
                  <p className="text-neutral-300">
                    Обязательно. Мы подбираем цвета, типографику,UX и UI в соответствии с вашими бренд-гайдлайнами и предпочтениями аудитории.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. Какие платформы и технологии вы используете?</h2>
                  <p className="text-neutral-300">
                    Разрабатываем на современных стеках вроде WordPress, кастомного HTML/CSS/JS или React с адаптивным дизайном и SEO-оптимизацией. Предлагаем хостинг и поддержку.​
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    8. Можете ли вы работать с крупными проектами или несколькими сайтами?
                  </h2>
                  <p className="text-neutral-300">
                    Да, мы реализуем enterprise-сайты, пакеты лендингов или постоянные кампании с оптимизированными процессами для качества и сроков.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    9. Какие рекламные кампании вы ведете?
                  </h2>
                  <p className="text-neutral-300">
                    Создаем и управляем PPC (Google Ads, Yandex), соцсетями (VK, Instagram, Telegram), рекламой и ретаргетингом под ваши цели.​
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">10. Как вы измеряете успех кампаний?</h2>
                  <p className="text-neutral-300">
                    Отслеживаем KPI вроде CTR, конверсий, ROAS и трафика через аналитику с регулярными отчетами и оптимизацией.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  )
}
