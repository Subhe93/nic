"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BlogCardSkeleton from "./Skeleton";
import Link from "next/link";
export default function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.nicgroup.co/api/recentCategories") // Update to your actual URL
      .then((res) => {
        setBlogs(res.data.recentBlogs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs", err);
        setLoading(false);
      });
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const BlogCard = ({ blog }) => (
    <Link href={`/blog/${blog?.id}`} >
      <div className="md:w-[430px] md:h-[425px] relative">
        <div>
          <img
            src={blog?.image_url || "/Assets/Images/Blogs/blog_placeholder.png"}
            alt="Blog"
            className="rounded-2xl w-full h-[280px] object-cover"
          />
        </div>
        <div className="w-3/4 bg-blackk min-h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl flex flex-col px-10 py-5 gap-4">
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-2">
              <img
                src="/Assets/Images/Blogs/user.png"
                className="w-[24px]"
                alt="Author"
              />
              <p className="text-whitee">{blog?.author ?? "Unknown Author"}</p>
            </div>

            <div className="flex flex-row gap-2">
              <img
                src="/Assets/Images/Blogs/calendar.png"
                className="w-[24px]"
                alt="Calendar"
              />
              <p className="text-whitee">
                {formatDate(blog?.created_at?.date ?? blog?.created_at)}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-whitee font-bold text-2xl line-clamp-2">
              {blog?.title}
            </h2>
            <button className="text-secondary mr-auto cursor-pointer hover:scale-105 transition-all duration-75">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="my-8 px-4 md:px-16 ">
    <div className="flex md:flex-row gap-5 flex-col md:items-center justify-between  md:mb-15 mb-7  ">
    <div className="flex flex-col">
    <p className="text-secondary font-Raleway uppercase font-[500] pb-3 text-sm">
        [Our Blog]
    </p>
    <h1 className="uppercase font-Main font-[400] text-3xl md:text-5xl text-white">
        Follow the latest <br /> technology Development
    </h1>
    </div>
    <Link href={'/blog'}>
    <button className="rounded-xl h-fit py-5 px-7 bg-secondary cursor-pointer hover:scale-105 transition-all duration-75 text-blackk   font-[500]">
        See More Blogs
    </button>
    </Link>
    </div>
      {loading ? (

        <div className="flex gap-5 flex-wrap justify-center">
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>
      ) : (
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
