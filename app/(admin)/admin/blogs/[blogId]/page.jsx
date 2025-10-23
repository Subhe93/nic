// app/blogs/[id]/page.js
'use client'
import { useEffect, useState } from "react";

const BlogDetail = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://api.nicgroup.co/api/blogs/${params.blogId}`
        );
        const data = await res.json();

        if (res.ok) {
          setBlog(data);
        } else {
          setError("Error fetching blog.");
        }
      } catch (err) {
        setError("Error: " + err.message);
      }
    };

    fetchBlog();
  }, [params.id]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {error && <p className="text-red-500 text-center">{error}</p>}

      {blog ? (
        <div>
          <h1 className="text-3xl font-semibold">{blog.title}</h1>
          <p className="text-sm text-gray-500">
            Category: {blog.category_name}
          </p>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default BlogDetail;
