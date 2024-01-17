export default {
  name: 'imageTitleDescription',
  title: 'ImageTitleDescription',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'title',
      type: 'markdown',
    },
    {
      name: 'description',
      type: 'markdown',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: title,
        subtitle: subtitle,
      }
    },
  },
}
