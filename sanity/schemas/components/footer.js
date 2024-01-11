export default {
  name: "footer",
  title: "Footer",
  type: "object",
  fields: [
    {
      name: 'socialsList',
      type: 'array',
      of: [
        {
          type: 'social'
        }
      ]
    },
    {
      name: 'description',
      type: 'markdown',
    },
    {
      name: 'portait',
      type: 'image',
    }
  ],
  preview: {
    select: {
      title: 'text',
      theme: 'theme',
      href: 'href'
    },
    prepare({ title, theme, href }) {
      return {
        title: title,
        subtitle: `${theme} button linked to ${href}`,
      }
    }
  }
}

export const social = {
  name: 'social',
  type: 'object',
  fields: [
    {
      name: 'href',
      type: 'string',
      title: 'Link',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
      validation: Rule => Rule.required()
    }
  ]
}