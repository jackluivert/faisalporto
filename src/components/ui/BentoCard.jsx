import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const BentoCard = ({ children, className = '' }) => {
  return (
    <MotionDiv
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`
        bg-white/40 backdrop-blur-xl border border-white/60 
        rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
        hover:shadow-[0_8px_30px_rgba(209,250,229,0.4)]
        transition-shadow duration-300 overflow-hidden
        p-6 md:p-8
        ${className}
      `}
    >
      {children}
    </MotionDiv>
  );
};

export default BentoCard;
