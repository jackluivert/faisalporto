import React from 'react';

const Header = ({ navItems, name }) => {
  return (
    <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 w-full">
      <div className="bg-white/60 backdrop-blur-md rounded-full px-6 py-4 shadow-glass border border-white/50 flex items-center justify-between">
        <h1 className="font-bold text-xl tracking-tight text-slate-900">
          <a href="#">{name ? name.split(' ')[0][0] + (name.split(' ')[1]?.[0] || '') : 'Me'}</a>
        </h1>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;