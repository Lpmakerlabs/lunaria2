import { DETAILED_BENEFITS, STUDIO_INFO } from '../data/studioContent';
import {
  FlexibilityOutlineIcon,
  HeartOutlineIcon,
  LotusOutlineIcon,
  MindCalmOutlineIcon,
  SpineOutlineIcon,
  StrengthOutlineIcon,
} from './MockupIcons';

const DETAILED_ICONS = {
  postura: SpineOutlineIcon,
  fuerza: StrengthOutlineIcon,
  flexibilidad: FlexibilityOutlineIcon,
  tensiones: LotusOutlineIcon,
  estres: MindCalmOutlineIcon,
  bienestar: HeartOutlineIcon,
} as const;

export function BenefitsGridSection() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden border-y border-[#E5EAE0] bg-[#EFF1EC]"
    >
      {/* Desktop Left-Bleed Photo seamlessly fading into #EFF1EC */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-[34%]"
      >
        <img
          src={STUDIO_INFO.stretchImage}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#EFF1EC]/5 via-[#EFF1EC]/35 to-[#EFF1EC]" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-5 py-10 md:px-8 lg:grid-cols-12 lg:gap-8 lg:py-14">
        {/* Mobile Studio Photo */}
        <div className="lg:col-span-4">
          <div className="relative h-56 overflow-hidden rounded-2xl bg-[#E4E8DF] lg:hidden">
            <img
              src={STUDIO_INFO.stretchImage}
              alt="Estiramiento y postura en Reformer en Lunaria"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <span className="sr-only">
            Estiramiento y postura en cama Reformer en Lunaria Pilates
          </span>
        </div>

        {/* Middle Heading Block */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#456B2E] uppercase">
            <span className="h-[1.5px] w-5 bg-[#456B2E]" aria-hidden="true" />
            <span>Beneficios</span>
          </div>

          <h2
            className="mt-2.5 text-[28px] font-bold leading-[1.15] tracking-tight text-[#1A2617] lg:text-[31px]"
            style={{ textWrap: 'balance' }}
          >
            Más que ejercicio,{' '}
            <span className="text-[#456B2E]">bienestar integral</span>
          </h2>
        </div>

        {/* Right 3x2 Benefits Grid with interior-only hairlines */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 sm:grid-cols-3">
            {DETAILED_BENEFITS.map((item, idx) => {
              const Icon = DETAILED_ICONS[item.id];
              const mobileRight = idx % 2 === 0 ? 'border-r' : 'border-r-0';
              const mobileBottom = idx < 4 ? 'border-b' : 'border-b-0';
              const desktopRight = idx % 3 < 2 ? 'sm:border-r' : 'sm:border-r-0';
              const desktopBottom = idx < 3 ? 'sm:border-b' : 'sm:border-b-0';

              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center justify-center border-[#D7DDD0] px-3 py-5 text-center ${mobileRight} ${mobileBottom} ${desktopRight} ${desktopBottom}`}
                >
                  <Icon className="h-9 w-9 text-[#456B2E]" />
                  <p className="mt-2.5 text-[13px] font-medium leading-snug text-[#1E2C1B]">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
