import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data/teamMembers';

const TeamSection = () => {
  return (
    <section className="w-full mx-auto py-16 sm:py-24 bg-white">
      <div className="container mx-auto text-black px-4 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Η Ομάδα Μας
          </h2>
          <hr className="border-[#f2e94e] border-2 mt-4 w-56 mx-auto mb-6"/>
          <p className="text-lg text-gray-700 leading-relaxed">
            Γνωρίστε τους ανθρώπους που με το πάθος και την τεχνογνωσία τους κάνουν το όραμά μας πραγματικότητα.
          </p>
        </div>

        <div className="mt-20 space-y-24 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={member.id} 
                id={member.slug} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 focus:outline-none`}
                tabIndex={-1}
              >
                {/* Image */}
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto group">
                    <div className="relative w-full h-full rounded-2xl border-4 border-[#f2e94e] overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:border-8 group-hover:shadow-xl group-hover:shadow-[#f2e94e]/50">
                      <Image
                          src={member.photo}
                          alt={`Photo of ${member.name}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="md:w-2/3 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-lg font-semibold text-gray-500 mt-1">{member.description}</p>
                    <hr className="border-[#f2e94e] border-2 mt-4 w-24 mb-6 mx-auto md:mx-0"/>
                    <p className="text-gray-700 leading-relaxed text-justify">{member.bio}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;