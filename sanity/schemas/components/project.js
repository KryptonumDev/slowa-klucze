import removeMarkdown from '../../utils/RemoveMarkdown'

export default {
  name: 'project',
  title: 'Projekt',
  type: 'object',
  fields: [
    {
      title: 'Nagłówek',
      name: 'heading',
      type: 'markdown',
    },
    {
      title: 'Lista założeń',
      name: 'assumptions',
      type: 'array',
      of: [{type: 'imageDescription'}],
    },
    {
      title: 'Nazwa projektu',
      name: 'projectName',
      type: 'markdown',
    },
    {
      title: 'Zawartość projektu',
      name: 'projectContent',
      type: 'array',
      of: [{type: 'imageTitleDescription'}],
    },
    {
      title: 'Przedstawienie cytatu',
      name: 'quote',
      type: 'quote',
    }
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[Projekt] - ${removeMarkdown(title)}`,
      }
    },
  },
}
