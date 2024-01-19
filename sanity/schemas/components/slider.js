export default {
  name: 'slider',
  title: 'Slider',
  type: 'object',
  fields: [
    {
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
    {
      name: 'slides',
      type: 'array',
      of: [{type: 'slide'}],
    },
    {
      name: 'centralizedHeading2',
      type: 'centralizedHeading',
      title: '2nd Centralized Heading',
    },
  ],
  preview: {
    select: {
      title: 'centralizedHeading.heading'
    },
    prepare({title}) {
      return {
        title: `[slides] ${title}`,
      }
    },
  },
}

export const slides = {
  name: 'slide',
  type: 'object',
  title: 'Slide',
  fields: [
    {
      name: 'icon',
      type: 'image',
    },
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'url',
      type: 'markdown',
    },
    {
      name: 'description',
      type: 'markdown',
    },
    {
      name: 'rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
}
