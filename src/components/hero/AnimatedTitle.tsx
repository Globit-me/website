"use client"

import { motion } from "framer-motion";

const AnimatedTitle = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-1 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-custom-blue font-bold text-3xl md:text-5xl text-center md:text-left"
        variants={itemVariants}
      >
        Envía y recibí dinero
      </motion.h2>
      <motion.h2
        className="text-custom-black font-bold md:text-2xl text-lg text-center md:text-left"
        variants={itemVariants}
      >
        en cualquier plataforma del mundo
      </motion.h2>
      <motion.div
        className="space-y-2 md:space-y-4 mt-8 md:mt-12 text-custom-black text-center md:text-left"
        variants={itemVariants}
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

export default AnimatedTitle;
