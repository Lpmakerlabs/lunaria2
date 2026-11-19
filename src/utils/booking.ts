export interface BookingInquiryInput {
  name: string;
  phone: string;
  discipline: string;
  schedule: string;
  experience: string;
  notes: string;
}

export interface BookingValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof BookingInquiryInput, string>>;
  normalizedPhone: string;
}

export const DISCIPLINE_OPTIONS = [
  'Pilates Reformer Grupal',
  'Individual Terapéutico / Rehab. Kinesiológica',
  'Pilates & Stretching',
  'Masajes y Bienestar',
] as const;

export const SCHEDULE_OPTIONS = [
  'Turno Mañana (08:00 – 11:00 hs)',
  'Turno Tarde (15:00 – 17:00 hs)',
  'Turno Tarde / Noche (18:00 – 20:00 hs)',
] as const;

export function getScheduleOptionForSlot(slot: string): string {
  const hour = Number.parseInt(slot.split(':')[0] ?? '', 10);
  if (!Number.isNaN(hour) && hour < 12) {
    return SCHEDULE_OPTIONS[0];
  }
  if (!Number.isNaN(hour) && hour < 18) {
    return SCHEDULE_OPTIONS[1];
  }
  return SCHEDULE_OPTIONS[2];
}

export const EXPERIENCE_OPTIONS = [
  'Es mi primera vez en Pilates',
  'Practiqué antes',
  'Busco rehabilitación / indicación médica',
] as const;

export function normalizePhoneDigits(rawPhone: string): string {
  return rawPhone.replace(/\D/g, '');
}

export function validateBookingInquiry(input: BookingInquiryInput): BookingValidationResult {
  const errors: Partial<Record<keyof BookingInquiryInput, string>> = {};
  const trimmedName = input.name.trim();
  const digits = normalizePhoneDigits(input.phone);

  if (trimmedName.length < 2) {
    errors.name = 'Ingresá tu nombre y apellido para coordinar el turno.';
  }

  if (digits.length < 8 || digits.length > 15) {
    errors.phone = 'Ingresá un número de WhatsApp válido (ej. 351 857-8170).';
  }

  if (!input.discipline.trim()) {
    errors.discipline = 'Elegí una modalidad de interés.';
  }

  if (!input.schedule.trim()) {
    errors.schedule = 'Elegí una franja horaria aproximada.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    normalizedPhone: digits,
  };
}

export function buildWhatsappBookingUrl(
  studioWhatsappNumber: string,
  input: BookingInquiryInput
): string {
  const cleanNotes = input.notes.trim();
  const lines = [
    `Hola! Soy ${input.name.trim()}.`,
    `Me gustaría consultar turnos para: ${input.discipline}.`,
    `Franja horaria preferida: ${input.schedule}.`,
    `Experiencia: ${input.experience}.`,
    `Mi WhatsApp de contacto: ${input.phone.trim()}.`,
  ];

  if (cleanNotes) {
    lines.push(`Observaciones / consulta: ${cleanNotes}`);
  }

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${studioWhatsappNumber}?text=${encoded}`;
}
