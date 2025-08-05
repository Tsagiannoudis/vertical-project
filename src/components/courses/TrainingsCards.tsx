import Image from "next/image";

const trainings = [
    {
        slug: "aerial-yoga Teacher Training",
        imgSrc: "/trainings-icons/aerial-yoga-tt.webp",
        title: "Aerial Yoga Teacher Training",
        description: "Ανακαλύψτε την ελευθερία της κίνησης με τα μαθήματα Aerial Yoga."
    },
    {
        slug: "handstands Teacher Training",
        imgSrc: "/trainings-icons/handstands-tt.webp",
        title: "Handstands Teacher Training",
        description: "Κατακτήστε την τέχνη των κατακορύφων με την καθοδήγηση των ειδικών μας."
    },
    {
        slug: "thai-yoga-massage",
        imgSrc: "/trainings-icons/thai-massage.png",
        title: "Thai Yoga Massage  Teacher Training",
        description: "Μάθετε την τέχνη του Thai Yoga Massage για να ενισχύσετε τις θεραπευτικές σας ικανότητες."
    },
    {
        slug: "functional-anatomy",
        imgSrc: "/trainings-icons/functional-anatomy.jpg",
        title: "Functional Anatomy Teacher Training",
        description: "Κατανοήστε τη μηχανική του σώματος για να βελτιώσετε την πρακτική σας στη yoga."
    },
    {
        slug: "yoga-teacher-training",
        imgSrc: "/trainings-icons/yoga.png",
        title: "Yoga 200hrs & 300hrs Teacher Training",
        description: "Εμβαθύνετε στην πρακτική σας με την ολοκληρωμένη εκπαίδευση δασκάλων Yoga."
    },
];
export default function TrainingsCards() {
    return (
        <div>
            {trainings.map((training, index) => {
                const isImageLeft = index % 2 === 0;
                const sectionBg = isImageLeft ? "bg-[#d4cbc2]" : "bg-[#F3F3F3]";

                const imageBlock = (
                    <div className="relative md:w-1/2 w-full h-80 md:h-auto">
                        {/* On mobile, height is fixed. On desktop, it will stretch. */}
                        <Image
                            src={training.imgSrc}
                            alt={training.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                );

                const textBlock = (
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <div className="p-8 md:p-16 lg:p-24 max-w-2xl mx-auto text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">{training.title}</h3>
                            <p className="text-lg text-gray-700">{training.description}</p>
                        </div>
                    </div>
                );

                return (
                    <section key={training.slug} className={`w-full ${sectionBg}`}>
                        <div className="flex flex-col md:flex-row md:items-stretch min-h-[700px]">
                            {isImageLeft ? imageBlock : textBlock}
                            {isImageLeft ? textBlock : imageBlock}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}