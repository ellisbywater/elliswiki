import Image from "next/image";
import Link from "next/link";
import { sanityClient, imageUrl, PortableText } from "@/lib/sanity";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const aboutQuery = `*[_type == "author"][0]{ name, bio, image, github, linkedin }`;

export default function About({ author }) {
  return (
    <div className="2xl:mx-auto lg:pt-16 lg:pb-2 md:pb-2 pt-9">
      <div>
        <div className="w-full">
          <img
            src={imageUrl(author.image, {
              w: 300,
              h: 300,
              fit: "crop",
            }).url()}
            alt={author.name}
            className="shadow-xl rounded-full h-64 mx-auto"
          />
        </div>
        <div className="w-full p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold p-3 mb-2">{author.name}</h3>
            <div className="mx-auto my-6 flex justify-center">
              {author.linkedin && (
                <div className="text-2xl text-black hover:text-gray-900 mx-4 cursor-pointer">
                  <Link href={author.linkedin}>
                    <FiLinkedin />
                  </Link>
                </div>
              )}
              {author.github && (
                <div className="text-2xl text-black hover:text-gray-900 mx-4 cursor-pointer">
                  <Link href={author.github}>
                    <FiGithub />
                  </Link>
                </div>
              )}
            </div>
            <p className="text-lg mx-auto px-16 lg:w-3/4">
              <PortableText blocks={author.bio} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const author = await sanityClient.fetch(aboutQuery);
  return {
    props: {
      author,
    },
  };
}
