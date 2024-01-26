import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'imageTitleDescription',
  title: 'Zdjęcie, tytuł i opis',
  type: 'object',
  fields: [
    {
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    },
  },
}
