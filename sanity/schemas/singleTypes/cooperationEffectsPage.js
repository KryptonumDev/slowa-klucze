export default {
  name: 'CooperationEffectsPage',
  title: 'Współpraca',
  type: 'document',
  icon: () => '🤝',
  fields: [
    {
      name: 'content',
      title: 'Zawartość',
      type: 'array',
      of: [
        {type: 'faq'},
        {type: 'newsletter'},
        {type: 'contactForm'},
        {type: 'slider'},
        {type: 'caseStudies'},
        {type: 'achievementsShowcase'},
        {type: 'blogReference'},
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
}
