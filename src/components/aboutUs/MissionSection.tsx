import React from "react";

export default function MissionSection() {
  const pillars = [
    {
      title: "Ασφάλεια & Τεχνική",
      desc: "Εμβαθύνουμε στην ανατομία και τη σωστή ευθυγράμμιση για μια πρακτική χωρίς τραυματισμούς.",
    },
    {
      title: "Ολιστική Εξέλιξη",
      desc: "Συνδυάζουμε τη σωματική ενδυνάμωση με την επίγνωση, την αναπνοή και τη δημιουργική ροή.",
    },
    {
      title: "Κοινότητα Στήριξης",
      desc: "Δημιουργούμε ένα περιβάλλον εμπιστοσύνης όπου κάθε δάσκαλος εξελίσσεται με συνέπεια.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Η Αποστολή Μας
          </h2>
          <hr className="border-[#f2e94e] border-2 mt-4 w-56 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 mt-4 mb-5">
            Εκπαίδευση που Εμπνέει, <br />
            <span className="text-neutral-500 font-light">
              Κοινότητα που Στηρίζει
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Στο Vertical Project, στόχος μας είναι να προσφέρουμε εκπαιδευτικά
            προγράμματα υψηλού επιπέδου που δίνουν στους δασκάλους τα εφόδια,
            την αυτοπεποίθηση και την έμπνευση να ξεχωρίσουν στον χώρο της
            κίνησης.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/70 hover:border-neutral-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-[#F2E94E] flex items-center justify-center font-bold text-xs text-black mb-5">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
