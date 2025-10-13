import Image from 'next/image';
import Link from 'next/link';
import { workshops } from '@/data/workshops';

const WorkshopsList = () => { 
    return (
        <section className="w-full bg-[#F3F3F3]">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24 space-y-16">
        {[...workshops].reverse().map((workshop, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={workshop.id} className="w-full bg-white overflow-hidden rounded-2xl shadow-lg h-[550px]">
              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} h-full md:items-stretch`}>
                <div className="relative md:w-1/2 w-full h-80 md:h-auto">
                  <Image
                    src={workshop.image}
                    alt={`Εικόνα για το workshop ${workshop.title}`}
                    fill className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 w-full flex flex-col justify-center p-10 md:p-12 lg:p-16">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">{workshop.title}</h3>
                  <p className="text-md font-semibold text-gray-500 mb-4">{workshop.date}</p>
                  <hr className="border-[#f2e94e] border-2 w-24 mb-4"/>
                  <p className="text-gray-700 mb-6 flex-grow pt-8">{workshop.shortDescription}</p>
                  <div className="mt-auto">
                    <Link href={`/workshops/${workshop.slug}`} className="inline-block bg-[#F2E94E] text-black font-semibold py-2 px-6 rounded-ss-2xl rounded-br-2xl hover:bg-[#b9b788] transition-colors duration-300">
                      Περισσότερα
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default WorkshopsList;