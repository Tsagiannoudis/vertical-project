import Image from "next/image";

const HeroSection = () => {
    return (
    <section className="relative w-full h-screen">
        <Image
          src="/h1-rev-img.jpg"
          alt="Hero Image"
          fill={true}
          className="object-cover"
          priority
        />
      </section>
    );
}

export default HeroSection;