import { useState } from 'react';
import { ChevronRight, ExternalLink, Pause, Play, Star } from 'lucide-react';
import { STUDIO_INFO, TESTIMONIALS } from '../data/studioContent';
import { buildMarqueeTrack, getClientInitials } from '../utils/testimonials';

interface TestimonialsSectionProps {
  onSelectDiscipline: (discipline: string) => void;
}

export function TestimonialsSection({ onSelectDiscipline }: TestimonialsSectionProps) {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeItems = buildMarqueeTrack(TESTIMONIALS);

  return (
    <section
      id="testimonios"
      className="scroll-mt-20 overflow-hidden border-b border-[#E5EAE0] bg-[#EFF1EC] py-14 md:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Section Header + Real Google Rating Link & Playback Control */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#456B2E] uppercase">
              <span className="h-[1.5px] w-5 bg-[#456B2E]" aria-hidden="true" />
              <span>Opiniones en Google</span>
            </div>

            <h2
              className="mt-2.5 text-[30px] font-bold leading-[1.15] tracking-tight text-[#1A2617] md:text-[34px]"
              style={{ textWrap: 'balance' }}
            >
              Lo que cuentan quienes{' '}
              <span className="text-[#456B2E]">entrenan en Lunaria</span>
            </h2>

            <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-[#4C5A48]">
              Conocé la experiencia de alumnos y pacientes en nuestro estudio de{' '}
              {STUDIO_INFO.address}, valorado con {STUDIO_INFO.googleRating} estrellas en Google
              Maps.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            <a
              href={STUDIO_INFO.googlePlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#DCE3D6] bg-white px-4 py-2 text-xs font-semibold text-[#1A2617] whitespace-nowrap shrink-0 transition-colors hover:border-[#456B2E]/50 hover:text-[#2C4B1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#456B2E]"
            >
              <Star
                className="h-3.5 w-3.5 fill-[#E59819] text-[#E59819]"
                aria-hidden="true"
              />
              <span className="font-mono tabular-nums">{STUDIO_INFO.googleRating}</span>
              <span>en Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5 text-[#456B2E]" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-pressed={isPaused}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[#DCE3D6] bg-white px-4 py-2 text-xs font-semibold text-[#2C4B1E] whitespace-nowrap shrink-0 transition-colors hover:bg-[#F3F6F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#456B2E]"
            >
              {isPaused ? (
                <>
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Reanudar</span>
                </>
              ) : (
                <>
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Pausar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Continuous Smooth Passing Marquee */}
      <div
        className="lunaria-marquee-group relative mt-9"
        data-paused={isPaused ? 'true' : 'false'}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-[#EFF1EC] to-transparent sm:block lg:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-[#EFF1EC] to-transparent sm:block lg:w-24"
        />

        <div className="lunaria-marquee-track gap-5 px-5 md:px-8">
          {marqueeItems.map(({ key, isDuplicate, item }) => (
            <article
              key={key}
              aria-hidden={isDuplicate ? true : undefined}
              className="flex w-[310px] shrink-0 flex-col justify-between rounded-2xl border border-[#DCE3D6] bg-white p-6 sm:w-[360px]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="flex items-center gap-0.5"
                    aria-label={isDuplicate ? undefined : `${item.rating} de 5 estrellas`}
                  >
                    {Array.from({ length: item.rating }).map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="h-3.5 w-3.5 fill-[#E59819] text-[#E59819]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#4C5A48]">
                    {item.sourceLabel}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#456B2E]">
                  <span>{item.disciplineLabel}</span>
                  <span aria-hidden="true" className="text-[#A8B4A0]">
                    ·
                  </span>
                  <span className="font-medium text-[#4C5A48]">{item.timeframe}</span>
                </div>

                <blockquote className="mt-3 text-[14px] leading-[1.65] text-[#22301F]">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#EAECE6] pt-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF3E8] text-xs font-bold text-[#2C4B1E]"
                  >
                    {getClientInitials(item.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug text-[#1A2617]">
                      {item.name}
                    </p>
                    <p className="text-xs leading-snug text-[#4C5A48]">{item.context}</p>
                  </div>
                </div>

                <button
                  type="button"
                  tabIndex={isDuplicate ? -1 : undefined}
                  onClick={() => onSelectDiscipline(item.bookingOption)}
                  aria-label={
                    isDuplicate ? undefined : `Consultar por ${item.disciplineLabel}`
                  }
                  className="inline-flex min-h-9 shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-[#2C4B1E] whitespace-nowrap transition-colors hover:bg-[#EDF3E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#456B2E]"
                >
                  <span>Consultar</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
