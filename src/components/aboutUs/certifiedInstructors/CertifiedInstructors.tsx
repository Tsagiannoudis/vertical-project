"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  certifiedInstructors,
  CertifiedInstructor,
} from "@/data/certifiedInstructors";
import HeroSectionCertified from "./HeroSectionCertified";

const CertifiedInstructors: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedCert, setSelectedCert] = useState<string>("");

  // Unique locations and certifications
  const locations = useMemo(
    () =>
      Array.from(new Set(certifiedInstructors.map((i) => i.location))).sort(),
    [],
  );
  const certifications = useMemo(
    () =>
      Array.from(
        new Set(certifiedInstructors.flatMap((i) => i.certifications)),
      ).sort(),
    [],
  );

  // Filtered instructors based on search + selects
  const filteredInstructors = useMemo(() => {
    return certifiedInstructors.filter((inst) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        !selectedLocation || inst.location === selectedLocation;
      const matchesCert =
        !selectedCert || inst.certifications.includes(selectedCert);

      return matchesSearch && matchesLocation && matchesCert;
    });
  }, [searchQuery, selectedLocation, selectedCert]);

  const hasActiveFilters =
    searchQuery !== "" || selectedLocation !== "" || selectedCert !== "";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLocation("");
    setSelectedCert("");
  };

  return (
    <>
      <HeroSectionCertified />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mt-4 mb-3">
              Πιστοποιημένοι Εκπαιδευτές
            </h2>
            <hr className="border-[#f2e94e] border-2 mt-4 w-56 mx-auto mb-6" />
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Ανακαλύψτε τους πιστοποιημένους δασκάλους μας, αναζητήστε ανά
              περιοχή ή εξειδίκευση και βρείτε τον κατάλληλο οδηγό για το ταξίδι
              σας.
            </p>
          </div>

          {/* Minimalist Filter Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-neutral-200/70 mb-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Αναζήτηση με όνομα..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white text-sm text-neutral-800 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-0 transition-colors outline-none placeholder-neutral-400"
                />
              </div>

              {/* Location Select */}
              <div className="relative">
                <select
                  id="location-filter"
                  aria-label="Επιλογή τοποθεσίας"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white text-sm text-neutral-800 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-0 transition-colors outline-none cursor-pointer appearance-none"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">Όλες οι τοποθεσίες</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Certification Select */}
              <div className="relative">
                <select
                  id="cert-filter"
                  aria-label="Επιλογή πιστοποίησης"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white text-sm text-neutral-800 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-0 transition-colors outline-none cursor-pointer appearance-none truncate"
                  value={selectedCert}
                  onChange={(e) => setSelectedCert(e.target.value)}
                >
                  <option value="">Όλες οι πιστοποιήσεις</option>
                  {certifications.map((cert) => (
                    <option key={cert} value={cert}>
                      {cert}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filter Meta & Reset */}
            <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 px-1">
              <span>
                Εμφάνιση <strong>{filteredInstructors.length}</strong>{" "}
                {filteredInstructors.length === 1
                  ? "εκπαιδευτή"
                  : "εκπαιδευτών"}
              </span>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-black font-medium transition-colors cursor-pointer"
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
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Καθαρισμός φίλτρων
                </button>
              )}
            </div>
          </div>

          {/* Instructors Grid */}
          {filteredInstructors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...filteredInstructors].reverse().map((instructor) => (
                <Link
                  key={instructor.id}
                  href={`/certified-instructors/${instructor.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Location Badge */}
                    <div className="absolute top-3 left-3 backdrop-blur-md bg-white/85 text-neutral-800 text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
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
                      <h3 className="font-bold text-neutral-900 text-base sm:text-lg group-hover:text-black transition-colors line-clamp-1">
                        {instructor.name}
                      </h3>

                      {/* Certification Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {instructor.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="inline-block bg-neutral-100 text-neutral-600 rounded-md px-2 py-0.5 text-[11px] font-medium tracking-tight"
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
          ) : (
            /* Empty State */
            <div className="bg-white rounded-2xl p-12 text-center max-w-md mx-auto border border-neutral-200/80 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-neutral-800 mb-1">
                Δεν βρέθηκαν εκπαιδευτές
              </h3>
              <p className="text-sm text-neutral-500 mb-5">
                Δεν υπάρχουν αποτελέσματα για τα κριτήρια που επιλέξατε.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Επαναφορά φίλτρων
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CertifiedInstructors;
