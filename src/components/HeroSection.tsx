"use client";
import * as React from 'react';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section className="relative h-[850px]">
      <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/hero.svg')`, filter: 'blur(9px)' }}></div>
      <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hello, I&apos;m</span>
              <span className="block text-green-500 xl:inline">
                <Typewriter
                  options={{
                    strings: ['Eko Prasetio, B.Eng., S.Kom.','as Jeruk Pras 🍊','a Full Stack Developer'],
                    autoStart: true,
                    deleteSpeed: 30,
                    loop: true,
                    cursor: '|',
                  }}
                />
              </span>
            </h1>
            <p className="mt-2 max-w-md mx-auto text-sm text-gray-500 md:text-base  md:mt-5 md:max-w-3xl">
            I have 2.9 years of experience in developing end-to-end applications and I am confident that I can contribute fully to the team and achieve desired business goals.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>

  )
}
