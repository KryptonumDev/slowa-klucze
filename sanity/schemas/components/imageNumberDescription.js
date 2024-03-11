import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'imageNumberDescription',
  title: 'Zdjęcie, numer i opis',
  type: 'object',
  fields: [
    {
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Numer',
      name: 'number',
      type: 'number',
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
  ],
  preview: {
    select: {
      title: 'number',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: title,
        subtitle: removeMarkdown(subtitle),
      }
    },
  },
}
