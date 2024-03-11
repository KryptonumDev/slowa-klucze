import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'offers',
  title: 'Oferty',
  type: 'object',
  fields: [
    {
      title: 'Oferty',
      type: 'array',
      name: 'offers',
      of: [{type: 'offer'}],
    },
    {
      title: 'dodatkowe informacje',
      type: 'markdown',
      name: 'additionalInfo',
    },
  ],
  preview: {
    select: {
      title: 'offers',
    },
    prepare({title}) {
      return {
        title: `[Oferty] - ${title.length}`,
      }
    },
  },
}

export const offer = {
  name: 'offer',
  title: 'Oferta',
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
      title: 'Cena',
      name: 'price',
      type: 'string',
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
    {
      title: 'Dodatek',
      name: 'addition',
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
        title: `${removeMarkdown(title)}`,
      }
    },
  },
}
