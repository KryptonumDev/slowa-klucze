export default {
  name: 'CooperationEffectsPage',
  title: 'Efekty współpracy',
  type: 'document',
  icon: () => '🤝',
  fields: [
    {
      name: 'content',
      type: 'array',
      of: [
        {type: 'faq'},
        {type: 'newsletter'},
        {type: 'contactForm'},
        {type: 'slider'},
        {type: 'caseStudies'},
        {type: 'achievementsShowcase'},
        {type: 'blogReference'},
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
