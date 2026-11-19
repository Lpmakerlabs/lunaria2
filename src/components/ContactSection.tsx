import { Calendar, Clock, ExternalLink, MapPin, MessageCircle } from 'lucide-react';
import { CLASS_SCHEDULE, STUDIO_INFO } from '../data/studioContent';

interface ContactSectionProps {
  onOpenBooking: () => void;
  onSelectSlot: (dayLabel: string, slot: string) => void;
}

const SCHEDULE_PERIODS = [
  {
    label: 'Turno Mañana',
    slots: CLASS_SCHEDULE.morningSlots,
    slotClasses:
      'border-[#D4DFCD] bg-[#E8F0E3] text-[#1D2D19] hover:border-[#2C4B1E] hover:bg-[#2C4B1E] hover:text-white',
  },
  {
    label: 'Turno Tarde',
    slots: CLASS_SCHEDULE.afternoonSlots,
    slotClasses:
      'border-[#DCE6D4] bg-[#F3F7F0] text-[#1D2D19] hover:border-[#2C4B1E] hover:bg-[#2C4B1E] hover:text-white',
  },
] as const;

export function ContactSection({ onOpenBooking, onSelectSlot }: ContactSectionProps) {
  return (
    <section id="contacto" className="bg-[#F6F7F4] py-14 md:py-16">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#456B2E] uppercase">
              <span className="h-[1.5px] w-5 bg-[#456B2E]" aria-hidden="true" />
              <span>Contacto</span>
            </div>

            <h2
              className="mt-2.5 text-[30px] font-bold leading-[1.15] tracking-tight text-[#1A2617] md:text-[34px]"
              style={{ textWrap: 'balance' }}
            >
              Reservá tu <span className="text-[#456B2E]">turno</span>
            </h2>

            <p className="mt-2 max-w-[34ch] text-[14.5px] leading-relaxed text-[#4C5A48]">
              Consultanos por clases, horarios y sesiones personalizadas.
            </p>
          </div>

          {/* Right 3 Contact Info Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8">
            <a
              href={STUDIO_INFO.whatsappShortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-xl border border-[#E2E6DC] bg-white p-4 transition-colors hover:border-[#456B2E]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#456B2E]"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF3E8] text-[#456B2E]">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#1A2617]">WhatsApp</p>
                <p className="mt-0.5 font-mono text-[13px] text-[#4C5A48] tabular-nums">
                  {STUDIO_INFO.whatsappDisplay}
                </p>
              </div>
            </a>

            <a
              href={STUDIO_INFO.googlePlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ubicación en Google Maps: ${STUDIO_INFO.fullAddress}`}
              className="group flex items-start gap-3 rounded-xl border border-[#E2E6DC] bg-white p-4 transition-colors hover:border-[#456B2E]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#456B2E]"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF3E8] text-[#456B2E] transition-colors group-hover:bg-[#E1ECD9]">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#1A2617]">Ubicación</p>
                <p className="mt-0.5 text-[13px] leading-snug text-[#4C5A48]">
                  {STUDIO_INFO.address}
                  <br />
                  {STUDIO_INFO.neighborhood}
                </p>
                <span className="mt-1 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#456B2E] group-hover:underline">
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                </span>
              </div>
            </a>

            <div className="flex items-start gap-3 rounded-xl border border-[#E2E6DC] bg-white p-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF3E8] text-[#456B2E]">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#1A2617]">Horarios</p>
                <p className="mt-0.5 text-[13px] font-semibold leading-snug text-[#2C4B1E]">
                  {STUDIO_INFO.hoursDays}
                </p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-[#4C5A48] tabular-nums">
                  {STUDIO_INFO.hoursMorning}
                  <br />
                  {STUDIO_INFO.hoursAfternoon}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Weekly Class Schedule Grid */}
        <div
          id="horarios"
          className="mt-8 rounded-2xl border border-[#DCE3D6] bg-white p-4 shadow-xs sm:p-7"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#456B2E] uppercase">
                <span className="h-[1.5px] w-4 bg-[#456B2E]" aria-hidden="true" />
                <span>Horarios de clases</span>
              </div>
              <h3 className="mt-1.5 text-[22px] font-bold leading-tight text-[#1A2617] sm:text-[24px]">
                Lunes a Viernes
              </h3>
              <p className="mt-1 text-[13.5px] text-[#4C5A48]">
                Tocá un horario para consultar disponibilidad.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#2A3526] tabular-nums">
              <span className="inline-flex items-center rounded-full border border-[#D4DFCD] bg-[#E8F0E3] px-3 py-1">
                Mañana: 8:00 a 11:00
              </span>
              <span className="inline-flex items-center rounded-full border border-[#DCE6D4] bg-[#F3F7F0] px-3 py-1">
                Tarde: 15:00 a 20:00
              </span>
            </div>
          </div>

          {/* 5-Day Header Row */}
          <div className="mt-5 grid grid-cols-5 gap-1.5 sm:gap-3">
            {CLASS_SCHEDULE.days.map((day) => (
              <div
                key={day.short}
                className="flex min-h-9 items-center justify-center rounded-lg bg-[#2C4B1E] px-1.5 py-2 text-center text-[12px] font-semibold tracking-wide text-white sm:min-h-10 sm:text-[13.5px]"
              >
                <span className="sm:hidden">{day.short}</span>
                <span className="hidden sm:inline">{day.label}</span>
              </div>
            ))}
          </div>

          {/* Morning & Afternoon Slot Rows */}
          <div className="mt-4 space-y-5">
            {SCHEDULE_PERIODS.map((period) => (
              <div key={period.label}>
                <div className="mb-2.5 flex items-center gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-[#456B2E] uppercase whitespace-nowrap">
                    {period.label}
                  </span>
                  <span className="h-px flex-1 bg-[#E7ECE3]" aria-hidden="true" />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  {period.slots.map((slot) => (
                    <div key={slot} className="grid grid-cols-5 gap-1.5 sm:gap-3">
                      {CLASS_SCHEDULE.days.map((day) => (
                        <button
                          key={`${day.short}-${slot}`}
                          type="button"
                          onClick={() => onSelectSlot(day.label, slot)}
                          aria-label={`Consultar turno ${day.label} a las ${slot} hs`}
                          className={`flex min-h-9 items-center justify-center rounded-lg border px-1 py-1.5 text-[12px] font-semibold tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#456B2D] sm:min-h-10 sm:text-[13.5px] ${period.slotClasses}`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered CTA Pill Button */}
        <div className="mt-9 flex justify-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#2C4B1E] px-8 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 shadow-sm transition-colors hover:bg-[#223B17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#456B2D]"
          >
            <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Reservá tu turno ahora</span>
          </button>
        </div>
      </div>
    </section>
  );
}
