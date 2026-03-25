import React from 'react';
import { notFound } from 'next/navigation';
import toolsData from '@/data/tools.json';
import Link from 'next/link';

export function generateStaticParams() {
  return toolsData.map((tool) => ({
    id: tool.id,
  }));
}

export default async function ToolReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = toolsData.find((t) => t.id === id);

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen relative text-gray-100 selection:bg-accent selection:text-black">
      {/* プレミアム背景 */}
      <div className="bg-container">
        <div className="bg-grid opacity-20"></div>
        <div className="bg-blob bg-blob-1 opacity-10"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black tracking-widest text-white group">
            AI <span className="text-accent group-hover:premium-gradient">PORTAL</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
            ← ツール一覧に戻る
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-32 px-6 max-w-5xl mx-auto relative z-10 flex flex-col items-center md:items-start">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 animate-slide-up text-center md:text-left w-full">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-[9px] md:text-[10px] font-black tracking-widest uppercase">
            {tool.category}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-10 tracking-tighter leading-[1.1] md:leading-[0.9]">
            {tool.name} <br className="hidden md:block" />
            <span className="premium-gradient">徹底活用ガイド</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto md:mx-0">
            {tool.description}
          </p>
        </div>

        {/* Action Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-panel p-10 flex flex-col items-center text-center justify-between">
            <div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 block">Official / Affiliate</span>
              <h3 className="text-3xl font-black mb-6">{tool.name} を試す</h3>
              <p className="text-gray-400 mb-8 font-medium">価格目安: {tool.pricing}</p>
            </div>
            <a href={tool.affiliate_url} target="_blank" rel="noopener noreferrer" className="btn-premium w-full">
              公式サイトで開始する
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          <div className="glass-panel p-10 flex flex-col items-center text-center justify-between border-accent/20 bg-accent/5">
            <div>
              <span className="text-[10px] font-black text-accent uppercase tracking-widest mb-4 block">Professional Consulting</span>
              <h3 className="text-3xl font-black mb-6">導入を「丸投げ」する</h3>
              <p className="text-gray-400 mb-8 font-medium">導入から運用まで、専属CMOチームが代行します。</p>
            </div>
            <button className="w-full px-10 py-5 rounded-full border border-accent/40 text-accent font-black hover:bg-accent hover:text-black transition-all">
              {tool.marunage_cta || "まるなげCMOへ相談"}
            </button>
          </div>
        </div>

        {/* AI Recipe Section */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-4 tracking-tight">AI実践レシピ</h2>
            <div className="h-1.5 w-24 bg-accent rounded-full"></div>
          </div>
          
          <div className="glass-panel p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
               <span className="text-xs font-black uppercase tracking-widest">Recipe Key</span>
            </div>
            <h4 className="text-2xl font-black mb-6 premium-gradient">{tool.recipe.title}</h4>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">{tool.recipe.description}</p>
            
            <div className="bg-black/40 rounded-2xl p-8 border border-white/5 relative">
              <div className="absolute top-4 right-6 flex items-center gap-2">
                <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Gemini / GPT Prompt</span>
                <button className="text-accent hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                </button>
              </div>
              <pre className="text-accent font-mono text-sm whitespace-pre-wrap leading-relaxed pt-6">
                {tool.recipe.prompt}
              </pre>
            </div>
          </div>
        </section>

        {/* Meta Stats */}
        <div className="flex flex-wrap gap-12 opacity-40">
           <div>
             <span className="text-[10px] font-black uppercase tracking-widest block mb-2">Last Update</span>
             <span className="text-sm font-bold">{new Date(tool.meta.lastUpdated).toLocaleDateString()}</span>
           </div>
           <div>
             <span className="text-[10px] font-black uppercase tracking-widest block mb-2">SEO Score</span>
             <span className="text-sm font-bold text-accent">{tool.meta.seoScore}/100</span>
           </div>
        </div>
      </main>
    </div>
  );
}
