"use client";
import clsx from 'clsx';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section className="relative h-[700px] md:h-[880px]">
      <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/hero.svg')`, filter: 'blur(9px)' }}></div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-12 md:pt-40 md:pb-20">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline" data-fade='1'>Hello, I&apos;m</span>
                <span className="block text-green-500 xl:inline" data-fade='2'>
                  <Typewriter
                    options={{
                      strings: ['Eko Prasetio, B.Eng., S.Kom.', 'as Jeruk Pras 🍊', 'a Full Stack Developer'],
                      autoStart: true,
                      deleteSpeed: 30,
                      loop: true,
                      cursor: '|',
                    }}
                  />
                </span>
              </h1>
              <p className="mt-2 max-w-md mx-auto text-sm text-gray-500 md:text-base  md:mt-5 md:max-w-3xl" data-fade='3'>
                I have 2.9 years of experience in developing end-to-end applications and I am confident that I can contribute fully to the team and achieve desired business goals.
              </p>
              {/*  */}
              <div className="mt-5  mx-auto sm:flex sm:justify-center md:mt-8">
            
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-2 md:text-lg md:px-8">
                  Get in touch
                </a>
                </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#projects" className="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-green-500 bg-white hover:bg-gray-50 md:py-2 md:text-lg md:px-8">
                  See my work
                </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-2 md:text-lg md:px-8">
                  Get in touch
                </a>
                </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#projects" className="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-green-500 bg-white hover:bg-gray-50 md:py-2 md:text-lg md:px-8">
                  See my work
                </a>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
