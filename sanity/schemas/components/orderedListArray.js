export default {
  name: "orderedListArray",
  title: "Lista numerowana",
  type: "object",
  fields: [
    {
      title: 'Lista',
      type: 'array',
      name: 'array',
      of: [
        {
          type: 'orderedList'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'array',
    },
    prepare({ title }) {
      return {
        title: `[Lista numerowana] - ${title.length} elementy`,
      };
    }
  }
}