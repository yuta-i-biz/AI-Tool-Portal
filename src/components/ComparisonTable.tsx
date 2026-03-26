import React from 'react';
import toolsData from '@/data/tools.json';

export default function ComparisonTable() {
  // 比較テーブルに表示する特定のツールを定義
  const displayIds = ['cursor', 'notion', 'perplexity', 'canva'];
  const displayTools = toolsData.filter(t => displayIds.includes(t.id));

  return (
    <div className="glass-panel overflow-hidden my-16 w-full animate-fade-in">
      <div className="p-6 md:p-10 border-b border-white/5 text-center flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight">AIツール ROI比較テーブル</h3>
        <p className="text-gray-400 text-sm mt-3 max-w-lg">実務での「稼ぎやすさ」と「導入コスト」のバランスをプロの視点で評価</p>
      </div>
      <div className="compare-container">
        <table className="compare-table">
          <thead>
            <tr>
              <th className="compare-header text-left sticky left-0 z-20 bg-background/90 backdrop-blur-md min-w-[140px]">ツール名</th>
              <th className="compare-header">ROI (収益性)</th>
              <th className="compare-header">導入難易度</th>
              <th className="compare-header text-left">最適な用途</th>
              <th className="compare-header">アクション</th>
            </tr>
          </thead>
          <tbody>
            {displayTools.map((tool) => (
              <tr key={tool.id} className="compare-row group">
                <td className="compare-cell text-left font-bold text-lg whitespace-nowrap sticky left-0 z-20 bg-background/90 backdrop-blur-md border-r border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-black premium-gradient border border-white/10 group-hover:border-accent transition-all">
                      {tool.name[0]}
                    </span>
                    {tool.name}
                  </div>
                </td>
                <td className="compare-cell text-accent font-black tracking-widest text-xl">
                  {tool.id === 'cursor' || tool.id === 'perplexity' ? '☆☆☆☆☆' : '☆☆☆☆'}
                </td>
                <td className="compare-cell text-gray-300">
                  {tool.id === 'notion' || tool.id === 'canva' ? '低' : '中'}
                </td>
                <td className="compare-cell text-gray-400 text-sm italic text-left min-w-[200px]">
                  {tool.description.split('。')[0]}
                </td>
                <td className="compare-cell">
                  <a 
                    href={`/tools/${tool.id}`} 
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-black hover:bg-accent hover:text-black transition-all duration-300 whitespace-nowrap"
                  >
                    詳細を見る
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
