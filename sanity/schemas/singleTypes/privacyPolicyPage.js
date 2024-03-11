export default {
  name: 'privacyPolicyPage',
  title: 'Polityka prywatności',
  type: 'document',
  icon: () => '🔐',
  fields: [
    {
      name: 'hero_Title',
      type: 'markdown',
      title: 'Tytuł',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Zawartość',
      type: 'portableText',
      title: 'Treść',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
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
      title: 'hero_Title',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
}
