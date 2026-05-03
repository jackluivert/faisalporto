import React from 'react';
import { userConfig } from './config/userConfig';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutHero from './components/sections/AboutHero';
import GallerySection from './components/sections/GallerySection';
import ProjectsGrid from './components/sections/ProjectsGrid';
import ContactCard from './components/sections/ContactCard';
import SkillsCompetencies from './components/sections/SkillsCompetencies';

function App() {
  const { personal, projects, contact, skills, gallery } = userConfig;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-azure selection:text-slate-900 w-full overflow-x-hidden">
      
      <Header navItems={userConfig.nav} name={personal.name} />

      <main className="max-w-6xl w-full mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col gap-4 md:gap-6">
          
          {/* Top Section: Hero + About */}
          <div id="about" className="w-full">
             <AboutHero config={personal} />
          </div>

          {/* Gallery Section */}
          <section className="w-full">
            <GallerySection galleryConfig={gallery} />
          </section>

          {/* Middle Section: Projects */}
          <section id="projects" className="pt-12 md:pt-8 w-full">
            <div className="flex items-center justify-between mb-8 pl-4 border-l-4 border-azure-dark">
               <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Featured Projects</h2>
               <span className="font-medium text-slate-500">{projects?.length} Projects</span>
            </div>
            <ProjectsGrid projects={projects} />
          </section>

          {/* Skills Section */}
          <section id="skills" className="pt-12 md:pt-8 w-full">
             <div className="flex items-center justify-between mb-8 pl-4 border-l-4 border-navy-dark">
               <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Expertise & Skills</h2>
             </div>
             <SkillsCompetencies skills={skills} />
          </section>

          {/* Contact Section */}
          <section id="contact" className="mt-8 mb-16 w-full">
            <ContactCard contactConfig={contact} />
          </section>

        </div>
      </main>

      <Footer config={userConfig.footer} />
    </div>
  );
}

export default App;
