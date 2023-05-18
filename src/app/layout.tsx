import '../assets/globals.css'
import FooterSection from '@/components/layout/FooterSection'
import BackgroundColor from '@/components/layout/BackgroundColor'
import Header from '@/components/layout/Header'
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';



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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const inter = Inter({ subsets: ['latin'],display: 'swap',})

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
