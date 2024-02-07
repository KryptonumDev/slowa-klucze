export default {
  name: 'grid2Buttons',
  title: 'Dwa przyciski',
  type: 'object',
  fields: [
    {
      title: 'Przyciski',
      name: 'buttons',
      type: 'array',
      of: [{type: 'cta'}],
    },
  ],
  preview: {
    prepare({title}) {
      return {
        title: `[Dwa Przyciski]`,
      }
    },
  },
}
