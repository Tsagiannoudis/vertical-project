
import HeroSection from "@/components/home/HeroSection";  
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyToBecomeATeacher from "@/components/home/WhyToBecomeATeacher";
import WhatWeOfferToYou from "@/components/home/WhatWeOfferToYou";

export default function Home() {
  return (
    <main>

      <HeroSection />
      <WelcomeSection />
      <WhyToBecomeATeacher />
      <WhatWeOfferToYou />

      <section className="w-full mx-auto p-8">
        <div className="container mx-auto text-center"> 
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="mt-4">Have questions? Contact us for more information.</p>
        </div>
      </section>

      <section className="w-full mx-auto p-8 bg-[#F3F3F3]">
        <div className="container mx-auto text-center  text-black"> 
          <h2 className="text-3xl font-semibold">Stay Updated</h2>
          <p className="mt-4">Follow our blog for the latest news and updates.</p>
        </div>
      </section>
    </main>
  );
}
