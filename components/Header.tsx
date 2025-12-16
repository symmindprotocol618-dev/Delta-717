
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          <span className="text-cyan-400">Delta-717</span> Governance Core
        </h1>
        <p className="text-slate-400 mt-1">
          Interactive Setup & Deployment Guide
        </p>
      </div>
    </header>
  );
};

export default Header;
