"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/brands/paypal.png", alt: "paypal" },
  { src: "/brands/deel.png", alt: "deel" },
  { src: "/brands/payoneer.png", alt: "payoneer" },
  { src: "/brands/wise.png", alt: "wise" },
  { src: "/brands/zelle.png", alt: "zelle" }
];

const ImageCarousel = () => {
 
  const repeatImages = [...images, ...images]; 

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div className="flex"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear"
        }}>
        {repeatImages.map((image, index) => (
          <div key={index} className="min-w-max">
            <Image src={image.src} height={225} width={225} alt={image.alt} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
