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
    openGraph: {
      title: `${course.title} | Vertical Project`,
      description: course.shortDescription,
      url: `/courses/${slug}`,
      images: [
       {
          url: course.image, // Must be an absolute URL
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
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
    currentIndex !== -1 ? courses[(currentIndex + 1) % courses.length] : null;

  return (
    <>
      <HeroSectionCourses />
      <main className="bg-[#F3F3F3]">
        <section className="container mx-auto max-w-4xl px-4 py-16">
          {/* Hero Section title Section + photo */}
          <div className="relative w-full h-[300px] md:h-[500px] bg-gray-800 mb-16 rounded-lg overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              priority
              className="object-cover"
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

            {/* For who specific */}
            {course.focusOn && course.focusOn.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Σε ποιους απευθύνεται
                </h2>
                <hr className="border-[#f2e94e] border-2 w-78 mb-6" />

                {course.focusOn.map((level, index) => (
                  <div key={index} className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {level.level}
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-700 mb-8">
                      {level.targetAudienceTitle}
                    </h3>

                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                      {level.targetAudienceList.map((item, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                    {level.description && (
                      <ul className="space-y-5 mt-8">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-3">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#f2e94e]">
                              <svg
                                className="w-4 h-4 text-gray-800"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <p
                            className="text-gray-700"
                            dangerouslySetInnerHTML={{
                              __html: level.description,
                            }}
                          />
                        </li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* What we learn */}
            {course.learningGoals && course.learningGoals.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Τι θα μάθεις
                </h2>
                <hr className="border-[#f2e94e] border-2 w-78 mb-6" />

                {course.learningGoals.map((level, index) => (
                  <div key={index} className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {level.level}
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-700 mb-8">
                      {level.targetAudienceTitle}
                    </h3>

                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                      {level.targetAudienceList.map((item, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                    {level.description && (
                      <ul className="space-y-5 mt-8">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-3">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#f2e94e]">
                              <svg
                                className="w-4 h-4 text-gray-800"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <p
                            className="text-gray-700"
                            dangerouslySetInnerHTML={{
                              __html: level.description,
                            }}
                          />
                        </li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Methology of training */}
            {course.methologyTraining &&
              course.methologyTraining.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Μεθοδολογία Εκπαίδευσης
                  </h2>

                  <hr className="border-[#f2e94e] border-2 w-78 mb-6" />

                  {course.methologyTraining.map((methology, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-gray-700 mb-8">
                        {methology.methologyTitle}
                      </h3>
                      <ul className="space-y-3 list-disc list-inside text-gray-700">
                        {methology.methologyList.map((item, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))}
                      </ul>
                      {methology.methologyParagraph && (
                        <p
                          className="text-gray-700 mt-4"
                          dangerouslySetInnerHTML={{
                            __html: methology.methologyParagraph,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

            {/* Certification */}
            {course.certification &&
              course.certification.filter((c) => c.trim() !== "").length >
                0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Πιστοποίηση
                  </h2>

                  <hr className="border-[#f2e94e] border-2 w-78 mb-6" />

                  <div className="space-y-3 list-disc list-inside text-gray-700">
                    {course.certification
                      .filter((c) => c.trim() !== "")
                      .map((certification, index) => (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{ __html: certification }}
                        />
                      ))}
                  </div>
                </div>
              )}
          </div>

          {/* Tabs Location */}
          <div>
            <CourseTab trainingSlug={slug} />
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
