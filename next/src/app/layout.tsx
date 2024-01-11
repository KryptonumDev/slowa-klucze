import { Kanit } from 'next/font/google';
import '../assets/global.scss';

const font = Kanit({ weight: '400', subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
