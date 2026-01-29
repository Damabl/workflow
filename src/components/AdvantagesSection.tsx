import { MapPin, Zap, Clock, Square, CheckSquare, Wifi } from "lucide-react"

const advantages = [
  {
    icon: MapPin,
    text: "ПРЕМИАЛЬНЫЕ ЛОКАЦИИ В ДЕЛОВЫХ ЦЕНТРАХ АЛМАТЫ",
  },
  {
    icon: Zap,
    text: "ALL-INCLUSIVE СЕРВИС",
  },
  {
    icon: Clock,
    text: "БЫСТРЫЙ ЗАЕЗД ОТ 2 НЕДЕЛЬ",
  },
  {
    icon: Square,
    text: "ГИБКОСТЬ ФОРМАТОВ ОТ 20 ДО 10 000 М²",
  },
  {
    icon: CheckSquare,
    text: "СТАНДАРТИЗИРОВАННАЯ ИНФРАСТРУКТУРА",
  },
  {
    icon: Wifi,
    text: "SMART ОФИСЫ",
  },
]

export function AdvantagesSection() {
  return (
    <section className="w-full bg-white px-4 md:px-[120px] py-12 md:py-[100px] animate-fade-in-up">
      <div className="flex flex-col gap-8 md:gap-16 w-full max-w-[1200px] mx-auto">
        <h2 
          className="font-bold text-center tracking-[-2px] text-2xl md:text-4xl lg:text-[64px] animate-scale-in text-elegant"
          style={{ 
            lineHeight: '64px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            color: '#1E3A5F'
          }}
        >
          НАШЕ ПРЕИМУЩЕСТВА
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div 
                key={index} 
                className="flex flex-col items-center gap-4 md:gap-6 stagger-item group cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
                    padding: '12px',
                    border: '1px solid rgba(201, 90, 26, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(201, 90, 26, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)'
                  }}
                >
                  <Icon 
                    className="transition-all duration-300 group-hover:scale-110" 
                    style={{ width: '40px', height: '40px', strokeWidth: 2, color: '#C95A1A' }}
                  />
                </div>
                <h3 
                  className="font-bold text-center uppercase text-sm md:text-lg lg:text-[24px] transition-all duration-300"
                  style={{ 
                    lineHeight: '32px',
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 700,
                    margin: 0,
                    padding: 0,
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1,
                    whiteSpace: 'normal',
                    wordWrap: 'break-word',
                    overflow: 'visible',
                    color: '#2C3E50'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C95A1A'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#2C3E50'
                  }}
                >
                  {advantage.text}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
