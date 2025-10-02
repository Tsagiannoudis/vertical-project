import HeroSectionContact from "@/components/contact/HeroSectionContact";
import FormContact from "@/components/contact/FormContact";
import ContactWithUs from "@/components/contact/ContactWithUs"; 
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Επικοινωνία | Vertical Project',
  description: 'Επικοινωνήστε μαζί μας για περισσότερες πληροφόρίες που αφοράν τα εκπαιδευτικά προγράμματα Vertical Project.',
}

export default function ContactPage() {
  return (
    <>
      <HeroSectionContact />
      <ContactWithUs />
      <FormContact />
    </>
  );
}
