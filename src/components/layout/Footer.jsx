import React from 'react';

const Footer = ({ config }) => {
  return (
    <footer className="text-center py-12 text-slate-500 text-sm">
      <p>{config.copyright}</p>
    </footer>
  );
}

export default Footer;