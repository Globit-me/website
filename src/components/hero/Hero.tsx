import AnimatedTitle from "./AnimatedTitle";
import Calculator from "./Calculator";
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  return (
    <section className="flex flex-col my-28">
      <div className="flex flex-row">
        <AnimatedTitle />
        <Calculator />
      </div>
    </section>
  );
};

export default Hero;
