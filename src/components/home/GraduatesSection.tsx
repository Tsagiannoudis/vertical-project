import React from "react";
import Image from "next/image";
import Link from "next/link";
import { certifiedInstructors } from "@/data/certifiedInstructors";

export default function GraduatesSection() {
  // Show 4 featured graduates on the home page
  const featuredGraduates = certifiedInstructors.slice(0, 4);

  return (
    <section className="w-full mx-auto py-16 sm:py-24 bg-[#F3F3F3]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
            Οι Απόφοιτοι μας
          </h2>
          <hr className="border-[#f2e94e] border-2 w-32 mx-auto justify-center mb-6" />
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Γνωρίστε τους δασκάλους που ολοκλήρωσαν με επιτυχία τα εκπαιδευτικά
            προγράμματα του Vertical Project και εμπνέουν καθημερινά μαθητές σε
            όλη την Ελλάδα.
          </p>
        </div>

        {/* Graduates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredGraduates.map((instructor) => (
            <Link
              key={instructor.id}
              href={`/certified-instructors/${instructor.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Portrait Image with Floating Location Badge */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={instructor.imageUrl}
                  alt={instructor.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Location Badge */}
                <div className="absolute top-3 left-3 backdrop-blur-md bg-white/90 text-neutral-800 text-[11px] font-medium px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                  <svg
                    className="w-3 h-3 text-[#3c3c3c]"
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
                  {instructor.location}
                </div>
              </div>

              {/* Instructor Details */}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-neutral-900 text-base group-hover:text-black transition-colors line-clamp-1">
                    {instructor.name}
                  </h3>

                  {/* Certification Tag */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {instructor.certifications.slice(0, 1).map((cert) => (
                      <span
                        key={cert}
                        className="inline-block bg-neutral-100 text-neutral-600 rounded-md px-2 py-0.5 text-[11px] font-medium tracking-tight truncate max-w-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Minimalist Profile Link CTA */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-700 group-hover:text-black">
                  <span>Προβολή Προφίλ</span>
                  <div className="w-6 h-6 rounded-full bg-[#F2E94E] flex items-center justify-center text-black group-hover:bg-[#3c3c3c] group-hover:text-white transition-all duration-300">
                    <svg
                      className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/certified-instructors"
            className="inline-block bg-[#F2E94E] text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#f0e631] transition-colors duration-300 transform hover:scale-105 shadow-md"
          >
            Όλοι οι Πιστοποιημένοι Εκπαιδευτές
          </Link>
        </div>
      </div>
    </section>
  );
}
