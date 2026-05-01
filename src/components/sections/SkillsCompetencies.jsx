import React from 'react';
import BentoCard from '../ui/BentoCard';
import { Star } from 'lucide-react';

const SkillsCompetencies = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <BentoCard className="flex flex-col h-full bg-azure-lighter/50 border-none justify-center group hover:bg-white transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Star className="text-azure-dark" size={24} />
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-azure-light hover:text-slate-900 shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
          >
            {skill}
          </span>
        ))}
      </div>
    </BentoCard>
  );
};

export default SkillsCompetencies;
