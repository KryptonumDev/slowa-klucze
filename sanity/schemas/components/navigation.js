export default {
  name: "navigation",
  title: "navigation",
  type: "object",
  fields: [
    {
      name: 'cta',
      type: 'cta',
    },
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