import Hero from "./Hero";
import Services from "./Services";

export const metadata = {
  title: "Home Page - Sulaiman Biswas",
};

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Services />
    </div>
  );
};

export default HomePage;
