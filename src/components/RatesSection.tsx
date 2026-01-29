export function RatesSection() {
  return (
    <section className="w-full px-4 md:px-[120px] py-12 md:py-[100px] animate-fade-in-up" style={{ background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)' }}>
      <div className="flex flex-col gap-6 md:gap-7 w-full max-w-[1200px] mx-auto md:px-[80px]">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 w-full md:justify-between animate-slide-in-left">
          <h2 
            className="font-bold text-lg md:text-[24px] text-elegant"
            style={{ 
              lineHeight: '38px',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              margin: 0,
              color: '#1E3A5F'
            }}
          >
            Тарифы аренды
          </h2>
          <div 
            className="text-base md:text-[24px] transition-all duration-300"
            style={{ 
              lineHeight: '38px',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              margin: 0,
              color: '#2C3E50'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#C95A1A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#2C3E50'
            }}
          >
            В текущем состоянии
          </div>
          <div 
            className="font-semibold text-lg md:text-[30px] transition-all duration-300 hover:scale-110"
            style={{ 
              lineHeight: '38px',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              margin: 0,
              color: '#C95A1A'
            }}
          >
            от 15 000 тг/м²
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 w-full md:justify-between animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div 
            className="text-base md:text-[24px] w-full md:w-[312px] transition-all duration-300 hover:translate-x-2"
            style={{ 
              lineHeight: '38px',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              margin: 0,
              color: '#2C3E50'
            }}
          >
            Гибкие условия в зависимости от состояния и уровня оснащения офиса.
          </div>
          <div className="flex flex-col gap-4 md:gap-[54px] w-full md:w-[342px]">
            <div 
              className="text-charcoal text-base md:text-[24px] transition-all duration-300 hover:text-coral hover:translate-x-2"
              style={{ 
                lineHeight: '38px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                margin: 0,
                color: '#2C3E50'
              }}
            >
              С мебелью, ремонтом
            </div>
            <div 
              className="text-charcoal text-base md:text-[24px] transition-all duration-300 hover:text-coral hover:translate-x-2"
              style={{ 
                lineHeight: '38px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                margin: 0,
                color: '#2C3E50'
              }}
            >
              С мебелью, ремонтом и сервисом
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-[54px] w-full md:w-[235px] md:items-end">
            <div 
              className="font-semibold text-lg md:text-[30px] transition-all duration-300 hover:scale-110"
              style={{ 
                lineHeight: '38px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                margin: 0,
                color: '#C95A1A'
              }}
            >
              от 18 000 тг/м²
            </div>
            <div 
              className="font-semibold text-lg md:text-[30px] transition-all duration-300 hover:scale-110"
              style={{ 
                lineHeight: '38px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                margin: 0,
                color: '#C95A1A'
              }}
            >
              от 25 000 тг/м²
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
