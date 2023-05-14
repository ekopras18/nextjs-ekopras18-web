import '../assets/globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from '../components/HamburgerMenu'


const inter = Inter({ subsets: ['latin'] })

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
    shortcut: "favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header
          className="h-[64px] sticky top-0 z-50 flex flex-col w-full antialiased backdrop-blur-sm backdrop-saturate-200 bg-white/80 dark:bg-black/50">
          <nav className="mb-[-1px] h-full flex items-center w-full max-w-screen-xl px-4 md:px-24 mx-auto">
            <div className="flex gap-1 items-center">
              <Link href="/" title="">
                <Image className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  src="logo.svg"
                  alt="Mre Logo"
                  width="40"
                  height="40"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:flex item-center gap-6 ml-[44px]">
              <Link className="text-sm transition-colors duration-200 text-gray-500 hover:text-green-500"
                href="/">Home</Link>
              {/* text-blue-500 */}
              <Link className="text-sm transition-colors duration-200 text-gray-500 hover:text-green-500"
                href="/portofolio">Portofolio</Link>
              <Link className="text-sm transition-colors duration-200 text-gray-500 hover:text-green-500"
                href="/about">About</Link>
              <Link className="text-sm transition-colors duration-200 text-gray-500 hover:text-green-500"
                href="/contact">Contact</Link>
              <Link className="text-sm relative transition-colors duration-200 text-gray-500 hover:text-green-500"
                href="/repository" rel="noopener noreferrer">Repository
                <svg aria-hidden="true" className="absolute top-[0.5px] right-[-10px] text-gray-300" height="7" viewBox="0 0 6 6" width="7">
                  <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                    fill="currentColor"></path>
                </svg>
              </Link>
            </div>
            <div className="justify-end hidden w-full gap-2 md:flex">
              <Link
                className="rounded-full px-4 flex h-9 items-center text-sm font-medium transition-colors duration-200 leading-none bg-gray-800 text-gray-0 border border-black  hover:text-gray-800 hover:border-gray-800"
                href="">
              </Link>
            </div>
            <div className="flex justify-end items-center gap-4 w-full md:hidden">
              <span className="text-3xl cursor-pointer  mx-2 md:hidden block">
                <HamburgerMenu />
              </span>
            </div>
          </nav>
          <div className='h-[1px] bg-gradient-to-r from-gray-900 to-green-950' />
        </header>

        <section>
          <div className=" flex place-items-center before:absolute before:h-[30px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[980px] after:w-[240px] md:after:w-[440px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0df04a] after:dark:opacity-40 before:lg:h-[60px]">
            {/* <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />  */}
          </div>
        </section>
        {children}
      </body>
    </html>
  )
}
