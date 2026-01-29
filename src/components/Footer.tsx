export function Footer() {
  return (
    <footer className="w-full bg-white px-4 md:px-[120px] py-8 md:py-12 animate-fade-in-up">
      <div 
        className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20 w-full max-w-[1200px] mx-auto"
      >
        <a
          href="mailto:tobayakov.sh@tmk-limited.com"
          className="hover:opacity-80 transition-all duration-300 text-sm md:text-base"
          style={{ 
            lineHeight: '22px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            color: '#2C3E50'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#C95A1A'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#2C3E50'
          }}
        >
          tobayakov.sh@tmk-limited.com
        </a>
        <a
          href="tel:+77088241384"
          className="hover:opacity-80 transition-all duration-300 text-sm md:text-base"
          style={{ 
            lineHeight: '22px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            color: '#2C3E50'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#C95A1A'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#2C3E50'
          }}
        >
          +7 708 824 13 84
        </a>
        <span 
          className="text-sm md:text-base"
          style={{ 
            lineHeight: '22px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            color: '#2C3E50'
          }}
        >
          Аль-Фараби 19х3Б
        </span>
      </div>
    </footer>
  )
}
