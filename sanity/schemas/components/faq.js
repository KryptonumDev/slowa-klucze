export default {
  name: 'faq',
  title: 'Faq',
  type: 'object',
  fields: [
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
    },
    {
      title: 'Tytuł',
      name: 'title',
      type: 'markdown',
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
    {
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
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
        title: `[FAQ] - ${title}`,
      }
    },
  },
}
