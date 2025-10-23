"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]); // Default to empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`https://api.nicgroup.co/api/blogs`);
        const data = await res.json();
        console.log("API Response:", data); // Log the response for debugging

        if (res.ok) {
          // Access the 'blogs' array directly from the API response
          setBlogs(data.blogs ?? []); // Ensure it's an array or default to empty array
        } else {
          setError("Error fetching blogs.");
        }
      } catch (err) {
        setError("Error: " + err.message);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">All Blogs</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="space-y-6">
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="border-b pb-4 mb-4">
              <h2 className="text-2xl font-semibold">
                <Link
                  href={`/admin/blogs/${blog.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {blog.title}
                </Link>
              </h2>
              <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>
              <p className="text-sm text-gray-500">
                Category: {blog.category_name}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
}
