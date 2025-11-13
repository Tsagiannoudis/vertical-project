import { workshops, Workshop } from '@/data/workshops';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import HeroSectionWorkshops from '@/components/workshops/HeroSectionWorkshops';
import ShareButtons from '@/components/extraComponents/ShareButtons';

function getWorkshopData(slug: string): Workshop | undefined {
  return workshops.find((workshop) => workshop.slug === slug);
}

export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const workshop = getWorkshopData(slug);

  if (!workshop) {
    return { title: 'Workshop Not Found' };
  }

  return {
    title: `${workshop.title} | Vertical Project`,
    description: workshop.shortDescription,
  };
}

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workshop = getWorkshopData(slug);

  if (!workshop) return notFound();


const handleShare = (platform: 'facebook' | 'copy') => {
const shareUrl = window.location.href;

    if (platform === 'facebook') {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookShareUrl, '_blank', 'noopener,noreferrer');
        } else if (platform === 'copy') {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Ο σύνδεσμος αντιγράφηκε στο πρόχειρο!');
        });
        }
    };


    return (
        <>
            <HeroSectionWorkshops />
        <main className="bg-[#F3F3F3]">
            
            <section className="container mx-auto max-w-4xl px-4 py-16">
                {/* Hero Section title Section + photo*/}
                <div className="relative w-full h-[800px] bg-gray-800 mb-16 rounded-lg overflow-hidden">
                    <Image
                        src={workshop.image}
                        alt={`Εικόνα για το workshop ${workshop.title}`}
                        fill
                        priority
                        className="object-cover opacity-80"
                    />
                    {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
                        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{workshop.title}</h1>
                        <p className="mt-4 text-xl font-semibold">{workshop.date}</p>
                        <p className="mt-2 text-lg">με τον {workshop.instructor}</p>
                    </div> */}
                </div>

                <div className="grid md:grid-cols-1 gap-16 py-16 ">
                {/* Left: Details List */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{workshop.title}</h2>
                        <hr className="border-[#f2e94e] border-2 w-78 mb-6"/>
                        <div className="space-y-4">
                        {workshop.moreDetails.map((item, index) => (
                            <p key={index} className="text-gray-700 text-justify">{item}</p>
                        ))}
                        </div>
                    </div>
                    
                    {/* Right: Schedule */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Λεπτομέρειες Σεμιναρίου</h2>
                        <hr className="border-[#f2e94e] border-2 w-78 mb-6"/>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                        {workshop.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                        </ul>
                    </div>
                </div>

                {/* Date, Time & Location Section with Icons */}
                <div className="grid md:grid-cols-1 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Πληροφορίες Διεξαγωγής</h2>
                        <hr className="border-[#f2e94e] border-2 w-78 mb-6"/>
                        <div className="space-y-4">
                            {/* Date */}
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="ml-3 text-lg text-gray-800">{workshop.date}</p>
                            </div>
                            {/* Time */}
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-3 text-lg text-gray-800">{workshop.time}</p>
                            </div>
                            {/* Location with link to Google Maps */}
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(workshop.location)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-[#F2E94E] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="ml-3 text-lg text-gray-800 group-hover:text-black underline decoration-transparent group-hover:decoration-current transition-colors">
                                    {workshop.location}
                                </p>
                            </a>
                            {/* Share Buttons */}
                            <ShareButtons/>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link href="/contact" className="inline-block bg-[#F2E94E] text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#b9b788] transition-colors duration-300">
                        Εκδήλωση Ενδιαφέροντος
                    </Link>
                </div>
            </section>
        </main>
        </>
    )
}