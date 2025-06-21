// Import the glob loader
// import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      slug : z.string().optional(),
      publishedAt: z.string(),
      description: z.string(),
      tags: z.array(z.string()).optional()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };