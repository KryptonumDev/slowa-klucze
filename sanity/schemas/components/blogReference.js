export default {
  name: 'blogReference',
  title: 'Referencja do bloga',
  type: 'object',
  fields: [
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
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
    {
      title: 'Przycisk',
      name: 'cta',
      type: 'cta',
    },
    {
      title: 'Referencja do bloga',
      name: 'blogReference',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blog_entries'}], options: {disableNew: true}}],
      validation: (Rule) => Rule.min(3).error('Wybierz minimum 3 wpisy blogowe.'),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[Referencja do bloga] - ${title}`,
      }
    },
  },
}
