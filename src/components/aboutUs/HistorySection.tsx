import React from 'react';

const HistorySection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Η Ιστορία Μας</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Το ταξίδι μας μέχρι σήμερα
          </p>
        </div>
        <div className="mt-10">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"></div>
            {/* Timeline Item 1 */}
            <div className="relative mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-gray-800 text-xl">2015 - Η Ίδρυση</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                  Η εταιρεία ιδρύθηκε με ένα μικρό κεφάλαιο αλλά ένα μεγάλο όραμα: να φέρει την επανάσταση στον χώρο.
                </p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="relative mb-8 flex justify-between flex-row-reverse items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-indigo-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-gray-800 text-xl">2018 - Πρώτο Μεγάλο Έργο</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                  Αναλάβαμε το πρώτο μας μεγάλο έργο, θέτοντας τα θεμέλια για τη μελλοντική μας ανάπτυξη και καθιέρωση.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

