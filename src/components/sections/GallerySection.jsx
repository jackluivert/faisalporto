import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function GallerySection({ galleryConfig }) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  if (!galleryConfig || (!galleryConfig.items && !galleryConfig.videoUrl)) {
    return null;
  }

  const items = galleryConfig.items || [];
  const videoUrl = galleryConfig.videoUrl;
  const title = galleryConfig.title || "Koleksi Foto & Video";

  // Split items: first 4 are portraits, next 4 are landscapes
  const portraits = items.slice(0, 4);
  const landscapes = items.slice(4, 8);

  return (
    <section id="gallery" className="pt-12 md:pt-8 w-full">
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight text-center">
          {title}
        </h2>
      </div>

      {/* Gallery Grid Container */}
      <div className="space-y-6 md:space-y-8">
        {/* First Row: 2 Portrait Photos + 2 Landscape Photos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Portrait Photos (2 columns) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {portraits.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Landscape Photos (2 columns) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {landscapes.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg border-2 border-emerald-400/30 hover:border-emerald-400 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-400/20"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: 2 Portrait Photos + 2 Landscape Photos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Portrait Photos (2 columns) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {portraits.slice(2, 4).map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Landscape Photos (2 columns) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {landscapes.slice(2, 4).map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg border-2 border-emerald-400/30 hover:border-emerald-400 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-400/20"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        {videoUrl && (
          <div className="mt-8 md:mt-12">
            <div className="relative group w-full overflow-hidden rounded-lg border-2 border-violet-400/30 hover:border-violet-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-violet-400/20">
              <video
                src={videoUrl}
                className="w-full h-auto object-cover aspect-video"
                controls
                controlsList="nodownload"
                poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=675&fit=crop"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
