import removeMarkdown from "../../utils/RemoveMarkdown"

export default {
  name: 'tiles',
  title: 'Tiles',
  type: 'object',
  fields: [
    {
      title: 'Wyśrodkowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
    {
      name: 'list',
      title: 'Lista kafelków od lewego górnego rogu do prawego dolnego rogu',
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
        title: `[Kafelki] - ${removeMarkdown(title)}`,
        subtitle: `${subtitle.length} items`,
      }
    },
  },
}
