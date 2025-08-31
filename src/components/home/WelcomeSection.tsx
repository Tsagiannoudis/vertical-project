import Image from "next/image";

// Icons for the key points
const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.101c1.203-1.544 3.27-2.545 5.5-2.545 2.23 0 4.297.999 5.5 2.544v.003zM15 19.128a9.37 9.37 0 00-3.065-2.115M15 19.128a9.37 9.37 0 01-5.935 2.115M15 19.128c-.165.02-.333.038-.504.054M15 19.128c.165.02.333.038.504.054M15 19.128c.346.052.694.094 1.048.128M15 19.128c-.346.052-.694.094-1.048.128M15 19.128c-1.29.19-2.617.299-3.986.299s-2.696-.109-3.986-.299M15 19.128c1.29.19 2.617.299 3.986.299s2.696-.109 3.986-.299M5.25 7.5a4.5 4.5 0 019 0m-9 0a4.5 4.5 0 009 0m-9 0c0-1.113.285-2.16.786-3.07M5.25 7.5c1.203-1.544 3.27-2.545 5.5-2.545 2.23 0 4.297.999 5.5 2.544M5.25 7.5c.346.052.694.094 1.048.128M5.25 7.5c-.346.052-.694.094-1.048.128" />
    </svg>
);

const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.423-1.423L13.5 18.75l1.188-.648a2.25 2.25 0 011.423-1.423L16.25 15.5l.648 1.188a2.25 2.25 0 011.423 1.423L18.5 18.75l-1.188.648a2.25 2.25 0 01-1.423 1.423z" />
    </svg>
);

const keyPoints = [
    {
        icon: BookOpenIcon,
        title: "Βαθιά Γνώση",
        description: "Προσφέρουμε εκπαιδευτικά προγράμματα που ξεπερνούν τη θεωρία, εστιάζοντας σε πρακτικές δεξιότητες."
    },
    {
        icon: UsersIcon,
        title: "Ζωντανή Κοινότητα",
        description: "Γίνετε μέλος μιας υποστηρικτικής κοινότητας μαθητών και δασκάλων με κοινό πάθος για εξέλιξη."
    },
    {
        icon: SparklesIcon,
        title: "Έμπνευση & Δημιουργία",
        description: "Στόχος μας είναι να σας εμπνεύσουμε να ανακαλύψετε το πλήρες δυναμικό σας και να δημιουργήσετε."
    }
];

const WelcomeSection = () => {
  return (
    <section className="w-full bg-[#F3F3F3] text-black">
      <div className="container mx-auto px-4 py-16 sm:py-24 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Right Column: Text Content */}
          <div className="md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Μάθηση που Εμπνέει
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Στο Vertical Project, πιστεύουμε ότι η πραγματική μάθηση γεννιέται από την εμπειρία, τη σύνδεση και την έμπνευση. Δημιουργούμε έναν χώρο όπου εκπαιδευτικοί και μαθητές εξελίσσονται μαζί.
            </p>
            
            <div className="space-y-6">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-[#F2E94E] p-3 rounded-full">
                    <point.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{point.title}</h3>
                    <p className="text-gray-600 mt-1">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Left Column: Image */}
          <div className="relative h-80 md:h-[600px] overflow-hidden">
            <Image
              src="/welcome.png" // Replace with a relevant image
              alt="Μια ομάδα ανθρώπων σε ένα workshop γιόγκα, γεμάτοι ενέργεια και χαρά."
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
