import HeroSectionCourses from "@/components/courses/HeroSectionCourses";
import TrainingsHeaderCards from "@/components/courses/TrainingHeaderCards";
import TrainingsCards from "@/components/courses/TrainingsCards";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Εκπαιδετικά | Vertical Project',
  description: 'Εκπαιδευτικά προγράμματα για δασκάλους Aerial Yoga, Handstands, Thai Yoga Massage, Functional Anatomy & Yoga 200hrs & 300hrs στο Vertical Project.',
}

export default function CoursesPage() {
  return (
    <main>
      <HeroSectionCourses />
      <TrainingsHeaderCards />
      <TrainingsCards />
    </main>
  );
}
