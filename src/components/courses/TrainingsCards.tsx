import Image from "next/image";

const trainings = [
    {
        slug: "aerial-yoga-teacher-training",
        imgSrc: "/trainings-icons/aerial-yoga-tt.webp",
        title: "Aerial Yoga Teacher Training",
        description: "Ανακαλύψτε την ελευθερία της κίνησης με τα εκπαιδευτικά προγράμματα της Aerial Yoga.",
        alt: "Γυναίκα σε προχωρημένη στάση aerial yoga, τυλιγμένη σε ροζ αιώρα."
    },
    {
        slug: "handstands-teacher-training",
        imgSrc: "/trainings-icons/handstands-tt.webp",
        title: "Handstands Teacher Training",
        description: "Κατακτήστε την τέχνη των κατακορύφων με την καθοδήγηση των ειδικών μας.",
        alt: "Άνδρας κάνει κατακόρυφο σε εξωτερικό χώρο με φόντο τη φύση."
    },
    {
        slug: "thai-yoga-massage",
        imgSrc: "/trainings-icons/thai-massage.webp",
        title: "Thai Yoga Massage  Teacher Training",
        description: "Μάθετε την τέχνη του Thai Yoga Massage για να ενισχύσετε τις θεραπευτικές σας ικανότητες.",
        alt: "Άτομο δέχεται Thai Yoga Massage σε ένα ήρεμο περιβάλλον."
    },
    {
        slug: "functional-anatomy",
        imgSrc: "/trainings-icons/functional-anatomy.webp",
        title: "Functional Anatomy Teacher Training",
        description: "Κατανοήστε τη μηχανική του σώματος για να βελτιώσετε την πρακτική σας στη yoga.",
        alt: "Σχηματική απεικόνιση του ανθρώπινου μυοσκελετικού συστήματος."
    },
    {
        slug: "yoga-teacher-training",
        imgSrc: "/trainings-icons/yoga-v.webp",
        title: "Yoga 200hrs & 300hrs Teacher Training",
        description: "Εμβαθύνετε στην πρακτική σας με την ολοκληρωμένη εκπαίδευση δασκάλων Yoga.",
        alt: "Ομάδα ανθρώπων σε στάση γιόγκα κατά τη διάρκεια ενός μαθήματος."
    },
];
export default function TrainingsCards() {
    return (
        <section className="w-full bg-[#F3F3F3]">
            <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24 space-y-16">
                {trainings.map((training, index) => {
                    const isImageLeft = index % 2 === 0;

                    const imageBlock = (
                        <div className="relative md:w-1/2 w-full min-h-[320px] md:min-h-0 align-center">
                            <Image
                                src={training.imgSrc}
                                alt={training.alt}
                                fill
                                className="object-center object-cover"
                            />
                        </div>
                    );

                    const textBlock = (
                        <div className="md:w-1/2 w-full flex items-center justify-center py-12 bg-[#fff]">
                            <div className="p-8 md:p-16 lg:p-24 max-w-2xl mx-auto text-center md:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{training.title}</h3>
                                <hr className="border-[#f2e94e] border-2 mt-4 w-36 mb-6 mx-auto md:mx-0"/>
                                <p className="text-lg text-gray-700">{training.description}</p>
                            </div>
                        </div>
                    );

                    return (
                        <section key={training.slug} className="w-full bg-white overflow-hidden rounded-2xl shadow-lg">
                            <div className="flex flex-col md:flex-row md:items-stretch">
                                {isImageLeft ? imageBlock : textBlock}
                                {isImageLeft ? textBlock : imageBlock}
                            </div>
                        </section>
                    );
                })}
            </div>
        </section>
    );
}