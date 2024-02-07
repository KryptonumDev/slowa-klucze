export default {
  name: 'AboutMePage',
  title: 'O mnie',
  type: 'document',
  icon: () => '👨‍🎨',
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
      name: 'hero_Image',
      type: 'image',
      title: 'Zdjęcie',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_ImageTitleSubtitleDescription',
      type: 'imageTitleSubtitleDescription',
      title: 'Ikona z tytułem, podtytułem i opisem',
      fieldset: 'hero',
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_ImageDescription',
      type: 'imageDescription',
      title: 'Zdjęcie z opisem',
      options: { collapsible: true, collapsed: true },
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_centralizedIconTitleDescription',
      type: 'imageTitleDescription',
      title: 'Wycentrowana ikona z nagłówkiem i opisem',
      fieldset: 'hero',
      options: { collapsible: true, collapsed: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {type: 'numberedCards'},
        {type: 'testimonial'},
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