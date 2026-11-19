import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsappBookingUrl,
  getScheduleOptionForSlot,
  normalizePhoneDigits,
  SCHEDULE_OPTIONS,
  validateBookingInquiry,
} from './booking';

test('normalizePhoneDigits strips spaces, dashes, and plus signs', () => {
  assert.equal(normalizePhoneDigits('+54 9 351 857-8170'), '5493518578170');
  assert.equal(normalizePhoneDigits('351-857-8170'), '3518578170');
});

test('validateBookingInquiry rejects empty name and short phone', () => {
  const result = validateBookingInquiry({
    name: ' ',
    phone: '1234',
    discipline: 'Pilates Reformer Grupal',
    schedule: 'Turno Mañana (08:00 – 11:00 hs)',
    experience: 'Es mi primera vez en Pilates',
    notes: '',
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
});

test('validateBookingInquiry accepts valid Cordoba booking details', () => {
  const result = validateBookingInquiry({
    name: 'Valentina Gómez',
    phone: '351 555-1234',
    discipline: 'Pilates & Stretching',
    schedule: 'Turno Tarde / Noche (18:00 – 20:00 hs)',
    experience: 'Practiqué antes',
    notes: 'Quiero probar una clase esta semana.',
  });

  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
  assert.equal(result.normalizedPhone, '3515551234');
});

test('buildWhatsappBookingUrl encodes studio number and inquiry details', () => {
  const url = buildWhatsappBookingUrl('5493518578170', {
    name: 'Lucía Pérez',
    phone: '351 444-9988',
    discipline: 'Individual Terapéutico / Rehab. Kinesiológica',
    schedule: 'Turno Mañana (08:00 – 11:00 hs)',
    experience: 'Busco rehabilitación / indicación médica',
    notes: 'Dolor lumbar leve',
  });

  assert.ok(url.startsWith('https://wa.me/5493518578170?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.match(decoded, /Lucía Pérez/);
  assert.match(decoded, /Rehab\. Kinesiológica/);
  assert.match(decoded, /Dolor lumbar leve/);
});

test('getScheduleOptionForSlot maps morning, early afternoon, and evening slots', () => {
  assert.equal(getScheduleOptionForSlot('08:00'), SCHEDULE_OPTIONS[0]);
  assert.equal(getScheduleOptionForSlot('11:00'), SCHEDULE_OPTIONS[0]);
  assert.equal(getScheduleOptionForSlot('15:00'), SCHEDULE_OPTIONS[1]);
  assert.equal(getScheduleOptionForSlot('17:00'), SCHEDULE_OPTIONS[1]);
  assert.equal(getScheduleOptionForSlot('18:00'), SCHEDULE_OPTIONS[2]);
  assert.equal(getScheduleOptionForSlot('20:00'), SCHEDULE_OPTIONS[2]);
});
