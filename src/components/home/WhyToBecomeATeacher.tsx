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
    <section className="w-full mx-auto py-16 sm:py-24 bg-[#D4CBC2]">
      <div className="container mx-auto px-4 text-gray-800">
        <h2 className="text-3xl md:text-4xl mt-6 mb-10 font-bold text-center">
          Γιατί να γίνεις Vertical Teacher
        </h2>

        <div className="max-w-4xl mb-10 mx-auto">
          <p className="text-lg text-center mb-16">
            Είναι τέχνη, πρακτική και για πολλούς καριέρα. Η εκπαίδευση για να
            γίνεις δάσκαλος σε βοηθάει να:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/50 flex items-center justify-center ring-2 ring-white/20">
                  <CheckCircleIcon className="w-7 h-7 text-gray-700" />
                </div>
                <p className="ml-5 text-lg font-medium">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyToBecomeATeacher;
