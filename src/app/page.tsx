
import HeroSection from "@/components/home/HeroSection";  
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyToBecomeATeacher from "@/components/home/WhyToBecomeATeacher";
import WhatWeOfferToYou from "@/components/home/WhatWeOfferToYou";
import Instructors from "@/components/home/Instructors";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      <HeroSection />
      <WelcomeSection />
      <Instructors />
      <WhyToBecomeATeacher />
      <WhatWeOfferToYou />

      <section className="w-full mx-auto py-16 sm:py-24 bg-[#F3F3F3]">
        <div className="container mx-auto text-center text-black max-w-4xl"> 
          <h2 className="text-3xl md:text-4xl font-bold">Έχετε ερωτήσεις;</h2>
          <p className="mt-4 text-lg text-gray-700">
            Είμαστε εδώ για να σας βοηθήσουμε. Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες σχετικά με τα εκπαιδευτικά μας προγράμματα και τα workshops.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="bg-[#F2E94E] text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#f0e631] transition-colors duration-300 transform hover:scale-105">
              Επικοινωνία
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto py-16 sm:py-24 bg-[#fff]">
        <div className="container mx-auto text-center text-black max-w-4xl"> 
          <h2 className="text-3xl md:text-4xl font-bold">Μείνετε Ενημερωμένοι</h2>
          <p className="mt-4 text-lg text-gray-700">
            Ακολουθήστε το blog μας για τα τελευταία νέα, άρθρα και ενημερώσεις από τον κόσμο της aerial yoga και της εκπαίδευσης.
          </p>
          <div className="mt-8">
            <Link href="/blog" className="bg-transparent border-2 border-black text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105">
              Επισκεφθείτε το Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
