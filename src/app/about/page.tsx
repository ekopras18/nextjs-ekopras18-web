"use client";
import Education from '@/components/about/Education';
import Experience from '@/components/about/Experince';
import Skills from '@/components/about/Skills';
import Contact from '@/components/about/Contact';
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
                        <li className="my-3 text-sm text-center text-gray-500">
                          <span>
                            I am a full-stack development programmer with over 2.9 years of experience in developing end-to-end applications. During this time, I have successfully developed, created, and completed dozens of projects in various categories such as healthcare, finance, e-commerce, news portals, education, and more. With extensive experience in application development, I am confident in making a valuable contribution to the team and achieving the desired business goals.
                          </span>
                          <span className='hidden'>
                            Saya adalah seorang programmer full stack development yang telah memiliki pengalaman selama 2,9 tahun lebih dalam mengembangkan aplikasi secara end-to-end. Selama ini, saya telah berhasil mengembangkan, membuat dan menyelesaikan puluhan proyek dalam berbagai kategori seperti kesehatan, keuangan, e-commerce, portal berita, pendidikan, dan sebagainya.
                            Dengan pengalaman yang luas dalam pengembangan aplikasi, saya yakin dapat berkontribusi penuh terhadap tim dan dapat mencapai tujuan bisnis yang diinginkan.
                          </span>
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
            <div className="mb-1 text-md font-bold text-gray-600 dark:text-gray-50">On this page</div>
            <div className="relative" data-docs-table-of-contents="">
              <div aria-hidden="true" className="absolute top-0 left-0 h-3 bg-gradient-to-b from-gray-0 w-full z-1"></div>
              <div aria-hidden="true" className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-gray-0 w-full z-10"></div>
              <ul className="space-y-2.5 py-2 text-sm overflow-y-auto max-h-[60vh] styled-scrollbar">
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#educations">Educations</a></li>
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#skills">Skills</a></li>
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#experience">Experience</a></li>
              </ul>
              <div className="my-2 text-md font-bold pb-2 border-b border-gray-200 dark:border-green-100 text-gray-600 dark:text-gray-50">Contact Me</div>
              <Contact />
            </div>
          </div>
        </nav>
        <article className="w-full min-w-0 max-w-6xl mt-4" data-docs-container="">
          <div className="prose prose-vercel max-w-none" data-docs="true">
            <div className='pb-5 md:pb-10'>
              <h1 className='text-[26px] md:text-4xl font-bold text-gray-600 dark:text-gray-50'>Eko Prasetio, B.Eng., S.Kom.</h1>
              <p className='text-base md:text-md font-semibold text-gray-500 dark:text-gray-100'>Full Stack Developer</p>
            </div>

            <div className='flex py-1 md:hidden' id='aboutme'>
              <div className='w-full pb-5'>
                <h3 className='text-base md:text-md font-medium text-gray-600 dark:text-gray-50'>ABOUT ME</h3>
                <div className='border-b py-1 border-gray-200 dark:border-green-100' />
                <div className='py-4 text-gray-500'>
                  <span>
                    I am a full-stack development programmer with over 2.9 years of experience in developing end-to-end applications. During this time, I have successfully developed, created, and completed dozens of projects in various categories such as healthcare, finance, e-commerce, news portals, education, and more. With extensive experience in application development, I am confident in making a valuable contribution to the team and achieving the desired business goals.
                  </span>
                </div>
              </div>
            </div>

            <div className='flex py-1' id='educations'>
              <div className='w-full pb-5'>
                <h3 className='text-base md:text-md font-medium text-gray-600 dark:text-gray-50'>EDUCATION</h3>
                <div className=' border-b py-1 border-gray-200 dark:border-green-100' />
                <Education />
              </div>
            </div>

            <div className='flex py-1' id='skills'>
              <div className='w-full pb-5'>
                <h3 className='text-base md:text-md font-medium text-gray-600 dark:text-gray-50'>SKILL</h3>
                <div className='border-b py-1 border-gray-200 dark:border-green-100' />
                <Skills />
              </div>
            </div>

            <div className='flex py-1' id='experience'>
              <div className='w-full pb-5'>
                <h3 className='text-base md:text-md font-medium text-gray-600 dark:text-gray-50'>EXPERIENCE</h3>
                <div className='border-b py-1 border-gray-200 dark:border-green-100' />
                <Experience />
              </div>
            </div>

            <div className='md:hidden flex py-1' id='contackme'>
              <div className='w-full pb-5'>
                <h3 className='text-base md:text-md font-medium text-gray-600 dark:text-gray-50'>CONTACT ME</h3>
                <div className='border-b py-1 border-gray-200 dark:border-green-100' />
                <Contact />
              </div>
            </div>

          </div>

        </article>
      </div>
    </main>
  )
}