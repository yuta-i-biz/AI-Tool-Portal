'use client';

import React from 'react';
import ToolCard from '@/components/ToolCard';
import ComparisonTable from '@/components/ComparisonTable';
import Footer from '@/components/Footer';
import toolsData from '@/data/tools.json';

export default function Home() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'School', 'Career'];

  const filteredTools = activeCategory === 'All' 
    ? toolsData 
    : toolsData.filter(t => t.category.toLowerCase().includes(activeCategory.toLowerCase()) || (activeCategory === 'School' && t.category.includes('School')) || (activeCategory === 'Career' && t.category.includes('Career')));

  return (
    <main className="min-h-screen w-full relative text-gray-100 selection:bg-accent selection:text-black overflow-x-hidden flex flex-col items-center">
      {/* プレミアム背景システム */}
      <div className="bg-container fixed inset-0 z-0 text-white/5 opacity-40 mix-blend-overlay">
        <div className="bg-grid"></div>
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-xl animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-accent text-[10px] font-black tracking-[0.3em] uppercase">AI Reskilling Ecosystem 2026</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tighter leading-[1.1] md:leading-[1] animate-slide-up">
          <span className="keep-phrase">AIを、</span>
          <br className="md:hidden" />
          <span className="keep-phrase premium-gradient">武器にする。</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium animate-fade-in-delayed px-4">
          「使う側」から「操る側」へ。2026年、自律型AI時代を生き抜くための<wbr />最強リスキリング。
          <br className="hidden md:block" />
          政府給付金で<wbr />最大70%〜80%還付。<wbr />実質負担を抑えて、年収を最大化する。
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-delayed">
          <a href="#tools" className="btn-premium text-lg px-20 py-6 shadow-[0_0_50px_rgba(var(--accent-rgb),0.3)]">
            高単価スクールを比較する
          </a>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="tools" className="relative py-32 px-6 w-full max-w-7xl mx-auto flex flex-col items-center z-10 scroll-mt-24">
        <div className="mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-center">還付率・年収増・比較</h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-accent to-accent-blue rounded-full"></div>
        </div>
        <ComparisonTable />
      </section>

      {/* Grid Section */}
      <section className="relative py-32 px-6 w-full max-w-7xl mx-auto flex flex-col items-center z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 gap-8 w-full">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">AI時代の<br className="md:hidden" />必修科目</h2>
            <p className="text-lg text-gray-400 font-medium">1件1.5万〜3万円の報酬、かつ実務に直結する厳選スクール。</p>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-accent text-black shadow-lg shadow-accent/20' 
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full animate-fade-in">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
