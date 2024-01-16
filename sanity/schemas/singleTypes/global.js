export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'navigation',
      type: 'navigation',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Global SEO',
    },
    {
      name: 'logo',
      type: 'image',
    },
    {
      name: 'robotsIndex',
      type: 'boolean',
      title: 'Indexing by SEO robots',
      description:
        'If enabled SEO robots (such as Google) will be able to index the site in search engines.',
    },
    {
      name: 'socialsList',
      type: 'array',
      of: [
        {
          type: 'social',
        },
      ],
    },
    {
      name: 'footer',
      type: 'footer',
      options: {collapsible: true, collapsed: true},
    },
  ],
}

export const global_Seo = {
  name: 'global_Seo',
  title: 'Global SEO',
  type: 'object',
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description:
        'An image that is visible when sharing the page on social media. The dimensions of the photo should be 1200x630px',
    },
  ],
}
