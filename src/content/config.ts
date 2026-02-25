import { z, defineCollection } from 'astro:content';

const galleryItem = z.object({
  image: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
  layout: z.enum(['full', 'left', 'right']).default('full'),
  size: z.enum(['sm', 'md', 'lg']).default('md'),
});

const shortFilmItem = z.object({
  title: z.string(),
  director: z.string().optional(),
  note: z.string().optional(),
  youtube_url: z.string().url().optional(),
});

const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  author: z.string().default('Redazione SDAC Magazine'),
  excerpt: z.string().max(220).optional(),

  cover_image: z.string().optional(),
  cover_alt: z.string().optional(),
  cover_fit: z.enum(['cover', 'contain']).default('cover'),
  cover_position: z
    .enum(['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'])
    .default('center'),

  tags: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  gallery: z.array(galleryItem).optional(),
});

const eventSchema = baseSchema.extend({
  event_date: z.coerce.date().optional(),
  location: z.string().optional(),
  registration_url: z.string().url().optional(),
});

const shortFilmsSchema = baseSchema.extend({
  academic_year: z.string().optional(),
  films: z.array(shortFilmItem).optional(),
});

export const collections = {
  news: defineCollection({ type: 'content', schema: baseSchema }),
  anniversari: defineCollection({ type: 'content', schema: baseSchema }),
  compleanni: defineCollection({ type: 'content', schema: baseSchema }),
  eventi: defineCollection({ type: 'content', schema: eventSchema }),
  cortometraggi: defineCollection({ type: 'content', schema: shortFilmsSchema }),
};
