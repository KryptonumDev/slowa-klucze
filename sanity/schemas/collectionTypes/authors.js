export default {
  name: 'authors',
  title: 'Autorzy',
  type: 'document',
  icon: () => '👨‍🎓',
  fields: [
    {
      name: 'fullName',
      type: 'string',
      title: 'Imię i nazwisko',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Zdjęcie autora',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socials',
      type: 'array',
      of: [{type: 'social'}],
      title: 'Social media',
      validation: (Rule) => Rule.required(),
    },
  ],
}
