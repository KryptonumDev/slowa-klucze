export default {
  name: 'process',
  title: 'Proces',
  type: 'object',
  fields: [
    {
      title: 'Wyśrodkowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
    {
      title: 'proces',
      name: 'proceses',
      type: 'array',
      of: [{type: 'imageTitleDescription'}],
    },
  ],
  preview: {
    select: {
      title: 'centralizedHeading.title',
    },
    prepare({title}) {
      return {
        title: `[proces] - ${title}`,
      }
    },
  },
}
