import { trainings } from "@/data/trainingCards";
import Link from "next/link";
import Image from "next/image";

export default function TrainingsCards() {
    return (
        <section className="w-full bg-[#F3F3F3]">
            <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24 space-y-16">
                {trainings.map((training, index) => {
                    const isImageLeft = index % 2 === 0;

                    const imageBlock = (
                        <div className="relative md:w-1/2 w-full min-h-[320px]">
                            <Image
                                src={training.image}
                                alt={training.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    );

                    const textBlock = (
                        <div className="md:w-1/2 w-full flex flex-col justify-center p-10 md:p-12 lg:p-16">
                            
                                <h3 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">{training.title}</h3>
                                <hr className="border-[#f2e94e] border-2 mt-4 w-36 mb-6 mx-auto md:mx-0"/>
                                <p className="text-gray-700 mb-6 flex-grow pt-8">{training.shortDescription}</p>
                           
                            <div className="mt-auto">
                                <Link href={`/courses/${training.slug}`} className="inline-block bg-[#F2E94E] text-black font-semibold py-2 px-6 rounded-ss-2xl rounded-br-2xl hover:bg-[#b9b788] transition-colors duration-300">
                                Περισσότερα
                                </Link>
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