export default {
  name: 'IndexPage',
  title: 'Homepage',
  type: 'document',
  icon: () => '⭐️',
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
      title: 'Podtytuł',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Opis',
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
      name: 'hero_Cta',
      type: 'cta',
      title: 'Przycisk',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {type: 'tiles', title: 'Kafelki'},
        {type: 'slider'},
        {type: 'faq'},
        {type: 'newsletter'},
        {type: 'contactForm'},
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
