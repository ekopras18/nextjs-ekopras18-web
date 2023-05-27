"use client";
import Education from '@/components/about/Education';
import Experience from '@/components/about/Experince';
import Skills from '@/components/about/Skills';
import React, { useState, useEffect } from 'react';


export default function ContactPage() {
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const username = 'ekopras18'; // Ganti dengan nama pengguna GitHub Anda
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setProfilePicture(data.avatar_url);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    fetchProfilePicture();
  }, []);
  return (
    <main>
      <div className="py-10 relative md:flex md:py-10 gap-x-6 mx-auto md:flex-row max-w-screen-xl px-4">
        <div
          className="hidden md:flex w-[284px] md:shrink-0 sticky top-[121px] h-[calc(100vh-121px)] md:flex-col md:justify-between">
          <div className="overflow-hidden relative">
            <nav className="docs-scrollbar styled-scrollbar overflow-y-scroll flex flex-col pr-2 pb-4 dark:text-white"
            >
              <ul>
                <li className="my-1.5 ml-[3px]">
                  <div data-is-collapsed="true">
                    <div className="">
                      {profilePicture ? (
                        <picture>
                          <img className='rounded-full shadow-md dark:shadow-green-900 transition-shadow duration-300 hover:shadow-lg' src={profilePicture} alt="Profile Picture" />
                        </picture>
                      ) : (
                        <div className="animate-pulse space-x-4 text-center">
                          Loading ...
                        </div>
                      )}
                      <ul className="my-4">
                        <li className="my-2 text-md font-bold text-center pb-2 border-b border-gray-200 dark:border-green-100 text-gray-600 dark:text-gray-50">About Me </li>
                        <li className="my-3 text-sm text-center text-gray-400">
                          <span>
                            I am a full-stack development programmer with over 2.9 years of experience in developing end-to-end applications. During this time, I have successfully developed, created, and completed dozens of projects in various categories such as healthcare, finance, e-commerce, news portals, education, and more. With extensive experience in application development, I am confident in making a valuable contribution to the team and achieving the desired business goals.
                          </span>
                          <span className='hidden'>
                            Saya adalah seorang programmer full stack development yang telah memiliki pengalaman selama 2,9 tahun lebih dalam mengembangkan aplikasi secara end-to-end. Selama ini, saya telah berhasil mengembangkan, membuat dan menyelesaikan puluhan proyek dalam berbagai kategori seperti kesehatan, keuangan, e-commerce, portal berita, pendidikan, dan sebagainya.
                            Dengan pengalaman yang luas dalam pengembangan aplikasi, saya yakin dapat berkontribusi penuh terhadap tim dan dapat mencapai tujuan bisnis yang diinginkan.
                          </span>
                        </li>
                      </ul>
                      <ul className="my-4">
                        <li className="my-2 text-md font-bold text-center pb-2 border-b border-gray-200 dark:border-green-100 text-gray-600 dark:text-gray-50">Contact Me </li>
                        <li className="my-3 text-sm text-gray-400">
                          <ul>
                            <li className='flex py-1'>
                              <a href="mailto:ekoxit1@gmail.com" className='inline-flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                                <div className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block w-6 h-6 mx-1">
                                  <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6667 3.3335H3.33332C2.41666 3.3335 1.67499 4.0835 1.67499 5.00016L1.66666 15.0002C1.66666 15.9168 2.41666 16.6668 3.33332 16.6668H16.6667C17.5833 16.6668 18.3333 15.9168 18.3333 15.0002V5.00016C18.3333 4.0835 17.5833 3.3335 16.6667 3.3335ZM16.6667 6.66683L9.99999 10.8335L3.33332 6.66683V5.00016L9.99999 9.16683L16.6667 5.00016V6.66683Z" fill="fill-current" />
                                  </svg>
                                </div>
                                ekoxit1@gmail.com
                              </a>
                            </li>
                            <li className='flex py-1'>
                              <a href="https://ekopras.engineer/" className='inline-flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                                <div className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block w-6 h-6 mx-1">
                                  <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6333 11.6665C13.7 11.1165 13.75 10.5665 13.75 9.99984C13.75 9.43317 13.7 8.88317 13.6333 8.33317H16.45C16.5833 8.8665 16.6667 9.42484 16.6667 9.99984C16.6667 10.5748 16.5833 11.1332 16.45 11.6665M12.1583 16.2998C12.6583 15.3748 13.0417 14.3748 13.3083 13.3332H15.7667C14.9593 14.7234 13.6784 15.7765 12.1583 16.2998ZM11.95 11.6665H8.04999C7.96666 11.1165 7.91666 10.5665 7.91666 9.99984C7.91666 9.43317 7.96666 8.87484 8.04999 8.33317H11.95C12.025 8.87484 12.0833 9.43317 12.0833 9.99984C12.0833 10.5665 12.025 11.1165 11.95 11.6665ZM9.99999 16.6332C9.30832 15.6332 8.74999 14.5248 8.40832 13.3332H11.5917C11.25 14.5248 10.6917 15.6332 9.99999 16.6332ZM6.66666 6.6665H4.23332C5.03237 5.27252 6.31232 4.21774 7.83332 3.69984C7.33332 4.62484 6.95832 5.62484 6.66666 6.6665ZM4.23332 13.3332H6.66666C6.95832 14.3748 7.33332 15.3748 7.83332 16.2998C6.31551 15.7762 5.03736 14.7229 4.23332 13.3332ZM3.54999 11.6665C3.41666 11.1332 3.33332 10.5748 3.33332 9.99984C3.33332 9.42484 3.41666 8.8665 3.54999 8.33317H6.36666C6.29999 8.88317 6.24999 9.43317 6.24999 9.99984C6.24999 10.5665 6.29999 11.1165 6.36666 11.6665M9.99999 3.35817C10.6917 4.35817 11.25 5.47484 11.5917 6.6665H8.40832C8.74999 5.47484 9.30832 4.35817 9.99999 3.35817ZM15.7667 6.6665H13.3083C13.0475 5.63439 12.6613 4.63808 12.1583 3.69984C13.6917 4.22484 14.9667 5.28317 15.7667 6.6665ZM9.99999 1.6665C5.39166 1.6665 1.66666 5.4165 1.66666 9.99984C1.66666 12.21 2.54463 14.3296 4.10743 15.8924C4.88125 16.6662 5.79991 17.28 6.81096 17.6988C7.82201 18.1176 8.90564 18.3332 9.99999 18.3332C12.2101 18.3332 14.3297 17.4552 15.8925 15.8924C17.4553 14.3296 18.3333 12.21 18.3333 9.99984C18.3333 8.90549 18.1178 7.82185 17.699 6.81081C17.2802 5.79976 16.6664 4.8811 15.8925 4.10728C15.1187 3.33346 14.2001 2.71963 13.189 2.30084C12.178 1.88205 11.0943 1.6665 9.99999 1.6665Z" fill="fill-current" />
                                  </svg>
                                </div>
                                https://ekopras.engineer/
                              </a>
                            </li>
                            <li className='flex py-1'>
                              <a href="https://github.com/ekopras18/" className='inline-flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                                <div className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block w-6 h-6 mx-1">
                                  <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99999 1.6665C8.90564 1.6665 7.82201 1.88205 6.81096 2.30084C5.79991 2.71963 4.88125 3.33346 4.10743 4.10728C2.54463 5.67008 1.66666 7.7897 1.66666 9.99984C1.66666 13.6832 4.05832 16.8082 7.36666 17.9165C7.78332 17.9832 7.91666 17.7248 7.91666 17.4998V16.0915C5.60832 16.5915 5.11666 14.9748 5.11666 14.9748C4.73332 14.0082 4.19166 13.7498 4.19166 13.7498C3.43332 13.2332 4.24999 13.2498 4.24999 13.2498C5.08332 13.3082 5.52499 14.1082 5.52499 14.1082C6.24999 15.3748 7.47499 14.9998 7.94999 14.7998C8.02499 14.2582 8.24166 13.8915 8.47499 13.6832C6.62499 13.4748 4.68332 12.7582 4.68332 9.58317C4.68332 8.65817 4.99999 7.9165 5.54166 7.32484C5.45832 7.1165 5.16666 6.24984 5.62499 5.12484C5.62499 5.12484 6.32499 4.89984 7.91666 5.97484C8.57499 5.7915 9.29166 5.69984 9.99999 5.69984C10.7083 5.69984 11.425 5.7915 12.0833 5.97484C13.675 4.89984 14.375 5.12484 14.375 5.12484C14.8333 6.24984 14.5417 7.1165 14.4583 7.32484C15 7.9165 15.3167 8.65817 15.3167 9.58317C15.3167 12.7665 13.3667 13.4665 11.5083 13.6748C11.8083 13.9332 12.0833 14.4415 12.0833 15.2165V17.4998C12.0833 17.7248 12.2167 17.9915 12.6417 17.9165C15.95 16.7998 18.3333 13.6832 18.3333 9.99984C18.3333 8.90549 18.1178 7.82185 17.699 6.81081C17.2802 5.79976 16.6664 4.8811 15.8925 4.10728C15.1187 3.33346 14.2001 2.71963 13.189 2.30084C12.178 1.88205 11.0943 1.6665 9.99999 1.6665Z" fill="fill-current" />
                                  </svg>
                                </div>
                                https://github.com/ekopras18
                              </a>
                            </li>
                            <li className='flex py-1'>
                              <a href="https://www.linkedin.com/in/ekopras18" className='inline-flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                                <div className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block w-6 h-6 mx-1">
                                  <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.28 15.2825H13.0592V11.8017C13.0592 10.9717 13.0425 9.90333 11.9008 9.90333C10.7433 9.90333 10.5667 10.8067 10.5667 11.7408V15.2825H8.345V8.125H10.4783V9.1H10.5075C10.8058 8.53833 11.5308 7.94417 12.6142 7.94417C14.8642 7.94417 15.2808 9.42583 15.2808 11.3533L15.28 15.2825ZM5.83667 7.14583C5.66713 7.14605 5.49922 7.11281 5.34255 7.04801C5.18589 6.9832 5.04356 6.88812 4.92371 6.7682C4.80387 6.64828 4.70888 6.50588 4.64418 6.34918C4.57947 6.19247 4.54634 6.02454 4.54667 5.855C4.54683 5.59986 4.62265 5.3505 4.76453 5.13846C4.90642 4.92641 5.108 4.76119 5.34377 4.66371C5.57955 4.56623 5.83895 4.54085 6.08915 4.59078C6.33935 4.64072 6.56913 4.76373 6.74942 4.94426C6.92972 5.12478 7.05243 5.35472 7.10204 5.60498C7.15166 5.85525 7.12594 6.11461 7.02815 6.35026C6.93036 6.58592 6.76489 6.78728 6.55266 6.92889C6.34043 7.0705 6.09097 7.146 5.83583 7.14583H5.83667ZM6.95 15.2825H4.7225V8.125H6.95V15.2825ZM16.3917 2.5H3.60833C2.995 2.5 2.5 2.98333 2.5 3.58083V16.4192C2.5 17.0167 2.995 17.5 3.60667 17.5H16.3892C17 17.5 17.5 17.0167 17.5 16.4192V3.58083C17.5 2.98417 17 2.5 16.3883 2.5H16.3917Z" fill="fill-current" />
                                  </svg>
                                </div>
                                https://www.linkedin.com/in/ekopras18
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <nav className="w-56 shrink-0 order-last hidden md:block">
          <div className="sticky top-[126px] h-[calc(100vh-121px)]">
            <div className="mb-1 mt-[7px] text-sm font-medium text-gray-700">On this page</div>
            <div className="relative" data-docs-table-of-contents="">
              <div aria-hidden="true" className="absolute top-0 left-0 h-3 bg-gradient-to-b from-gray-0 w-full z-1"></div>
              <div aria-hidden="true" className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-gray-0 w-full z-10"></div>
              <ul className="space-y-2.5 py-2 text-sm overflow-y-auto max-h-[60vh] styled-scrollbar">
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#educations">Educations</a></li>
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#skills">Skills</a></li>
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#experience">Experience</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <article className="w-full min-w-0 max-w-6xl mt-4" data-docs-container="">
          <div className="prose prose-vercel max-w-none" data-docs="true">
            <div className='pb-5 md:pb-10'>
              <h1 className='text-[26px] md:text-4xl font-bold text-gray-600 dark:text-gray-50'>Eko Prasetio, B.Eng., S.Kom.</h1>
              <p className='text-base md:text-md font-semibold text-gray-500 dark:text-gray-100'>Full Stack Developer</p>
            </div>

            <div className='flex py-1' id='educations'>
              <div className='w-full pb-5'>
                <h3 className='text-base md:text-md font-medium'>EDUCATION</h3>
                <div className=' border-b py-1 border-gray-200 dark:border-green-100' />
                <Education />
              </div>
            </div>

            <div className='flex py-1' id='skills'>
              <div className='w-full pb-5'>
                <h3 className='text-base md:text-md font-medium'>SKILL</h3>
                <div className='border-b py-1 border-gray-200 dark:border-green-100' />
                <Skills />
              </div>
            </div>

            <div className='flex py-1' id='experience'>
              <div className='w-full pb-5'>
                <h3 className='text-base md:text-md font-medium'>EXPERIENCE</h3>
                <div className='border-b py-1 border-gray-200 dark:border-green-100' />
                <Experience />
              </div>
            </div>

          </div>

          {/* <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
            <article className="flex border border-gray-200 dark:border-gray-500 transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-500"
                >
                  <span>2022</span>
                  <span className="w-px flex-1 bg-gray-200 dark:bg-gray-500"></span>
                  <span>Oct 10</span>
                </time>
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <img
                  alt="Name"
                  src="https://optimasolution.co.id/wp-content/uploads/sites/47/2016/02/erp.PNG"
                  className="aspect-square h-56 w-full object-cover"
                />
                <div className="border-s border-gray-900/10 p-2 sm:border-l-transparent sm:p-2">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-800 dark:text-green-100">
                      Finding the right guitar - 5 tips
                    </h3>
                  </a>

                  <p className="mt-1 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-green-50/40">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-slate-400/95 dark:bg-green-400/95 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-slate-500/95 dark:hover:bg-green-500/95"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
            <article className="flex border border-gray-200 dark:border-gray-500 transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-500"
                >
                  <span>2022</span>
                  <span className="w-px flex-1 bg-gray-200 dark:bg-gray-500"></span>
                  <span>Oct 10</span>
                </time>
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <img
                  alt="Name"
                  src="https://optimasolution.co.id/wp-content/uploads/sites/47/2016/02/erp.PNG"
                  className="aspect-square h-56 w-full object-cover"
                />
                <div className="border-s border-gray-900/10 p-2 sm:border-l-transparent sm:p-2">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-800 dark:text-green-100">
                      Finding the right guitar - 5 tips
                    </h3>
                  </a>

                  <p className="mt-1 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-green-50/40">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-slate-400/95 dark:bg-green-400/95 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-slate-500/95 dark:hover:bg-green-500/95"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
          </div> */}

        </article>
      </div>
    </main>
  )
}