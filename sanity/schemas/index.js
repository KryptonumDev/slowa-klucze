// Single Types
import global, { global_Seo } from './singleTypes/global'
import IndexPage from './singleTypes/IndexPage'
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
import footer, { social } from './components/footer'

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
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]