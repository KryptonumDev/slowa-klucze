export default {
  name: 'blogReference',
  title: 'Referencja do bloga',
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
