export default {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'subheading',
      type: 'markdown',
    },
    {
      name: 'description',
      type: 'markdown',
    },
    {
      name: 'formCta',
      type: 'formCta',
    },
    {
      name: 'card',
      type: 'card',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[Newsletter]- ${title}`,
      }
    },
  },
}
export const card = {
  name: 'card',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'description',
      type: 'markdown',
    },
  ],
}
