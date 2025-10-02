import HeroSectionWorkshops from "@/components/workshops/HeroSectionWorkshops";
import ComingSoonSection from "@/components/workshops/ComingSoonSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Workshops | Vertical Project',
  description: 'εδώ θα βρείτε τα ερχόμενα workshops που θα γίνονται απο την Vertical Project.',
}

export default function CoursesPage() {
  return (
    <main>
      <HeroSectionWorkshops />
      <ComingSoonSection />
    </main>
    );
}   