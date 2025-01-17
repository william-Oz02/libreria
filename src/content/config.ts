import { defineCollection, z } from 'astro:content';

// z -> zod es una biblioteca para validar esquemas

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            chile: z.string().url(),
            usa: z.string().url(),
        }),
    })
});


// Exportar la colección que contiene los libros
export const collections = { books };