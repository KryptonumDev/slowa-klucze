import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'testimonial',
  title: 'Referencja',
  type: 'object',
  fields: [
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
    },
    {
      title: 'Podnagłówek',
      name: 'subheading',
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
      title: 'Linki do social media',
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'markdown',
          type: 'string',
        },
      ],
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
        title: `[Referencja] - ${removeMarkdown(title)}`,
      }
    },
  },
}
