export default {
  name: 'IndexPage',
  title: 'Homepage',
  type: 'document',
  icon: () => '⭐️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'header',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'subheading',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'paragraph',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Image',
      type: 'image',
      title: 'image',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      of: [{type: 'tiles'}, {type: 'slider'}, {type: 'faq'}, {type: 'newsletter'}],
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
