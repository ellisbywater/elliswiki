import { useState } from "react";
import {
  sanityClient,
  imageUrl,
  previewSubscription,
  PortableText,
} from "lib/sanity";
import BlogRender from "@/components/BlogRender";

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    categories,
    author->{name},
    mainImage,
    body,
}`;

export default function BlogPost({ data, preview }) {
  if (!data) return <div>Loading...</div>;
  const { data: post } = previewSubscription(postQuery, {
    params: { slug: data.post?.slug.current },
    initialData: data,
    enabled: preview,
  });
  return (
    <div className="p-10 md:p-20 w-full">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold">{post.title || "POST UNKNOWN"}</h1>
        <h3
          className="bg-black text-white p-2 mx-auto mt-5 rounded shadow"
          style={{ width: "300px" }}>
          by {post.author?.name}
        </h3>
      </div>
      <div className="md:p-6 w-full md:w-2/3 mx-auto">
        <PortableText blocks={post.body} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths =
    await sanityClient.fetch(`*[_type == "post" && defined(slug.current)]{
         "params": {
            "slug": slug.current
        }
    }`);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await sanityClient.fetch(postQuery, { slug });
  return { props: { data: { post }, preview: true } };
}
