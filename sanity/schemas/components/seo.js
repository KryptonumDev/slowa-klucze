export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.max(70).warning('The title field should be no longer than 70 characters.')
    },
    {
      name: 'description',
      type: 'text',
      rows: 4,
      title: 'Opis',
      validation: Rule => Rule.max(165).warning('The description field should not be longer than 165 characters.')
    },
  ]
}