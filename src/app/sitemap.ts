import { MetadataRoute } from 'next';
import toolsData from '@/data/tools.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-tool-portal.jp';

  const tools = toolsData.map((tool) => ({
    url: `${baseUrl}/tools/${tool.id}`,
    lastModified: new Date(tool.meta.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...tools,
  ];
}
