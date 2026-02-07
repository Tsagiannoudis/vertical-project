import React from 'react';

const ComingSoonSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto text-black">
          <h2 className="text-3xl md:text-4xl font-bold">
            Κάτι Νέο Έρχεται...
          </h2>
          <hr className="border-[#f2e94e] border-2 mt-4 w-56 mx-auto mb-6"/>
          <p className="text-2xl font-semibold text-gray-800">
            Μείνετε Συντονισμένοι!
          </p>
          <p className="mt-4 max-w-3xl text-lg text-gray-700 mx-auto leading-relaxed">
            Ετοιμάζουμε συνεχώς νέες ιδέες και εκπαιδευτικά προγράμματα για την κοινότητά μας. Σύντομα θα μοιραστούμε περισσότερες λεπτομέρειες για όσα συναρπαστικά έρχονται!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
