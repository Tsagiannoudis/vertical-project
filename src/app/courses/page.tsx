import HeroSectionCourses from "@/components/courses/HeroSectionCourses";
import TrainingsHeaderCards from "@/components/courses/TrainingHeaderCards";
import TrainingsCards from "@/components/courses/TrainingsCards";

export default function CoursesPage() {
  return (
    <main>
      <HeroSectionCourses />
      <TrainingsHeaderCards />
      <TrainingsCards />
    </main>
  );
}
