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

  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const displayImage = course.image;
  const imageUrl = `${siteUrl}${displayImage}`;

  return {
    title: `${course.title} | Vertical Project`,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} | Vertical Project`,
      description: course.shortDescription,
      url: `/courses/${slug}`,
      images: [
        {
          url: imageUrl,
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
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const CoursePage = async ({ params, searchParams }: CoursePageProps) => {
  const { slug } = await params;
  const { city } = await searchParams;
  const course = await getCourseData(slug);

  if (!course) return notFound();

  const activeLocations = course.locations;
  const selectedCityKey = typeof city === "string" ? city : undefined;
  const selectedCityIndex = parseInt(selectedCityKey?.split("-")[1] || "0", 10);
  const currentLocation =
    activeLocations[selectedCityIndex] ||
    activeLocations[0] ||
    course.locations[0];

  const displayImage = currentLocation?.photoTraining?.[0]?.url || course.image;
  const displayAlt = currentLocation?.photoTraining?.[0]?.alt || course.title;

  const currentIndex = courses.findIndex((c) => c.slug === slug);
  const nextCourse =
    currentIndex !== -1 ? courses[(currentIndex + 1) % courses.length] : null;
  const prevCourse =
    currentIndex !== -1
      ? courses[(currentIndex - 1 + courses.length) % courses.length]
      : null;

  return (
    <>
      <HeroSectionCourses />

      <main className="bg-[#fafafa] min-h-screen py-10 sm:py-16">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          {/* Top Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors group"
            >
              <svg
                className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Όλα τα Εκπαιδευτικά Προγράμματα</span>
            </Link>
          </div>

          {/* Course Header & Title */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4">
              {course.title}
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              {course.shortDescription}
            </p>
          </div>

          {/* Cinematic Hero Image */}
          <div className="relative aspect-[16/9] max-h-[500px] w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-md border border-neutral-200/80 mb-12">
            <Image
              src={displayImage}
              alt={displayAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
            />
          </div>

          {/* Content Structure */}
          <div className="space-y-10">
            {/* 1. Course Details & Story */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-6 rounded-full bg-[#F2E94E]" />
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Σχετικά με το Πρόγραμμα
                </h2>
              </div>
              <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed text-sm sm:text-base space-y-4">
                {course.moreDetails.map((item, index) => (
                  <p
                    key={index}
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </div>
            </div>

            {/* 2. For Who Specific */}
            {course.focusOn && course.focusOn.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-6 rounded-full bg-[#3c3c3c]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    Σε ποιους απευθύνεται
                  </h2>
                </div>

                {course.focusOn.map((level, index) => (
                  <div key={index} className="space-y-4">
                    {level.targetAudienceTitle && (
                      <h3 className="text-sm font-semibold tracking-wider text-neutral-400">
                        {level.targetAudienceTitle}
                      </h3>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {level.targetAudienceList.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3.5 rounded-2xl bg-neutral-50/80 border border-neutral-200/60"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#F2E94E] flex items-center justify-center shrink-0 text-black mt-0.5">
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p
                            className="text-xs sm:text-sm font-medium text-neutral-700"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        </div>
                      ))}
                    </div>

                    {level.description && (
                      <div className="mt-4 p-4 rounded-2xl bg-neutral-50 border-l-4 border-[#F2E94E] text-xs sm:text-sm text-neutral-600">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: level.description,
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* 3. Learning Goals */}
            {course.learningGoals && course.learningGoals.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-6 rounded-full bg-[#F2E94E]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    Τι θα μάθετε
                  </h2>
                </div>

                {course.learningGoals.map((level, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {level.targetAudienceList.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3.5 rounded-2xl bg-neutral-50/80 border border-neutral-200/60"
                        >
                          <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 text-white mt-0.5">
                            <span className="text-[11px] font-bold">✓</span>
                          </div>
                          <p
                            className="text-xs sm:text-sm font-medium text-neutral-700"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Methodology */}
            {course.methologyTraining &&
              course.methologyTraining.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2.5 h-6 rounded-full bg-[#3c3c3c]" />
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                      Μεθοδολογία Εκπαίδευσης
                    </h2>
                  </div>

                  {course.methologyTraining.map((methology, index) => (
                    <div key={index} className="space-y-4">
                      <ul className="space-y-2.5">
                        {methology.methologyList.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700"
                          >
                            <span className="text-neutral-400 font-bold shrink-0">
                              •
                            </span>
                            <span dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                      {methology.methologyParagraph && (
                        <p
                          className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-2"
                          dangerouslySetInnerHTML={{
                            __html: methology.methologyParagraph,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

            {/* 5. Certification */}
            {course.certification &&
              course.certification.filter((c) => c.trim() !== "").length >
                0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2.5 h-6 rounded-full bg-[#F2E94E]" />
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                      Πιστοποίηση
                    </h2>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {course.certification
                      .filter((c) => c.trim() !== "")
                      .map((cert, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/60"
                          dangerouslySetInnerHTML={{ __html: cert }}
                        />
                      ))}
                  </div>
                </div>
              )}

            {/* 6. Location & Dates Tabs */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-6 rounded-full bg-[#3c3c3c]" />
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Τοποθεσίες & Ημερομηνίες
                </h2>
              </div>
              <CourseTab trainingSlug={slug} />
            </div>
          </div>

          {/* Share & Social */}
          <div className="mt-10 flex justify-center">
            <ShareButtons />
          </div>

          {/* Prev / Next Navigation */}
          <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-neutral-600">
            {prevCourse ? (
              <Link
                href={`/courses/${prevCourse.slug}`}
                className="hover:text-black transition-colors flex items-center gap-2"
              >
                <span>&larr;</span>
                <span className="truncate max-w-[200px]">
                  {prevCourse.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/courses"
              className="text-neutral-400 hover:text-black uppercase tracking-wider text-[11px]"
            >
              Όλα τα Εκπαιδευτικά
            </Link>

            {nextCourse ? (
              <Link
                href={`/courses/${nextCourse.slug}`}
                className="hover:text-black transition-colors flex items-center gap-2"
              >
                <span className="truncate max-w-[200px]">
                  {nextCourse.title}
                </span>
                <span>&rarr;</span>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Final Call to Action */}
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-[#F2E94E] text-black font-bold text-xs tracking-wider py-3.5 px-8 rounded-full hover:bg-[#3c3c3c] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
            >
              Εκδήλωση Ενδιαφέροντος
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default CoursePage;
