import { ChevronRight } from 'lucide-react';
import { MODALITIES, type ModalityCard } from '../data/studioContent';

interface ServicesSectionProps {
  onSelectCard: (card: ModalityCard) => void;
}

export function ServicesSection({ onSelectCard }: ServicesSectionProps) {
  return (
    <section id="servicios" className="bg-[#F6F7F4] py-14 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Centered Header matching full-page mockup */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#456B2E] uppercase">
            <span className="h-[1.5px] w-6 bg-[#456B2E]" aria-hidden="true" />
            <span>Nuestros servicios</span>
          </div>

          <h2
            className="mt-2.5 text-[30px] font-bold leading-[1.15] tracking-tight text-[#1A2617] sm:text-[34px]"
            style={{ textWrap: 'balance' }}
          >
            Elegí la modalidad que se adapte{' '}
            <span className="text-[#456B2E]">a vos</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-xl text-[15px] leading-relaxed text-[#4C5A48]">
            Un espacio pensado para tu bienestar, con diferentes propuestas que se ajustan a tus
            objetivos y necesidades.
          </p>
        </div>

        {/* Full-Width 4-Card Row */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODALITIES.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => onSelectCard(card)}
              aria-label={`Ver detalles de ${card.title}`}
              className="group relative h-[250px] w-full overflow-hidden rounded-2xl bg-[#1A2E17] text-left shadow-sm transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#456B2D]"
            >
              <img
                src={card.image}
                alt={card.alt}
                referrerPolicy="no-referrer"
                className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
                  card.imageClassName ?? ''
                }`}
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#122110]/95 via-[#172A14]/55 to-transparent"
              />

              <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-2.5">
                <div className="min-w-0">
                  <h3 className="text-[18px] font-bold leading-tight text-white">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="mt-0.5 text-[12px] font-semibold leading-tight text-[#E3ECE0]">
                      {card.subtitle}
                    </p>
                  )}
                  <p className="mt-1.5 text-[12.5px] leading-snug text-[#D8E2D4]">
                    {card.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#1A2E17] transition-transform duration-150 group-hover:scale-105"
                >
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
