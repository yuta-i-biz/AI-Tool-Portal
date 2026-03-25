import ToolCard from '@/components/ToolCard';
import ComparisonTable from '@/components/ComparisonTable';
import toolsData from '@/data/tools.json';

export default function Home() {
  return (
    <main className="min-h-screen w-full relative text-gray-100 selection:bg-accent selection:text-black overflow-hidden flex flex-col items-center">
      {/* プレミアム背景システム */}
      <div className="bg-container">
        <div className="bg-grid"></div>
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-xl animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-accent text-[10px] font-black tracking-[0.3em] uppercase">Marunage AI Ecosystem 2026</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-12 tracking-tighter leading-[1.1] md:leading-[1] animate-slide-up md:whitespace-nowrap">
          <span className="keep-phrase">AIで、</span>
          <span className="keep-phrase premium-gradient">稼ぐ。</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium animate-fade-in-delayed px-4">
          「どれを使えばいいか<wbr />分からない」を、<wbr />利益に直結する答えに変える。<br className="hidden md:block" />
          プロが厳選した、<wbr />実務で10倍のROIを叩き出す<wbr />最強AIツール群。
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-delayed">
          <a href="#tools" className="btn-premium text-lg px-16 py-5">
            厳選ツールを比較する
          </a>
          <button className="px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-all text-lg font-bold backdrop-blur-md">
            導入ガイドをDL
          </button>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="tools" className="py-40 px-6 max-w-7xl mx-auto flex flex-col items-center relative z-10 scroll-mt-20">
        <div className="mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-center">ROI別・徹底比較</h2>
          <div className="h-2 w-48 bg-gradient-to-r from-accent to-accent-blue rounded-full"></div>
        </div>
        <ComparisonTable />
      </section>

      {/* Grid Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-24 gap-8 w-full">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter">稼ぐための厳選5ツール</h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">これらを持たずにAI時代のビジネスは語れない。</p>
          </div>
          <div className="hidden md:block h-px flex-grow mx-12 bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {toolsData.slice(0, 5).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
          {/* 追加のCTAカード */}
          <div className="glass-card p-10 flex flex-col items-center justify-center text-center border-dashed border-accent/30 group bg-accent/5">
             <div className="text-4xl mb-6">🚀</div>
             <h3 className="text-2xl font-black mb-4">最適な構成を知りたい？</h3>
             <p className="text-gray-400 text-sm mb-8 leading-relaxed">あなたのビジネスに最適なAIチーム構成を提案します。</p>
             <button className="text-accent font-black uppercase tracking-widest text-xs hover:underline">
               無料診断はこちら
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16 inline-block">
            <span className="text-3xl font-black tracking-[0.5em] text-white opacity-20 hover:opacity-100 transition-opacity duration-1000">
              JIBUN KABUSHIKI KAISHA
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left mb-20 opacity-60">
            <div>
              <h4 className="text-white font-black mb-6 text-xs uppercase tracking-widest">Tools</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-accent transition-colors">Efficiency</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-6 text-xs uppercase tracking-widest">Resources</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-accent transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Tutorials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-6 text-xs uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-6 text-xs uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 AI Tool Portal. Next Generation Affiliate Marketing System.
          </p>
        </div>
      </footer>
    </main>
  );
}
