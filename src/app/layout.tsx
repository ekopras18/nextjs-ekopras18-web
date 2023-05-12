import '../assets/globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

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
    shortcut: "../assets/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav className="bg-transparent border-b border-gray-700 absolute top-0 w-full flex items-center z-10">
          <div className="container px-0 text-sm">
            <div className="flex items-center justify-between relative md:px-16">
              <div className="px-4 md:flex md:items-center">
                <div className="px-4 py-4">
                  <a href="#home" className="text-[#00002C] dark:text-white">
                    <svg width="141" className="fill-current" height="24" viewBox="0 0 141 24" fill="fill-current"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M38.2238 6.76763C39.6471 6.76763 40.859 7.31016 41.8595 8.39523C42.8741 9.4662 43.3814 10.7838 43.3814 12.348C43.3814 13.9121 42.8741 15.2368 41.8595 16.3218C40.859 17.3928 39.6471 17.9283 38.2238 17.9283C36.7442 17.9283 35.6027 17.4139 34.7995 16.3852V21.8599H32.0728V7.06356H34.7995V8.31067C35.6027 7.28198 36.7442 6.76763 38.2238 6.76763ZM35.6239 14.504C36.1735 15.0536 36.871 15.3284 37.7165 15.3284C38.562 15.3284 39.2595 15.0536 39.8091 14.504C40.3728 13.9403 40.6546 13.2216 40.6546 12.348C40.6546 11.4743 40.3728 10.7626 39.8091 10.2131C39.2595 9.64939 38.562 9.36756 37.7165 9.36756C36.871 9.36756 36.1735 9.64939 35.6239 10.2131C35.0743 10.7626 34.7995 11.4743 34.7995 12.348C34.7995 13.2216 35.0743 13.9403 35.6239 14.504Z"
                        fill="fill-current" />
                      <path
                        d="M46.6572 5.7953C46.2063 5.7953 45.8117 5.63324 45.4735 5.30913C45.1494 4.97093 44.9873 4.57636 44.9873 4.12543C44.9873 3.67449 45.1494 3.27992 45.4735 2.94172C45.8117 2.60352 46.2063 2.43442 46.6572 2.43442C47.1222 2.43442 47.5168 2.60352 47.8409 2.94172C48.1791 3.27992 48.3482 3.67449 48.3482 4.12543C48.3482 4.57636 48.1791 4.97093 47.8409 5.30913C47.5168 5.63324 47.1222 5.7953 46.6572 5.7953ZM45.3044 17.6324V7.06356H48.0312V17.6324H45.3044Z"
                        fill="fill-current" />
                      <path
                        d="M60.2713 17.6324H57.1218L54.839 14.4194L52.535 17.6324H49.3855L53.2536 12.2423L49.5546 7.06356H52.7041L54.839 10.044L56.9739 7.06356H60.1022L56.4031 12.2211L60.2713 17.6324Z"
                        fill="fill-current" />
                      <path
                        d="M63.1933 13.4683C63.5597 14.7929 64.5531 15.4552 66.1737 15.4552C67.2165 15.4552 68.0056 15.1029 68.5411 14.3983L70.7394 15.6666C69.6966 17.1744 68.1606 17.9283 66.1314 17.9283C64.384 17.9283 62.9819 17.3998 61.925 16.343C60.8681 15.2861 60.3397 13.9544 60.3397 12.348C60.3397 10.7556 60.8611 9.43097 61.9039 8.37409C62.9467 7.30311 64.2854 6.76763 65.92 6.76763C67.4701 6.76763 68.7454 7.30311 69.7459 8.37409C70.7605 9.44506 71.2678 10.7697 71.2678 12.348C71.2678 12.7003 71.2326 13.0737 71.1622 13.4683H63.1933ZM63.151 11.3545H68.5411C68.3861 10.6358 68.062 10.1003 67.5688 9.74803C67.0896 9.39574 66.5401 9.21959 65.92 9.21959C65.1873 9.21959 64.5813 9.40983 64.1022 9.79031C63.6231 10.1567 63.306 10.6781 63.151 11.3545Z"
                        fill="fill-current" />
                      <path d="M73.1714 17.6324V2.2019H75.8981V17.6324H73.1714Z" fill="fill-current" />
                      <path
                        d="M84.5449 6.76763C85.9682 6.76763 87.1801 7.31016 88.1806 8.39523C89.1952 9.4662 89.7025 10.7838 89.7025 12.348C89.7025 13.9121 89.1952 15.2368 88.1806 16.3218C87.1801 17.3928 85.9682 17.9283 84.5449 17.9283C83.0653 17.9283 81.9238 17.4139 81.1206 16.3852V21.8599H78.3939V7.06356H81.1206V8.31067C81.9238 7.28198 83.0653 6.76763 84.5449 6.76763ZM81.945 14.504C82.4946 15.0536 83.1921 15.3284 84.0376 15.3284C84.8831 15.3284 85.5806 15.0536 86.1302 14.504C86.6939 13.9403 86.9757 13.2216 86.9757 12.348C86.9757 11.4743 86.6939 10.7626 86.1302 10.2131C85.5806 9.64939 84.8831 9.36756 84.0376 9.36756C83.1921 9.36756 82.4946 9.64939 81.945 10.2131C81.3954 10.7626 81.1206 11.4743 81.1206 12.348C81.1206 13.2216 81.3954 13.9403 81.945 14.504Z"
                        fill="fill-current" />
                      <path d="M91.6255 17.6324V2.2019H94.3523V17.6324H91.6255Z" fill="fill-current" />
                      <path
                        d="M104.88 7.06356H107.607V17.6324H104.88V16.3852C104.063 17.4139 102.914 17.9283 101.435 17.9283C100.026 17.9283 98.8138 17.3928 97.7992 16.3218C96.7987 15.2368 96.2984 13.9121 96.2984 12.348C96.2984 10.7838 96.7987 9.4662 97.7992 8.39523C98.8138 7.31016 100.026 6.76763 101.435 6.76763C102.914 6.76763 104.063 7.28198 104.88 8.31067V7.06356ZM99.8495 14.504C100.399 15.0536 101.097 15.3284 101.942 15.3284C102.788 15.3284 103.485 15.0536 104.035 14.504C104.598 13.9403 104.88 13.2216 104.88 12.348C104.88 11.4743 104.598 10.7626 104.035 10.2131C103.485 9.64939 102.788 9.36756 101.942 9.36756C101.097 9.36756 100.399 9.64939 99.8495 10.2131C99.2999 10.7626 99.0252 11.4743 99.0252 12.348C99.0252 13.2216 99.2999 13.9403 99.8495 14.504Z"
                        fill="fill-current" />
                      <path
                        d="M115.956 6.76763C117.111 6.76763 118.063 7.15515 118.809 7.9302C119.57 8.70524 119.951 9.77622 119.951 11.1431V17.6324H117.224V11.4813C117.224 10.7767 117.034 10.2412 116.653 9.87486C116.273 9.49438 115.766 9.30414 115.132 9.30414C114.427 9.30414 113.863 9.52256 113.441 9.95941C113.018 10.3963 112.806 11.0515 112.806 11.9252V17.6324H110.08V7.06356H112.806V8.24726C113.469 7.26084 114.519 6.76763 115.956 6.76763Z"
                        fill="fill-current" />
                      <path
                        d="M124.583 13.4683C124.95 14.7929 125.943 15.4552 127.564 15.4552C128.606 15.4552 129.396 15.1029 129.931 14.3983L132.129 15.6666C131.087 17.1744 129.551 17.9283 127.521 17.9283C125.774 17.9283 124.372 17.3998 123.315 16.343C122.258 15.2861 121.73 13.9544 121.73 12.348C121.73 10.7556 122.251 9.43097 123.294 8.37409C124.337 7.30311 125.675 6.76763 127.31 6.76763C128.86 6.76763 130.135 7.30311 131.136 8.37409C132.15 9.44506 132.658 10.7697 132.658 12.348C132.658 12.7003 132.623 13.0737 132.552 13.4683H124.583ZM124.541 11.3545H129.931C129.776 10.6358 129.452 10.1003 128.959 9.74803C128.48 9.39574 127.93 9.21959 127.31 9.21959C126.577 9.21959 125.971 9.40983 125.492 9.79031C125.013 10.1567 124.696 10.6781 124.541 11.3545Z"
                        fill="fill-current" />
                      <path
                        d="M140.297 9.68462H137.908V14.0812C137.908 14.4476 138 14.7154 138.183 14.8845C138.366 15.0536 138.634 15.1522 138.986 15.1804C139.339 15.1945 139.776 15.1874 140.297 15.1593V17.6324C138.423 17.8437 137.098 17.6676 136.323 17.1039C135.562 16.5403 135.182 15.5327 135.182 14.0812V9.68462H133.343V7.06356H135.182V4.92866L137.908 4.10429V7.06356H140.297V9.68462Z"
                        fill="fill-current" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.90909 12C2.90909 6.97922 6.97923 2.90909 12 2.90909C13.0942 2.90909 14.1432 3.10238 15.1147 3.45669C16.216 2.82223 17.3212 2.285 18.4127 1.85533C16.5577 0.680287 14.3583 0 12 0C5.37258 0 0 5.37258 0 12C0 14.2298 0.608173 16.3175 1.66769 18.1064C2.1405 17.0356 2.71318 15.9561 3.37614 14.8842C3.07319 13.9779 2.90909 13.0081 2.90909 12ZM20.4005 3.46359C20.2983 3.49579 20.1962 3.52905 20.0942 3.56333C20.0942 3.56333 20.0942 3.56333 20.0942 3.56333C19.9895 3.59852 19.8846 3.63492 19.7793 3.67251C19.0034 3.94955 18.2112 4.29157 17.4118 4.6947C14.8483 5.9874 12.2095 7.90844 9.78797 10.3299C7.6013 12.5166 5.82274 14.8805 4.54643 17.2061C4.54643 17.2061 4.54643 17.2061 4.54642 17.2061C4.0009 18.2001 3.54713 19.1871 3.19247 20.1504C3.19248 20.1504 3.19248 20.1504 3.19248 20.1504C3.1326 20.313 3.07555 20.475 3.02136 20.6362C2.64472 21.7565 2.39076 22.8972 2.30815 24H5.22384C5.2805 23.4394 5.40109 22.8225 5.59532 22.1497C7.44862 23.3217 9.64509 24 12 24C18.6274 24 24 18.6274 24 12C24 9.79137 23.4033 7.72211 22.3624 5.94461C22.9586 5.81316 23.5047 5.7444 24 5.7301V2.82346C22.839 2.8499 21.6241 3.08031 20.4258 3.45565C20.4174 3.45829 20.409 3.46094 20.4005 3.46359ZM19.5312 6.90667C17.0618 8.01289 14.3589 9.87307 11.845 12.387C9.56409 14.6679 7.82133 17.1044 6.69161 19.3809C8.18519 20.457 10.0186 21.0909 12 21.0909C17.0208 21.0909 21.0909 17.0208 21.0909 12C21.0909 10.1127 20.5158 8.35965 19.5312 6.90667Z"
                        fill="#FE0084" />
                    </svg>
                  </a>
                </div>
                <div className="px-4">
                  <nav id="nav-menu"
                    className="hidden absolute py-2 bg-white shadow-lg rounded-lg max-w-[180px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                    <ul className="block dark:text-white lg:flex">
                      <li className="group dropdown inline-block relative">
                        <a href="#product" className="text-base text-dark py-2 mx-5 flex group-hover:text-pp-primary">Product
                          <div className="py-1 px-1">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.18435 9.43815L6.52935 6.78315C6.38883 6.64346 6.19874 6.56506 6.0006 6.56506C5.80246 6.56506 5.61237 6.64346 5.47185 6.78315C5.40155 6.85287 5.34576 6.93582 5.30768 7.02722C5.2696 7.11861 5.25 7.21664 5.25 7.31565C5.25 7.41466 5.2696 7.51269 5.30768 7.60408C5.34576 7.69548 5.40155 7.77843 5.47185 7.84815L8.65185 11.0282C8.72157 11.0984 8.80452 11.1542 8.89592 11.1923C8.98731 11.2304 9.08534 11.25 9.18435 11.25C9.28336 11.25 9.38139 11.2304 9.47278 11.1923C9.56418 11.1542 9.64713 11.0984 9.71685 11.0282L12.9343 7.84815C13.0039 7.77807 13.0589 7.69496 13.0962 7.60358C13.1335 7.5122 13.1524 7.41436 13.1518 7.31565C13.1524 7.21695 13.1335 7.1191 13.0962 7.02772C13.0589 6.93634 13.0039 6.85323 12.9343 6.78315C12.7938 6.64346 12.6037 6.56506 12.4056 6.56506C12.2075 6.56506 12.0174 6.64346 11.8768 6.78315L9.18435 9.43815Z"
                                fill="#73767A" />
                            </svg>
                          </div>
                        </a>
                        <ul
                          className="dropdown-menu absolute w-[180px] md:w-[928px] drop-shadow-lg hidden dark:bg-pp-dark-secondary bg-[#e7e7e7] md:bg-white pt-1 rounded-lg">
                          <li className=""><a className="rounded-tpy-2 text-dark hover:text-pp-primary px-4 block whitespace-no-wrap"
                            href="#">Mobile App Template</a></li>
                          <li className=""><a className="py-2 px-4 text-dark hover:text-pp-primary block whitespace-no-wrap"
                            href="#">Web Design Template</a></li>
                          <li className=""><a className="rounded-b text-dark hover:text-pp-primary py-2 px-4 block whitespace-no-wrap"
                            href="#">Web & Mobile UI Kit</a></li>
                        </ul>
                      </li>
                      <li className="group">
                        <a href="" className="text-base text-dark py-2 mx-5 md:mx-5 flex group-hover:text-pp-primary">Bundles</a>
                      </li>
                      <li className="group">
                        <a href="" className="text-base text-dark py-2 mx-5 flex group-hover:text-pp-primary">About us</a>
                      </li>
                      <li className="group">
                        <a href="" className="text-base text-dark py-2 mx-5 flex group-hover:text-pp-primary">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="flex items-center px-4">
                <div className="pr-9 lg:hidden">
                  <input type="checkbox" id="darkmode" className="hidden" />
                  <label htmlFor="darkmode" className="text-base">
                    <div
                      className="transition-all duration-700 w-9 h-9 bg-[#A9A9BF] dark:bg-pp-dark-secondary rounded-full flex items-center p-2 cursor-pointer">
                      <svg className="hidden dark:block" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 10H2M10 1V2M18 10H19M10 18V19M3.6 3.6L4.3 4.3M16.4 3.6L15.7 4.3M15.7 15.7L16.4 16.4M4.3 15.7L3.6 16.4M6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10Z"
                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg className="block dark:hidden" width="20" height="21" viewBox="0 0 20 21" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 1.99994H10.393C9.10837 3.19365 8.28262 4.79979 8.05932 6.53916C7.83602 8.27854 8.22928 10.0412 9.17076 11.5207C10.1122 13.0002 11.5424 14.103 13.2126 14.6374C14.8829 15.1718 16.6876 15.1041 18.313 14.4459C17.6878 15.9504 16.6658 17.257 15.3562 18.2262C14.0466 19.1954 12.4985 19.791 10.8769 19.9493C9.2554 20.1077 7.62129 19.8229 6.14892 19.1253C4.67654 18.4278 3.42114 17.3436 2.51661 15.9885C1.61209 14.6334 1.09238 13.0582 1.01291 11.4309C0.933445 9.8036 1.29721 8.18524 2.0654 6.74846C2.83359 5.31167 3.97739 4.11037 5.37479 3.27268C6.77219 2.43499 8.37078 1.99234 10 1.99194V1.99994Z"
                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </label>
                </div>
                <button id="toggle-mobile" name="toggle-mobile" type="button" className="block absolute right-4 lg:hidden ">
                  <span className="toogle-mobile-line transform duration-300 ease-in-out origin-top-left"></span>
                  <span className="toogle-mobile-line duration-300 ease-in-out"></span>
                  <span className="toogle-mobile-line duration-300 ease-in-out origin-bottom-left"></span>
                </button>
                <nav id="nav-menu"
                  className="hidden absolute py-2 bg-white shadow-lg rounded-lg max-w-[180px] w-full top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                  <ul className="block lg:flex">
                    <li className="group">
                      <a href="#" className="text-base text-dark py-2 mx-4 flex group-hover:text-pp-primary">Sign In</a>
                    </li>
                    <li className="group">
                      <button
                        className="bg-[#A9ADBA] text-white dark:bg-pp-dark-secondary hover:text-pp-primary rounded-lg px-6 py-2 dark:hover:bg-[#1E2434] transition duration-300">Sign
                        up</button>
                    </li>
                    <li className="group">
                      <div className="px-5">
                        <input type="checkbox" id="darkmode" className="hidden" />
                        <label htmlFor="darkmode" className="text-base">
                          <div
                            className="transition-all duration-700 w-9 h-9 bg-[#A9A9BF] dark:bg-pp-dark-secondary rounded-full flex items-center p-2 cursor-pointer">
                            <svg className="hidden dark:block" width="20" height="20" viewBox="0 0 20 20" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1 10H2M10 1V2M18 10H19M10 18V19M3.6 3.6L4.3 4.3M16.4 3.6L15.7 4.3M15.7 15.7L16.4 16.4M4.3 15.7L3.6 16.4M6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg className="block dark:hidden" width="20" height="21" viewBox="0 0 20 21" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 1.99994H10.393C9.10837 3.19365 8.28262 4.79979 8.05932 6.53916C7.83602 8.27854 8.22928 10.0412 9.17076 11.5207C10.1122 13.0002 11.5424 14.103 13.2126 14.6374C14.8829 15.1718 16.6876 15.1041 18.313 14.4459C17.6878 15.9504 16.6658 17.257 15.3562 18.2262C14.0466 19.1954 12.4985 19.791 10.8769 19.9493C9.2554 20.1077 7.62129 19.8229 6.14892 19.1253C4.67654 18.4278 3.42114 17.3436 2.51661 15.9885C1.61209 14.6334 1.09238 13.0582 1.01291 11.4309C0.933445 9.8036 1.29721 8.18524 2.0654 6.74846C2.83359 5.31167 3.97739 4.11037 5.37479 3.27268C6.77219 2.43499 8.37078 1.99234 10 1.99194V1.99994Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </nav> */}
        <nav className="bg-transparent border-b border-gray-700 fixed top-0 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className='text-xl font-bold text-blue-500 px-3 py-2'>
                 <b>MRE</b> 
                </Link>
                <Link href="/about" className="text-sm transition-colors duration-200 text-gray-500 hover:text-white">
                  About
                </Link>
                <Link href="/contact" className="text-sm transition-colors duration-200 text-gray-500 hover:text-white">
                  Contact
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-white font-bold text-xl">
                    Logo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* <section>
          <div className=" flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[680px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0df04a] after:dark:opacity-40 before:lg:h-[60px]">
            <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> 
          </div>
        </section> */}
        {children}
      </body>
    </html>
  )
}
