import Link from 'next/link';

export default function CertifiedInstructorsCtaSection() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black sm:text-4xl">
          <span className="block">Βρείτε έναν Πιστοποιημένο Δάσκαλο</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Ανακαλύψτε τους απόφοιτους των εκπαιδευτικών μας προγραμμάτων στον επίσημο κατάλογο πιστοποιημένων δασκάλων μας.
        </p>
        <Link
          href="/certified-instructors"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 text-black bg-[#F2E94E] rounded-ss-2xl rounded-br-2xl hover:bg-[#f0e631] focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
            Δείτε τους απόφοιτους μας
        </Link>
      </div>
    </section>
  );
}