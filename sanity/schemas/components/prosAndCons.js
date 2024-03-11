import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'prosAndCons',
  title: 'Wady i zalety',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'markdown',
    },
    {
      title: 'Karty',
      name: 'cards',
      type: 'array',
      of: [{type: 'prosAndConsCard'}],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[Wady i zalety] - ${removeMarkdown(title)}`,
      }
    },
  },
}

export const prosAndConsCard = {
  name: 'prosAndConsCard',
  title: 'Karta wad i zalet',
  type: 'object',
  fields: [
    {
      title: 'Tytuł',
      name: 'title',
      type: 'markdown',
    },
    {
      title: 'Karty',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'imageDescription',
        },
      ],
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
