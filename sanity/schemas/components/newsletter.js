import removeMarkdown from "../../utils/RemoveMarkdown"

export default {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'object',
  fields: [
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Podtytuł',
      name: 'subheading',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Przycisk w formularzu',
      name: 'formCta',
      type: 'formCta',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Karta nad zdjęciem',
      name: 'card',
      type: 'card',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[Newsletter] - ${removeMarkdown(title)}`,
      }
    },
  },
}
export const card = {
  name: 'card',
  type: 'object',
  fields: [
    {
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }
  ],
}
