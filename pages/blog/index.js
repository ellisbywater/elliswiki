import BlogCard from "@/components/BlogCard";
import React from "react";

export default function Blog() {
  return (
    <div className="py-24 flex-col items-center justify-center">
      <h1
        role="heading"
        className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-black mb-20">
        MY LATEST
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 p-10 m-6">
        <BlogCard />
      </div>
    </div>
  );
}
