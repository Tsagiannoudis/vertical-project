
import HeroSection from "@/components/home/HeroSection";  
import CallToActionContactPage from "@/components/home/CallToActionContactPage";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyToBecomeATeacher from "@/components/home/WhyToBecomeATeacher";
import WhatWeOfferToYou from "@/components/home/WhatWeOfferToYou";
import Instructors from "@/components/home/Instructors";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Vertical Project | Εκπαίδευση Δασκάλων Yoga & Aerial Arts',
  description: 'Ανακαλύψτε κορυφαία εκπαιδευτικά προγράμματα για δασκάλους σε Aerial Yoga, Handstands, Thai Massage και Yoga. Γίνετε μέλος μιας κοινότητας που εξελίσσεται και εμπνέεται.',
}

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
