import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import HeroSectionCertified from "@/components/aboutUs/certifiedInstructors/HeroSectionCertified";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  certifiedInstructors as details,
  type CertifiedInstructor as Detail,
} from "@/data/certifiedInstructors";

// Data Fetching Function
async function getDetailsData(slug: string): Promise<Detail | undefined> {
  return details.find((inst) => inst.slug === slug);
}

// Static Generation Functions
export async function generateStaticParams() {
  return details.map((details) => ({
    slug: details.slug,
  }));
}

// Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const instructorDetail = await getDetailsData(slug);

  if (!instructorDetail) {
    notFound();
  }

  return {
    title: `${instructorDetail.name} | Πιστοποιημένος Εκπαιδευτής`,
    description:
      instructorDetail.bio ||
      `Προφίλ και πιστοποιήσεις του εκπαιδευτή ${instructorDetail.name}`,
  };
}

type DetailInstructorPageProps = {
  params: Promise<{ slug: string }>;
};

const DetailInstructorPage = async ({ params }: DetailInstructorPageProps) => {
  const { slug } = await params;
  const instructorDetail = await getDetailsData(slug);

  if (!instructorDetail) return notFound();

  return (
    <>
      <HeroSectionCertified />

      <main className="bg-[#fafafa] min-h-screen py-10 sm:py-14">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top Navigation / Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/certified-instructors"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors group"
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
              <span>Επιστροφή σε όλους τους εκπαιδευτές</span>
            </Link>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Profile Card (Sticky on desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-8">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm flex flex-col items-center text-center">
                {/* Portrait Photo */}
                <div className="relative w-54 h-54 sm:w-68 sm:h-74 rounded-2xl overflow-hidden shadow-inner ring-4 ring-neutral-100 mb-6 bg-neutral-100">
                  <Image
                    src={instructorDetail.imageUrl}
                    alt={instructorDetail.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 192px, 224px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Name & Location */}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-2">
                  {instructorDetail.name}
                </h1>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full mb-6">
                  <svg
                    className="w-3.5 h-3.5 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{instructorDetail.location}</span>
                </div>

                {/* Contact & Social Links */}
                <div className="w-full pt-6 border-t border-neutral-100 flex flex-col gap-3">
                  {instructorDetail.contactEmail && (
                    <a
                      href={`mailto:${instructorDetail.contactEmail}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-xs font-medium text-neutral-700 transition-colors border border-neutral-200/60"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-neutral-500 text-sm"
                      />
                      <span className="truncate">
                        {instructorDetail.contactEmail}
                      </span>
                    </a>
                  )}

                  {instructorDetail.socialMedia && (
                    <div className="flex items-center justify-center gap-3 pt-2">
                      {instructorDetail.socialMedia.facebook && (
                        <a
                          href={instructorDetail.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook Profile"
                          className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-[#3c3c3c] hover:text-white text-neutral-600 border border-neutral-200/60 flex items-center justify-center transition-all duration-200"
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-lg"
                          />
                        </a>
                      )}
                      {instructorDetail.socialMedia.instagram && (
                        <a
                          href={instructorDetail.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram Profile"
                          className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-[#3c3c3c] hover:text-white text-neutral-600 border border-neutral-200/60 flex items-center justify-center transition-all duration-200"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-lg"
                          />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* Right Column: Bio & Certifications */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Bio Section */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-6 rounded-full bg-[#F2E94E]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    Σχετικά με τον/την εκπαιδευτή
                  </h2>
                </div>

                <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed text-sm sm:text-base space-y-4">
                  {instructorDetail.fullBio || instructorDetail.bio ? (
                    <p className="whitespace-pre-line leading-relaxed">
                      {instructorDetail.fullBio || instructorDetail.bio}
                    </p>
                  ) : (
                    <p className="italic text-neutral-400">
                      Δεν υπάρχει διαθέσιμο βιογραφικό σημείωμα.
                    </p>
                  )}
                </div>
              </div>

              {/* Certifications Section */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-6 rounded-full bg-[#3c3c3c]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    Πιστοποιήσεις & Εξειδικεύσεις
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {instructorDetail.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/60 hover:border-neutral-300 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#F2E94E]/80 flex items-center justify-center shrink-0 text-black mt-0.5">
                        <svg
                          className="w-4 h-4"
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
                      <div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block mb-0.5">
                          Πιστοποίηση
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug">
                          {cert}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation Shortcut */}
              <div className="flex justify-between items-center pt-2">
                <Link
                  href="/certified-instructors"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wide transition-colors"
                >
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span>Όλοι οι Εκπαιδευτές</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailInstructorPage;
