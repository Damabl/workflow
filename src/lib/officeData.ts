export interface OfficeImage {
  src: string
  alt: string
}

export interface OfficeDetails {
  id: number
  name: string
  mainImage: string
  images: OfficeImage[] // Карусель изображений
  location: string
  address: string
  class?: string
  year?: string
  rentableArea?: string
  totalBlockArea?: string
  capacity?: string
  cost: string
  format: string,
  floors?: string,
  // Подробная информация
  detailedInfo: {
    areaAndFormat?: {
      rentableArea?: string
      totalBlockArea?: string
      format: string
      floors?: string
    }
    building?: {
      class?: string
      year?: string
      totalArea?: string
      location?: string
      floors?: string
    }
    infrastructure?: string[]
    included?: string[]
    engineering?: string[]
    parking?: string[]
    environment?: string[]
    usageScenario?: string[]
  }
}

export const officesData: OfficeDetails[] = [
  {
    id: 1,
    name: "Venus",
    mainImage: "/venus.webp",
    images: [
      { src: "/Venus/TMK_11292.webp", alt: "Venus офис - вид 1" },
      { src: "/Venus/TMK_11297.webp", alt: "Venus офис - вид 2" },
      { src: "/Venus/TMK_11311.webp", alt: "Venus офис - вид 3" },
      { src: "/Venus/TMK_11348.webp", alt: "Venus офис - вид 4" },
      { src: "/Venus/TMK_11352.webp", alt: "Venus офис - вид 5" },
      { src: "/Venus/TMK_11357.webp", alt: "Venus офис - вид 6" },
      { src: "/Venus/TMK_11397.webp", alt: "Venus офис - вид 7" },
      { src: "/Venus/TMK_11435.webp", alt: "Venus офис - вид 8" },
      { src: "/Venus/TMK_11439.webp", alt: "Venus офис - вид 9" },
    ],
    location: "Алматы",
    address: "Медеуский район, ул. Елебекова 10/1",
    class: "B+",
    year: "2021",
    rentableArea: "1 900 м²",
    totalBlockArea: "2 100 м²",
    capacity: "~200 рабочих мест",
    cost: "по запросу",
    format: "all inclusive с фиксированным составом услуг",
    detailedInfo: {
      infrastructure: [
        "6 переговорных комнат",
        "10 Zoom-будок",
        "3 кухни",
        "Мягкие зоны на каждом этаже"
      ],
      included: [
        "Эксплуатационные расходы",
        "Коммунальные услуги",
        "Интернет",
        "Ежедневная уборка",
        "Базовое обслуживание офиса",
        "Сервис по SLA"
      ]
    }
  },
  {
    id: 2,
    name: "Koktem Towers",
    mainImage: "/koktem-towers.webp",
    images: [
      { src: "/Koktem Tower/TMK_11441.webp", alt: "Koktem Towers офис - вид 1" },
      { src: "/Koktem Tower/TMK_11442.webp", alt: "Koktem Towers офис - вид 2" },
      { src: "/Koktem Tower/TMK_11444.webp", alt: "Koktem Towers офис - вид 3" },
      { src: "/Koktem Tower/TMK_11445.webp", alt: "Koktem Towers офис - вид 4" },
      { src: "/Koktem Tower/TMK_11450.webp", alt: "Koktem Towers офис - вид 5" },
    ],
    location: "Алматы",
    address: "Медеуский район, пр. Достык",
    class: "B+",
    year: "2005",
    totalBlockArea: "~5 148 м²",
    cost: "по запросу",
    format: "офисные пространства для корпоративных арендаторов",
    floors: "13 этажей",
    detailedInfo: {
      engineering: [
        "Приточно-вытяжная вентиляция",
        "Центральное кондиционирование",
        "Локальные системы кондиционирования"
      ],
      parking: [
        "Наземный паркинг",
        "Подземный паркинг"
      ],
      included: [
        "Эксплуатационные расходы",
        "Коммунальные услуги",
        "Интернет",
        "Ежедневная уборка",
        "Базовое обслуживание офиса",
        "Сервис по SLA"
      ]
    }
  },
  {
    id: 3,
    name: "Teniz Towers",
    mainImage: "/teniz-towers.webp",
    images: [
      { src: "/Teniz Towers/1.webp", alt: "Teniz Towers офис - вид 1" },
      { src: "/Teniz Towers/2.webp", alt: "Teniz Towers офис - вид 2" },
      { src: "/Teniz Towers/3.webp", alt: "Teniz Towers офис - вид 3" },
      { src: "/Teniz Towers/4.webp", alt: "Teniz Towers офис - вид 4" },
      { src: "/Teniz Towers/5.webp", alt: "Teniz Towers офис - вид 5" },
    ],
    location: "Алматы",
    address: "пр. Назарбаева 240Г",
    totalBlockArea: "~12 767 м²",
    cost: "по запросу",
    floors: "11 этажей",
    format: "в текущем состоянии либо с ремонтом и мебелью под срок заезда",
    detailedInfo: {
      environment: [
        "Развитая городская инфраструктура",
        "Сервисы и точки питания в пешей доступности"
      ],
      engineering: [
        "Инженерные системы офисного уровня",
        "Базовая система климата"
      ],
      usageScenario: [
        "штаб-квартиру",
        "офис продаж",
        "региональный офис"
      ]
    }
  },
  {
    id: 4,
    name: "Orion",
    mainImage: "/orion.webp",
    images: [
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0001.webp", alt: "Orion офис - вид 1" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0002.webp", alt: "Orion офис - вид 2" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0003.webp", alt: "Orion офис - вид 3" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0004.webp", alt: "Orion офис - вид 4" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0005.webp", alt: "Orion офис - вид 5" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0006.webp", alt: "Orion офис - вид 6" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0007.webp", alt: "Orion офис - вид 7" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0008.webp", alt: "Orion офис - вид 8" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0009.webp", alt: "Orion офис - вид 9" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0010.webp", alt: "Orion офис - вид 10" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0011.webp", alt: "Orion офис - вид 11" },
      { src: "/Orion/Орион - 2 пункт (без водяных знаков загрузить в правом углу)_page-0012.webp", alt: "Orion офис - вид 12" },
    ],
    location: "Алматы",
    address: "деловой контур города",
    rentableArea: "300 м²",
    cost: "по запросу",
    format: "офис с возможностью адаптации пространства под бренд",
    detailedInfo: {
      usageScenario: [
        "Корпоративный офис",
        "Баланс представительских зон и рабочих пространств",
        "Управляемая эксплуатация"
      ],
      engineering: [
        "Инженерные системы офисного стандарта"
      ],
      parking: [
        "Паркинг — по запросу",
        "Гостевой режим — по запросу",
        "Условия фиксируются в рамках сделки"
      ]
    }
  }
]
