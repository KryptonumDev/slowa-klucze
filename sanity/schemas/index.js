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

export const collectionTypes = [landingPage]

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
import landingPage from './collectionTypes/landingPage'
import cardsList from './components/cardsList'
import partners, {carousel} from './components/partners'
import prosAndCons, {prosAndConsCard} from './components/prosAndCons'
import offers, {offer} from './components/offers'

export const components = [
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
  cardsList,
  partners,
  carousel,
  prosAndCons,
  offer,
  offers,
  prosAndConsCard,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components,
]
