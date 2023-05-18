"use client"
import * as React from 'react';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import ThemeButton from '../buttons/ThemeButton';

export default function Header() {
  return (
    <header
          className="h-[64px] sticky top-0 z-50 flex flex-col w-full antialiased backdrop-blur-sm backdrop-saturate-200 bg-white/80 dark:bg-black/50">
          <nav className="mb-[-1px] h-full flex items-center w-full max-w-screen-xl px-4 md:px-24 mx-auto">
            <div className="flex gap-1 items-center">
              <Link href="/" title="">
                <div className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-green-500">
                  <svg className='fill-current' width="24" height="24" viewBox="0 0 24 24" fill="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13C0 6.37258 5.37258 1 12 1C18.6274 1 24 6.37258 24 13V21.657C24 22.0712 23.6642 22.407 23.25 22.407C22.8358 22.407 22.5 22.0712 22.5 21.657V13C22.5 7.20101 17.799 2.5 12 2.5C6.20101 2.5 1.5 7.20101 1.5 13V21.657C1.5 22.0712 1.16421 22.407 0.75 22.407C0.335786 22.407 0 22.0712 0 21.657V13Z" fill="fill-current" />
                    <path d="M8 19.75C8 19.3358 8.33579 19 8.75 19H15.25C15.6642 19 16 19.3358 16 19.75C16 20.1642 15.6642 20.5 15.25 20.5H8.75C8.33579 20.5 8 20.1642 8 19.75Z" fill="fill-current" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 9.5C4.2835 9.5 3.5 10.2835 3.5 11.25V14.75C3.5 15.7165 4.2835 16.5 5.25 16.5H18.75C19.7165 16.5 20.5 15.7165 20.5 14.75V11.25C20.5 10.2835 19.7165 9.5 18.75 9.5H5.25ZM5.46967 10.9697C5.76256 10.6768 6.23744 10.6768 6.53033 10.9697L9 13.4393L11.4697 10.9697C11.7626 10.6768 12.2374 10.6768 12.5303 10.9697L15 13.4393L17.4697 10.9697C17.7626 10.6768 18.2374 10.6768 18.5303 10.9697C18.8232 11.2626 18.8232 11.7374 18.5303 12.0303L15.5303 15.0303C15.2374 15.3232 14.7626 15.3232 14.4697 15.0303L12 12.5607L9.53033 15.0303C9.23744 15.3232 8.76256 15.3232 8.46967 15.0303L5.46967 12.0303C5.17678 11.7374 5.17678 11.2626 5.46967 10.9697Z" fill="fill-current" />
                  </svg>
                </div>
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
                <svg aria-hidden="true" className="absolute top-[0.5px] right-[-10px] fill-current" height="7" viewBox="0 0 6 6" width="7">
                  <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                    fill="currentColor"></path>
                </svg>
              </Link>
            </div>
            
            <div className="flex justify-end items-center gap-2 w-full ">
            <div className="justify-end md:block">
              <ThemeButton />
            </div>
              <span className="text-3xl cursor-pointer  mx-0 md:hidden block">
                <HamburgerMenu />
              </span>
            </div>
          </nav>
          <div className='h-[0.5px] bg-gradient-to-r from-gray-900 to-green-950' />
        </header>
  );
}