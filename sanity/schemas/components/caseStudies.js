import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'caseStudies',
  title: 'Przedstawienie projektów',
  type: 'object',
  fields: [
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
    },
    {
      title: 'Tytuł',
      name: 'subheading',
      type: 'markdown',
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
    {
      title: 'Projekty',
      name: 'projects',
      type: 'array',
      of: [{type: 'project'}],
    },
    {
      title: 'Wycentrowany nagłówek',
      name: 'centralizedHeading',
      type: 'centralizedHeading',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[Przedstawienie projektów] - ${removeMarkdown(title)}`,
      }
    },
  },
}
