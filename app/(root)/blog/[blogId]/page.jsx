"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "antd";
import Loading from "./loading";
import Image from "next/image";
import use from "react";
import axios from "axios";
export default function BlogDetailsPage({ params }) {
  const { blogId } = params; // Unwrap the params object
  console.log(blogId);
  const [blogData, setBlogData] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shareUrl, setShareUrl] = useState("");
  useEffect(() => {
    // Fetch data using the blogId from URL params
    const fetchBlogData = async () => {
      const res = await fetch(`https://api.nicgroup.co/api/blogs/${blogId}`);
      const data = await res.json();
      setBlogData(data);
      setLoading(false);
    };

    fetchBlogData();
  }, [blogId]); // Fetch when blogId changes

  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };

    return new Date(date).toLocaleDateString(undefined, options);
  };
  const shareLinks = blogData && {
    encodedUrl: encodeURIComponent(window.location.href),
    encodedTitle: encodeURIComponent(blogData.title),
    facebookShareLink: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    linkedinShareLink: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}`,
    whatsappShareLink: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      blogData.title
    )}%20${encodeURIComponent(window.location.href)}`,
  };

  useEffect(() => {
    axios
      .get("https://api.nicgroup.co/api/recentCategories")
      .then((res) => {
        setRecentBlogs(res.data.recentBlogs);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs", err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="md:mx-7 mx-3 relative flex flex-col ">
          <div
            className="md:px-14 md:pb-7 pt-14 pb-7 px-3 font-Main md:pt-24 rounded-b-3xl bg-[#D2D4FF] mb-7 "
            key={blogData.id}
          >
            <Breadcrumb
              separator=">"
              items={[
                { title: <Link href="/">Home</Link> },
                {
                  title: <Link href="/">Blog</Link>,
                },
              ]}
            />
            <h2 className="font-Main font-bold md:text-[3rem] capitalize">
              {blogData.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-[900px_1fr] grid-cols-1 gap-4 relative">
            <div className="relative">
              <div className="relative ">
                <div className="inverted-radius-blogs w-full rounded-[24px] min-h-[450px]">
                  <img
                    src={`${blogData.image}`} // Dynamic image URL
                    className="object-cover w-full max-h-[490px] rounded-[24px]"
                    alt={blogData.title}
                  />
                </div>
                <div className="absolute bottom-3 left-3 z-10 flex flex-row items-center justify-center text-white gap-3">
                  <img src="/Assets/Images/Blogs/date_white.png" alt="date" />
                  <p>{formatDate(blogData.created_at?.date)}</p>
                </div>
              </div>
              <div className="md:mt-5 text-white font-Raleway font-[19px]">
                <p dangerouslySetInnerHTML={{ __html: blogData.content }}></p>
              </div>
            </div>
            <div className="relative mx-auto ">
              <div className="relative min-h-[450px] w-[320px] lg:sticky lg:top-5">
                <div className="inner-curve-blogs bg-white min-h-[450px] w-[320px] pt-20 pb-10 px-7 flex flex-col gap-5 ">
                  {recentBlogs.map((blog) => {
                    return (
                      <Link href={`/blog/${blog.id}`} key={blog.id}>
                        <div className="flex gap-5 items-center flex-row hover:scale-105 transition-all duration-75">
                          <img
                            src="/Assets/Images/Blogs/blog_placeholder.png"
                            className="w-[100px] rounded-2xl"
                            alt={blog?.title}
                          />
                          <div className="flex flex-col">
                            <p className="text-[#8A8A8A] text-[12px] ">
                              {formatDate(blog?.created_at?.date)}
                            </p>

                            <p className="text-blackk text-[12px] font-semibold">
                              {blog?.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <p className="absolute -translate-x-1/2 left-1/2 top-2 text-white font-Raleway text-[20px]">
                  Recent blogs
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between bg-white rounded-full w-full px-10 py-5">
              <div>
                <p className="font-Raleway text-gray-500 capitalize ">
                  BY: {blogData.author}
                </p>
              </div>
              <div>
                <ul className="flex flex-row gap-7">
                  <li className="hover:scale-105 transition-all duration-75">
                    <a
                      href={shareLinks?.facebookShareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/Assets/Images/Blogs/facebook.png"
                        width={24}
                        height={24}
                        alt="Share on Facebook"
                      />
                    </a>
                  </li>
                  <li className="hover:scale-105 transition-all duration-75">
                    <a
                      href={shareLinks?.linkedinShareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/Assets/Images/Blogs/linkedin.png"
                        width={24}
                        height={24}
                        alt="Share on LinkedIn"
                      />
                    </a>
                  </li>
                  <li className="hover:scale-105 transition-all duration-75">
                    <a
                      href={shareLinks?.whatsappShareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/Assets/Images/Blogs/whatsapp.png"
                        width={24}
                        height={24}
                        alt="Share on WhatsApp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
