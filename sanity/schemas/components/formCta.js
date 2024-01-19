export default {
  name: "formCta",
  title: "Form call to action ",
  type: "object",
  fields: [
    {
      name: 'theme',
      type: 'string',
      title: 'Typ',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' }
        ],
        layout: 'radio',
        direction: "horizontal"
      },
      initialValue: 'primary',
    },
    {
      type: 'string',
      name: 'text',
      title: 'Text',
      description: 'The text that will appear on the button',
    }
  ],
  preview: {
    select: {
      title: 'text',
      theme: 'theme',
      href: 'href'
    },
    prepare({ title, theme }) {
      return {
        title: title,
        subtitle: `${theme}`,
      }
    }
  }
}