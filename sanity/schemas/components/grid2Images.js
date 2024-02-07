export default {
  name: 'grid2Images',
  title: 'Dwa zdjęcia ze źródłem',
  type: 'object',
  fields: [
    {
      title: 'Zdjęcia',
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      title: 'Źródło',
      name: 'source',
      type: 'markdown',
    },
  ],
  preview: {
    select: {
      title: 'source',
    },
    prepare({title}) {
      return {
        title: `[Dwa zdjęcia ze źródłem] - ${title}`,
      }
    },
  },
}
