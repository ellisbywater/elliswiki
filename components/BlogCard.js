import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div className="p-6 bg-white text-black border-4 hover:bg-black hover:text-white border-black rounded cursor-pointer shadow-lg hover:shadow-sm m-3">
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold">{post.title || "First Post"}</h1>
          <h3 className="text-sm italic">{post.publishedAt}</h3>
        </div>
        <div className="w-full">
          <div className="p-4 text-center">
            <p className="text-base">{post.summary || ""}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
