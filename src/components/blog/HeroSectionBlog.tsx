//import Image from "next/image";

const HeroSectionBlog = () => {
    return (
    <section className="relative w-full h-[300px] bg-[#3c3c3c]">
        {/* <Image
          src="/h2-rev-img.jpg"
          alt="Hero Image"
          fill={true}
          className="object-cover"
          priority
        /> */}
            <div className="container max-w-3xl mb-4 absolute text-center text-white align-bottom bottom-0" >
                <h1 className="text-5xl font-bold ">Blog</h1>
            </div>
      </section>
    );
}

export default HeroSectionBlog;