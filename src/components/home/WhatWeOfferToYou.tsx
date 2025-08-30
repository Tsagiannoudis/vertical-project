const lessons = [
  {
    title: "Aerial Yoga",
    description:
      "Μάθετε να διδάσκετε Aerial Yoga με ασφάλεια και αυτοπεποίθηση, ενσωματώνοντας την αιώρα στη διδασκαλία σας.",
  },
  {
    title: "Yoga",
    description:
      "Εμβαθύνετε στην πρακτική της Yoga και αποκτήστε τις δεξιότητες για να γίνετε ένας εμπνευσμένος δάσκαλος.",
  },
  {
    title: "Handstands",
    description:
      "Αναπτύξτε τη δύναμη και την ισορροπία σας, μαθαίνοντας τις τεχνικές για να διδάξετε Handstands με ασφάλεια.",
  },
  {
    title: "Thai Yoga Massage",
    description:
      "Μάθετε τις αρχές και τις τεχνικές του Thai Yoga Massage για να προσφέρετε αναζωογονητικές θεραπείες.",
  },
  {
    title: "Functional Anatomy",
    description:
      "Κατανοήστε την ανθρώπινη ανατομία και τη λειτουργία του σώματος για να βελτιώσετε τη διδασκαλία σας.",
  },
];

const WhatWeOfferToYou = () => {
  return (
    <section className="w-full mx-auto p-4 sm:p-8 bg-[#fff]">
      <div className="container mx-auto text-black px-4 max-w-6xl">
        <div className="md:flex-row gap-8 items-center md:items-start mb-20 text-center md:text-left ">
          <h2 className="text-3xl mt-16  font-bold text-center">
            Τι σας προσφέρουμε
          </h2>
          <hr className="border-[#f2e94e] border-2 mt-4 w-76 mx-auto justify-center mb-6"/>
          <p className="text-lg">
              Στόχος μας είναι να δημιουργούμε δασκάλους με γνώσεις, αυτοπεποίθηση
              και έμπνευση. Ανακαλύψτε τις εξειδικευμένες εκπαιδεύσεις μας,
              σχεδιασμένες για να σας προσφέρουν βαθιά γνώση και πρακτικές
              δεξιότητες.
          </p>
        </div>

        <div className="max-w-6xl mb-10 mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <li
                key={index}
                className="bg-[#f2e94e] p-8 rounded-2xl shadow-sm text-center transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <h3 className="text-2xl mb-4 font-semibold text-black">
                  {lesson.title}
                </h3>
                <p className="text-black">{lesson.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferToYou;
