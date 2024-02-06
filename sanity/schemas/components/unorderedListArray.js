export default {
  name: "unorderedListArray",
  title: "Lista z ikonami",
  type: "object",
  fields: [
    {
      title: 'Lista',
      type: 'array',
      name: 'array',
      of: [
        {
          type: 'unorderedList'
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
        title: `[Lista z ikonami] - ${title.length} elementy`,
      };
    }
  }
}