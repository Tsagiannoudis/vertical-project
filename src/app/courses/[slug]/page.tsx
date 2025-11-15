import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroSectionCourses from "@/components/courses/HeroSectionCourses";
import CourseTab from "@/components/courses/CourseTab";
import ShareButtons from "@/components/extraComponents/ShareButtons";

import {
  trainings as courses,
  type Training as Course,
} from "@/data/trainingCards";


async function getCourseData(slug: string): Promise<Course | undefined> {
  return courses.find((course) => course.slug === slug);
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseData(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: `${course.title} | Vertical Project`,
    description: course.shortDescription,
  };
}


type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

const CoursePage = async ({ params }: CoursePageProps) => {
  const { slug } = await params;
  const course = await getCourseData(slug);

  if (!course) return notFound();

  const currentIndex = courses.findIndex((c) => c.slug === slug);
  const nextCourse =
    currentIndex !== -1 ? courses[(currentIndex + 1) % courses.length] : null

  return (
    <>
      <HeroSectionCourses />
      <main className="bg-[#F3F3F3]">
        <section className="container mx-auto max-w-4xl px-4 py-16">
          {/* Hero Section title Section + photo */}
          <div className="relative w-full h-[800px] bg-gray-800 mb-16 rounded-lg overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              priority
              className="object-cover opacity-80"
            />
          </div>

          <div className="grid md:grid-cols-1 gap-16 py-16">
            {/* Details List */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {course.title}
              </h1>

              <hr className="border-[#f2e94e] border-2 w-78 mb-6" />

              <div className="space-y-4">
                {course.moreDetails.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-700 text-justify"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </div>
            </div>

            {/* What we learn*/}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Τι θα μάθεις
              </h2>

              <hr className="border-[#f2e94e] border-2 w-78 mb-6" />

              <ul className="space-y-3 list-disc list-inside text-gray-700">
                {course.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accordion */}
          <div>
            <CourseTab />
          </div>

          {/* Share Buttons */}
          <div className="mt-8">
            <ShareButtons />
          </div>

          {/* Navigation Links */}
          <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-8 border-t border-gray-300 pt-8">
            <Link
              href="/courses"
              className="font-semibold text-gray-700 hover:text-black transition-colors duration-300"
            >
              &larr; Όλα τα Εκπαιδευτικά
            </Link>

            {nextCourse && (
              <Link
                href={`/courses/${nextCourse.slug}`}
                className="font-semibold text-gray-700 hover:text-black transition-colors duration-300"
              >
                Επόμενο: {nextCourse.title} &rarr;
              </Link>
            )}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-[#F2E94E] text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#b9b788] transition-colors duration-300"
            >
              Εκδήλωση Ενδιαφέροντος
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CoursePage;
