import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'partners',
  title: 'Partnerzy',
  type: 'object',
  fields: [
    {
      title: 'Wyśrodkowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
    {
      title: 'Partnerzy',
      name: 'carousel',
      type: 'array',
      of: [{type: 'carousel'}],
    },
  ],
  preview: {
    select: {
      title: 'centralizedHeading.heading',
    },
    prepare({title}) {
      return {
        title: `[Partnerzy] - ${title}`,
      }
    },
  },
}

export const carousel = {
  name: 'carousel',
  type: 'object',
  title: 'Karuzela',
  fields: [
    {
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Link url',
      name: 'url',
      type: 'url',
    },
  ],
}
