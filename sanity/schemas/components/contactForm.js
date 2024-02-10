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
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Tytuł',
      name: 'subheading',
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
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
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