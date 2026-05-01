import React from 'react';
import BentoCard from '../ui/BentoCard';

const AboutHero = ({ config }) => {
  return (
    <BentoCard className="h-full flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12">
      <div className="w-56 h-72 md:w-80 md:h-96 flex-shrink-0">
        <img 
          src={config.avatarUrl} 
          alt={config.name} 
          className="w-full h-full object-cover object-top rounded-2xl shadow-lg border-4 border-white"
        />
      </div>
      <div className="flex flex-col justify-center flex-1 text-center md:text-left">
        <div>
          <span className="inline-block px-4 py-1.5 bg-azure/10 text-azure-darker text-sm font-bold tracking-wide rounded-full mb-4 uppercase">
            {config.role}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 leading-[1.1] mb-2">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure-dark to-navy">{config.name}</span>.
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-slate-500 mt-2 italic">
            {config.keywords}
          </h3>
        </div>
        <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed mt-6">
          "{config.tagline}"
        </p>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mt-4 font-light">
          {config.bio}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-6 py-3 bg-azure-dark hover:bg-azure-darker text-white font-semibold rounded-full shadow-md transition-all text-center">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold rounded-full shadow-sm transition-all text-center">
            Contact Me
          </a>
        </div>
      </div>
    </BentoCard>
  );
};

export default AboutHero;