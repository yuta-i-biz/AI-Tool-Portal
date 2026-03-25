import Link from 'next/link';

interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: string;
  url: string;
}

export default function ToolCard({ tool }: { tool: any }) {
  return (
    <div className="glass-card p-6 md:p-10 flex flex-col h-full group relative overflow-hidden">
      {/* 装飾用バックライト */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700"></div>

      <div className="flex justify-between items-start mb-8 md:mb-10 relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center border border-white/10 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500 shadow-2xl">
          <span className="text-2xl md:text-3xl font-black premium-gradient">{tool.name[0]}</span>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-accent bg-accent/10 px-3 md:px-4 py-1.5 rounded-full border border-accent/20">
            {tool.category}
          </span>
        </div>
      </div>
      
      <div className="relative z-10 flex-grow">
        <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter group-hover:text-accent transition-colors duration-300">
          {tool.name}
        </h3>
        
        <p className="text-gray-400 text-sm md:text-base mb-8 md:mb-10 leading-relaxed font-medium line-clamp-3">
          {tool.description}
        </p>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex items-center justify-between relative z-10">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1.5">Expected ROI</span>
          <span className="text-lg font-black text-white tracking-tight">{tool.pricing}</span>
        </div>
        
        <Link 
          href={`/tools/${tool.id}`}
          className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-accent hover:text-black transition-all duration-500 border border-white/10 hover:border-accent hover:rotate-45 group/btn"
        >
          <svg className="w-6 h-6 transform group-hover/btn:-rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
