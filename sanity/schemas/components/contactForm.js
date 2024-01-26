import removeMarkdown from "../../utils/RemoveMarkdown"

export default {
  name: 'contactForm',
  title: 'Formularz kontaktowy',
  type: 'object',
  fields: [
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
    },
    {
      title: 'Tytuł',
      name: 'subheading',
      type: 'markdown',
    },
    {
      title: 'Przycisk w formularzu',
      name: 'formCta',
      type: 'formCta',
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
        title: `[Formularz kontaktowy] - ${removeMarkdown(title)}`,
      }
    },
  },
}