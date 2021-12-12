import BlogCard from "@/components/BlogCard";
import React from "react";
import groq from "groq";
import { sanityClient, imageUrl } from "lib/sanity";

const blogQuery = groq`*[_type == "post"]{_id, title, publishedAt, slug, summary, mainImage} | order(publishedAt desc)`;

export default function Blog({ posts }) {
  return (
    <div className="py-24 flex-col items-center justify-center">
      <h1
        role="heading"
        className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-black mb-20">
        MY LATEST
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 p-10 m-6">
        {posts?.length > 0 && posts.map((post) => <BlogCard post={post} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(blogQuery);
  return {
    props: {
      posts: posts,
    },
    revalidate: 25,
  };
}
