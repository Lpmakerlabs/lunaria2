import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  X,
} from 'lucide-react';
import { STUDIO_INFO, type ModalityCard } from '../data/studioContent';
import {
  buildWhatsappBookingUrl,
  DISCIPLINE_OPTIONS,
  EXPERIENCE_OPTIONS,
  SCHEDULE_OPTIONS,
  validateBookingInquiry,
  type BookingInquiryInput,
} from '../utils/booking';

interface BookingModalProps {
  isOpen: boolean;
  initialDiscipline: string;
  initialSchedule?: string;
  initialNotes?: string;
  onClose: () => void;
}

export function BookingModal({
  isOpen,
  initialDiscipline,
  initialSchedule,
  initialNotes,
  onClose,
}: BookingModalProps) {
  const [formState, setFormState] = useState<BookingInquiryInput>({
    name: '',
    phone: '',
    discipline: initialDiscipline || DISCIPLINE_OPTIONS[0],
    schedule: initialSchedule || SCHEDULE_OPTIONS[0],
    experience: EXPERIENCE_OPTIONS[0],
    notes: initialNotes ?? '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingInquiryInput, string>>>({});
  const [submittedData, setSubmittedData] = useState<BookingInquiryInput | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFormState((prev) => ({
        ...prev,
        discipline: initialDiscipline || DISCIPLINE_OPTIONS[0],
        schedule: initialSchedule || SCHEDULE_OPTIONS[0],
        notes: initialNotes ?? '',
      }));
      setErrors({});
      setSubmittedData(null);
    }
  }, [isOpen, initialDiscipline, initialSchedule, initialNotes]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateBookingInquiry(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmittedData({ ...formState });
  };

  const whatsappUrl = submittedData
    ? buildWhatsappBookingUrl(STUDIO_INFO.whatsappNumber, submittedData)
    : STUDIO_INFO.whatsappShortUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#142012]/75 p-4 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#DCE3D6] bg-white p-6 shadow-xl md:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-[#EAECE6] pb-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#456B2D] uppercase">
              {STUDIO_INFO.name} · {STUDIO_INFO.address}
            </p>
            <h2
              id="booking-modal-title"
              className="mt-1 text-2xl font-bold text-[#1A2816]"
            >
              Reservá tu clase o turno
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de reserva"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#1A2816]/15 text-[#1A2816] hover:bg-[#F3F6F0]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {submittedData ? (
          <div className="mt-6 space-y-5" role="status" aria-live="polite">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#456B2D]" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold text-[#1A2816]">
                  Consulta lista para {submittedData.name}
                </h3>
                <p className="mt-1 text-sm text-[#4C5A48]">
                  Enviá tu mensaje pre-armado por WhatsApp al {STUDIO_INFO.whatsappDisplay} para
                  confirmar disponibilidad.
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-1 gap-4 rounded-xl border border-[#EAECE6] bg-[#F6F7F4] p-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-xs text-[#4C5A48]">Modalidad</dt>
                <dd className="mt-0.5 font-semibold text-[#1A2816]">{submittedData.discipline}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#4C5A48]">Franja horaria</dt>
                <dd className="mt-0.5 font-semibold text-[#1A2816]">{submittedData.schedule}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#4C5A48]">Experiencia</dt>
                <dd className="mt-0.5 font-semibold text-[#1A2816]">{submittedData.experience}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#4C5A48]">Tu WhatsApp</dt>
                <dd className="mt-0.5 font-mono font-semibold text-[#1A2816] tabular-nums">
                  {submittedData.phone}
                </dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#2C4B1E] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#213816]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Enviar por WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSubmittedData(null)}
                className="inline-flex min-h-11 items-center rounded-full border border-[#1A2816]/15 px-5 py-2.5 text-sm font-medium text-[#1A2816] hover:bg-[#F3F6F0]"
              >
                Editar datos
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-[#1A2816]">
                  Nombre y apellido
                </label>
                <input
                  id="modal-name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Ej. Camila Fernández"
                  aria-invalid={Boolean(errors.name)}
                  className="mt-1.5 w-full rounded-lg border border-[#1A2816]/20 bg-[#F6F7F4] px-3.5 py-2.5 text-sm text-[#1A2816] focus:border-[#456B2D] focus:bg-white focus:outline-none"
                />
                {errors.name && (
                  <p role="alert" className="mt-1 text-xs font-medium text-[#9B2C2C]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-[#1A2816]">
                  Tu WhatsApp
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="Ej. 351 555-1234"
                  aria-invalid={Boolean(errors.phone)}
                  className="mt-1.5 w-full rounded-lg border border-[#1A2816]/20 bg-[#F6F7F4] px-3.5 py-2.5 text-sm text-[#1A2816] focus:border-[#456B2D] focus:bg-white focus:outline-none"
                />
                {errors.phone && (
                  <p role="alert" className="mt-1 text-xs font-medium text-[#9B2C2C]">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="modal-discipline"
                  className="block text-sm font-medium text-[#1A2816]"
                >
                  Modalidad
                </label>
                <select
                  id="modal-discipline"
                  value={formState.discipline}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, discipline: e.target.value }))
                  }
                  className="mt-1.5 w-full rounded-lg border border-[#1A2816]/20 bg-[#F6F7F4] px-3.5 py-2.5 text-sm text-[#1A2816] focus:border-[#456B2D] focus:bg-white focus:outline-none"
                >
                  {DISCIPLINE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="modal-schedule"
                  className="block text-sm font-medium text-[#1A2816]"
                >
                  Franja horaria preferida
                </label>
                <select
                  id="modal-schedule"
                  value={formState.schedule}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, schedule: e.target.value }))
                  }
                  className="mt-1.5 w-full rounded-lg border border-[#1A2816]/20 bg-[#F6F7F4] px-3.5 py-2.5 text-sm text-[#1A2816] focus:border-[#456B2D] focus:bg-white focus:outline-none"
                >
                  {SCHEDULE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-experience"
                className="block text-sm font-medium text-[#1A2816]"
              >
                Experiencia previa
              </label>
              <select
                id="modal-experience"
                value={formState.experience}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, experience: e.target.value }))
                }
                className="mt-1.5 w-full rounded-lg border border-[#1A2816]/20 bg-[#F6F7F4] px-3.5 py-2.5 text-sm text-[#1A2816] focus:border-[#456B2D] focus:bg-white focus:outline-none"
              >
                {EXPERIENCE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="modal-notes" className="block text-sm font-medium text-[#1A2816]">
                Observaciones (opcional)
              </label>
              <textarea
                id="modal-notes"
                rows={2}
                value={formState.notes}
                onChange={(e) => setFormState((prev) => ({ ...prev, notes: e.target.value }))}
                placeholder="Lesiones, embarazo, consultas sobre turnos o masajes..."
                className="mt-1.5 w-full rounded-lg border border-[#1A2816]/20 bg-[#F6F7F4] px-3.5 py-2.5 text-sm text-[#1A2816] focus:border-[#456B2D] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#BCE57B] px-6 py-2.5 text-sm font-semibold text-[#182B14] hover:bg-[#CBEB94]"
              >
                <span>Preparar consulta</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={STUDIO_INFO.whatsappShortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#456B2D] underline underline-offset-4 hover:text-[#21381B]"
              >
                WhatsApp directo: {STUDIO_INFO.whatsappDisplay}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

interface ServiceDetailModalProps {
  card: ModalityCard | null;
  onClose: () => void;
  onBook: (bookingOption: string) => void;
}

export function ServiceDetailModal({ card, onClose, onBook }: ServiceDetailModalProps) {
  useEffect(() => {
    if (!card) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [card, onClose]);

  if (!card) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#142012]/75 p-4 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-2xl border border-[#DCE3D6] bg-white shadow-xl md:grid-cols-12 md:overflow-hidden">
        <div className="h-64 bg-[#1A2E17] md:col-span-5 md:h-auto">
          <img
            src={card.image}
            alt={card.alt}
            referrerPolicy="no-referrer"
            className={`h-full w-full object-cover ${card.imageClassName ?? ''}`}
          />
        </div>

        <div className="flex flex-col justify-between p-6 md:col-span-7 md:p-8">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#456B2D] uppercase">
                  Modalidad · {STUDIO_INFO.name}
                </p>
                <h2
                  id="service-modal-title"
                  className="mt-1 text-2xl font-bold text-[#1A2816]"
                >
                  {card.title}
                </h2>
                {card.subtitle && (
                  <p className="mt-0.5 text-sm font-medium text-[#456B2D]">{card.subtitle}</p>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar detalle"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#1A2816]/15 text-[#1A2816] hover:bg-[#F3F6F0]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#4C5A48] md:text-base">
              {card.description}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-[#EAECE6] pt-4 text-sm text-[#1A2816]">
              {card.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#456B2D]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#EAECE6] pt-4">
            <button
              type="button"
              onClick={() => onBook(card.bookingOption)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#BCE57B] px-6 py-2.5 text-sm font-semibold text-[#182B14] hover:bg-[#CBEB94]"
            >
              <span>Reservar esta modalidad</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StudioInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export function StudioInfoModal({ isOpen, onClose, onOpenBooking }: StudioInfoModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="studio-info-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#142012]/75 p-4 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-2xl border border-[#DCE3D6] bg-white shadow-xl md:grid-cols-12 md:overflow-hidden">
        <div className="h-64 bg-[#1A2E17] md:col-span-5 md:h-auto">
          <video
            src={STUDIO_INFO.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Video real de clases en Lunaria Pilates"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between p-6 md:col-span-7 md:p-8">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#456B2D] uppercase">
                  Nuestro Estudio · Nueva Córdoba
                </p>
                <h2
                  id="studio-info-title"
                  className="mt-1 text-2xl font-bold text-[#1A2816]"
                >
                  Lunaria · Pilates y bienestar
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar información del estudio"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#1A2816]/15 text-[#1A2816] hover:bg-[#F3F6F0]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#4C5A48]">
              Trabajamos con cupos reducidos en camas Reformer para cuidar tu respiración,
              postura y control corporal. Combinamos Pilates con Stretching, Rehabilitación
              Kinesiológica y Masajes en un ambiente cálido en Nueva Córdoba.
            </p>

            <div className="mt-5 space-y-2.5 border-t border-[#EAECE6] pt-4 text-sm text-[#1A2816]">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#456B2D]" aria-hidden="true" />
                <span>{STUDIO_INFO.address}</span>
              </p>
              <p className="text-[#4C5A48]">
                Turnos autogestionados o fijos por <strong>App Sigue Fit</strong> · WhatsApp:{' '}
                <span className="font-mono tabular-nums">{STUDIO_INFO.whatsappDisplay}</span>
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#EAECE6] pt-4">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#BCE57B] px-6 py-2.5 text-sm font-semibold text-[#182B14] hover:bg-[#CBEB94]"
            >
              <span>Reservá tu clase</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[#1A2816]/15 px-4 py-2 text-sm font-medium text-[#1A2816] hover:bg-[#F3F6F0]"
            >
              <span>{STUDIO_INFO.handle}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
