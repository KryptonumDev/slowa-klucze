import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {singleTypes} from './schemas'
import {collectionTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {createClient} from '@sanity/client'
import blogPage from './schemas/singleTypes/blogPage'
import {ExternalLinks} from './components/ExternalLinks'

import {markdownSchema} from 'sanity-plugin-markdown'
import {CustomMarkdownInput} from './components/Markdown'

const singletonTypes = new Set(singleTypes.map((type) => type.name))
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const createListItem = (S, singleType) => {
  const {title, name, icon} = singleType
  return S.listItem()
    .title(title)
    .id(name)
    .icon(icon)
    .child(S.document().schemaType(name).title(title).documentId(name))
}

export default defineConfig({
  name: 'default',
  title: 'slowa-klucze',
  projectId: 'xg0fttfo',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Podstrony')
          .items([
            createListItem(
              S,
              schemaTypes.find((item) => item.name === 'global'),
            ),
            S.divider(),
            ...singleTypes.map((item) => createListItem(S, item)),
            S.divider(),
            ...collectionTypes.map((item) => S.documentTypeListItem(item.name)),
            S.divider(),
            S.documentTypeListItem('blog_categories'),
            S.documentTypeListItem('blog_entries'),
            createListItem(S, blogPage),
          ]),
    }),
    visionTool(),
    markdownSchema({input: CustomMarkdownInput}),
    media(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },

  tools: [ExternalLinks()],
})

export const client = createClient({
  projectId: 'xg0fttfo',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-23',
})
