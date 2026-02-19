import { residentsData } from "@/lib/residentsData"

export function ResidentsSection() {
  return (
      <section className="w-full bg-white px-4 md:px-[120px] py-12 md:py-[100px]">
        <div className="flex flex-col items-center gap-8 md:gap-16 w-full max-w-[1200px] mx-auto">

          {/* Заголовок */}
          <div className="flex flex-col items-center gap-6 md:gap-10 max-w-[896px]">
            <h2
                className="font-bold text-center tracking-[-0.02em] text-xl md:text-3xl lg:text-[64px]"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#1E3A5F",
                }}
            >
              НАШИ РЕЗИДЕНТЫ
            </h2>

            <p
                className="text-center text-sm md:text-base max-w-[710px]"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#2C3E50",
                }}
            >
              Нам доверяют ведущие компании, создающие инновации, развивающие
              бизнес и формирующие будущее.
            </p>
          </div>

          {/* Сетка логотипов (без карусели) */}
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center w-full">
              {residentsData.map((resident, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition w-full h-24"
                >
                  <img
                    src={resident.logo}
                    alt={resident.name}
                    width={160}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    fetchPriority={index < 6 ? 'high' : 'low'}
                    className="max-h-16 md:max-h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Информация о Workflow App */}
          <div className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 w-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Заголовок + иконка рядом */}
              <div className="flex items-center gap-4 md:gap-5">
                <img
                  src="/app-icon.webp"  // ← твоя текущая иконка
                  // или замени на более подходящую, например:
                  // src="https://thumbs.dreamstime.com/b/project-management-icons-set-collection-project-management-icons-blue-white-representing-various-aspects-such-as-428828481.jpg"
                  alt="Workflow App"
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
                />
                <h3
                    className="font-bold text-2xl md:text-3xl tracking-tight text-gray-900"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Workflow App
                </h3>
              </div>

              {/* Описание и список */}
              <div className="space-y-6">
                <p
                    className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Единая платформа для управления офисной инфраструктурой. Объединяет ключевые сервисы, автоматизирует процессы и обеспечивает полный контроль в реальном времени.
                </p>

                <div className="space-y-4">
                  <p className="font-semibold text-gray-900 text-lg">
                    Основные возможности
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-gray-700 text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl mt-0.5">•</span>
                      Бронирование переговорных комнат и общих зон
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl mt-0.5">•</span>
                      Регистрация и контроль заявок facility management
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl mt-0.5">•</span>
                      Мгновенные push-уведомления о статусе
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl mt-0.5">•</span>
                      Система ролей и разграничение прав доступа
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl mt-0.5">•</span>
                      Аналитические дашборды и отчётность KPI
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl mt-0.5">•</span>
                      Единый интерфейс: Web, iOS, Android
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}