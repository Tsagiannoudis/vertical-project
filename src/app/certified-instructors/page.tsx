import CertifiedInstructors from "@/components/aboutUs/certifiedInstructors/CertifiedInstructors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Πιστοποιημένοι Δάσκαλοι | Vertical Project',
  description: 'Βρείτε πιστοποιημένους δασκάλους του Vertical Project στην πόλη σας.',
}

export default function CertifiedInstructorsPage() {
  return (
    <main>
      <CertifiedInstructors />
    </main>
  );
}
