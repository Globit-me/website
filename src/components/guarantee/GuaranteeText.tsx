"use client";
import { motion } from 'framer-motion';
import React from 'react'

const GuaranteeText = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
        },
      };
    
    return (
        <motion.div
          className="flex flex-col md:flex-1 w-full justify-center items-center md:items-start text-center md:text-left"
          initial="hidden"
          animate="visible"
        >
            <motion.div>
                <motion.h2
                    variants={titleVariants}
                    className='text-lg md:text-xl text-custom-blue font-bold mt-4 md:mt-6'
                >
                Te Protegemos contra: 
                </motion.h2>
            </motion.div>
        </motion.div>
      );
}

export default GuaranteeText