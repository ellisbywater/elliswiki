import React from "react";
import Link from "next/link";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { imageUrl } from "@/lib/sanity";

export default function ProjectSection({ projects }) {
  return (
    <>
      <div
        className="py-8 lg:px-12 px-4 2xl:mx-auto 2xl:container border-t-4 border-black"
        style={{ height: 900 }}>
        {projects.map((project) => (
          <div className="md:flex justify-between w-full">
            <div className="xl:w-4/6 md:w-1/2 w-full">
              <h1
                role="heading"
                className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-black">
                {project.title}
              </h1>
              <div className="my-8 flex ">
                {project.stack.map((item) => (
                  <div className="rounded-full shadow bg-black text-base text-white py-2 px-3 mx-1">
                    {item}
                  </div>
                ))}
              </div>
              <div className="my-5 p-4">
                {project.link && (
                  <Link href={project.link}>
                    <div className="focus:outline-none text-2xl leading-6 text-black cursor-pointer  hover:text-gray-800">
                      <FiGlobe />
                    </div>
                  </Link>
                )}{" "}
                {project.github && (
                  <Link href={project.github}>
                    <div className="focus:outline-none text-2xl text-black cursor-pointer hover:text-gray-800">
                      <FiGithub />
                    </div>
                  </Link>
                )}
              </div>
              <p
                role="contentinfo"
                className="focus:outline-none text-base leading-6 mt-8 text-gray-800 2xl:pr-24 xl:pr-0 pr-12">
                {project.description}
              </p>
            </div>
            <div className="xl:w-1/2 md:w-1/2 w-full  my-auto">
              <div className="w-full">
                <img
                  src={imageUrl(project.image).url()}
                  alt="Purple flowers on a book"
                  className="md:w-full sm:w-1/2 w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
