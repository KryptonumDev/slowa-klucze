import removeMarkdown from "../../utils/RemoveMarkdown"

export default {
  name: 'faq',
  title: 'Faq',
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
      name: 'title',
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
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Pytania FAQ i odpowiedzi',
      name: 'faq',
      type: 'array',
      of: [{type: 'imageTitleDescription'}],
    },
    {
      title: 'Wyśrodkowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[FAQ] - ${removeMarkdown(title)}`,
      }
    },
  },
}
