import { trainings } from "@/data/trainingCards";
import Link from "next/link";
import Image from "next/image";

export default function TrainingsCards() {
  return (
    <section className="w-full pb-20 sm:pb-28 bg-[#fafafa]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {trainings.map((training, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={training.slug}
              className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
            >
              <div
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-stretch`}
              >
                {/* Image Block */}
                <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden bg-neutral-100">
                  <Image
                    src={training.image}
                    alt={training.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text Content Block */}
                <div className="w-full md:w-1/2 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Category Tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md">
                        Teacher Training
                      </span>
                      {training.locations && training.locations.length > 0 && (
                        <span className="text-[11px] font-medium text-neutral-400">
                          • {training.locations.length}{" "}
                          {training.locations.length === 1
                            ? "Τοποθεσία"
                            : "Τοποθεσίες"}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight group-hover:text-black transition-colors mb-3">
                      <Link href={`/courses/${training.slug}`}>
                        {training.title}
                      </Link>
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                      {training.shortDescription}
                    </p>
                  </div>

                  {/* Actions / CTA */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <Link
                      href={`/courses/${training.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:text-neutral-900 transition-colors"
                    >
                      <span>Αναλυτικο Προγραμμα</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>

                    <Link
                      href={`/courses/${training.slug}`}
                      className="px-4 py-2 rounded-full font-bold text-xs tracking-wider text-black bg-[#F2E94E] hover:bg-[#3c3c3c] hover:text-white transition-all duration-300 shadow-xs"
                    >
                      Πληροφορίες
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
