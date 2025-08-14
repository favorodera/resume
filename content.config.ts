import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const contactSchema = z.object({
  label: z.string().nonempty(),
  url: z.string().nonempty(),
  icon: z.string().nonempty(),
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'data',
      source: 'index.json',
      schema: z.object({
        name: z.string().nonempty(),
        headline: z.string().nonempty(),
        location: z.string().nonempty(),
        avatar: z.string().nonempty(),
        about: z.string().nonempty(),
        contact: z.array(contactSchema),
      }),
    }),
  },
})
