import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'achievementsShowcase',
  title: 'Przedstawienie zdolności',
  type: 'object',
  fields: [
    {
      title: 'Wyśrodkowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
    {
      title: 'Kafelek',
      name: 'tiles',
      type: 'array',
      of: [{type: 'imageTitleDescription'}],
    },
    {
      title: 'Drugi wyśrodkowany nagłówek',
      name: 'centralizedHeading2',
      type: 'centralizedHeading',
    },
  ],
  preview: {
    select: {
      title: 'centralizedHeading.heading',
    },
    prepare({title}) {
      return {
        title: `[Przedstawienie zdonlości] - ${removeMarkdown(title)}`,
      }
    },
  },
}
