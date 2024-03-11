import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'imageTitleDescription',
  title: 'Zdjęcie, tytuł i opis',
  type: 'object',
  fields: [
    {
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Tytuł',
      name: 'title',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    },
  },
}
