import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'blogPage',
  title: 'Blog',
  type: 'document',
  icon: () => '📄',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Description',
      type: 'markdown',
      title: 'Opis',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Form',
      type: 'hero_Form',
      title: 'Formularz',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
      options: {collapsible: true},
    },
    {
      name: 'content',
      title: 'Zawartość',
      type: 'array',
      of: [
        {type: 'newsletter'},
        {type: 'reference', to: [{type: 'blog_entries'}], title: 'Wpisy blogowe'},
        {type: 'category'},
      ],
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero',
      options: {collapsible: true},
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
}

export const hero_Form = {
  name: 'hero_Form',
  type: 'object',
  title: 'Formularz',
  fields: [
    {
      title: 'Tytuł',
      name: 'title',
      type: 'markdown',
    },
    {
      title: 'Przycisk',
      name: 'formCta',
      type: 'formCta',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: removeMarkdown(title),
      }
    },
  },
}

export const category = {
  type: 'object',
  name: 'category',
  title: 'Kategoria',
  fields: [
    {
      type: 'boolean',
      name: 'value',
      title: 'Value',
      readOnly: true,
    },
  ],
  initialValue: {
    value: true,
  },
  preview: {
    prepare() {
      return {
        title: '[Kategorie]',
      }
    },
  },
}
