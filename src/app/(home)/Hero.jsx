import team from "@/assets/images/team.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="banner ">
      <div className="container mx-auto z-40">
        <div className="grid grid-cols-1  md:grid-cols-2  w-full items-center gap-10">
          <div className="px-4 md:pl-10 lg:pl-28 text-center md:text-left flex flex-col gap-6">
            <h1 className="text-5xl md:text-7xl font-bold">IT Agency</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              width={600}
              height={600}
              className="w-[600] h-auto object-cover"
              src={team}
              alt="bookstore"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
