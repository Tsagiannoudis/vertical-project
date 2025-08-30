import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "Ευή Πριόνα",
    description:
      "Εκπαιδεύτρια Aerial & Vinyasa Yoga, με πάνω από 8 χρόνια εμπειρίας στον χώρο.",
    photo: "/instructors/eviPriona.jpg",
  },
  {
    id: 2,
    name: "Γιάννης Καρβέλης",
    description:
      "Εκπαιδευτής Handstands & Thai Massage, γνωστός για την ενθουσιώδη προσέγγισή του.",
    photo: "/instructors/johnKarvelis.jpg",
  },
];

export default function Instructors() {
  return (
    <section className="w-full mx-auto py-16 sm:py-24 bg-[#fff]">
      <div className="container mx-auto text-black px-4">
        <div className="flex flex-col justify-center md:flex-row gap-8 items-center md:items-start mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-4xl font-bold md:w-1/3">
            Γνωρίστε τους <br />
            Εκπαιδευτές μας
            <hr className="border-[#f2e94e] border-2 mt-4 w-76 mx-auto md:mx-0" />
          </h2>
          <p className="text-lg md:w-1/3">
            Στο Vertical Project, οι εκπαιδευτές μας είναι η καρδιά της
            αποστολής μας. Με πάθος για τη διδασκαλία και βαθιά γνώση,
            δεσμεύονται να σας καθοδηγήσουν στο ταξίδι σας.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-4xl mx-auto">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-52 h-52 mb-6">
                <div className="relative w-full h-full rounded-2xl border-4 border-[#f2e94e] overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:border-8 group-hover:shadow-xl group-hover:shadow-[#f2e94e]/50">
                  <Image
                    src={instructor.photo}
                    alt={`Photo of ${instructor.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {instructor.name}
              </h3>
              <p className="text-gray-700 max-w-xs">{instructor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
