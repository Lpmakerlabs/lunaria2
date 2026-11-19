export type TestimonialCategory = 'pilates' | 'rehabilitacion' | 'masajes';

export interface TestimonialStory {
  id: string;
  name: string;
  context: string;
  category: TestimonialCategory;
  disciplineLabel: string;
  sourceLabel: string;
  timeframe: string;
  rating: number;
  quote: string;
  outcome: string;
  bookingOption: string;
}

export interface MarqueeCardItem<T> {
  key: string;
  isDuplicate: boolean;
  item: T;
}

export function buildMarqueeTrack<T extends { id: string }>(
  items: readonly T[]
): MarqueeCardItem<T>[] {
  if (items.length === 0) return [];
  const primary = items.map((item) => ({
    key: `primary-${item.id}`,
    isDuplicate: false,
    item,
  }));
  const duplicate = items.map((item) => ({
    key: `duplicate-${item.id}`,
    isDuplicate: true,
    item,
  }));
  return [...primary, ...duplicate];
}

export function getClientInitials(fullName: string): string {
  const parts = fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return 'L';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}
