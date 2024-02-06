export default {
  name: 'blog_entries',
  title: 'Wpisy blogowe',
  type: 'document',
  icon: () => '📝',
  fields: [
    {
      title: 'kategorie',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'blog_categories'}],
          options: {disableNew: false},
        },
      ],
    },
    {
      name: 'hero_Title',
      type: 'markdown',
      title: 'Tytuł bloga',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'link do bloga',
      options: {
        source: 'hero_Title',
      },
    },
    {
      name: 'hero_Description',
      type: 'markdown',
      title: 'Opis',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Image',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'portableText',
      title: 'Treść',
    },
    {
      title: 'autor bloga',
      name: 'author',
      type: 'reference',
      to: [{type: 'authors'}],
      options: {disableNew: true},
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
      title: 'slug',
    },
    prepare({title}) {
      return {
        title: title.current,
      }
    },
  },
}
