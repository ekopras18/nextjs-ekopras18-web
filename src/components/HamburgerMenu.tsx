"use client";
import Link from 'next/link';
import { useState } from 'react'

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center justify-between md:justify-end">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <nav
        className={`${isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full backdrop-blur-sm backdrop-saturate-200 bg-white/80 dark:bg-black/70`} 
        
      >
        <div className="px-2 pt-2 pb-3 md:flex md:p-0 border-b border-gray-600" >
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 md:text-gray-300 md:hover:text-white md:hover:bg-gray-700 md:mx-2">
            Home
          </Link>
          <Link href="/portofolio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 md:text-gray-300 md:hover:text-white md:hover:bg-gray-700 md:mx-2">
            Portofolio
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 md:text-gray-300 md:hover:text-white md:hover:bg-gray-700 md:mx-2">
            About
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 md:text-gray-300 md:hover:text-white md:hover:bg-gray-700 md:mx-2">
            Contact
          </Link>
          <Link href="/repository" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 md:text-gray-300 md:hover:text-white md:hover:bg-gray-700 md:mx-2">
            Repository
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default HamburgerMenu
