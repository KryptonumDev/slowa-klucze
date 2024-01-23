// Single Types
import global, {global_Seo} from './singleTypes/global'
import IndexPage from './singleTypes/indexPage'
import NotFoundPage from './singleTypes/NotFoundPage'

export const singleTypes = [IndexPage, NotFoundPage]

// Collection Types

export const collectionTypes = []

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import {
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
} from './components/list'
import social from './components/social'
import footer from './components/footer'
import navigation from './components/navigation'
import centralizedHeading from './components/centralizedHeading'
import imageTItileDescription from './components/imageTItileDescription'
import tiles from './components/tiles'
import slider, {slides} from './components/slider'
import faq from './components/faq'
import headingDescription from './components/headingDescription'
import newsletter, {card} from './components/newsletter'
import formCta from './components/formCta'
import contactForm from './components/contactForm'

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
  centralizedHeading,
  imageTItileDescription,
  tiles,
  slider,
  slides,
  faq,
  headingDescription,
  card,
  newsletter,
  formCta,
  contactForm,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components,
]
