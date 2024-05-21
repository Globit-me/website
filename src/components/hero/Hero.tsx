import Calculator from "../calculator/Calculator";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row mt-2 mb-8 md:my-28 mx-6 md:mx-0 space-y-5 items-center">
      <HeroText />
      <Calculator />
    </section>
  );
};

export default Hero;
