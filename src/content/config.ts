import { z, defineCollection } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  author: z.string().default('Redazione SDAC Magazine'),
  excerpt: z.string().max(220).optional(),
  cover_image: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const collections = {
  news: defineCollection({ type: 'content', schema: baseSchema }),
  anniversari: defineCollection({ type: 'content', schema: baseSchema }),
  compleanni: defineCollection({ type: 'content', schema: baseSchema }),
};
