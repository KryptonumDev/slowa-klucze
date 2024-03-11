import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'imageDescription',
  title: 'Obrazek i opis',
  type: 'object',
  fields: [
    {
      title: 'Obrazek',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
  ],
  preview: {
    select: {
      title: 'description',
    },
    prepare({title}) {
      return {
        title: `${removeMarkdown(title)}`,
      }
    },
  },
}
