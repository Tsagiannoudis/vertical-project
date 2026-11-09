import { events, Event } from "@/data/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroSectionEvents from "@/components/events/HeroSectionEvents";
import ShareButtons from "@/components/extraComponents/ShareButtons";

function getEventData(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug);
}

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventData(slug);

  if (!event) {
    return { title: "Workshop Not Found" };
  }

  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const imageUrl = `${siteUrl}${event.image}`;

  return {
    metadataBase: new URL(siteUrl),
    title: `${event.title} | Vertical Project`,
    description: event.shortDescription,
    openGraph: {
      title: `${event.title} | Vertical Project`,
      description: event.shortDescription,
      url: `/events/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Vertical Project`,
      description: event.shortDescription,
      images: [imageUrl],
    },
  };
}

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

const EventPage = async ({ params }: EventPageProps) => {
  const { slug } = await params;
  const event = getEventData(slug);

  if (!event) return notFound();

  const currentIndex = events.findIndex((e) => e.slug === slug);
  const nextEvent =
    currentIndex !== -1 ? events[(currentIndex + 1) % events.length] : null;
  const prevEvent =
    currentIndex !== -1
      ? events[(currentIndex - 1 + events.length) % events.length]
      : null;

  return (
    <>
      <HeroSectionEvents />

      <main className="bg-[#fafafa] min-h-screen py-10 sm:py-16">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          {/* Top Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/events"
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
              <span>Όλα τα Events & Workshops</span>
            </Link>
          </div>

          {/* Event Header & Title */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {event.instructor && (
                <span className="text-xs font-semibold text-neutral-600 bg-white border border-neutral-200 px-3 py-1 rounded-full">
                  Εισηγητής: {event.instructor}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4">
              {event.title}
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              {event.shortDescription}
            </p>
          </div>

          {/* Key Facts / Event Info Micro-Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {/* Date Card */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-700">
                <svg
                  className="w-5 h-5 text-[#3c3c3c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Ημερομηνια
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-800">
                  {event.date}
                </span>
              </div>
            </div>

            {/* Time Card */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-700">
                <svg
                  className="w-5 h-5 text-[#3c3c3c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Ωραριο
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-800">
                  {event.time}
                </span>
              </div>
            </div>

            {/* Location Card */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-700 group-hover:bg-[#F2E94E] group-hover:text-black transition-colors">
                <svg
                  className="w-5 h-5 text-[#3c3c3c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Τοποθεσια (Χαρτης)
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-800 group-hover:text-black truncate block">
                  {event.location}
                </span>
              </div>
            </a>
          </div>

          {/* Cinematic Hero Image */}
          <div className="relative aspect-[16/9] max-h-[500px] w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-md border border-neutral-200/80 mb-12">
            <Image
              src={event.image}
              alt={`Εικόνα για το workshop ${event.title}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
            />
          </div>

          {/* Content Structure */}
          <div className="space-y-10">
            {/* 1. Full Description / Story */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-6 rounded-full bg-[#F2E94E]" />
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Σχετικά με το Σεμινάριο
                </h2>
              </div>
              <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed text-sm sm:text-base space-y-4">
                {event.moreDetails.map((item, index) => (
                  <p key={index} className="leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* 2. Key Details & Topics */}
            {event.details && event.details.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-6 rounded-full bg-[#3c3c3c]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    Τι περιλαμβάνει η Εκπαίδευση
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {event.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/60"
                    >
                      <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 text-white mt-0.5">
                        <span className="text-[11px] font-bold">✓</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-neutral-700">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Registration Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-6 rounded-full bg-[#F2E94E]" />
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Δήλωση Συμμετοχής
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed max-w-2xl">
                Οι θέσεις σε κάθε workshop είναι περιορισμένες για να
                διασφαλίζεται η προσωπική καθοδήγηση και ασφάλεια όλων των
                συμμετεχόντων.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {event.googleForm ? (
                  <a
                    href={event.googleForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs tracking-wider text-black bg-[#F2E94E] hover:bg-[#3c3c3c] hover:text-white transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <span>Συμπληρωση Φορμας Εγγραφης</span>
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-block px-7 py-3.5 rounded-full font-bold text-xs tracking-wider text-black bg-[#F2E94E] hover:bg-[#3c3c3c] hover:text-white transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    Εκδήλωση Ενδιαφέροντος
                  </Link>
                )}

                <Link
                  href="/contact"
                  className="inline-block px-6 py-3.5 rounded-full font-bold text-xs  tracking-wider text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  Έχετε Ερωτήσεις;
                </Link>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-10 flex justify-center">
            <ShareButtons />
          </div>

          {/* Prev / Next Navigation */}
          <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-neutral-600">
            {prevEvent ? (
              <Link
                href={`/events/${prevEvent.slug}`}
                className="hover:text-black transition-colors flex items-center gap-2"
              >
                <span>&larr;</span>
                <span className="truncate max-w-[200px]">
                  {prevEvent.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/events"
              className="text-neutral-400 hover:text-black uppercase tracking-wider text-[11px]"
            >
              Όλα τα Events & Workshops
            </Link>

            {nextEvent ? (
              <Link
                href={`/events/${nextEvent.slug}`}
                className="hover:text-black transition-colors flex items-center gap-2"
              >
                <span className="truncate max-w-[200px]">
                  {nextEvent.title}
                </span>
                <span>&rarr;</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default EventPage;
