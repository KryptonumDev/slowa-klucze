import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'numberedCards',
  title: 'Numerowane karty',
  type: 'object',
  fields: [
    {
      title: 'Wyśrodkowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
    {
      title: 'Karty',
      name: 'cards',
      type: 'array',
      of: [{type: 'markdown'}],
    },
  ],
  preview: {
    select: {
      title: 'centralizedHeading.title',
    },
    prepare({title}) {
      return {
        title: `[Numerowane karty] - ${removeMarkdown(title)}`,
      }
    },
  },
}
