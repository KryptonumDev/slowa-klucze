export default {
  name: 'tilesSmall',
  title: '3 kafelki',
  type: 'object',
  fields: [
    {
      title: 'Wyśrodkowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
    {
      name: 'list',
      title: 'Lista kafelków',
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
        title: `[3 kafelki] ${title}`,
        subtitle: `${subtitle.length} items`,
      }
    },
  },
}
