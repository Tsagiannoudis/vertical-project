import HeroSectionEvents from "@/components/events/HeroSectionEvents";
// import EventsList from "@/components/events/EventsList";
import EventGrid from "@/components/events/EventsGrid";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Events | Vertical Project',
  description: 'Εδώ θα βρείτε τα ερχόμενα events που θα γίνονται απο την Vertical Project.',
}

export default function CoursesPage() {
  return (
    <main>
      <HeroSectionEvents />
      <EventGrid />
    </main>
    );
}   