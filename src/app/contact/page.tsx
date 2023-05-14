import * as React from 'react';


export default function ContactPage() {
  return (
    <main>
      <div className="py-10 relative md:flex md:py-10 gap-x-6 mx-auto md:flex-row max-w-screen-xl px-4">
        <div
          className="hidden md:flex w-[284px] md:shrink-0 sticky top-[121px] h-[calc(100vh-121px)] md:flex-col md:justify-between">
          <button
            className="transition flex rounded-md items-center justify-center text-sm w-8 h-8 text-left text-gray-800 cursor-pointer dark:border-gray-300 hover:border-gray-300 dark:hover:border-gray-400 md:hidden"
            type="button"><svg data-testid="geist-icon" fill="none" height="22" shapeRendering="geometricPrecision"
              stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
              width="22" >
              <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
              <path d="M16 16l4.5 4.5" />
            </svg></button>
          <div className="overflow-hidden relative">
            <nav className="docs-scrollbar styled-scrollbar overflow-y-scroll flex flex-col pr-2 pb-4 dark:text-white"
            >
              <div aria-hidden="true"
                className="absolute top-0 left-0 h-3 bg-gradient-to-b from-gray-0 w-full z-10 pointer-events-none"></div>
              <div aria-hidden="true"
                className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none"></div>
              <ul className="last-of-type:pb-3">
                <li className="my-1.5 ml-[3px]" data-active="false">
                  <h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700">Getting Started</h3>
                  <div data-is-collapsed="false"
                  >
                    <div className="relative">
                      <ul className="last-of-type:mb-0 mb-8">
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/getting-started/installation">Installation</a></li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/getting-started/react-essentials">React Essentials</a></li>
                      </ul>
                      <div aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="last-of-type:pb-3">
                <li className="my-1.5 ml-[3px]" data-active="false">
                  <h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700">Building Your Application</h3>
                  <div data-is-collapsed="false"
                  >
                    <div className="relative">
                      <ul className="last-of-type:mb-0 mb-8">
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/building-your-application/routing">Routing<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/defining-routes">Defining Routes</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/pages-and-layouts">Pages and
                                  Layouts</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/linking-and-navigating">Linking and
                                  Navigating</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/route-groups">Routes Groups</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/dynamic-routes">Dynamic Routes</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/loading-ui-and-streaming">Loading UI
                                  and Streaming</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/error-handling">Error Handling</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/parallel-routes">Parallel Routes</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/intercepting-routes">Intercepting
                                  Routes</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/router-handlers">Route Handlers</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/middleware">Middleware</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/routing/internationalization">Internationalization</a>
                                </li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/building-your-application/rendering">Rendering<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/rendering/static-and-dynamic-rendering">Static
                                  and Dynamic</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes">Edge and
                                  Node.js Runtimes</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/building-your-application/data-fetching">Data Fetching<svg
                            data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            viewBox="0 0 24 24" width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/data-fetching/fetching">Fetching</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/data-fetching/caching">Caching</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/data-fetching/revalidating">Revalidating</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/data-fetching/server-actions">Server
                                  Actions</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/building-your-application/styling">Styling<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/styling/css-modules">CSS Modules</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/styling/tailwind-css">Tailwind CSS</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/styling/css-in-js">CSS-in-JS</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/styling/sass">Sass</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/building-your-application/optimizing">Optimizing<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/optimizing/images">Images</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/optimizing/fonts">Fonts</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/optimizing/scripts">Scripts</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/optimizing/metadata">Metadata</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/optimizing/static-assets">Static Assets</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/optimizing/lazy-loading">Lazy Loading</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/optimizing/analytics">Analytics</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/optimizing/open-telemetry">OpenTelemetry</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/optimizing/instrumentation">Instrumentation</a>
                                </li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/building-your-application/configuring">Configuring<svg
                            data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            viewBox="0 0 24 24" width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/configuring/typescript">TypeScript</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/configuring/eslint">ESLint</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/configuring/environment-variables">Environment
                                  Variables</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases">Absolute
                                  Imports and Module Path Aliases</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/configuring/mdx">MDX</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/configuring/src-directory">src Directory</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/configuring/draft-mode">Draft Mode</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/building-your-application/deploying">Deploying<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/deploying/static-exports">Static Exports</a>
                                </li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/building-your-application/upgrading">Upgrading<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/upgrading/codemods">Codemods</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/building-your-application/upgrading/app-router-migration">App Router
                                  Migration</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="last-of-type:pb-3">
                <li className="my-1.5 ml-[3px]" data-active="false">
                  <h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700">API Reference</h3>
                  <div data-is-collapsed="false"
                  >
                    <div className="relative">
                      <ul className="last-of-type:mb-0 mb-8">
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/api-reference/components">Components<svg data-testid="geist-icon" fill="none"
                            height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/components/font">Font</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/components/image">&lt;Image&gt;</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/components/link">&lt;Link&gt;</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/components/script">&lt;Script&gt;</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/api-reference/file-conventions">File Conventions<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/default">default.js</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/error">error.js</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/layout">layout.js</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/loading">loading.js</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/not-found">not-found.js</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/page">page.js</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/route">route.js</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/route-segment-config">Route Segment
                                  Config</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/template">template.js</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/file-conventions/metadata">Metadata<svg
                                    data-testid="geist-icon" fill="none" height="16"
                                    shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16"
                                  >
                                    <path d="M9 18l6-6-6-6" />
                                  </svg></a>
                                  <div data-is-collapsed="true"
                                  >
                                    <div className="relative">
                                      <ul
                                        className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-6">
                                        <li className="my-1.5" data-active="false"><a
                                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                          href="/docs/app/api-reference/file-conventions/metadata/app-icons">favicon.ico,
                                          apple-icon.jpg, and icon.jpg</a></li>
                                        <li className="my-1.5" data-active="false"><a
                                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                          href="/docs/app/api-reference/file-conventions/metadata/opengraph-image">opengraph-image.js
                                          and twitter-image.js</a></li>
                                        <li className="my-1.5" data-active="false"><a
                                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                          href="/docs/app/api-reference/file-conventions/metadata/robots">robots.txt</a>
                                        </li>
                                        <li className="my-1.5" data-active="false"><a
                                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                          href="/docs/app/api-reference/file-conventions/metadata/sitemap">sitemap.xml</a>
                                        </li>
                                      </ul>
                                      <div aria-hidden="true"
                                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/api-reference/functions">Functions<svg data-testid="geist-icon" fill="none"
                            height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/cookies">cookies</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/draft-mode">draftMode</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/fetch">fetch</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/generate-metadata">generateMetadata</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/generate-static-params">generateStaticParams</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/headers">headers</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/image-response">imageResponse</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/next-request">NextRequest</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/next-response">NextResponse</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/not-found">notFound</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/redirect">redirect</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/revalidatePath">revalidatePath</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/revalidateTag">revalidateTag</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/use-params">useParams</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/use-pathname">usePathname</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/use-report-web-vitals">useReportWebVitals</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/use-router">useRouter</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/use-search-params">useSearchParams</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/use-selected-layout-segment">useSelectedLayoutSegment</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/functions/use-selected-layout-segments">useSelectedLayoutSegments</a>
                                </li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/api-reference/next-config-js">next.config.js Options<svg
                            data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            viewBox="0 0 24 24" width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/appDir">appDir</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/assetPrefix">assetPrefix</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/basePath">basePath</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/compress">compress</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/devIndicators">devIndicators</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/distDir">distDir</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/env">env</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/eslint">eslint</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/exportPathMap">exportPathMap</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/generateBuildId">generateBuildId</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/generateEtags">generateEtags</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/headers">headers</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/httpAgentOptions">httpAgentOptions</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/images">images</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/mdxRs">mdxRs</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/onDemandEntries">onDemandEntries</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/output">output</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/pageExtensions">pageExtensions</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/poweredByHeader">poweredByHeader</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/productionBrowserSourceMaps">productionBrowserSourceMaps</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/reactStrictMode">reactStrictMode</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/redirects">redirects</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/rewrites">rewrites</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/runtime-configuration">Runtime Config</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/serverComponentsExternalPackages">serverComponentsExternalPackages</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/trailingSlash">trailingSlash</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/transpilePackages">transpilePackages</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/turbo">turbo</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/typedRoutes">typedRoutes</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/typescript">typescript</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/urlImports">urlImports</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/webpack">webpack</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/app/api-reference/next-config-js/webVitalsAttribution">webVitalsAttribution</a>
                                </li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/api-reference/create-next-app">create-next-app</a></li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/api-reference/edge">Edge Runtime</a></li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/app/api-reference/next-cli">Next.js CLI</a></li>
                      </ul>
                      <div aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="last-of-type:pb-3 hidden">
                <li className="my-1.5 ml-[3px]" data-active="false">
                  <h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700">Building Your Application</h3>
                  <div data-is-collapsed="false"
                  >
                    <div className="relative">
                      <ul className="last-of-type:mb-0 mb-8">
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/building-your-application/routing">Routing<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/pages-and-layouts">Pages and
                                  Layouts</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/dynamic-routes">Dynamic Routes</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/linking-and-navigating">Linking
                                  and Navigating</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/custom-app">Custom App</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/custom-document">Custom
                                  Document</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/custom-error">Custom Errors</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/api-routes">API Routes</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/internationalization">Internationalization</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/authenticating">Authenticating</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/routing/middleware">Middleware</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/building-your-application/rendering">Rendering<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/rendering/server-side-rendering">Server-side
                                  Rendering (SSR)</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/rendering/static-site-generation">Static
                                  Site Generation (SSG)</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/rendering/incremental-static-regeneration">Incremental
                                  Static Regeneration (ISR)</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/rendering/automatic-static-optimization">Automatic
                                  Static Optimization</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/rendering/client-side-rendering">Client-side
                                  Rendering (CSR)</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/rendering/edge-and-nodejs-runtimes">Edge
                                  and Node.js Runtimes</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/building-your-application/data-fetching">Data Fetching<svg
                            data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            viewBox="0 0 24 24" width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/data-fetching/get-static-props">getStaticProps</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/data-fetching/get-static-paths">getStaticPaths</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/data-fetching/get-server-side-props">getServerSideProps</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/data-fetching/incremental-static-regeneration">Incremental
                                  Static Regeneration</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/data-fetching/client-side">Client-side
                                  Fetching</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/data-fetching/building-forms">Building
                                  Forms</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/building-your-application/styling">Styling<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/styling/css-modules">CSS Modules</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/styling/tailwind-css">Tailwind CSS</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/styling/css-in-js">CSS-in-JS</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/styling/sass">Sass</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/building-your-application/optimizing">Optimizing<svg
                            data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            viewBox="0 0 24 24" width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/optimizing/images">Images</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/optimizing/fonts">Fonts</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/optimizing/scripts">Scripts</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/optimizing/static-assets">Static
                                  Assets</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/optimizing/lazy-loading">Lazy Loading</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/optimizing/analytics">Analytics</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/optimizing/open-telemetry">OpenTelemetry</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/optimizing/instrumentation">Instrumentation</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/optimizing/testing">Testing</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/building-your-application/configuring">Configuring<svg
                            data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            viewBox="0 0 24 24" width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/typescript">TypeScript</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/eslint">ESLint</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/environment-variables">Environment
                                  Variables</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/absolute-imports-and-module-aliases">Absolute
                                  Imports and Module Path Aliases</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/src-directory">src
                                  Directory</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/mdx">MDX</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/amp">AMP</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/babel">Babel</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/post-css">PostCSS</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/custom-server">Custom
                                  Server</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/draft-mode">Draft Mode</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/error-handling">Error
                                  Handling</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/debugging">Debugging</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/configuring/preview-mode">Preview Mode
                                  (Legacy)</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/building-your-application/deploying">Deploying<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/deploying/production-checklist">Going to
                                  Production</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/deploying/static-exports">Static
                                  Exports</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/deploying/multi-zones">Multi Zones</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/deploying/ci-build-caching">Continuous
                                  Integration (CI) Build Caching</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/building-your-application/upgrading">Upgrading<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/upgrading/codemods">Codemods</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/upgrading/app-router-migration">From Pages
                                  to App</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/upgrading/version-13">Version 13</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/upgrading/version-12">Version 12</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/upgrading/version-11">Version 11</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/upgrading/version-10">Version 10</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/building-your-application/upgrading/version-9">Version 9</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="last-of-type:pb-3 hidden">
                <li className="my-1.5 ml-[3px]" data-active="false">
                  <h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700">API Reference</h3>
                  <div data-is-collapsed="false"
                  >
                    <div className="relative">
                      <ul className="last-of-type:mb-0 mb-8">
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/api-reference/components">Components<svg data-testid="geist-icon"
                            fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/components/font">Font</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/components/head">&lt;Head&gt;</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/components/image">&lt;Image&gt;</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/components/image-legacy">&lt;Image&gt; (Legacy)</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/components/link">&lt;Link&gt;</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/components/script">&lt;Script&gt;</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/api-reference/functions">Functions<svg data-testid="geist-icon" fill="none"
                            height="16" shapeRendering="geometricPrecision" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                            width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/functions/get-initial-props">getInitialProps</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/functions/get-server-side-props">getServerSideProps</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/functions/get-static-paths">getStaticPaths</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/functions/get-static-props">getStaticProps</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/functions/next-server">NextRequest and
                                  NextResponse</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/functions/use-amp">useAmp</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/functions/use-report-web-vitals">useReportWebVitals</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/functions/use-router">useRouter</a></li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/api-reference/next-config-js">next.config.js Options<svg
                            data-testid="geist-icon" fill="none" height="16" shapeRendering="geometricPrecision"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            viewBox="0 0 24 24" width="16" >
                            <path d="M9 18l6-6-6-6" />
                          </svg></a>
                          <div data-is-collapsed="true"
                          >
                            <div className="relative">
                              <ul className="last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4">
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/assetPrefix">assetPrefix</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/basePath">basePath</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/compress">compress</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/devIndicators">devIndicators</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/distDir">distDir</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/env">env</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/eslint">eslint</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/exportPathMap">exportPathMap</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/generateBuildId">generateBuildId</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/generateEtags">generateEtags</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/headers">headers</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/httpAgentOptions">httpAgentOptions</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/images">images</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/onDemandEntries">onDemandEntries</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/output">output</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/pageExtensions">pageExtensions</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/poweredByHeader">poweredByHeader</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/productionBrowserSourceMaps">productionBrowserSourceMaps</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/reactStrictMode">reactStrictMode</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/redirects">redirects</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/rewrites">rewrites</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/runtime-configuration">Runtime
                                  Config</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/trailingSlash">trailingSlash</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/transpilePackages">transpilePackages</a>
                                </li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/turbo">turbo</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/typescript">typescript</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/urlImports">urlImports</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/webpack">webpack</a></li>
                                <li className="my-1.5" data-active="false"><a
                                  className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                                  href="/docs/pages/api-reference/next-config-js/webVitalsAttribution">webVitalsAttribution</a>
                                </li>
                              </ul>
                              <div aria-hidden="true"
                                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/api-reference/create-next-app">create-next-app</a></li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/api-reference/next-cli">Next.js CLI</a></li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/pages/api-reference/edge">Edge Runtime</a></li>
                      </ul>
                      <div aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="last-of-type:pb-3">
                <li className="my-1.5 ml-[3px]" data-active="false">
                  <h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700">Architecture</h3>
                  <div data-is-collapsed="false"
                  >
                    <div className="relative">
                      <ul className="last-of-type:mb-0 mb-8">
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/architecture/accessibility">Accessibility</a></li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/architecture/fast-refresh">Fast Refresh</a></li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/architecture/nextjs-compiler">Next.js Compiler</a></li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/architecture/supported-browsers">Supported Browsers</a></li>
                        <li className="my-1.5" data-active="false"><a
                          className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-800"
                          href="/docs/architecture/turbopack">Turbopack</a></li>
                      </ul>
                      <div aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-gray-0 w-full z-10 pointer-events-none">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="reach-skip-nav"></div>
        <nav className="w-56 shrink-0 order-last hidden lg:block">
          <div className="sticky top-[126px] h-[calc(100vh-121px)]">
            <div className="mb-1 mt-[7px] text-sm font-medium text-gray-700">On this page</div>
            <div className="relative" data-docs-table-of-contents="">
              <div aria-hidden="true" className="absolute top-0 left-0 h-3 bg-gradient-to-b from-gray-0 w-full z-1"></div>
              <div aria-hidden="true" className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-gray-0 w-full z-10"></div>
              <ul className="space-y-2.5 py-2 text-sm overflow-y-auto max-h-[60vh] styled-scrollbar">
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#what-is-nextjs">What is
                  Next.js?</a></li>
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#main-features">Main
                  Features</a></li>
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#how-to-use-these-docs">How to
                  Use These Docs</a></li>
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]"
                  href="#pre-requisite-knowledge">Pre-Requisite Knowledge</a></li>
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]"
                  href="#accessibility">Accessibility</a></li>
                <li><a className="block text-gray-500 hover:text-gray-600 leading-[1.6]" href="#join-our-community">Join our
                  Community</a></li>
              </ul>
            </div>
            <div className="mt-3 space-y-2 border-t border-gray-200 pt-5 text-sm text-gray-400 dark:border-gray-300"></div>
            <button
              className="flex items-center gap-x-2 text-sm text-gray-500 transition-opacity hover:text-gray-800 opacity-0"
              type="button"><svg data-testid="geist-icon" fill="none" height="14" shapeRendering="geometricPrecision"
                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                viewBox="0 0 24 24" width="14" >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12l-4-4-4 4" />
                <path d="M12 16V8" />
              </svg> Scroll to top</button>
          </div>
        </nav>
        <article className="w-full min-w-0 max-w-6xl mt-4" data-docs-container="">
          <div className="prose prose-vercel max-w-none" data-docs="true">
            <h1>Introduction</h1>
            <p>Welcome to the Next.js documentation!</p>
            <h2 id="what-is-nextjs" data-docs-heading=""><a href="#what-is-nextjs">What is Next.js?<span><svg
              viewBox="0 0 16 16" height="0.7em" width="0.7em">
              <g strokeWidth="1.2" fill="none" stroke="currentColor">
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                  d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698">
                </path>
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                  d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698">
                </path>
              </g>
            </svg></span></a></h2>
            <p>Next.js is a framework for building web applications.</p>
            <p>With Next.js, you can build user interfaces using React components. Then, Next.js provides additional
              structure, features, and optimizations for your application.</p>
            <p>Under the hood, Next.js also abstracts and automatically configures tooling for you, like bundling,
              compiling, and more. This allows you to focus on building your application instead of spending time setting
              up tooling.</p>
            <p>Whether you&#x27;re an individual developer or part of a larger team, Next.js can help you build
              interactive, dynamic, and fast web applications.</p>
            <h2 id="main-features" data-docs-heading=""><a href="#main-features">Main Features<span><svg
              viewBox="0 0 16 16" height="0.7em" width="0.7em">
              <g strokeWidth="1.2" fill="none" stroke="currentColor">
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                  d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698">
                </path>
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                  d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698">
                </path>
              </g>
            </svg></span></a></h2>
            <p>If you have questions about anything related to Next.js, you&#x27;re always welcome to ask our community on
              <a href="https://github.com/vercel/next.js/discussions" rel="noopener noreferrer" target="_blank">GitHub
                Discussions<span className="inline-flex"><svg data-testid="geist-icon" fill="none" height="14"
                  shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg></span></a>, <a href="https://discord.com/invite/bUG2bvbtHy" rel="noopener noreferrer nofollow"
                  target="_blank">Discord<span className="inline-flex"><svg data-testid="geist-icon" fill="none" height="14"
                    shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg></span></a>, <a href="https://twitter.com/nextjs" rel="noopener noreferrer nofollow"
                    target="_blank">Twitter<span className="inline-flex"><svg data-testid="geist-icon" fill="none" height="14"
                      shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg></span></a>, and <a href="https://www.reddit.com/r/nextjs" rel="noopener noreferrer nofollow"
                      target="_blank">Reddit<span className="inline-flex"><svg data-testid="geist-icon" fill="none" height="14"
                        shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg></span></a>.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2"><a
            className="block rounded-md border border-gray-200 bg-gray-0 p-6 pt-5 shadow-md shadow-black/5 transition-shadow duration-300 hover:shadow-lg space-y-2"
            href="/docs/getting-started">
            <h3 className="text-lg font-medium leading-snug">Getting Started</h3>
            <div className="text-sm text-gray-500 line-clamp-3 font-normal">Learn how to create full-stack web applications
              with Next.js.</div>
          </a><a
            className="block rounded-md border border-gray-200 bg-gray-0 p-6 pt-5 shadow-md shadow-black/5 transition-shadow duration-300 hover:shadow-lg space-y-2"
            href="/docs/app">
              <h3 className="text-lg font-medium leading-snug">App Router</h3>
              <div className="text-sm text-gray-500 line-clamp-3 font-normal">Use the new App Router with Next.js&#x27; and
                React&#x27;s latest features, including Layouts, Server Components, Suspense, and more.</div>
            </a><a
              className="block rounded-md border border-gray-200 bg-gray-0 p-6 pt-5 shadow-md shadow-black/5 transition-shadow duration-300 hover:shadow-lg space-y-2"
              href="/docs/pages">
              <h3 className="text-lg font-medium leading-snug">Pages Router</h3>
              <div className="text-sm text-gray-500 line-clamp-3 font-normal">Before Next.js 13, the Pages Router was the main
                way to create routes in Next.js with an intuitive file-system router.</div>
            </a><a
              className="block rounded-md border border-gray-200 bg-gray-0 p-6 pt-5 shadow-md shadow-black/5 transition-shadow duration-300 hover:shadow-lg space-y-2"
              href="/docs/architecture">
              <h3 className="text-lg font-medium leading-snug">Architecture</h3>
              <div className="text-sm text-gray-500 line-clamp-3 font-normal">How Next.js Works</div>
            </a></div>
        </article>
      </div>
    </main>
  )
}