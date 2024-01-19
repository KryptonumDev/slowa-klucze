export default {
  name: 'faq',
  title: 'Faq',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'title',
      type: 'markdown',
    },
    {
      name: 'description',
      type: 'markdown',
    },
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'faq',
      type: 'array',
      of: [{type: 'headingDescription'}],
    },
    {
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[FAQ] - ${title}`,
      }
    },
  },
}
