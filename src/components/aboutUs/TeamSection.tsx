import React from 'react';
import Image from 'next/image';

// Placeholder data for team members
const teamMembers = [
  {
    id: 1,
    slug: "evi-priona",
    name: "Εύη Πριόνα",
    description: "Εκπαιδεύτρια Aerial Yoga & Vinyasa Yoga",
    photo: "/instructors/eviPriona.jpg",
    bio: 'Η Εύη Πριόνα είναι πιστοποιημένη δασκάλα Yoga Alliance USA της Aerial yoga και της Yoga από το 2018. Ασχολείται με τις εναέριες τέχνες από το 2015 και διδάσκει Aerial Yoga, Aerial Silks, Yoga και Prenatal/Postnatal μέχρι και σήμερα. Είναι ιδρύτρια της σχολής Αιώρησις στην Θεσσαλονίκη από το 2021. Μέσα από τα μαθήματα της προτρέπει τους μαθητές της να αποκτίσουν γνώση, καλές σχέσεις με το σώμα τους και να αναπτύξτουν το αίσθημα της ασφάλειας.',
  },
  {
    id: 2,
    slug: "giannis-karvelis",
    name: "Γιάννης Καρβέλης",
    description: "Εκπαιδευτής Handstands, Functional Anatomy, Thai Massage, Aerial Yoga & Vinyasa Yoga",
    photo: "/instructors/johnKarvelis.jpg",
    bio: 'Ο Γιάννης Καρβέλης είναι πιστοποιηµένος δάσκαλος της AcroYoga International Level 1, Level 2, Elemental, Lunar Therapeutics, Solar Acrobatics Immersion Teacher και Lead Teacher των εκπαιδευτικών προγραµµάτων πιστοποίησης δασκάλων του παγκόσμιου οργανισμού. Έχει εκπαιδευτεί επίσης στη Hatha Yoga και Vinyasa Krama, καθώς επίσης και σε Thai Yoga massage από το Sunshine network σε OsteoThai, Static και Dynamic εκπαιδεύσεις. Τα τελευταία 8 χρόνια έχοντας συν-δηµιουργήσει εκπαιδευτικά προγράµµατα σε Yoga, Acroyoga και Aerial Yoga, ταξιδεύει σε Ευρώπη, Ασία, Μέση Ανατολή, Μεξικό και Η.Π.Α.',
  },
];

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
              <div key={member.id} id={member.slug} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
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