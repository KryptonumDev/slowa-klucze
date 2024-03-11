import removeMarkdown from "../../utils/RemoveMarkdown"

export default {
  name: 'centralizedHeading',
  title: 'Wyśrodkowany nagłówek',
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
      title: 'Przycisk',
      name: 'cta',
      type: 'cta',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: removeMarkdown(title),
      }
    },
  },
}
