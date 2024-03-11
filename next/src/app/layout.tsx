import '../assets/global.scss';
import localFont from 'next/font/local';
import Fathom from './fathom';
import Footer from '@/components/_global/footer/footer';
import { sanityFetch } from '@/utils/sanity-client';
import { type global } from '@/types/_pages/global';
import Nav from '@/components/_global/nav/nav';

const kanit = localFont({
  src: [
    {
      path: '../resources/fonts/Kanit-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../resources/fonts/Kanit-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../resources/fonts/Kanit-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['sans-serif'],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { footer, logo, navigation, socials } = await getData();

  return (
    <html lang='en'>
      <body className={kanit.className}>
        <Fathom />
        <Nav
          data={navigation}
          logo={logo}
          socials={socials}
        />
        <main>{children}</main>
        <Footer
          data={footer}
          logo={logo}
          socials={socials}
        />
      </body>
    </html>
  );
}

async function getData() {
  const { page } = await sanityFetch<global>({
    query: /* groq */ `{
      "page": *[_id=="global"][0]{
      seo {
        og_Img {
          asset -> {
            url,
                altText,
                metadata{
                  lqip,
                  dimensions{
                    aspectRatio,
                    width,
                    height
                  }
                }
          }
        }
      },
      logo {
        asset -> {
          url,
          altText,
          metadata{
            lqip,
            dimensions{
              aspectRatio,
              width,
              height
            }
          }
        }
      },
      navigation {
        cta {
          text,
          theme,
          href
        }
      },
      footer {
        description,
        portrait {
          asset -> {
            url,
            altText,
            metadata{
              lqip,
              dimensions{
                aspectRatio,
                width,
                height
              }
            }
          }
        }
       },
       socials {
        href,
        icon {
          asset -> {
            url,
            altText,
            metadata{
              lqip,
              dimensions{
                aspectRatio,
                width,
                height
              }
            }
          }
        }
       }[]
      }
    }`,
  });
  return page;
}
