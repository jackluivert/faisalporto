import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const PhotoGallery = ({ gallery, avatarUrl }) => {
  const images = gallery && gallery.length > 0 ? gallery : [avatarUrl];

  return (
    <div className="grid grid-cols-1 gap-4 h-full">
      {images.slice(0, 2).map((img, idx) => (
        <div key={idx} className="h-full min-h-[300px] md:min-h-0 rounded-3xl overflow-hidden shadow-glass border border-white/40 bg-white/40 backdrop-blur-xl relative group">
           <MotionDiv 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-full flex items-center justify-center"
           >
             <img 
               src={img} 
               alt={`Headshot ${idx + 1}`} 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" 
             />
             <div className="absolute inset-0 bg-neomint/10 group-hover:opacity-0 transition-opacity duration-500" />
           </MotionDiv>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
