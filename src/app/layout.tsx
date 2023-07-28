import '../assets/globals.css'
import FooterSection from '@/components/layout/FooterSection'
import BackgroundColor from '@/components/layout/BackgroundColor'
import Header from '@/components/layout/Header'
import { Providers } from '@/components/Providers'
import { Jost } from '@next/font/google'
import Script from 'next/script';

export const metadata = {
  title: {
    default: "Eko Prasetio, B.Eng., S.Kom.",
    template: "%s | Eko Prasetio, B.Eng., S.Kom.",
  },
  description: "Full Stack Developer",
  applicationName: 'Eko Prasetio Profile',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Eko Prasetio, B.Eng., S.Kom.', url: 'https://ekopras.engineer' }],
  colorScheme: 'dark',
  creator: 'Eko Prasetio, B.Eng., S.Kom.',
  publisher: 'github.com/ekopras18',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  robots: 'follow, index',
  icons: {
    shortcut: "favicon.svg",
  },
}

const dosis = Jost({
  weight: ['400'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-84ST0BV9VV`} />
      <Script id="gtag-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-84ST0BV9VV');
        `}
      </Script>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8074306341178343"
     crossOrigin="anonymous"></Script>
      <body className={dosis.className}>
        <Providers>
          <Header />
          <BackgroundColor />
          {children}
          <FooterSection />
        </Providers>
      </body>
    </html>
  )
}
