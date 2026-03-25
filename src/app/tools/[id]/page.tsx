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
    <div className="min-h-screen w-full relative text-gray-100 selection:bg-accent selection:text-black flex flex-col items-center">
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

      <main className="pt-32 pb-40 px-6 w-full max-w-5xl mx-auto flex flex-col items-center gap-32">
        {/* Header Section */}
        <div className="animate-slide-up text-center w-full flex flex-col items-center">
          <div className="inline-block mb-10 px-6 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-black tracking-widest uppercase">
            {tool.category}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-12 tracking-tighter leading-[1.3] md:leading-[1.1] md:whitespace-nowrap">
            <span className="keep-phrase">{tool.name}</span> <wbr />
            <span className="keep-phrase premium-gradient">徹底活用ガイド</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto px-4">
            {tool.description}
          </p>
        </div>

        {/* Action Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="glass-panel p-10 md:p-14 flex flex-col items-center text-center justify-between min-h-[500px]">
            <div className="mb-10">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-8 block">Official / Affiliate</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6">{tool.name} を試す</h3>
              <p className="text-gray-400 font-medium text-lg">価格目安: {tool.pricing}</p>
            </div>
            <a href={tool.affiliate_url} target="_blank" rel="noopener noreferrer" className="btn-premium w-full text-xl py-6">
              公式サイトで開始する
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          <div className="glass-panel p-10 md:p-14 flex flex-col items-center text-center justify-between border-accent/20 bg-accent/5 min-h-[500px]">
            <div className="mb-10">
              <span className="text-[10px] font-black text-accent uppercase tracking-widest mb-8 block">Professional Consulting</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6">導入を「丸投げ」する</h3>
              <p className="text-gray-400 font-medium text-lg">導入から運用まで、専属CMOチームが代行します。</p>
            </div>
            <button className="w-full px-10 py-6 rounded-full border border-accent/40 text-accent font-black text-xl hover:bg-accent hover:text-black transition-all">
              {tool.marunage_cta || "まるなげCMOへ相談"}
            </button>
          </div>
        </div>

        {/* AI Recipe Section */}
        <section className="w-full">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">AI実践レシピ</h2>
            <div className="h-2.5 w-40 bg-accent rounded-full"></div>
          </div>
          
          <div className="glass-panel p-10 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
               <span className="text-xs font-black uppercase tracking-widest">Recipe Key</span>
            </div>
            <h4 className="text-3xl md:text-4xl font-black mb-10 premium-gradient">{tool.recipe.title}</h4>
            <p className="text-gray-300 mb-16 text-xl md:text-2xl leading-relaxed">{tool.recipe.description}</p>
            
            <div className="bg-black/60 rounded-[2.5rem] p-10 md:p-16 border border-white/10">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs text-gray-500 font-black uppercase tracking-widest">Gemini / GPT Prompt</span>
              </div>
              <pre className="text-accent font-mono text-lg md:text-xl whitespace-pre-wrap leading-relaxed">
                {tool.recipe.prompt}
              </pre>
            </div>
          </div>
        </section>

        {/* Meta Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-16 opacity-40 w-full">
           <div>
             <span className="text-[10px] font-black uppercase tracking-widest block mb-4">Last Update</span>
             <span className="text-lg font-bold">{new Date(tool.meta.lastUpdated).toLocaleDateString()}</span>
           </div>
           <div>
             <span className="text-[10px] font-black uppercase tracking-widest block mb-4">SEO Score</span>
             <span className="text-lg font-bold text-accent">{tool.meta.seoScore}/100</span>
           </div>
        </div>
      </main>
    </div>
  );
}
