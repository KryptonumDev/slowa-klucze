export default {
  name: 'ctaWithBackgroundImage',
  title: 'Przycisk z tłem',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'podtytuł',
    },
    {
      type: 'ctaInBackgroundImage',
      name: 'cta',
      title: 'Przycisk',
      options: {collapsible: true, collapsed: true},
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
}

export const ctaInBackgroundImage = {
  name: 'ctaInBackgroundImage',
  title: 'Przycisk',
  type: 'object',
  fields: [
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
      validation: (Rule) =>
        Rule.custom((value) => {
          if (
            value &&
            !value.startsWith('/') &&
            !value.startsWith('https://') &&
            !value.startsWith('#')
          ) {
            return 'Incorrect URL.'
          }
          return true
        }),
    },
  ],
  preview: {
    select: {
      title: 'text',
      href: 'href',
    },
    prepare({title, href}) {
      return {
        title: title,
        subtitle: `przycisk przypisany do ${href}`,
      }
    },
  },
}
