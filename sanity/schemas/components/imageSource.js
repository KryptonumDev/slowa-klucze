export default {
  name: 'imageSource',
  title: 'Zdjęcie ze źródłem',
  type: 'object',
  fields: [
    {
      title: 'Zdjęcie',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Źródło (przykład źródła: [Wikipedia](https://pl.wikipedia.org/))',
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
        title: `[Zdjęcie ze źródłem] - ${title}`,
      }
    },
  },
}
