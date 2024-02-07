export default {
  name: 'unorderedList',
  title: 'Lista z ikonami',
  type: 'object',
  fields: [
    {
      title: 'Ikona',
      name: 'image',
      type: 'image',
    },
    {
      type: 'text',
      name: 'description',
      title: 'Opis',
    },
  ],
  preview: {
    select: {
      title: 'description',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
}
