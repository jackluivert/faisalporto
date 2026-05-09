import React, { useState } from 'react';
import BentoCard from '../ui/BentoCard';
import * as Icons from 'lucide-react';

const ContactCard = ({ contactConfig }) => {
  const [copied, setCopied] = useState(false);

  // Directly mapping string names from userConfig
  const iconMap = {
    Twitter: Icons.MessageCircle,
    Instagram: Icons.Camera,
    MessageCircle: Icons.MessageCircle,
    Film: Icons.Film
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <BentoCard className="flex flex-col md:flex-row items-center justify-between gap-8 h-full border-none relative overflow-hidden text-center md:text-left shadow-xl hover:shadow-glass-hover transition-all duration-300 p-8 md:p-12 bg-azure-lighter/10">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-azure/10 to-azure-light/5 opacity-10"></div>
      <div className="flex-1 relative z-10 w-full flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Let's Work Together
        </h2>

        <div className="flex flex-col gap-3 text-slate-700 text-lg mb-8 items-center md:items-start">
           <div className="flex items-center gap-2">
             <Icons.Mail size={20} className="text-azure-dark" />
             <a href={`mailto:${contactConfig.email}`} className="text-slate-800 hover:text-azure-dark transition-colors">{contactConfig.email}</a>
           </div>
           {contactConfig.phone && (
             <div className="flex items-center gap-2">
              <Icons.MessageCircle size={20} className="text-azure-dark" />
              <a href={`tel:${contactConfig.phone}`} className="text-slate-800 hover:text-azure-dark transition-colors">{contactConfig.phone}</a>
             </div>
           )}
           {contactConfig.location && (
             <div className="flex items-center gap-2">
              <Icons.MapPin size={20} className="text-azure-dark" />
              <span className="text-slate-800">{contactConfig.location}</span>
             </div>
           )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button 
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-2 bg-azure hover:bg-azure-dark text-white px-8 py-3 rounded-full font-bold transition-all transform hover:-translate-y-1 w-full md:w-auto shadow-md"
          >
            {copied ? <Icons.Check size={20} /> : <Icons.Mail size={20} />}
            <span>{copied ? "Email Copied!" : contactConfig.buttonText}</span>
          </button>
        </div>
      </div>

      <div className="flex bg-slate-800/40 p-4 rounded-3xl gap-4 border border-white/5 relative z-10 shadow-lg backdrop-blur-md justify-center mt-6 md:mt-0">
        {contactConfig.socials?.map((social) => {
          const Icon = iconMap[social.iconName] || Icons.Link;
          return (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 text-azure-light hover:text-white hover:bg-white/10 rounded-full transition-colors flex items-center gap-2"
              aria-label={social.name}
            >
              {social.iconUrl ? (
                <img src={social.iconUrl} alt={`${social.name} icon`} className="w-6 h-6 object-contain" />
              ) : (
                <Icon size={24} />
              )}
            </a>
          );
        })}
      </div>
    </BentoCard>
  );
}

export default ContactCard;
