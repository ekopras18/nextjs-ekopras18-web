// "use client";
import Portfolio from '@/components/portfolio/Portfolio';
import * as React from 'react';

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6">
        <header>
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-50">
            Work Experience
          </h2>

          <p className="mt-4 text-sm max-w-md text-gray-500">
            My work experience and outcomes from self-directed learning
          </p>
        </header>

        <div className="mt-8 sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:gap-4">
            <div className="relative">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  className="flex cursor-pointer items-center gap-2 border-b border-gray-200 pb-1 text-green-600 dark:text-green-50 transition hover:border-gray-200"
                >
                  <span className="text-sm font-medium"> Sorting By </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                  <div className="w-96 rounded border border-gray-200 bg-green-50 dark:bg-green-900 text-gray-600 dark:text-gray-50">
                    {/* <header className="flex items-center justify-between p-4">
                      <span className="text-sm"> 0 Selected </span>

                      <button type="button" className="text-sm underline underline-offset-4">
                        Reset
                      </button>
                    </header> */}
                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                          <input type="checkbox" id="FilterInStock" className="h-5 w-5 rounded border-gray-300" />
                          <span className="text-sm font-medium">
                            Government
                          </span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                          <input type="checkbox" id="FilterPreOrder" className="h-5 w-5 rounded border-gray-300" />
                          <span className="text-sm font-medium">
                            Private Project
                          </span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                          <input type="checkbox" id="FilterOutOfStock" className="h-5 w-5 rounded border-gray-300" />
                          <span className="text-sm font-medium">
                            Self-directed learning
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        <Portfolio />

      </div>
    </section>
  )
}