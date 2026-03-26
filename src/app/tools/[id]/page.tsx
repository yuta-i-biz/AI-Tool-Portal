import React from 'react';
import { notFound } from 'next/navigation';
import toolsData from '@/data/tools.json';
import Link from 'next/link';
import Footer from '@/components/Footer';

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
            ← スクール一覧に戻る
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-32 px-6 w-full max-w-5xl mx-auto flex flex-col items-center gap-20">
        {/* Header Section */}
        <div className="animate-slide-up text-center w-full flex flex-col items-center">
          <div className="inline-block mb-10 px-6 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-black tracking-widest uppercase">
            {tool.category}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-12 tracking-tighter leading-[1.3] md:leading-[1.1] md:whitespace-nowrap">
            <span className="keep-phrase">{tool.name}</span> <wbr />
            <span className="keep-phrase premium-gradient">受講・キャリアガイド</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto px-4">
            {tool.description}
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex justify-center w-full">
          <div className="glass-panel p-8 md:p-12 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-10 w-full max-w-4xl border-accent/20 bg-accent/5">
            <div className="flex-grow">
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4 block">Official / Affiliate</span>
              <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">{tool.name}</h3>
              <p className="text-gray-400 font-medium text-lg italic">通常受講料: {tool.pricing}</p>
            </div>
            <a href={tool.affiliate_url} target="_blank" rel="noopener noreferrer" className="btn-premium px-12 py-5 text-lg group whitespace-nowrap">
              無料カウンセリングを予約
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>

        {/* Features Section */}
        {tool.features && (
          <section className="w-full">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">カリキュラムの特長</h2>
              <div className="h-2.5 w-40 bg-accent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tool.features.map((feature: any, index: number) => (
                <div key={index} className="glass-panel p-10 border-white/5 hover:border-accent/40 transition-all group">
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
                  <h4 className="text-2xl font-black mb-4 text-white">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pros & Cons Section */}
        {tool.pros && tool.cons && (
          <section className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 border-green-500/10 bg-green-500/5 hover:bg-green-500/10 transition-colors">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-green-400">
                <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-[10px]">✓</span>
                メリット
              </h3>
              <ul className="space-y-3">
                {tool.pros.map((pro: string, i: number) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-3 leading-relaxed">
                    <span className="text-green-500/60 mt-1.5 text-[8px]">●</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel p-8 border-red-500/10 bg-red-500/5 hover:bg-red-500/10 transition-colors">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-red-400">
                <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-[10px]">!</span>
                デメリット
              </h3>
              <ul className="space-y-3">
                {tool.cons.map((con: string, i: number) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-3 leading-relaxed">
                    <span className="text-red-500/60 mt-1.5 text-[8px]">●</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Comparison Section */}
        {tool.comparison && (
          <section className="w-full">
            <div className="glass-panel p-10 md:p-16 border-accent/20">
              <h3 className="text-3xl font-black mb-12 text-center">
                {tool.name} vs {tool.comparison.alt_tool.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden">
                <div className="p-10 bg-accent/5 border-b md:border-b-0 md:border-r border-white/10">
                  <h4 className="text-xl font-black mb-6 text-accent">{tool.name}</h4>
                  <ul className="space-y-4">
                    {tool.comparison.main_tool.features.map((item: string, i: number) => (
                      <li key={i} className="text-white flex items-center gap-3 italic">
                        <span className="text-accent">▶</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-10 bg-white/5 opacity-60">
                  <h4 className="text-xl font-black mb-6 text-gray-400">{tool.comparison.alt_tool.name}</h4>
                  <ul className="space-y-4">
                    {tool.comparison.alt_tool.features.map((item: string, i: number) => (
                      <li key={i} className="text-gray-400 flex items-center gap-3 line-through decoration-white/20">
                        <span>×</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-10 text-sm italic">※ {tool.comparison.summary}</p>
            </div>
          </section>
        )}

        {/* Cost Reduction Simulation Section */}
        {tool.cost_reduction && (
          <section className="w-full">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{tool.cost_reduction.title}</h2>
              <p className="text-gray-400 text-xl">{tool.cost_reduction.subtitle}</p>
              <div className="h-2.5 w-40 bg-accent rounded-full mt-6"></div>
            </div>
            
            <div className="glass-panel p-10 md:p-16 border-accent/20 bg-accent/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/5 opacity-60">
                    <span className="text-xs font-black uppercase tracking-widest block mb-4">{tool.cost_reduction.before.label}</span>
                    <div className="flex justify-between items-end">
                      <div className="text-3xl font-bold text-gray-400">{tool.cost_reduction.before.hours}h</div>
                      <div className="text-2xl font-bold text-gray-500">{tool.cost_reduction.before.cost}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center py-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-black font-black animate-bounce">↓</div>
                  </div>

                  <div className="p-8 rounded-3xl bg-accent/10 border border-accent/30 shadow-2xl shadow-accent/20">
                    <span className="text-xs font-black uppercase tracking-widest block mb-4 text-accent">{tool.cost_reduction.after.label}</span>
                    <div className="flex justify-between items-end">
                      <div className="text-4xl font-black text-white">{tool.cost_reduction.after.hours}h</div>
                      <div className="text-3xl font-black text-accent">{tool.cost_reduction.after.cost}</div>
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-left space-y-10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Cost Reduction Ratio</span>
                    <div className="text-8xl md:text-9xl font-black italic tracking-tighter text-accent leading-none">
                      {tool.cost_reduction.saving_ratio}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Estimated Monthly Savings</span>
                    <div className="text-4xl font-black text-white">
                      {tool.cost_reduction.monthly_saving} <span className="text-lg text-gray-400 font-medium">/ month</span>
                    </div>
                    <p className="mt-6 text-gray-500 text-sm italic leading-relaxed">
                      ※ エンジニア人件費を時給5,000円と仮定して算出。開発効率の向上により、浮いたコストを新規事業や戦略立案に充てることが可能です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Career Recipe Section */}
        <section className="w-full">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">卒業後のキャリア・実践例</h2>
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

        {/* Pricing Table Section */}
        {tool.pricing_details && (
          <section className="w-full">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">コース料金・期間</h2>
              <div className="h-2.5 w-40 bg-accent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tool.pricing_details.map((plan: any, index: number) => (
                <div key={index} className={`glass-panel p-10 border-white/5 ${plan.plan.includes('8週') || plan.plan.includes('6ヶ月') ? 'bg-accent/10 border-accent/40 scale-105' : ''}`}>
                  <h4 className="text-xl font-black mb-2 text-white">{plan.plan}</h4>
                  <div className="text-4xl font-black mb-8 premium-gradient">{plan.price}</div>
                  <ul className="space-y-3">
                    {plan.features.map((f: string, i: number) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-500 text-sm italic">※ 表示価格は政府給付金（最大70〜80%）を適用した後の実質負担額の目安です。</p>
          </section>
        )}

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
      <Footer />
    </div>
  );
}
