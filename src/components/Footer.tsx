import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioContent';

export function Footer() {
  return (
    <footer className="bg-[#162913] py-6 text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        {/* Left: Original Lunaria Logo + Wordmark */}
        <a
          href="#inicio"
          aria-label="Lunaria — Pilates y Bienestar, volver al inicio"
          className="flex items-center gap-3 whitespace-nowrap shrink-0"
        >
          <img
            src={STUDIO_INFO.logoLightImage}
            alt="Lunaria Pilates y bienestar"
            className="h-14 w-auto shrink-0 object-contain"
          />
          <span className="text-[21px] font-semibold leading-none tracking-[0.03em] text-white whitespace-nowrap">
            {STUDIO_INFO.name}
          </span>
        </a>

        {/* Center: Nav Links matching mockup */}
        <nav
          aria-label="Navegación del pie de página"
          className="flex flex-wrap items-center justify-center gap-6 text-[13.5px] font-medium text-[#DCE6D6] md:gap-8"
        >
          <a
            href="#inicio"
            className="border-b-2 border-[#A8DB72] pb-1 text-white whitespace-nowrap shrink-0"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="pb-1 transition-colors hover:text-white whitespace-nowrap shrink-0"
          >
            Servicios
          </a>
          <a
            href="#beneficios"
            className="pb-1 transition-colors hover:text-white whitespace-nowrap shrink-0"
          >
            Beneficios
          </a>
          <a
            href="#sobre-nosotros"
            className="pb-1 transition-colors hover:text-white whitespace-nowrap shrink-0"
          >
            Sobre Nosotros
          </a>
          <a
            href="#contacto"
            className="pb-1 transition-colors hover:text-white whitespace-nowrap shrink-0"
          >
            Contacto
          </a>
        </nav>

        {/* Right: Social & Location Icon Links */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Lunaria Pilates"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#contacto"
            aria-label="Ubicación del estudio en Nueva Córdoba"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={STUDIO_INFO.whatsappShortUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Lunaria Pilates"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
