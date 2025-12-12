"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { certifiedInstructors, CertifiedInstructor } from "@/data/certifiedInstructors";
import HeroSectionCertified from "./HeroSectionCertified";

const CertifiedInstructors: React.FC = () => {
  const [filteredInstructors, setFilteredInstructors] = useState<CertifiedInstructor[]>(certifiedInstructors);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedCert, setSelectedCert] = useState<string>("");

  // Dynamically get unique locations and certifications from the data
  const locations = Array.from(new Set(certifiedInstructors.map((i) => i.location)));
  const certifications = Array.from(new Set(certifiedInstructors.flatMap((i) => i.certifications)));

  useEffect(() => {
    let instructors = certifiedInstructors;

    if (selectedLocation) {
      instructors = instructors.filter((i) => i.location === selectedLocation);
    }

    if (selectedCert) {
      instructors = instructors.filter((i) => i.certifications.includes(selectedCert));
    }

    setFilteredInstructors(instructors);
  }, [selectedLocation, selectedCert]);

  return (
    <>
    <HeroSectionCertified/>
    <section className="text-center py-10 px-5 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Ανακαλύψτε τους Πιστοποιημένους Δασκάλους μας
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 mb-8">
            Βρείτε τον/την δάσκαλο/α που ταιριάζει στις ανάγκες σας, εξερευνώντας την τοποθεσία διαμονής και τις εξειδικεύσεις του.
          </p>
        </div>
      <div className="container mx-auto px-4">
        {/* Filter UI */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="flex-1">
            <label htmlFor="location-filter" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Τοποθεσία
            </label>
            <select
              id="location-filter"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:[#F2E94E] focus:border-[black] text-[#3c3c3c]"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Όλες οι τοποθεσίες</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="cert-filter" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Πιστοποίηση
            </label>
            <select
              id="cert-filter"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:[#F2E94E] focus:border-[black] text-[#3c3c3c]"
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
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 mt-6 mb-10">
          {filteredInstructors.length > 0 ? (
            filteredInstructors.map((instructor) => (
              <div key={instructor.id} className="bg-white rounded-lg shadow-md overflow-hidden text-left w-full flex flex-col">
                 <div className="relative w-full h-48 sm:h-76">
                    <Image
                        src={instructor.imageUrl}
                        alt={instructor.name}
                        layout="fill"
                        objectFit="contain"
                        className="w-full h-full"
                    />
                 </div>
                <div className="p-3 sm:p-4 flex flex-col flex-grow">
                  <h3 className="mb-1 text-base sm:text-lg font-semibold text-gray-800">
                    {instructor.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{instructor.location}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 text-center">
                    {instructor.certifications.map(cert => (
                        <span key={cert} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-[10px] sm:text-xs font-semibold text-gray-700">
                            {cert}
                        </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <Link href={`/certified-instructors/${instructor.slug}`} passHref>
                      <button className="w-full bg-[#F2E94E] text-black text-sm font-bold py-2 px-4 rounded-md hover:bg-[#3c3c3c] hover:text-white transition-colors duration-300">
                        Δες το Πλήρες Προφίλ
                      </button>
                    </Link>
                   </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-lg text-gray-500 py-12">
              <p>Δεν βρέθηκαν εκπαιδευτές με αυτά τα κριτήρια.</p>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default CertifiedInstructors;