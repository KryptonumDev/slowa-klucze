import '../assets/global.scss';
import localFont from 'next/font/local';
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

  const icons = [
    {
      icon: facebookIcon(),
      name: 'facebook',
    },
    {
      icon: linkedinIcon(),
      name: 'linkedin',
    },
    {
      icon: instagramIcon(),
      name: 'instagram',
    },
  ];

  return (
    <html lang='en'>
      <body className={kanit.className}>
        <Nav
          data={navigation}
          logo={logo}
          socials={socials}
          icons={icons}
        />
        <main>{children}</main>
        <Footer
          data={footer}
          logo={logo}
          socials={socials}
          icons={icons}
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
         facebook,
          linkedin,
          instagram
       }
      }
    }`,
  });
  return page;
}

export function facebookIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='39'
      height='39'
      fill='none'
      viewBox='0 0 39 39'
    >
      <rect
        width='39'
        height='39'
        fill='#163C3E'
        rx='6'
      ></rect>
      <path
        fill='#EFEFEF'
        d='M27.09 25.137l.865-5.637h-5.408v-3.656c0-1.543.754-3.047 3.176-3.047h2.46V7.998s-2.231-.38-4.364-.38c-4.456 0-7.366 2.7-7.366 7.586V19.5h-4.951v5.637h4.951v13.627c.994.156 2.011.236 3.047.236s2.053-.08 3.047-.236V25.137h4.543z'
      ></path>
    </svg>
  );
}

export function linkedinIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='39'
      height='39'
      fill='none'
      viewBox='0 0 39 39'
    >
      <rect
        width='39'
        height='39'
        fill='#163C3E'
        rx='6'
      ></rect>
      <g clipPath='url(#clip0_2000_18725)'>
        <path
          fill='#EFEFEF'
          d='M8.125 11.16c0-.732.256-1.336.769-1.812.512-.476 1.178-.713 1.998-.713.805 0 1.457.234 1.954.702.513.483.769 1.113.769 1.889 0 .702-.249 1.288-.747 1.756-.512.484-1.186.725-2.02.725h-.022c-.805 0-1.457-.241-1.954-.725-.498-.483-.747-1.09-.747-1.822zm.285 19.214V15.706h4.876v14.668H8.41zm7.576 0h4.875v-8.19c0-.513.06-.908.176-1.186.205-.498.516-.919.933-1.263.418-.344.941-.516 1.57-.516 1.64 0 2.46 1.105 2.46 3.316v7.84h4.875v-8.411c0-2.167-.512-3.81-1.537-4.93-1.025-1.12-2.38-1.68-4.063-1.68-1.888 0-3.36.813-4.413 2.438v.043h-.022l.021-.043v-2.087h-4.875c.03.469.044 1.926.044 4.37 0 2.445-.014 5.878-.044 10.3z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_2000_18725'>
          <path
            fill='#fff'
            d='M0 0H22.75V22.75H0z'
            transform='translate(8.125 8.125)'
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function instagramIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='39'
      height='39'
      fill='none'
      viewBox='0 0 39 39'
    >
      <path
        fill='#163C3E'
        d='M9.89 38.862c-2.32-.105-3.58-.491-4.418-.818-1.11-.433-1.902-.947-2.735-1.78-.834-.832-1.35-1.623-1.78-2.734-.326-.838-.712-2.098-.818-4.417C.023 26.606 0 25.853 0 19.502c0-6.352.025-7.103.138-9.613.105-2.319.494-3.577.818-4.417.433-1.11.948-1.902 1.78-2.737.832-.832 1.623-1.349 2.735-1.779C6.309.63 7.569.243 9.888.138 12.396.023 13.15 0 19.5 0c6.352 0 7.103.025 9.613.138 2.32.105 3.577.494 4.417.818 1.11.43 1.902.947 2.735 1.78.834.832 1.347 1.625 1.78 2.735.327.838.713 2.098.818 4.417.115 2.51.138 3.26.138 9.613 0 6.35-.023 7.102-.138 9.612-.105 2.32-.494 3.58-.818 4.417-.433 1.11-.947 1.902-1.78 2.734-.832.833-1.625 1.347-2.735 1.78-.838.327-2.098.713-4.417.818-2.507.115-3.26.138-9.613.138-6.35 0-7.102-.022-9.61-.138z'
      ></path>
      <path
        fill='#EFEFEF'
        d='M15.075 19.362a4.287 4.287 0 118.575-.001 4.287 4.287 0 01-8.575 0zm-2.317 0a6.604 6.604 0 1013.208 0 6.604 6.604 0 00-13.208 0m11.926-6.866a1.544 1.544 0 101.544-1.543 1.545 1.545 0 00-1.544 1.543zM14.166 29.83c-1.254-.057-1.936-.266-2.389-.442a3.996 3.996 0 01-1.48-.962c-.45-.45-.729-.878-.961-1.479-.177-.452-.386-1.134-.443-2.388-.062-1.356-.075-1.763-.075-5.198 0-3.435.014-3.84.075-5.198.057-1.254.268-1.934.443-2.388.233-.6.512-1.03.962-1.48.45-.45.878-.729 1.48-.962.452-.176 1.134-.385 2.388-.442 1.355-.062 1.763-.075 5.196-.075s3.84.013 5.198.075c1.254.057 1.934.268 2.388.443.6.232 1.03.512 1.48.962.45.45.728.878.962 1.479.176.453.385 1.135.442 2.389.062 1.356.075 1.763.075 5.197 0 3.435-.013 3.841-.075 5.198-.057 1.254-.267 1.936-.442 2.389a3.985 3.985 0 01-.963 1.478c-.45.45-.878.728-1.479.962-.453.177-1.134.385-2.388.442-1.356.063-1.763.075-5.198.075-3.435 0-3.841-.012-5.196-.075m-.107-23.253c-1.369.062-2.305.28-3.122.597A6.314 6.314 0 008.66 8.66a6.28 6.28 0 00-1.484 2.278c-.318.818-.535 1.753-.597 3.122-.063 1.372-.078 1.81-.078 5.303s.015 3.931.078 5.303c.062 1.369.28 2.304.597 3.122a6.287 6.287 0 001.484 2.278 6.32 6.32 0 002.278 1.483c.819.318 1.753.536 3.122.598 1.372.062 1.81.078 5.303.078s3.931-.015 5.303-.078c1.369-.063 2.304-.28 3.122-.598a6.325 6.325 0 002.278-1.483 6.3 6.3 0 001.483-2.279c.318-.817.537-1.752.598-3.121.062-1.373.077-1.81.077-5.303s-.015-3.931-.077-5.303c-.063-1.37-.28-2.305-.598-3.122a6.326 6.326 0 00-1.483-2.278 6.293 6.293 0 00-2.277-1.484c-.82-.318-1.754-.536-3.122-.597-1.372-.063-1.81-.078-5.303-.078-3.492 0-3.931.015-5.303.078'
      ></path>
    </svg>
  );
}
