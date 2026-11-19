import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildMarqueeTrack,
  getClientInitials,
  type TestimonialStory,
} from './testimonials.ts';

const SAMPLE_STORIES: TestimonialStory[] = [
  {
    id: 'story-1',
    name: 'Valentina Gómez',
    context: 'Alumna en Nueva Córdoba',
    category: 'pilates',
    disciplineLabel: 'Pilates Reformer',
    sourceLabel: 'Opinión en Google',
    timeframe: '8 meses en Lunaria',
    rating: 5,
    quote: 'Excelente atención y corrección constante de postura.',
    outcome: 'Mayor fuerza abdominal y postura alineada',
    bookingOption: 'Pilates Reformer Grupal',
  },
  {
    id: 'story-2',
    name: 'Martín Ferreyra',
    context: 'Paciente en Nueva Córdoba',
    category: 'rehabilitacion',
    disciplineLabel: 'Rehabilitación Kinesiológica',
    sourceLabel: 'Opinión en Google',
    timeframe: '4 meses de proceso',
    rating: 5,
    quote: 'Cupos reducidos y seguimiento súper cuidado en cada ejercicio.',
    outcome: 'Retorno progresivo al entrenamiento sin molestias',
    bookingOption: 'Individual Terapéutico / Rehab. Kinesiológica',
  },
];

test('buildMarqueeTrack returns empty array for empty input', () => {
  assert.deepEqual(buildMarqueeTrack([]), []);
});

test('buildMarqueeTrack doubles items into primary and duplicate passes with unique keys', () => {
  const track = buildMarqueeTrack(SAMPLE_STORIES);
  assert.equal(track.length, 4);
  assert.equal(track[0].isDuplicate, false);
  assert.equal(track[1].isDuplicate, false);
  assert.equal(track[2].isDuplicate, true);
  assert.equal(track[3].isDuplicate, true);
  assert.equal(track[0].key, 'primary-story-1');
  assert.equal(track[2].key, 'duplicate-story-1');
  assert.equal(track[0].item.id, track[2].item.id);
});

test('getClientInitials formats single and multi-word names cleanly', () => {
  assert.equal(getClientInitials('Valentina Gómez'), 'VG');
  assert.equal(getClientInitials('María del Valle Paz'), 'MP');
  assert.equal(getClientInitials('Sofía'), 'SO');
  assert.equal(getClientInitials('   '), 'L');
});
