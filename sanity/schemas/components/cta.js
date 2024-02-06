export default {
  name: "cta",
  title: "Przycisk",
  type: "object",
  fields: [
    {
      name: 'theme',
      type: 'string',
      title: 'Typ',
      options: {
        list: [
          { title: 'Primary (bez tła)', value: 'primary' },
          { title: 'Secondary (zielone tło)', value: 'secondary' }
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
      description: 'Text pojawi się na przycisku',
    },
    {
      name: 'href',
      type: 'string',
      title: 'Link',
      description: 'Relatywny albo absolutny link (https://)',
      validation: Rule => Rule.custom(value => {
        if (value && !value.startsWith('/') && !value.startsWith('https://') && !value.startsWith('#')) {
          return 'Incorrect URL.';
        }
        return true;
      })
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
        subtitle: `${theme} przycisk przypisany do ${href}`,
      }
    }
  }
}