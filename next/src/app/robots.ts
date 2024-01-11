import {domain} from '../global/Seo';

const currentDate= new Date();
const staticPages = [
  '/',
];

export default function sitemap() {

  const mappedStaticPages = staticPages.map((slug) => ({
    url: `${domain}${slug}`,
    lastModified: currentDate,
  }));

  return [
    ...mappedStaticPages
  ];
}