"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Αποδοχή Όλων"
      cookieName="verticalProjectCookieConsent"
      style={{ background: "#2B373B", fontSize: "14px" }}
      buttonStyle={{
        background: "#F2E94E",
        color: "#000",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "8px 0 8px 0", // rounded-ss-lg rounded-br-lg
      }}
      expires={150}
    >
      Αυτός ο ιστότοπος χρησιμοποιεί cookies για να διασφαλίσει ότι θα έχετε την καλύτερη δυνατή εμπειρία.{" "}
      <Link href="/privacy-policy" className="underline hover:text-[#F2E94E] transition-colors">
        Μάθετε περισσότερα
      </Link>
    </CookieConsent>
  );
};

export default CookieConsentBanner;