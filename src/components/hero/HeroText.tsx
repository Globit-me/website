"use client";

import { motion } from "framer-motion";

const HeroText = () => {
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-1 w-full"
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-custom-blue font-bold text-3xl md:text-5xl text-center md:text-left"
        variants={titleVariants}
      >
        Envía y recibí dinero
      </motion.h1>
      <motion.h2
        className="text-custom-black font-bold md:text-2xl text-lg text-center md:text-left"
        variants={titleVariants}
      >
        en cualquier plataforma del mundo
      </motion.h2>
      <motion.div
        className="space-y-2 md:space-y-4 mt-8 md:mt-12 text-custom-black text-center md:text-left"
        variants={paragraphVariants}
      >
        <p className="text-sm md:text-lg">
          ¡Bienvenido! <br />
          <strong>Globit Latinoamérica</strong> te conecta al ¡mundo! <br />
          Trabaja global, cobra local.
        </p>
        <p className="text-sm md:text-lg">
          Obtén una <strong>cotización competitiva</strong>
          <br />
          desde <strong>cualquier dispositivo.</strong>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
