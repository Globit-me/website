"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/brands/paypal.webp", alt: "paypal" },
  { src: "/brands/deel.webp", alt: "deel" },
  { src: "/brands/payoneer.webp", alt: "payoneer" },
  { src: "/brands/wise.webp", alt: "wise" },
  { src: "/brands/zelle.webp", alt: "zelle" },
];

const ImageCarousel = () => {
  const repeatImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        }}
      >
        {repeatImages.map((image, index) => (
          <div key={index} className="min-w-max">
            <div className="h-[150px] w-[150px] md:h-[225px] md:w-[225px]">
              <Image
                src={image.src}
                alt={image.alt}
                priority
                width={225}
                height={225} 
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
