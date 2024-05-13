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
      className="flex flex-col flex-1 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-custom-blue font-bold text-5xl"
        variants={itemVariants}
      >
        Envía y recibí dinero
      </motion.h2>
      <motion.h2
        className="text-custom-black font-bold text-2xl"
        variants={itemVariants}
      >
        en cualquier plataforma del mundo
      </motion.h2>
      <motion.div
        className="space-y-4 mt-12 text-custom-black"
        variants={itemVariants}
      >
        <p>
          ¡Bienvenido! <br />
          <strong>Globit Latinoamérica</strong> te conecta al ¡mundo! <br />
          Trabaja global, cobra local.
        </p>
        <p>
          Obtén una <strong>cotización competitiva</strong>
          <br />
          desde <strong>cualquier dispositivo.</strong>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedTitle;
