import React from 'react';

interface ToolComparison {
  name: string;
  roi: string;
  easeOfUse: string;
  bestFor: string;
  link: string;
}

const tools: ToolComparison[] = [
  { name: 'Cursor', roi: '☆☆☆☆☆', easeOfUse: '中', bestFor: '爆速開発・個人開発', link: '#' },
  { name: 'Notion AI', roi: '☆☆☆☆', easeOfUse: '高', bestFor: 'ドキュメント・情報集約', link: '#' },
  { name: 'Framer', roi: '☆☆☆☆', easeOfUse: '中', bestFor: 'ノーコードLP・Web制作', link: '#' },
  { name: 'v0.dev', roi: '☆☆☆☆☆', easeOfUse: '高', bestFor: 'UIコンポーネント生成', link: '#' },
];

export default function ComparisonTable() {
  return (
    <div className="glass-panel overflow-hidden my-16">
      <div className="p-6 md:p-10 border-b border-white/5 text-center flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight">AIツール ROI比較テーブル</h3>
        <p className="text-gray-400 text-sm mt-3 max-w-lg">実務での「稼ぎやすさ」と「導入コスト」のバランスをプロの視点で評価</p>
      </div>
      <div className="compare-container">
        <table className="compare-table">
          <thead>
            <tr>
              <th className="compare-header text-left sticky left-0 z-20 bg-background/90 backdrop-blur-md min-w-[120px]">ツール名</th>
              <th className="compare-header">ROI (収益性)</th>
              <th className="compare-header">導入難易度</th>
              <th className="compare-header">最適な用途</th>
              <th className="compare-header">アクション</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={index} className="compare-row group">
                <td className="compare-cell text-left font-bold text-lg whitespace-nowrap sticky left-0 z-20 bg-background/90 backdrop-blur-md border-r border-white/5">{tool.name}</td>
                <td className="compare-cell text-accent font-black tracking-widest">{tool.roi}</td>
                <td className="compare-cell text-gray-300">{tool.easeOfUse}</td>
                <td className="compare-cell text-gray-400 text-sm">{tool.bestFor}</td>
                <td className="compare-cell">
                  <a 
                    href={tool.link} 
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-black hover:bg-accent hover:text-black transition-all duration-300 whitespace-nowrap"
                  >
                    詳細 / 試す
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
