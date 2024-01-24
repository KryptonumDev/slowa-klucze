export default {
  name: 'MyWorkPage',
  title: 'Co robię',
  type: 'document',
  icon: () => '✒️',
  fields: [
    {
      name: 'content',
      type: 'array',
      of: [
        {type: 'tiles', title: 'Kafelki'},
        {type: 'faq'},
        {type: 'newsletter'},
        {type: 'contactForm'},
        {type: 'cards'},
        {type: 'tilesSmall'},
        {type: 'process'},
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
