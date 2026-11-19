import { STUDIO_INFO } from '../data/studioContent';

interface AboutSectionProps {
  onOpenStudioInfo: () => void;
}

export function AboutSection({ onOpenStudioInfo }: AboutSectionProps) {
  return (
    <section
      id="sobre-nosotros"
      className="bg-[#1C3217] py-14 text-white md:py-16"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Left Narrative Column */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#D8E5CE] uppercase">
            <span className="h-[1.5px] w-5 bg-[#A8DB72]" aria-hidden="true" />
            <span>Sobre nosotros</span>
          </div>

          <h2
            className="mt-3 text-[32px] font-bold leading-[1.12] tracking-tight text-white md:text-[38px]"
            style={{ textWrap: 'balance' }}
          >
            Un espacio de{' '}
            <span className="text-[#A8DB72]">movimiento y bienestar</span>
          </h2>

          <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-[#DCE6D6]">
            Somos un estudio especializado en Pilates, rehabilitación kinesiológica y masajes, con
            un enfoque integral en la salud, la prevención y la calidad de vida.
          </p>

          <div className="mt-7">
            <button
              type="button"
              onClick={onOpenStudioInfo}
              className="inline-flex min-h-11 items-center rounded-full border border-white/50 px-7 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8DB72]"
            >
              Conocé más
            </button>
          </div>
        </div>

        {/* Right Studio Image Card */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#152711] shadow-xl">
            <img
              src={STUDIO_INFO.heroImage}
              alt="Camas Reformer y luz natural en nuestro estudio de Nueva Córdoba"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
