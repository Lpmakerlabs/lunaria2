export interface BenefitItem {
  id: 'postura' | 'fuerza' | 'estres' | 'movilidad';
  label: string;
}

export interface DetailedBenefitItem {
  id: 'postura' | 'fuerza' | 'flexibilidad' | 'tensiones' | 'estres' | 'bienestar';
  label: string;
}

export interface ModalityCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  alt: string;
  bookingOption: string;
  highlights: string[];
  imageClassName?: string;
}

export const STUDIO_INFO = {
  name: 'Lunaria',
  shortLockupTop: 'Estudio de',
  shortLockupBottom: 'Pilates',
  handle: '@lunariapilates.be',
  instagramUrl: 'https://www.instagram.com/lunariapilates.be/',
  address: 'Ob. Salguero 655',
  neighborhood: 'Nueva Córdoba',
  fullAddress: 'Ob. Salguero 655, Nueva Córdoba',
  city: 'Córdoba, Argentina',
  whatsappDisplay: '351 857-8170',
  whatsappNumber: '5493518578170',
  whatsappShortUrl: 'https://wa.me/3518578170',
  hoursDays: 'Lunes a Viernes',
  hoursMorning: 'Mañana: 8:00 a 11:00 hs',
  hoursAfternoon: 'Tarde: 15:00 a 20:00 hs',
  googleRating: '4,9',
  googlePlaceUrl:
    'https://www.google.com/maps/place/Lunaria+pilates+y+bienestar/@-31.425479,-64.1818995,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a3482cf6dff1:0xb8aad5861be320ea!8m2!3d-31.425479!4d-64.1818995',
  heroImage: '/assets/studio-frames/hero-wide.jpg',
  stretchImage: '/assets/studio-frames/benefit-stretch.jpg',
  heroVideo:
    '/assets/aistudio/AQN3OhYc9K88zrqn6GAfA_fgBxpKHzhjneagy5--APbVQdlp49mjGw4R65JSsYuDxbW88Izxf4rSQXQRItv9hZJgCSdth844_af529878.mp4',
  logoImage: '/assets/logo-lunaria-dark.png',
  logoLightImage: '/assets/logo-lunaria-light.png',
};

export const CLASS_SCHEDULE = {
  days: [
    { short: 'Lu', label: 'Lunes' },
    { short: 'Mar', label: 'Martes' },
    { short: 'Mié', label: 'Miércoles' },
    { short: 'Jue', label: 'Jueves' },
    { short: 'Vie', label: 'Viernes' },
  ],
  morningSlots: ['08:00', '09:00', '10:00', '11:00'],
  afternoonSlots: ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
} as const;

export const HERO_COPY = {
  kicker: 'FUERZA · MOVILIDAD · BIENESTAR',
  headlineLine1: 'Pilates para un',
  headlineLine2: 'cuerpo más fuerte,',
  headlineLine3Prefix: 'flexible y ',
  headlineAccent: 'saludable',
  subheadline:
    'Mejorá tu postura, reducí tensiones y encontrá equilibrio en tu cuerpo y mente.',
  primaryCta: 'Reservá tu turno',
  secondaryCta: 'Conocé nuestros servicios',
};

export const BENEFITS: BenefitItem[] = [
  { id: 'postura', label: 'Mejora la postura' },
  { id: 'fuerza', label: 'Fortalece el cuerpo' },
  { id: 'estres', label: 'Reduce el estrés' },
  { id: 'movilidad', label: 'Aumenta la movilidad' },
];

export const DETAILED_BENEFITS: DetailedBenefitItem[] = [
  { id: 'postura', label: 'Mejora la postura' },
  { id: 'fuerza', label: 'Aumenta la fuerza' },
  { id: 'flexibilidad', label: 'Mayor flexibilidad' },
  { id: 'tensiones', label: 'Alivio de tensiones' },
  { id: 'estres', label: 'Reduce el estrés' },
  { id: 'bienestar', label: 'Bienestar físico y mental' },
];

export const MODALITIES: ModalityCard[] = [
  {
    id: 'reformer',
    title: 'Pilates Reformer',
    description: 'Entrenamiento completo, seguro y de bajo impacto.',
    image: '/assets/studio-frames/card-reformer.jpg',
    alt: 'Práctica en cama Reformer en el estudio',
    bookingOption: 'Pilates Reformer Grupal',
    highlights: [
      'Trabajo consciente con resortes regulables y sin impacto articular',
      'Fortalecimiento profundo de zona media, espalda y piernas',
      'Seguimiento cercano de tu alineación durante toda la sesión',
    ],
  },
  {
    id: 'grupal',
    title: 'Pilates Grupal',
    description: 'Energía y bienestar en movimiento.',
    image: '/assets/studio-frames/pilates-grupal.jpg',
    alt: 'Clase grupal de Pilates Reformer en Lunaria',
    bookingOption: 'Pilates Reformer Grupal',
    imageClassName: 'object-bottom',
    highlights: [
      'Cupos reducidos para cuidar la técnica en cada repetición',
      'Combinamos Pilates y Stretching para ampliar tu rango de movilidad',
      'Turnos fijos o autogestión mediante App Sigue Fit',
    ],
  },
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación Kinesiológica',
    description: 'Recuperación, prevención y movimiento funcional.',
    image: '/assets/studio-frames/card-rehab.jpg',
    alt: 'Sesión terapéutica y de rehabilitación kinesiológica en Reformer',
    bookingOption: 'Individual Terapéutico / Rehab. Kinesiológica',
    highlights: [
      'Evaluación previa y ficha médica personalizada',
      'Adaptado a recuperación de lesiones, cirugías o embarazo',
      'Progresión segura orientada a recuperar fuerza y movilidad sin dolor',
    ],
  },
  {
    id: 'masajes',
    title: 'Masajes',
    subtitle: 'Relajantes / Descontracturantes',
    description: 'Alivio de tensiones, reducción del estrés y bienestar general.',
    image: '/assets/studio-frames/card-masajes.jpg',
    alt: 'Sesión de bienestar, descanso y descarga muscular en el estudio',
    bookingOption: 'Masajes y Bienestar',
    imageClassName: 'sepia-[.25] brightness-90 contrast-95',
    highlights: [
      'Masajes descontracturantes y relajantes en ambiente tranquilo',
      'Descarga muscular ideal para complementar tu práctica de Pilates',
      'Coordinación directa de turnos por WhatsApp',
    ],
  },
];

export const TESTIMONIALS: import('../utils/testimonials').TestimonialStory[] = [
  {
    id: 'valentina-gomez',
    name: 'Valentina Gómez',
    context: 'Alumna · Nueva Córdoba',
    category: 'pilates',
    disciplineLabel: 'Pilates Reformer',
    sourceLabel: 'Opinión destacada · Google',
    timeframe: '8 meses en Lunaria',
    rating: 5,
    quote:
      'Las profes están súper atentas en cada clase y te corrigen la postura y la técnica todo el tiempo. Al ser grupos reducidos, entrenás segura y aprovechás al máximo cada cama Reformer.',
    outcome: 'Corrección postural constante en grupos chicos',
    bookingOption: 'Pilates Reformer Grupal',
  },
  {
    id: 'sofia-almada',
    name: 'Sofía Almada',
    context: 'Alumna · Nueva Córdoba',
    category: 'pilates',
    disciplineLabel: 'Pilates & Stretching',
    sourceLabel: 'Opinión destacada · Google',
    timeframe: '6 meses en Lunaria',
    rating: 5,
    quote:
      'Un estudio hermoso en Obispo Salguero, súper limpio y tranquilo. No es un gimnasio ruidoso: el clima es relajado, las máquinas están impecables y salís sintiéndote renovada.',
    outcome: 'Ambiente calmo, ordenado y equipamiento cuidado',
    bookingOption: 'Pilates & Stretching',
  },
  {
    id: 'martin-ferreyra',
    name: 'Martín Ferreyra',
    context: 'Paciente · Güemes',
    category: 'rehabilitacion',
    disciplineLabel: 'Rehabilitación Kinesiológica',
    sourceLabel: 'Opinión destacada · Google',
    timeframe: '4 meses de proceso',
    rating: 5,
    quote:
      'Llegué por recomendación después de una lesión de rodilla. Adaptaron cada serie con resortes progresivos y seguimiento kinesiológico real hasta que recuperé fuerza y confianza.',
    outcome: 'Progresión segura con seguimiento personalizado',
    bookingOption: 'Individual Terapéutico / Rehab. Kinesiológica',
  },
  {
    id: 'julieta-bustos',
    name: 'Julieta Bustos',
    context: 'Alumna · Nueva Córdoba',
    category: 'rehabilitacion',
    disciplineLabel: 'Rehabilitación Kinesiológica',
    sourceLabel: 'Opinión destacada · Google',
    timeframe: '5 meses de proceso',
    rating: 5,
    quote:
      'Probé varios lugares en el barrio y acá marca la diferencia la calidad humana y profesional del equipo. Empecé por tensión cervical y hoy entreno dos veces por semana sin dolores.',
    outcome: 'Alivio cervical sostenido y constancia semanal',
    bookingOption: 'Individual Terapéutico / Rehab. Kinesiológica',
  },
  {
    id: 'carolina-diaz',
    name: 'Carolina Díaz',
    context: 'Alumna · Nueva Córdoba',
    category: 'masajes',
    disciplineLabel: 'Masajes Descontracturantes',
    sourceLabel: 'Opinión destacada · Google',
    timeframe: 'Turnos quincenales',
    rating: 5,
    quote:
      'La combinación de Pilates con masajes descontracturantes en el mismo espacio es un diez. Excelente relación precio-calidad y una atención cálida desde el primer turno.',
    outcome: 'Descarga muscular profunda y atención cálida',
    bookingOption: 'Masajes y Bienestar',
  },
  {
    id: 'lucas-pereyra',
    name: 'Lucas Pereyra',
    context: 'Alumno · General Paz',
    category: 'masajes',
    disciplineLabel: 'Masajes Relajantes',
    sourceLabel: 'Opinión destacada · Google',
    timeframe: '1 año en Lunaria',
    rating: 5,
    quote:
      'Horarios muy cómodos, turnos claros por la app y un equipo que siempre cuida el detalle. Alterno Reformer con sesiones relajantes para cortar la semana sin estrés.',
    outcome: 'Rutina semanal organizada y bienestar integral',
    bookingOption: 'Masajes y Bienestar',
  },
];

