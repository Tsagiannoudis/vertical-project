
import HeroSection from "@/components/home/HeroSection";  
import CallToActionContactPage from "@/components/home/CallToActionContactPage";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyToBecomeATeacher from "@/components/home/WhyToBecomeATeacher";
import WhatWeOfferToYou from "@/components/home/WhatWeOfferToYou";
import Instructors from "@/components/home/Instructors";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <Instructors />
      <WhyToBecomeATeacher />
      <WhatWeOfferToYou />
      <CallToActionContactPage />
    </main>
  );
}
