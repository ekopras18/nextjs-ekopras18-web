// "use client";
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
                  <span className="text-sm font-medium"> Availability </span>

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

                <div
                  className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
                >
                  <div className="w-96 rounded border border-gray-200 bg-green-50">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700"> 0 Selected </span>

                      <button
                        type="button"
                        className="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label
                          htmlFor="FilterInStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterInStock"
                            className="h-5 w-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            In Stock (5+)
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          htmlFor="FilterPreOrder"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterPreOrder"
                            className="h-5 w-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Pre Order (3+)
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          htmlFor="FilterOutOfStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            className="h-5 w-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Out of Stock (10+)
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

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <li key={i}>
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
                  <picture>
                    <img
                      alt="Name"
                      src="https://optimasolution.co.id/wp-content/uploads/sites/47/2016/02/erp.PNG"
                      className="aspect-square h-56 w-full object-cover"
                    />
                  </picture>
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
                      className="block bg-green-400/95 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-green-500/95"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}