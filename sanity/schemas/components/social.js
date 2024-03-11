export default {
  title: 'Social Media',
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
      title: 'Ikona',
      validation: (Rule) => Rule.required(),
    },
  ],
}
