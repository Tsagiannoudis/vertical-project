import HeroSectionBlog from "@/components/aboutUs/HeroSectionBlog";
import CallToActionSection from "@/components/aboutUs/CallToActionSection";
// import HistorySection from "@/components/aboutUs/HistorySection";
import MissionSection from "@/components/aboutUs/MissionSection";
import TeamSection from "@/components/aboutUs/TeamSection";

export default function AboutUsPage() {
  return (
    <main>
      <HeroSectionBlog />
      {/* 2. Η αποστολή μας */}
      <MissionSection />
      {/* 3. Η ομάδα μας */}
      <TeamSection />
      {/* 4. Η ιστορία μας */}
      {/* <HistorySection /> */}
      {/* 5. Πρόσκληση σε δράση */}
      <CallToActionSection />
    </main>
    );
}
