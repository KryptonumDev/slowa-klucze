export default {
  name: 'tiles',
  title: 'Tiles',
  type: 'object',
  fields: [
    {
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
    {
      name: 'list',
      title: 'List (from top left to bottom right)',
      type: 'array',
      of: [{type: 'imageTitleDescription'}],
    },
  ],
  preview: {
    select: {
      title: 'centralizedHeading.title',
      subtitle: 'list',
    },
    prepare({title, subtitle}) {
      return {
        title: `[tiles] ${title}`,
        subtitle: `${subtitle.length} items`,
      }
    },
  },
}
