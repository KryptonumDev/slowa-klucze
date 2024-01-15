import { Kanit } from 'next/font/google';
import '../assets/global.scss';
import Footer from '@/components/_global/footer/footer';
import { sanityFetch } from '@/utils/sanity-client';
import { type global } from '@/types/_pages/global';

const font = Kanit({ weight: '400', subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { footer, logo } = await getData();

  return (
    <html lang='en'>
      <body className={font.className}>
        <main>{children}</main>
        <Footer data={footer} logo={logo} />
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
      footer {
        description,
        socialsList[] {
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
        },
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
       }
      }
    }`,
  });
  return page;
}
