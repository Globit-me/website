"use client";
import { motion } from 'framer-motion';
import React from 'react'

const GuaranteeText = ({ title, color = "text-custom-blue" }: { title: string, color?: string }) => {
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
                    className={`text-2xl md:text-2xl font-bold  ${"color: " + color}`}
                >
                {title}
                </motion.h2>
            </motion.div>
        </motion.div>
      );
}

export default GuaranteeText