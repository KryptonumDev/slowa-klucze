import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'quote',
  title: 'Pokaz cytatu',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'markdown',
    },
    {
      title: 'Cytat',
      name: 'quote',
      type: 'markdown',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `${removeMarkdown(title)}`,
      }
    },
  },
}
