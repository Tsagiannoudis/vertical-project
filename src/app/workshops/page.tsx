import HeroSectionWorkshops from "@/components/workshops/HeroSectionWorkshops";
import WorkshopsList from "@/components/workshops/WorkshopsList";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Workshops | Vertical Project',
  description: 'Εδώ θα βρείτε τα ερχόμενα workshops που θα γίνονται απο την Vertical Project.',
}

export default function CoursesPage() {
  return (
    <main>
      <HeroSectionWorkshops />
      <WorkshopsList />
    </main>
    );
}   