import Image from "next/image";

const instructors =[
    {
        name: "Ευή Πριόνα",
        bio: "Εκπαιδεύτρια Aerial & Vinyasa Yoga, με πάνω από 7 χρόνια εμπειρίας.",
        photo: "/instructors/eviPriona.jpg",
    },
    {
        name: "Γιάννης Καρβέλης",
        bio: "Εκπαιδευτής Handstands & Thai Massage, γνωστός για την ενθουσιώδη προσέγγισή του.",
        photo: "/instructors/johnKarvelis.jpg",
    },
];

export default function Instructors() {
    return (
        <section className="w-full mx-auto py-16 sm:py-24 bg-[#fff]">
            <div className="container mx-auto text-black text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Οι Εκπαιδευτές μας
                </h2>
                <p className="text-lg max-w-3xl mx-auto mb-20">
                    Στο Vertical Project, οι εκπαιδευτές μας είναι η καρδιά της αποστολής μας. Με πάθος για τη διδασκαλία και βαθιά γνώση, δεσμεύονται να σας καθοδηγήσουν στο ταξίδι σας.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-4xl mx-auto">
                    {instructors.map((instructor, index) => (
                        <div key={instructor.name} className="group flex flex-col items-center text-center">
                            {index === 0 ? (
                                <div className="relative w-52 h-52 mb-6 transition-transform duration-300 ease-in-out group-hover:scale-105">
                                    {/* Design 1: Quarter Circle Shape */}
                                    <div className="relative w-full h-full rounded-tl-[5rem] overflow-hidden shadow-lg">
                                        <Image
                                            src={instructor.photo}
                                            alt={`Photo of ${instructor.name}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-52 h-52 mb-6">
                                    {/* Design 2: Concentric Circles */}
                                       <div className="absolute inset-0 bg-gradient-to-tr from-[#F2E94E] to-[#F2E94E] rounded-2xl transform transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-[-6deg]"></div>
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-95">
                                        <Image
                                            src={instructor.photo}
                                            alt={`Photo of ${instructor.name}`}
                                            fill
                                            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            )}
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{instructor.name}</h3>
                            <p className="text-gray-700">{instructor.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}