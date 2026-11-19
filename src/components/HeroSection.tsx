import { Calendar } from 'lucide-react';
import { BENEFITS, HERO_COPY, STUDIO_INFO } from '../data/studioContent';
import {
  DumbbellOutlineIcon,
  LeafOutlineIcon,
  LotusOutlineIcon,
  ZenStonesOutlineIcon,
} from './MockupIcons';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

const BENEFIT_ICONS = {
  postura: LotusOutlineIcon,
  fuerza: DumbbellOutlineIcon,
  estres: ZenStonesOutlineIcon,
  movilidad: LeafOutlineIcon,
} as const;

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative bg-[#F6F7F4]">
      <div className="relative overflow-hidden bg-[#1D351A]">
        <img
          src={STUDIO_INFO.heroImage}
          alt="Estudio Lunaria con camas Reformer y luz natural"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover object-[70%_35%]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(23, 46, 20, 0.97) 0%, rgba(26, 51, 23, 0.92) 38%, rgba(30, 56, 26, 0.62) 62%, rgba(23, 46, 20, 0.22) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 pt-12 pb-16 md:px-8 md:pt-16 md:pb-28">
          <div className="max-w-xl">
            <h1
              className="text-[38px] font-bold leading-[1.08] tracking-tight text-white sm:text-[46px] lg:text-[52px]"
              style={{ textWrap: 'balance' }}
            >
              {HERO_COPY.headlineLine1}
              <br />
              {HERO_COPY.headlineLine2}
              <br />
              {HERO_COPY.headlineLine3Prefix}
              <span className="text-[#A8DB72]">{HERO_COPY.headlineAccent}</span>
            </h1>

            <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-[#E4EDE0] sm:text-base">
              {HERO_COPY.subheadline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#BCE57B] px-6 py-2.5 text-sm font-semibold text-[#182B14] whitespace-nowrap shrink-0 shadow-sm transition-colors hover:bg-[#CBEB94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BCE57B]"
              >
                <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{HERO_COPY.primaryCta}</span>
              </button>

              <a
                href="#servicios"
                className="inline-flex min-h-11 items-center rounded-full border border-white/45 bg-black/25 px-7 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 backdrop-blur-xs transition-colors hover:bg-black/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {HERO_COPY.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Floating 4-Benefit Bar */}
      <div className="relative z-20 mx-auto -mt-8 max-w-[1140px] px-5 md:-mt-14 md:px-8">
        <div className="grid grid-cols-2 rounded-2xl border border-[#E5EAE0] bg-white shadow-[0_14px_38px_rgba(18,34,15,0.08)] lg:grid-cols-4">
          {BENEFITS.map((benefit, idx) => {
            const Icon = BENEFIT_ICONS[benefit.id];
            const mobileRight = idx % 2 === 0 ? 'border-r' : 'border-r-0';
            const mobileBottom = idx < 2 ? 'border-b' : 'border-b-0';
            const desktopRight = idx < 3 ? 'lg:border-r' : 'lg:border-r-0';

            return (
              <div
                key={benefit.id}
                className={`flex flex-col items-center justify-center border-[#E7ECE3] px-3 py-3.5 text-center sm:px-5 sm:py-4 lg:border-b-0 lg:px-6 lg:py-6 ${mobileRight} ${mobileBottom} ${desktopRight}`}
              >
                <Icon className="h-6 w-6 text-[#466E2E] sm:h-7 sm:w-7 lg:h-9 lg:w-9" />
                <p className="mt-1.5 text-[13px] font-semibold leading-tight text-[#1D2D19] sm:mt-2 sm:text-[14px] lg:mt-2.5 lg:text-[15px] lg:leading-normal">
                  {benefit.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
