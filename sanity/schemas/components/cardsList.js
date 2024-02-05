import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'cardsList',
  title: 'Lista kart',
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
      title: 'Karty',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'headingDescription',
        },
      ],
    },
    {
      title: 'Wycentrowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
  ],
  preview: {
    select: {
      title: 'centralizedHeading.title',
    },
    prepare({title}) {
      return {
        title: `[Lista Kart] - ${title}`,
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
