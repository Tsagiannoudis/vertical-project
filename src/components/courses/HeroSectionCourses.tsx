//import Image from "next/image";

const HeroSectionCourses = () => {
    return (
    <section className="relative w-full h-[300px] bg-[#3c3c3c]">
        {/* <Image
          src="/h2-rev-img.jpg"
          alt="Hero Image"
          fill={true}
          className="object-cover"
          priority
        /> */}
            <div className="container mx-auto max-w-7xl px-4 absolute inset-x-0 bottom-0 mb-4 text-left text-white">
                <h1 className="text-5xl font-bold">Εκπαιδευτικά</h1>
            </div>
      </section>
    );
}

export default HeroSectionCourses;