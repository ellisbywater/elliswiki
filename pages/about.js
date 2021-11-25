import Image from "next/image";
import { sanityClient, imageUrl, PortableText } from "@/lib/sanity";
import autoprefixer from "autoprefixer";

const aboutQuery = `*[_type == "author"][0]{ name, bio, image }`;

export default function About({ author }) {
  return (
    <div className="2xl:container 2xl:mx-auto lg:pt-16 lg:pb-2 md:pb-2 md:px-6 pt-9 px-4">
      <div>
        <div className="w-full">
          <img
            src={imageUrl(author.image, {
              w: 300,
              h: 300,
              fit: "crop",
            }).url()}
            alt={author.name}
            className="shadow-xl border-4 border-black rounded-full h-64 mx-auto"
          />
        </div>
        <div className="w-full p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold p-3 mb-2">{author.name}</h3>
            <p className="text-lg">
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
