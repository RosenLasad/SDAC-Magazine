import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const cols = ['news','anniversari','compleanni'] as const;
  const all = (await Promise.all(cols.map(async (c) => {
    const entries = await getCollection(c);
    return entries.map((e) => ({
      title: e.data.title,
      date: e.data.date,
      author: e.data.author,
      excerpt: e.data.excerpt ?? '',
      tags: e.data.tags ?? [],
      cover_image: e.data.cover_image ?? '/images/uploads/placeholder.jpg',
      collection: c,
      slug: e.slug,
    }));
  }))).flat();

  // newest first
  all.sort((a,b) => +new Date(b.date) - +new Date(a.date));

  return new Response(JSON.stringify(all), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
