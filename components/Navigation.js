import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/m.png";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white">
        <button
          className=" inline-flex p-3 rounded lg:hidden mx-2 text-black ml-auto hover:text-black outline-none"
          onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto justify-center`}>
          <div className="lg:justify-center lg:inline-flex lg:flex-row  w-full lg:items-center flex flex-col lg:h-auto cursor-pointer">
            <Link href="/blog">
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-lg  font-bold items-center hover:bg-black hover:text-white cursor-pointer mx-2">
                Blog
              </div>
            </Link>
            <Link href="/projects">
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-lg font-bold items-center hover:bg-black hover:text-white cursor-pointer mx-2">
                Projects
              </div>
            </Link>
            <Link href="/">
              <div className="hidden lg:show lg:inline-flex lg:w-auto w-full px-3 py-2 h-full w-full mx-8 cursor-pointer">
                <Image src={logo} />
              </div>
            </Link>
            <Link href="/contact">
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-lg font-bold items-center hover:bg-black hover:text-white cursor-pointer mx-2">
                Hire Me
              </div>
            </Link>
            <Link href="/about">
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-lg font-bold items-center hover:bg-black hover:text-white cursor-pointer mx-2">
                About Me
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
