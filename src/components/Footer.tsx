import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 relative z-10 w-full flex flex-col items-center">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-10 inline-block">
          <span className="text-xl md:text-2xl font-black tracking-[0.5em] text-white opacity-20 hover:opacity-100 transition-opacity duration-1000 uppercase">
            AI Tool Portal
          </span>
        </div>
        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
          © 2026 AI Tool Portal. Professional Affiliate Media.
        </p>
      </div>
    </footer>
  );
}
