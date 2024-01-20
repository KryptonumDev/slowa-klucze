export default {
  name: "footer",
  title: "Footer",
  type: "object",
  fields: [
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
    {
      title: 'Portret',
      name: 'portrait',
      type: 'image',
    }
  ],
  preview: {
    select: {
      title: 'description',
    },
    prepare({ title }) {
      return {
        title: title
      }
    }
  }
}

