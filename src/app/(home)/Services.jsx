import ServiceCard from "@/components/Card/ServiceCard";

const Services = () => {
  return (
    <div className="mb-10 flex flex-col gap-10">
      <div className="flex flex-col justify-center md:w-1/2 mx-auto items-center px-5 gap-4">
        <h1 className="text-4xl font-semibold text-black">Our Services</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 container mx-auto px-28 ">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
