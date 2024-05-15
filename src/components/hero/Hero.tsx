import AnimatedTitle from "./AnimatedTitle";
import Calculator from "./Calculator";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row mt-0 mb-8 sm:my-28 mx-6 md:mx-0 space-y-5 ">
      <AnimatedTitle />
      <Calculator />
    </section>
  );
};

export default Hero;
