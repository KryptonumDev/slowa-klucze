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
    },
    {
      title: 'Podtytuł',
      name: 'subheading',
      type: 'markdown',
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
    {
      title: 'Przycisk w formularzu',
      name: 'formCta',
      type: 'formCta',
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
    },
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
  ],
}
