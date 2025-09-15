import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full mx-auto py-16 sm:py-24 bg-[#F3F3F3]">
      <div className="container mx-auto text-center text-black max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Έχετε ερωτήσεις;</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Είμαστε εδώ για να σας βοηθήσουμε. Επικοινωνήστε μαζί μας για
          περισσότερες πληροφορίες σχετικά με τα εκπαιδευτικά μας προγράμματα
          και τα workshops.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-[#F2E94E] text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#f0e631] transition-colors duration-300 transform hover:scale-105 shadow-md"
          >
            Επικοινωνία
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;