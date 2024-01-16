export default {
  name: 'social',
  type: 'object',
  fields: [
    {
      name: 'href',
      type: 'string',
      title: 'Link',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
      validation: (Rule) => Rule.required(),
    },
  ],
}
