export default {
  name: "orderedList",
  title: "Lista numerowana",
  type: "object",
  fields: [
    {
      title: 'Opis',
      name: 'description',
      type: 'text',
    }
  ],
  preview: {
    select: {
      title: 'description',
    },
    prepare({ title }) {
      return {
        title: title,
      };
    }
  }
}