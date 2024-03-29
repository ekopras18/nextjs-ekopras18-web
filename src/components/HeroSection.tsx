"use client";
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import GitHubCalendar from 'react-github-calendar';
import BuildWith from '@/components/BuildWith';

export default function HeroSection() {
  const [isToggled, setIsToggled] = useState(true);

  useEffect(() => {
    // Mengubah nilai variabel setelah 3 detik
    const timeout = setTimeout(() => {
      setIsToggled(false);
    }, 1000);

    // Membersihkan timeout ketika komponen unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative h-[700px] md:h-[880px]">
      <div className="absolute w-full h-full bg-cover bg-center hidden dark:block" style={{ backgroundImage: `url('/background.svg')`, filter: 'blur(9px)' }}></div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-12 md:pt-40 md:pb-20">
            <div className="text-center">
              <div className='py-2'>
                <h1 className="text-3xl tracking-tight font-extrabold text-green-500 dark:text-green-100 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Hi 👋 , I&apos;m</span>
                  <span className="block  xl:inline">
                    <Typewriter
                      options={{
                        strings: ['Eko Prasetio, B.Eng., S.Kom.', 'a Full Stack Developer 🚀'], //'as Jeruk Pras 🍊', 
                        autoStart: true,
                        deleteSpeed: 30,
                        loop: true,
                        cursor: '|',
                        wrapperClassName: 'text-green-500',
                      }}
                    />
                  </span>
                </h1>
                <p className="mx-2 md:mx-auto mt-2 max-w-md text-sm text-gray-500 md:text-base md:mt-5 md:max-w-3xl" data-fade='3'>
                  I have 2.9 years of experience in developing end-to-end applications and I am confident that I can contribute fully to the team and achieve desired business goals.
                </p>
              </div>
              <div className='py-2'>
                <p>Code Your Dreams, Ignite the Future</p>
              </div>
              <div className="container mt-5 mx-auto sm:flex sm:justify-center md:mt-8 grid grid-cols-2 md:grid-cols-3">
                <div className="mx-2">
                  <a href="/about">
                    <button className="w-full relative inline-block px-8 py-2 text-sm font-medium dark:text-white text-green-500 transition duration-300 ease-in-out border-2 border-green-500 rounded-md outline-none focus:outline-none hover:bg-green-500 hover:text-white hover:border-transparent">
                      Get in Touch
                      <span className="absolute top-0 right-0 block w-full h-full border-2 dark:border-gray-900 rounded-md pointer-events-none"></span>
                    </button>
                  </a>
                </div>
                <div className="mx-2">
                  <a href="https://drive.google.com/file/d/1e_uYjaHYb1POzaJDvFDz2EPucLR3Vnsf/view?usp=sharing" target='_blank'>
                    <button className="w-full relative inline-block px-8 py-2 text-sm font-medium dark:text-white text-green-500 transition duration-300 ease-in-out border-2 border-green-500 rounded-md outline-none focus:outline-none hover:bg-green-500 hover:text-white hover:border-transparent">
                      My Resume
                      <span className="absolute top-0 right-0 block w-full h-full border-2 dark:border-gray-900 rounded-md pointer-events-none"></span>
                    </button>
                  </a>
                </div>
                <div className="mx-2 col-start-1 col-end-3 mt-3 sm:mt-0">
                  <a href="portfolio">
                    <button className="w-full relative inline-block px-8 py-2 text-sm font-medium dark:text-green-500 text-white transition duration-300 ease-in-out border-2 dark:border-green-50 border-green-500 hover:border-green-500 rounded-md outline-none focus:outline-none dark:bg-green-50 bg-green-500 dark:hover:bg-green-500 hover:bg-green-50 dark:hover:text-green-50 hover:text-green-500">
                      See my Portfolio
                      <span className="absolute top-0 right-0 block w-full h-full border-2 dark:border-gray-900 rounded-md pointer-events-none"></span>
                    </button>
                  </a>
                </div>
                <div>
                </div>
              </div>
              <div className='mx-2 mt-10 sm:flex sm:justify-center md:mt-8'>
                <div className='text-center text-base'>
                  <GitHubCalendar username="ekopras18" loading={isToggled} />
                </div>
              </div>
              <div className='mt-8'>
                <BuildWith />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
