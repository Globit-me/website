"use client"

import { motion } from 'framer-motion'

type AnimatedTitleProps = {
  title: string
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title }) => {
  return (
    <motion.h1
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="md:text-3xl text-xl font-semibold text-center mb-12"
      >
        {title}
      </motion.h1>
  )
}

export default AnimatedTitle