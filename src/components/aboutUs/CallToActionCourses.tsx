import React from 'react';
import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section className="bg-[#F3F3F3]">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black sm:text-4xl">
          <span className="block">Έτοιμοι να ξεκινήσετε το ταξίδι σας;</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Εξερευνήστε τα εκπαιδευτικά μας προγράμματα και βρείτε αυτό που σας ταιριάζει για να κάνετε το επόμενο βήμα στην καριέρα σας.
        </p>
        <Link
          href="/courses"
          className="mt-8 inline-flex items-center justify-center px-6 py-3  text-black bg-[#F2E94E] rounded-md hover:bg-[#f0e631] focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-ss-2xl rounded-br-2xl"
        >
          Δείτε τα Προγράμματα
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;