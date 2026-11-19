import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BenefitsGridSection } from './components/BenefitsGridSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import {
  BookingModal,
  ServiceDetailModal,
  StudioInfoModal,
} from './components/Modals';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { type ModalityCard } from './data/studioContent';
import {
  DISCIPLINE_OPTIONS,
  getScheduleOptionForSlot,
  SCHEDULE_OPTIONS,
} from './utils/booking';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDiscipline, setBookingDiscipline] = useState<string>(
    DISCIPLINE_OPTIONS[0]
  );
  const [bookingSchedule, setBookingSchedule] = useState<string>(
    SCHEDULE_OPTIONS[0]
  );
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [activeCard, setActiveCard] = useState<ModalityCard | null>(null);
  const [studioInfoOpen, setStudioInfoOpen] = useState(false);

  const handleOpenBooking = (
    discipline?: string,
    options?: { schedule?: string; notes?: string }
  ) => {
    if (discipline) {
      setBookingDiscipline(discipline);
    }
    setBookingSchedule(options?.schedule ?? SCHEDULE_OPTIONS[0]);
    setBookingNotes(options?.notes ?? '');
    setActiveCard(null);
    setStudioInfoOpen(false);
    setBookingOpen(true);
  };

  const handleSelectScheduleSlot = (dayLabel: string, slot: string) => {
    handleOpenBooking(undefined, {
      schedule: getScheduleOptionForSlot(slot),
      notes: `Consulta por horario: ${dayLabel} ${slot} hs`,
    });
  };

  return (
    <div className="min-h-screen bg-[#F6F7F4] text-[#1A2816]">
      <Header onOpenBooking={handleOpenBooking} />

      <main>
        <HeroSection onOpenBooking={() => handleOpenBooking()} />
        <ServicesSection onSelectCard={(card) => setActiveCard(card)} />
        <BenefitsGridSection />
        <AboutSection onOpenStudioInfo={() => setStudioInfoOpen(true)} />
        <TestimonialsSection
          onSelectDiscipline={(discipline) => handleOpenBooking(discipline)}
        />
        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
          onSelectSlot={handleSelectScheduleSlot}
        />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        initialDiscipline={bookingDiscipline}
        initialSchedule={bookingSchedule}
        initialNotes={bookingNotes}
        onClose={() => setBookingOpen(false)}
      />

      <ServiceDetailModal
        card={activeCard}
        onClose={() => setActiveCard(null)}
        onBook={(option) => handleOpenBooking(option)}
      />

      <StudioInfoModal
        isOpen={studioInfoOpen}
        onClose={() => setStudioInfoOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
