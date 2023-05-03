import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 66) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  return (
    <div>
      <header className={changeNavbarColor ? "navbar colorChange" : "navbar"}>
        <div className="container mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center border-r border-gray-500 pr-8 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-semibold">OpenSea</span>
          </a>
          <nav className=" flex items-center justify-between mx-5 pr-0">
            <div className=" flex items-center">
              <a href="#" className="mr-5 font-semibold hover:text-gray-900 ">
                Drops
              </a>
              <a href="#" className="mr-5 font-semibold hover:text-gray-900">
                Stats
              </a>
            </div>
            <div className="flex items-center w-[800px] bg-gray-300 rounded-lg bg-opacity-20 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-full bg-clip-padding backdrop-filter backdrop-blur-sm mr-5 shadow-md">
              <div className="bg-transparent text-gray-600">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                
                className="py-1 px-2 w-full hover:outline-none focus:outline-none bg-transparent text-gray-600"
                placeholder="Search for NFTs, collections, and accounts !!"
              />
            </div>
          </nav>
          <div className="flex items-center bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 mr-2">
            <button className="px-4 py-3 inline-flex items-center">
              <i class="fa-solid fa-wallet pr-3"></i>
              <span className="text">Connect Wallet</span>
            </button>
            <button className=" pl-3 pr-4 border-l-2 py-3">
              <i class="fa-solid fa-circle-user"></i>
            </button>
          </div>
          <button className="inline-flex items-center bg-gray-300 p-4 bg-clip-padding backdrop-filter bg-opacity-20 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
