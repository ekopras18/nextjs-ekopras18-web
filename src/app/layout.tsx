import '../assets/globals.css'
import FooterSection from '@/components/layout/FooterSection'
import BackgroundColor from '@/components/layout/BackgroundColor'
import Header from '@/components/layout/Header'



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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    <html lang="en" className="scroll-smooth">
      <body className="dark:bg-[#4efd910e]">
        <section>
          <Header />
        </section>
        <section>
          <BackgroundColor />
        </section>
        <section>
          {children}
        </section>
        <section>
          <FooterSection />
        </section>
      </body>
    </html>
  )
}
