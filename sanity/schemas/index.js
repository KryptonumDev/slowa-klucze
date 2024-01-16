// Single Types
import global, { global_Seo } from './singleTypes/global'
import IndexPage from './singleTypes/indexPage'
import NotFoundPage from './singleTypes/NotFoundPage'

export const singleTypes = [
  IndexPage,
  NotFoundPage,
]

// Collection Types

export const collectionTypes = [

]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import { titleAndDescription, titleAndImage, imageAndLink, titleDescriptionAndImage } from './components/list'
import social from './components/social'
import footer from './components/footer'
import navigation from './components/navigation'

export const components = [
  footer,
  social,
  global_Seo,
  cta,
  seo,
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
  navigation,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]