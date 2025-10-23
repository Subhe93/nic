"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "antd";
import Loading from './BlogCardSkeleton.jsx'

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch API URL from environment variables
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // console.log(apiUrl);
  console.log(apiUrl);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(`https://api.nicgroup.co/api/blogcategories`);
      const data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  // Fetch blogs based on selected categories and current page
  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true); // Start loading
      const categoryParam = selectedCategories.length
        ? `&category_id=${selectedCategories.join(",")}`
        : "";
      const res = await fetch(
        `https://api.nicgroup.co/api/blogs?page=${currentPage}${categoryParam}`
      );
      const data = await res.json();
      setBlogs(data.blogs);
      setTotalPages(data.totalPages);
      setLoading(false); // End loading
    }
    fetchBlogs();
  }, [selectedCategories, currentPage]);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // blog card
  const BlogCard = ({ blog }) => {
    return (
      <Link href={`/blog/${blog.id}`} className="w-full">
        
      <div
        className="bg-white rounded-[24px] mx-auto hover:scale-105 transition-all duration-100 cursor-pointer relative shadow-lg overflow-hidden md:max-w-[450px] md:min-w-[450px] md:min-h-[512px] "
        key={blog.id}
      >
        {/* blog image with date  */}
        <div className="relative h-[300px]">
          {/* blog image */}
          <div className="inverted-radius-blogs">
            {blog.image === null ? (
              <Image
                width={500}
                height={300}
                src="/Assets/Images/Blogs/blog_placeholder.png"
                className="max-h-[300px] object-cover w-full rounded-[0px]"
                alt="Blog placeholder image"
                draggable="false"
                loading="lazy"
              />
            ) : (
              <Image
                width={500}
                height={300}
                src={`${blog.image}`}
                className="max-h-[300px] object-cover w-full rounded-[0px]"
                alt={blog.title === null ? "Blog Image" : blog.title}
                draggable="false"
                loading="lazy"
              />
            )}
          </div>
          {/* end of blog image */}
          {/* date  */}
          <div className="absolute bottom-2 left-2 z-10 text-[#717171] p-2 flex flex-row items-center gap-3">
            <Image
              src="/Assets/Images/Blogs/date.png"
              width={24}
              height={24}
              alt="Date Icon"
              loading="lazy"
            />
            <p className="text-[14px] font-Raleway">
              {formatDate(blog.created_at.date)}
            </p>
          </div>
          {/* end of date  */}
        </div>
        {/* blog title */}
        <div>
          <h2 className="text-black font-Secondary text-[22px] font-bold p-4">
            {blog.title}
          </h2>
        </div>
        {/* end of blog title */}
      </div>
      </Link>
    );
  };
  // end of blog card

  return (
    <>
      {loading ? (
        <div className="  grid md:grid-cols-3 grid-cols-1 gap-4 md:mx-7 mx-5 my-5 md:my-7 relative">
          <Loading />
          <Loading />
          <Loading />
        </div>
      ) : (
        <div className="md:mx-7 mx-5 my-5 md:my-7 relative flex flex-col">
          {/* Categories of the blogs  */}
          <div className="mb-4">
            {categories.map((category) => (
              // category buttons
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`mr-2 mb-2 px-4 py-2 rounded-lg border-[1px] border-secondary font-Raleway capitalize cursor-pointer ${
                  selectedCategories.includes(category.id)
                    ? "bg-secondary text-black"
                    : "bg-transparent text-white hover:text-secondary"
                }`}
              >
                {category.category_name}
              </button>
              // end of category buttons
            ))}
          </div>
          {/* end of categories */}

          {/* container of the blogs */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {/* blogs */}
            {blogs.map((blog, index) => (
              // blog card
              
              <BlogCard blog={blog} key={index} />
              // end of blog card
            ))}
          </div>
          {/* end of blogs */}

          {/* Pagination */}
          <div className="mt-5 flex justify-center">
            <nav>
              <ul className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index + 1}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-4 py-2 rounded-full border-[1px] border-secondary font-Raleway capitalize cursor-pointer ${
                        currentPage === index + 1
                          ? "bg-secondary text-black"
                          : "bg-transparent text-secondary"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* end of pagination */}
        </div>
      )}
    </>
  );
}
