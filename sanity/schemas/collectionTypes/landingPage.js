export default {
  name: 'LandingPage',
  title: 'Strona lądowania',
  type: 'document',
  icon: () => '🚀',
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
      name: 'slug',
      type: 'slug',
      title: 'Link',
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
        {type: 'cardsList', title: 'Lista kart'},
        {type: 'process'},
        {type: 'cards'},
        {type: 'contactForm'},
        {type: 'faq'},
        {type: 'achievementsShowcase'},
        {type: 'partners'},
        {type: 'slider'},
        {type: 'caseStudies'},
        {type: 'tilesSmall'},
        {type: 'prosAndCons'},
        {type: 'offers'},
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
  preview: {
    select: {
      title: 'slug'
    },
    prepare({title}) {
      return {
        title: title.current,
      }
    }
  }
}
