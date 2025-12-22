import HeroSectionAbout from "@/components/aboutUs/HeroSectionAbout";
import CallToActionCourses from "@/components/aboutUs/CallToActionCourses";
// import HistorySection from "@/components/aboutUs/HistorySection";
import MissionSection from "@/components/aboutUs/MissionSection";
import TeamSection from "@/components/aboutUs/TeamSection";
import CertifiedInstructorsSection from "@/components/aboutUs/CertifiedInstructorsSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Σχετικά με εμάς | Vertical Project',
  description: 'Γνωρίστε την ομάδα και την αποστολή του Vertical Project. Προσφέρουμε εκπαιδευτικά προγράμματα υψηλού επιπέδου σε Aerial Yoga, Handstands και πολλά άλλα.',
}

export default function AboutUsPage() {
  return (
    <main>
      <HeroSectionAbout />
      {/* 2. Η αποστολή μας */}
      <MissionSection />
      {/* 3. Η ομάδα μας */}
      <TeamSection />
      {/* CTA για Πιστοποιημένους Δασκάλους */}
      <CertifiedInstructorsSection />
      {/* 4. Η ιστορία μας */}
      {/* <HistorySection /> */}
      {/* 5. Πρόσκληση σε δράση */}
      <CallToActionCourses />
    </main>
    );
}
