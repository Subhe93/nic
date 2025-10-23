"use client"
// import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const location = usePathname();
  const [open, setOpen] = useState(false); // State to control drawer visibility

  // Navigation links
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/services" },
    // { name: "Brands", path: "/brands" },
    // { name: "Blog", path: "/blog" },
    { name: "Call us", path: "/contactus" },
  ];
  // Paths that should have rounded bottom corners
  const navigationLinksPath = 
    ["/", "/services", "/blog", "/brands", "/contactus"];
  
  useEffect(() => {
    console.log("navigation links",location);
  }
  , [location]);
  return (
    <div
      className="flex flex-col px-3 pt-3 md:px-7 md:pt-7 relative"
      key={"Navbar"}
    >
      <div
        className={`inverted-radius bg-[#D2D4FF] rounded-tl-3xl ${
          location == "/" ? "pb-0" : "pb-7 md:pb-3"
        } ${
          navigationLinksPath.includes(location)
            ? "rounded-b-3xl"
            : "rounded-b-0"
        }
 `}
      >
        {/* Navbar Container */}
        <div className="flex flex-row  px-3 pt-3 items-center md:px-7 md:pt-7 justify-between">
          {/* NIC Logo */}
          <Link href="/">
            <img
              src="/Assets/Images/Logo.png"
              alt="NIC LOGO"
              className="w-[150px]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="md:flex hidden flex-row md:gap-5 font-Secondary mx-auto">
            {navigationLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  className={`border-0 transition-all duration-75 ${
                    location === item.path
                      ? "border-black border-b-2 opacity-100 duration-75"
                      : "opacity-50 hover:opacity-100 hover:border-black duration-75 hover:border-b-2"
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          {/* Drawer Component */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
          >
            <ul className="flex flex-col gap-4">
              {navigationLinks.map((item) => (
                <li key={item.path} onClick={() => setOpen(false)}>
                  <Link href={item.path} className="text-lg hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Drawer>
        </div>

        {/* Hero Section (Only on Home Page) */}
        {location === "/" && (
          <div className="flex flex-col-reverse md:flex-row">
            <img
              src="/Assets/Images/Navbar/hero_image.png"
              alt="Hero"
              className="select-none"
            />
            <div className="flex flex-col md:gap-5 my-auto px-5 md:px-0 pt-10 md:pt-0 gap-5 items-center">
              <h2 className="font-bold font-Main w-fit text-[7vw] md:text-[3rem] relative md:leading-[4rem]">
                Welcome to{" "}
                <span className="md:w-[6.5rem] right-0 mt-[2rem] z-14 md:h-7 top-0 absolute bg-secondary"></span>
                <span className="italic relative z-20"> NIC </span> <br />{" "}
                Network and IT <br /> Consultants!
              </h2>
              <p className="font-Secondary md:ml-16 md:w-[35vw] text-sm mx-auto w-fit text-center">
                At NIC, we offer comprehensive solutions for all your online
                brand promotion, marketing performance analysis, programming,
                and IT needs.
              </p>
            </div>
          </div>
        )}

        {/* Page-Specific Headers with Breadcrumbs */}
        {["/services", "/blog", "/contactus", "/brands"].includes(location) && (
          <div className="md:px-14 md:pb-7 pt-14 pb-7 px-3 font-Main md:pt-24">
            <Breadcrumb
              separator=">"
              items={[
                { title: <Link href="/">Home</Link> },
                {
                  title: (
                    <Link href={location}>
                      {location.replace("/", "").replace("-", " ")}
                    </Link>
                  ),
                },
              ]}
            />
            <h2 className="font-Main font-bold md:text-[3rem] capitalize">
              {location.replace("/", "").replace("-", " ")}
            </h2>
          </div>
        )}
      </div>

      {/* Call Us with Icon (Desktop Only) */}
      <Link
        href={"#"}
        className="absolute md:right-[5rem] md:top-12 text-secondary hidden md:flex flex-row md:gap-2"
      >
        <img
          src="/Assets/Images/telephone.png"
          className="md:w-[24px]"
          alt="Call Us"
        />
        Call Us
      </Link>
      {/* Mobile Drawer Button */}
      <div
        className="md:hidden absolute bg-white p-3 rounded-2xl right-[1.5rem] top-[1.3rem] cursor-pointer px-4 py-4 "
        onClick={() => setOpen(true)}
      >
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </div>
    </div>
  );
}
