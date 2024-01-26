import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'cards',
  title: 'Karty',
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
      of: [
        {
          type: 'card_contents',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'centralizedHeading.title',
    },
    prepare({title}) {
      return {
        title: `[Karty] - ${title}`,
      }
    },
  },
}

export const card_contents = {
  name: 'card_contents',
  title: 'Karta',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Ikona',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Tytuł',
      type: 'markdown',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'markdown',
    },
    {
      name: 'plusesDescription',
      title: 'Opis plusów',
      type: 'markdown',
    },
    {
      name: 'pluses',
      title: 'Plusy',
      type: 'array',
      of: [{type: 'markdown'}],
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
