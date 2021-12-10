import React, { useState } from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="p-12 cle lg:p-32 pt-6 container mx-auto text-center">
        <h1 className="text-4xl font-bold p-20 bg-black text-white shadow-xl rounded">
          <span className="text-blue-200">Web3</span> -&-{" "}
          <span className="text-green-200">Fullstack</span> Developer
        </h1>
      </div>
      <div className="p-32 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-8">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="h-64">
          <Link href="/blog">
            <div className="bg-white hover:bg-black cursor-pointer dark:bg-gray-800 rounded hover:shadow-lg  hover:text-white border-8 border-black shadow px-8 py-6 flex items-center h-full">
              <h3 className="w-full hover:text-white text-center dark:text-white font-bold text-4xl">
                > Blog
              </h3>
            </div>
          </Link>
        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="h-64">
          <Link href="/projects">
            <div className="bg-white hover:bg-black cursor-pointer dark:bg-gray-800 rounded hover:shadow-lg  hover:text-white border-8 border-black shadow px-8 py-6 flex items-center h-full">
              <h3 className="w-full hover:text-white text-center dark:text-white font-bold text-4xl">
                > Projects
              </h3>
            </div>
          </Link>
        </div>

        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}

        <div className="h-64">
          <Link href="/contact">
            <div className="bg-white text-center hover:bg-black cursor-pointer dark:bg-gray-800 rounded border-8 border-black hover:shadow-lg hover:text-white shadow px-8 py-6 flex items-center h-full">
              <h3 className="w-full hover:text-white text-center dark:text-white font-bold text-4xl">
                > Hire Me
              </h3>
            </div>
          </Link>
        </div>

        <div className="h-64">
          <Link href="/about">
            <div className="bg-white hover:bg-black cursor-pointer dark:bg-gray-800 rounded hover:shadow-lg  hover:text-white border-8 border-black shadow px-8 py-6 flex items-center h-full">
              <h3 className="w-full hover:text-white text-center dark:text-white font-bold text-4xl">
                > About Me
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
