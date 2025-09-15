import Image from "next/image";

const benefits = [
  {
    text: 'Εμβαθύνεις την πρακτική σου, κατανοώντας την ευθυγράμμιση, την ασφάλεια και τη δημιουργία αλληλουχιών.',
  },
  {
    text: 'Αποκτήσεις αυτοπεποίθηση στην καθοδήγηση τάξεων και στην ασφαλή καθοδήγηση των μαθητών σου.',
  },
  {
    text: 'Ανοίξεις νέες επαγγελματικές ευκαιρίες σε στούντιο, retreats και αλλού.',
  },
  {
    text: 'Γίνεις μέλος μιας αναπτυσσόμενης παγκόσμιας κοινότητας δασκάλων aerial yoga.',
  },
];

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const WhyToBecomeATeacher = () => {
  return (
    <section className="w-full mx-auto py-16 sm:py-24 bg-[#F3F3F3]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Image Column */}
          <div className="md:w-1/2 w-full">
            <div className="relative h-96 sm:h-[200] md:h-[400] lg:h-[600px] overflow-hidden">
              <Image
                src="/whytobecome.png" // Σημείωση: Προσθέστε μια σχετική εικόνα εδώ
                alt="Woman doing aerial yoga"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          {/* Text Column */}
          <div className="md:w-1/2 w-full text-gray-800">
            <h2 className="text-3xl md:text-4xl mb-6 font-bold">
              Γιατί να γίνεις Vertical Teacher
            </h2>
            <p className="text-lg mb-8">
              Είναι τέχνη, πρακτική και για πολλούς καριέρα. Η εκπαίδευση για να
              γίνεις δάσκαλος σε βοηθάει να:
            </p>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="w-7 h-7 text-[#3c3c3c] border-3 border-[#F2E94E] rounded-full flex-shrink-0 mt-1 mr-4" />
                  <p className="text-lg">{benefit.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyToBecomeATeacher;
