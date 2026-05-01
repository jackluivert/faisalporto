import React from 'react';
import BentoCard from '../ui/BentoCard';
import { Play } from 'lucide-react';

const MediaShowcase = ({ media }) => {
  if (!media || media.length === 0) return null;
  const primaryReel = media[0];

  return (
    <BentoCard className="flex flex-col h-full bg-slate-900 border border-slate-800 p-2 sm:p-4 overflow-hidden relative group">
      <div className="absolute top-4 left-6 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white/90">
         <Play size={16} className="text-neomint" />
         <span className="text-xs font-bold tracking-widest uppercase">Demo Reel</span>
      </div>
      <div className="w-full pt-[56.25%] relative rounded-2xl overflow-hidden bg-black/80">
        <iframe
          src={primaryReel.url}
          title={primaryReel.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    </BentoCard>
  );
};

export default MediaShowcase;
