export function RatesSection() {
  return (
    <section className="w-full px-4 md:px-[120px] py-12 md:py-[100px] animate-fade-in-up" style={{ background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)' }}>
      <div className="flex flex-col gap-6 md:gap-7 w-full max-w-[1200px] mx-auto md:px-[80px]">
        {/* Заголовок и первая строка */}
        <div className="grid grid-cols-3 items-center gap-2 md:gap-5 w-full animate-slide-in-left pb-3 md:pb-4 border-b border-gray-200">
          <h2 
            className="font-bold text-sm md:text-[24px] text-elegant"
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
            className="text-xs md:text-[24px] transition-all duration-300 text-center"
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
            className="font-semibold text-sm md:text-[30px] transition-all duration-300 hover:scale-110 text-right"
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

        {/* Вторая строка - описание */}
        <div className="grid grid-cols-3 items-start gap-2 md:gap-10 w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div 
            className="text-xs md:text-[24px] transition-all duration-300 hover:translate-x-2"
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
          <div className="flex flex-col gap-2 md:gap-[54px]">
            <div 
              className="text-xs md:text-[24px] transition-all duration-300 group rate-row"
              data-row="1"
              style={{ 
                lineHeight: '38px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                margin: 0,
                color: '#2C3E50',
                padding: '8px 12px',
                borderRadius: '8px',
                border: '2px solid transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C95A1A'
                e.currentTarget.style.borderColor = '#C95A1A'
                e.currentTarget.style.backgroundColor = 'rgba(201, 90, 26, 0.08)'
                // Подсвечиваем соответствующую цену
                const priceElement = e.currentTarget.parentElement?.parentElement?.querySelector('.price-row-1') as HTMLElement
                if (priceElement) {
                  priceElement.style.borderColor = '#C95A1A'
                  priceElement.style.backgroundColor = 'rgba(201, 90, 26, 0.08)'
                  priceElement.style.transform = 'scale(1.05)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#2C3E50'
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.backgroundColor = 'transparent'
                const priceElement = e.currentTarget.parentElement?.parentElement?.querySelector('.price-row-1') as HTMLElement
                if (priceElement) {
                  priceElement.style.borderColor = 'transparent'
                  priceElement.style.backgroundColor = 'transparent'
                  priceElement.style.transform = 'scale(1)'
                }
              }}
            >
              С мебелью, ремонтом
            </div>
            <div 
              className="text-xs md:text-[24px] transition-all duration-300 group rate-row"
              data-row="2"
              style={{ 
                lineHeight: '38px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                margin: 0,
                color: '#2C3E50',
                padding: '8px 12px',
                borderRadius: '8px',
                border: '2px solid transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C95A1A'
                e.currentTarget.style.borderColor = '#C95A1A'
                e.currentTarget.style.backgroundColor = 'rgba(201, 90, 26, 0.08)'
                // Подсвечиваем соответствующую цену
                const priceElement = e.currentTarget.parentElement?.parentElement?.querySelector('.price-row-2') as HTMLElement
                if (priceElement) {
                  priceElement.style.borderColor = '#C95A1A'
                  priceElement.style.backgroundColor = 'rgba(201, 90, 26, 0.08)'
                  priceElement.style.transform = 'scale(1.05)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#2C3E50'
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.backgroundColor = 'transparent'
                const priceElement = e.currentTarget.parentElement?.parentElement?.querySelector('.price-row-2') as HTMLElement
                if (priceElement) {
                  priceElement.style.borderColor = 'transparent'
                  priceElement.style.backgroundColor = 'transparent'
                  priceElement.style.transform = 'scale(1)'
                }
              }}
            >
              С мебелью, ремонтом и сервисом
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-[54px] items-end">
            <div 
              className="price-row-1 font-semibold text-sm md:text-[30px] transition-all duration-300 hover:scale-110 text-right"
              style={{ 
                lineHeight: '38px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                margin: 0,
                color: '#C95A1A',
                padding: '8px 12px',
                borderRadius: '8px',
                border: '2px solid transparent',
                minWidth: 'fit-content'
              }}
            >
              от 18 000 тг/м²
            </div>
            <div 
              className="price-row-2 font-semibold text-sm md:text-[30px] transition-all duration-300 hover:scale-110 text-right"
              style={{ 
                lineHeight: '38px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                margin: 0,
                color: '#C95A1A',
                padding: '8px 12px',
                borderRadius: '8px',
                border: '2px solid transparent',
                minWidth: 'fit-content'
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
