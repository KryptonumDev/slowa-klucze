export default {
  name: 'notFoundPage',
  title: 'Strona 404',
  type: 'document',
  icon: () => '🔍',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Title',
      type: 'markdown',
      title: 'Tytuł',
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
      name: 'hero_Cta',
      type: 'cta',
      title: 'Przycisk',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Image',
      type: 'image',
      title: 'Zdjęcie',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
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
