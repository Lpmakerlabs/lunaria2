import { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioContent';

interface HeaderProps {
  onOpenBooking: (preselectedDiscipline?: string) => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#EAECE6] bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-2.5 md:px-8">
        {/* Left: Original Lunaria Logo + Wordmark */}
        <a
          href="#inicio"
          aria-label="Lunaria — Pilates y Bienestar, ir al inicio"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#456B2D]"
        >
          <img
            src={STUDIO_INFO.logoImage}
            alt="Lunaria Pilates y bienestar"
            decoding="async"
            className="h-14 w-auto shrink-0 object-contain sm:h-16"
          />
          <span className="text-[22px] font-semibold leading-none tracking-[0.03em] text-[#1A2816] whitespace-nowrap">
            {STUDIO_INFO.name}
          </span>
        </a>

        {/* Center: Exact 5 Navigation Links from Full Mockup */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#2A3526]"
        >
          <a
            href="#inicio"
            className="border-b-2 border-[#456B2D] pb-1 text-[#1A2816] whitespace-nowrap shrink-0"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="pb-1 transition-colors hover:text-[#456B2D] whitespace-nowrap shrink-0"
          >
            Servicios
          </a>
          <a
            href="#beneficios"
            className="pb-1 transition-colors hover:text-[#456B2D] whitespace-nowrap shrink-0"
          >
            Beneficios
          </a>
          <a
            href="#sobre-nosotros"
            className="pb-1 transition-colors hover:text-[#456B2D] whitespace-nowrap shrink-0"
          >
            Sobre Nosotros
          </a>
          <a
            href="#contacto"
            className="pb-1 transition-colors hover:text-[#456B2D] whitespace-nowrap shrink-0"
          >
            Contacto
          </a>
        </nav>

        {/* Right: Primary Forest Pill CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex min-h-10 items-center gap-2 rounded-full bg-[#2C4B1E] px-5 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#223B17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#456B2D]"
          >
            <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Reservá tu turno</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#1A2816]/15 text-[#1A2816] hover:bg-[#F3F6F0] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Menú móvil"
          className="border-t border-[#EAECE6] bg-white px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1 text-sm font-medium text-[#1A2816]">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 hover:bg-[#F3F6F0]"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 hover:bg-[#F3F6F0]"
            >
              Servicios
            </a>
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 hover:bg-[#F3F6F0]"
            >
              Beneficios
            </a>
            <a
              href="#sobre-nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 hover:bg-[#F3F6F0]"
            >
              Sobre Nosotros
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 hover:bg-[#F3F6F0]"
            >
              Contacto
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#2C4B1E] px-5 py-2.5 text-sm font-medium text-white"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Reservá tu turno</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
