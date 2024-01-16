export default {
  name: "footer",
  title: "Footer",
  type: "object",
  fields: [
    {
      name: 'description',
      type: 'markdown',
    },
    {
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

