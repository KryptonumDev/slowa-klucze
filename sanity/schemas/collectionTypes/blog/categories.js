export default {
  name: 'blog_categories',
	title: 'Kategorie',
  type: 'document',
  icon: () => '📑',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa kategorii',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'link do kategorii',
      options: {
        source: 'name',
      },
    }
  ],
}