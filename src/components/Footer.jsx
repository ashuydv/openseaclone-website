import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-50 bg-blue-700 body-font mt-10">
        <div class="border-b border-gray-200">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-start">
            <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start w-1/2">
              <div class="relative sm:mr-4 mr-2">
                <label
                  for="footer-field"
                  class="leading-7 text-xl font-semibold text-gray-50"
                >
                  Placeholder
                </label>
                <p class="text-gray-50 text-base mt-1 mb-2 text-center sm:text-left">
                  Join our mailing list to stay in the loop with our newest
                  feature releases, NFT drops, and tips and tricks for
                  navigating OpenSea.
                </p>
                <input
                  type="mail"
                  placeholder="Your Email Address"
                  id="footer-field"
                  name="footer-field"
                  class=" w-[600px] bg-gray-100 rounded-lg border border-transparent focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-4 "
                />
              </div>
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 w-[200px] items-center justify-center text-center rounded-lg">
                Sign Up
              </button>
            </div>
            <span class="w-1/2 pl-16">
              <h4 class="leading-7 text-xl font-semibold text-gray-50 mb-2">
                Join the Community
              </h4>
              <div className="flex flex-wrap justify-start">
                <button className="max-h-[200px] max-w-[200px] bg-blue-100 shadow-xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 px-5 py-3 relative mr-3">
                  <a class="text-gray-50">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                </button>
                <button className="max-h-[200px] max-w-[200px] bg-blue-100 shadow-xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 px-5 py-3 relative mr-3">
                  <a class="ml-3 text-gray-50">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-5 h-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </button>
                <button className="max-h-[200px] max-w-[200px] bg-blue-100 shadow-xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 px-5 py-3 relative mr-3">
                  <a class="ml-3 text-gray-50">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-5 h-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </button>
                <button className="max-h-[200px] max-w-[200px] bg-blue-100 shadow-xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 px-5 py-3 relative mr-3">
                  <a class="ml-3 text-gray-50">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-5 h-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </button>
                <button className="max-h-[200px] max-w-[200px] bg-blue-100 shadow-xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 px-5 py-3 relative mr-3">
                  <a class="ml-3 text-gray-50">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-5 h-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </button>
              </div>
            </span>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-50 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-50 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-50 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-50 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-50 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-50 hover:text-white">First Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-50 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-blue-800 bg-opacity-75">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-50 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                class="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @knyttneve
              </a>
            </p>
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-50 text-sm">
              Enamel pin tousled raclette tacos irony
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
