import removeMarkdown from "../../utils/RemoveMarkdown"

export default {
  name: 'headingDescription',
  title: 'Heading & Description',
  type: 'object',
  fields: [
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
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: removeMarkdown(title),
      }
    },
  },
}
