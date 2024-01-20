export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      title: 'Nawigacja',
      name: 'navigation',
      type: 'navigation',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Globalne SEO',
    },
    {
      name: 'logo',
      type: 'image',
    },
    {
      name: 'socialsList',
      title: 'linki do mediów społecznościowych',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      title: 'Stopka',
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
        'Obraz widoczny podczas udostępniania strony w mediach społecznościowych. Wymiary zdjęcia powinny wynosić 1200x630px',
    },
  ],
}
