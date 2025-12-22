import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import HeroSectionCertified from "@/components/aboutUs/certifiedInstructors/HeroSectionCertified";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  certifiedInstructors as details,
  type CertifiedInstructor as Detail,
} from "@/data/certifiedInstructors";

//Data Fetching Function
async function getDetailsData(slug: string): Promise<Detail | undefined> {
  return details.find((inst) => inst.slug === slug);
}

//Static Generation Functions
export async function generateStaticParams() {
  return details.map((details) => ({
    slug: details.slug,
  }));
}

//create metadata dynamically
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
    title: `${instructorDetail?.name} | Πιστοποιημένος Δάσκαλος`,
    description: instructorDetail?.bio,
  };
}

//main component
type DetailInstrunctorPageProps = {
  params: Promise<{ slug: string }>;
};

const DetailInstructorPage = async ({ params }: DetailInstrunctorPageProps) => {
  const { slug } = await params;
  const instructorDetail = await getDetailsData(slug);

  if (!instructorDetail) return notFound();


// Find next instructor for navigation (if needed)
  // const currentIndex = details.findIndex((c) => c.slug === slug);
  // const nextInstructor =
  //   currentIndex !== -1 ? details[(currentIndex + 1) % details.length] : null;

  return (
    <>
      <HeroSectionCertified />
      <div className="min-h-6/12 bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:grid lg:grid-cols-3 lg:gap-8 p-8">
            {/* Left Column: Image, Basic Info, Contact, Social Media */}
            <div className="lg:col-span-1 flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={instructorDetail.imageUrl}
                  alt={instructorDetail.name}
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="rounded-full w-64 h-64 object-cover border-4 border-[#F2E94E]"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {instructorDetail.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {instructorDetail.location}
              </p>

              {/* Contact Information */}
              {instructorDetail.contactEmail && (
                <div className="mb-4">
                  <a
                    href={`mailto:${instructorDetail.contactEmail}`}
                    className="text-black hover:text-gray-700 flex items-center justify-center"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    {instructorDetail.contactEmail}
                  </a>
                </div>
              )}

              {/* Social Media Links */}
              {instructorDetail.socialMedia && (
                <div className="flex space-x-4 mb-6">
                  {instructorDetail.socialMedia.facebook && (
                    <a
                      href={instructorDetail.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-700"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                  )}
                  {instructorDetail.socialMedia.instagram && (
                    <a
                      href={instructorDetail.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-700"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Full Bio, Certifications, Contact Form */}
            <div className="lg:col-span-2 mt-8 lg:mt-0">
              {/* Full Bio / Story */}
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Βιογραφικό
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {instructorDetail.fullBio || instructorDetail.bio}
              </p>

              {/* Certifications */}
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Πιστοποιήσεις & Σεμινάρια
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {instructorDetail.certifications.map((cert) => (
                  <li key={cert} className="mb-2">
                    {cert}
                  </li>
                ))}
              </ul>
              <Link
                href="/certified-instructors"
                className="w-48 justify-end bg-[#F2E94E] text-black text-sm font-bold py-2 px-4 rounded-md"
              >
                back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailInstructorPage;
