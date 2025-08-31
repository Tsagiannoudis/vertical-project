import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center md:justify-start text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/2.jpg"
        alt="Γυναίκα κάνει aerial yoga σε ένα φωτεινό στούντιο."
        fill={true}
        className="object-cover -z-10"
        priority
      />
      {/* Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent -z-10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-16">
        <div className="max-w-2xl text-center md:text-left animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Vertical Project
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md">
            Εδώ που η εκπαίδευση συναντά την έμπνευση.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/courses"
              className="bg-[#F2E94E] text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#f0e631] transition-colors duration-300 transform hover:scale-105"
            >
              Εκπαιδευτικά
            </Link>
            <Link 
              href="/workshops"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105"
            >
              Workshops
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;