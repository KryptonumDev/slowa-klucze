import removeMarkdown from "../../utils/RemoveMarkdown"

export default {
  name: 'slider',
  title: 'Karuzela',
  type: 'object',
  fields: [
    {
      title: 'Wyśrodkowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
    {
      title: 'Karuzele',
      name: 'slides',
      type: 'array',
      of: [{type: 'slide'}],
    },
    {
      name: 'centralizedHeading2',
      type: 'centralizedHeading',
      title: 'Drugi Wyśrodkowany nagłówek',
    },
  ],
  preview: {
    select: {
      title: 'centralizedHeading.heading'
    },
    prepare({title}) {
      return {
        title: `[Karuzela] - ${title}`,
      }
    },
  },
}

export const slides = {
  name: 'slide',
  type: 'object',
  title: 'Slide',
  fields: [
    {
      title: 'Ikona',
      name: 'icon',
      type: 'image',
    },
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
    },
    {
      title: 'Link url',
      name: 'url',
      type: 'markdown',
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
    {
      title: 'Ocena (liczba gwiazdek od 1 do 5)',
      name: 'rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
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
