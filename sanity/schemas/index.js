// Single Types
import global, {global_Seo} from './singleTypes/global'
import IndexPage from './singleTypes/indexPage'
import NotFoundPage from './singleTypes/NotFoundPage'
import MyWorkPage from './singleTypes/myWorkPage'
import CooperationEffectsPage from './singleTypes/cooperationEffectsPage'
import AboutMePage from './singleTypes/aboutMePage'

export const singleTypes = [
  IndexPage,
  MyWorkPage,
  NotFoundPage,
  CooperationEffectsPage,
  AboutMePage,
]

// Collection Types

import Authors from './collectionTypes/authors'

export const collectionTypes = [Authors]

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
import cards, {card_contents} from './components/cards'
import tilesSmall from './components/tilesSmall'
import process from './components/process'
import caseStudies from './components/caseStudies'
import project from './components/project'
import imageDescription from './components/imageDescription'
import quote from './components/quote'
import achievementsShowcase from './components/AchievementsShowcase'
import imageNumberDescription from './components/imageNumberDescription'
import testimonial from './components/testimonial'
import numberedCards from './components/numberedCards'
import imageTitleSubtitleDescription from './components/imageTitleSubtitleDescription'
import PortableText from '../components/PortableText'
import orderedList from './components/orderedList'
import unorderedList from './components/unorderedList'
import titleDescription from './components/titleDescription'
import grid2Images from './components/grid2Images'
import grid2Buttons from './components/grid2Buttons'
import ctaWithBackgroundImage, {ctaInBackgroundImage} from './components/ctaWithBackgroundImage'
import orderedListArray from './components/orderedListArray'
import unorderedListArray from './components/unorderedListArray'

export const components = [
  imageTitleSubtitleDescription,
  imageNumberDescription,
  achievementsShowcase,
  quote,
  imageDescription,
  project,
  caseStudies,
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
  cards,
  card_contents,
  process,
  tilesSmall,
  testimonial,
  numberedCards,
  PortableText,
  imageSource,
  orderedList,
  unorderedList,
  titleDescription,
  grid2Images,
  grid2Buttons,
  ctaWithBackgroundImage,
  orderedListArray,
  unorderedListArray,
  ctaInBackgroundImage,
]

import blog_categories from './collectionTypes/blog/categories'
import blog_entries from './collectionTypes/blog/entries'
import imageSource from './components/imageSource'

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components,
  blog_categories,
  blog_entries,
]
