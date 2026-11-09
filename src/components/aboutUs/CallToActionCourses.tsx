import React from "react";
import Link from "next/link";

export default function CallToActionCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3c3c3c] text-white rounded-3xl p-10 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#F2E94E]/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-bold uppercase tracking-widest text-[#F2E94E] mb-3 block">
            Ξεκινηστε Σημερα
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Κάντε το επόμενο βήμα στην καριέρα σας
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Εξερευνήστε τα εκπαιδευτικά προγράμματα του Vertical Project ή
            ανακαλύψτε το δίκτυο των πιστοποιημένων αποφοίτων μας.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-xs  tracking-wider text-black bg-[#F2E94E] hover:bg-white transition-all duration-300 cursor-pointer shadow-sm"
            >
              Δείτε τα Προγράμματα
            </Link>
            <Link
              href="/certified-instructors"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-xs  tracking-wider text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-all duration-300 cursor-pointer"
            >
              Οι Απόφοιτοι μας
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
