import removeMarkdown from "../../utils/RemoveMarkdown"

export default {
  name: "formCta",
  title: "Form call to action ",
  type: "object",
  fields: [
    {
      name: 'theme',
      type: 'string',
      title: 'Typ',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' }
        ],
        layout: 'radio',
        direction: "horizontal"
      },
      initialValue: 'primary',
    },
    {
      type: 'string',
      name: 'text',
      title: 'Text',
      description: 'Text pojawi się na przycisku',
    }
  ],
  preview: {
    select: {
      title: 'text',
      theme: 'theme'
    },
    prepare({ title, theme }) {
      return {
        title: title,
        subtitle: `${removeMarkdown(theme)}`,
      }
    }
  }
}