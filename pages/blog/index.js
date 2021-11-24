import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import React from "react";

const Blog1 = () => {
  return (
    <Layout>
      <div className="py-24 flex-col items-center justify-center">
        <h1
          role="heading"
          className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800">
          Read My Latest
        </h1>
        <p
          role="contentinfo"
          className="text-base leading-normal text-center text-gray-600 mt-4">
          Whether article spirits new her covered hastily sitting her. Money
          witty books nor son
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 p-10 m-6">
          <BlogCard />
        </div>
      </div>
    </Layout>
  );
};

export default Blog1;
