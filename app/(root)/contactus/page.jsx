import Head from "next/head";

export default function Contactus() {
  return (
    <>
      <Head>
        <title>Contact Us - Get in Touch with Our Support Team</title>
        <meta
          name="description"
          content="Reach out to us for any inquiries or support. We're here to help!"
        />
        <meta
          name="keywords"
          content="contact us, support, inquiry, get in touch"
        />
        <meta name="author" content="NIC" />
        <meta
          property="og:title"
          content="Contact Us - Get in Touch with Our Support Team"
        />
        <meta
          property="og:description"
          content="Reach out to us for any inquiries or support. We're here to help!"
        />
        <meta
          property="og:image"
          content="/Assets/Images/Contactus/og-image.png"
        />
        <meta property="og:url" content="https://nicgroup.co/contactus" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us - Get in Touch with Our Support Team"
        />
        <meta
          name="twitter:description"
          content="Reach out to us for any inquiries or support. We're here to help!"
        />
        <meta
          name="twitter:image"
          content="/Assets/Images/Contactus/twitter-image.png"
        />
        <link rel="canonical" href="https://nicgroup.co/contact-us" />
      </Head>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:py-7 px-7 ">
        <div
          className="inverted-radius-call-us border border-white/40 rounded-lg p-4 hidden  
      bg-[linear-gradient(0deg,#E4EAEE,#E4EAEE),radial-gradient(46.64%_59.61%_at_116.89%_49.92%,rgba(208,222,85,0.33)_0%,rgba(208,222,85,0.0066)_100%)]
      border-image-source[linear-gradient(33.02deg,rgba(255,255,255,0.42)_9.51%,rgba(255,255,255,0.07)_86.79%)]
      backdrop-blur-[22px] rounded-tl-3xl max-w-[600px] max-h-[900px] min-h-[900px] rounded-b-3xl relative
        px-7 pr-20 py-5 justify-around md:flex flex-col"
        >
          {/* about NIC brief */}
          <div className="w-fit flex flex-col md:gap-10 text-blackk font-light text-[24px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, voluptate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              molestiae voluptas consectetur recusandae adipisci? Nisi!
            </p>
          </div>
          {/* end of NIC brief description */}

          {/* Contact information section  */}
          <div className="flex flex-col   gap-7">
            {/* Tel  */}
            <div className="flex-row flex gap-3">
              <div className="px-4 py-1 flex  justify-center bg-[#03001412] w-fit rounded-full  items-center">
                <img
                  src="/Assets/Images/Contactus/call.png"
                  className="min-w-[20px] max-w-[20px]"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <p className="font-Raleway text-[#222222D6] text-[14px] ">
                  Tel
                </p>
                <p className="text-blackk">+91 1234567890</p>
              </div>
            </div>
            {/* Mail */}
            <div className="flex-row flex gap-3">
              <div className="px-4 py-1 flex  justify-center bg-[#03001412] w-fit rounded-full  items-center">
                <img
                  src="/Assets/Images/Contactus/call.png"
                  className="min-w-[20px] max-w-[20px]"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <p className="font-Raleway text-[#222222D6] text-[14px] ">
                  Mail
                </p>
                <p className="text-blackk">NICSupport@gmail.com</p>
              </div>
            </div>
            {/* Address */}
            <div className="flex-row flex gap-3">
              <div className="px-4 py-1 flex  justify-center bg-[#03001412] w-fit rounded-full  items-center">
                <img
                  src="/Assets/Images/Contactus/call.png"
                  className="min-w-[20px] max-w-[20px]"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <p className="font-Raleway text-[#222222D6] text-[14px] ">
                  Address
                </p>
                <p className="text-blackk">Tripoli</p>
              </div>
            </div>
          </div>
          {/* End of contact information section */}

          {/* Follow us section */}
          <div className="flex flex-col  ">
            <p className="font-Raleway font-[16px] text-blackk mb-3">
              Follow us
            </p>
            <div className="flex flex-row gap-5">
              <a href="">
                <div className="bg-secondary  hover:scale-105 transition-all duration-75 px-4 py-4 rounded-full flex justify-center items-center">
                  <img
                    src="/Assets/Images/Contactus/call.png"
                    className="min-w-[20px] max-w-[20px]"
                  />
                </div>
              </a>{" "}
              <a href="">
                <div className="bg-secondary  hover:scale-105 transition-all duration-75 px-4 py-4 rounded-full flex justify-center items-center">
                  <img
                    src="/Assets/Images/Contactus/call.png"
                    className="min-w-[20px] max-w-[20px]"
                  />
                </div>
              </a>{" "}
              <a href="">
                <div className="bg-secondary  hover:scale-105 transition-all duration-75 px-4 py-4 rounded-full flex justify-center items-center">
                  <img
                    src="/Assets/Images/Contactus/call.png"
                    className="min-w-[20px] max-w-[20px]"
                  />
                </div>
              </a>{" "}
              <a href="">
                <div className="bg-secondary  hover:scale-105 transition-all duration-75 px-4 py-4 rounded-full flex justify-center items-center">
                  <img
                    src="/Assets/Images/Contactus/call.png"
                    className="min-w-[20px] max-w-[20px]"
                  />
                </div>
              </a>{" "}
              <a href="">
                <div className="bg-secondary  hover:scale-105 transition-all duration-75 px-4 py-4 rounded-full flex justify-center items-center">
                  <img
                    src="/Assets/Images/Contactus/call.png"
                    className="min-w-[20px] max-w-[20px]"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 md:mt-0   ">
          <p className="md:mb-7 mb-4 text-white text-[28px]  md:text-[32px] font-Secondary font-bold">
            What can we help with you ?
          </p>
          <p className="text-gray-300 text-[16px] mb-5 font-Raleway">
            Your Contact Information
          </p>
          <div className="max-w-[650px]">
            <form className="flex flex-col gap-5 md:gap-7">
              {/* username input */}
              <div
                className="flex flex-row  w-full h-[60px]   items-center gap-[10px] border border-white/15 rounded-[10px] p-[12px_17px] 
      bg-[linear-gradient(rgba(220,220,220,0.0638)_-18.45%,rgba(221,221,221,0.0286)_115.85%)]
      border-image-source[linear-gradient(93.56deg,rgba(255,255,255,0.144)_4.18%,rgba(255,255,255,0.08)_95.86%)]
      backdrop-blur-[22px]"
              >
                <img
                  src="/Assets/Images/Contactus/call.png"
                  className="in-w-[24px] border-r-2 pr-3    border-gray-500"
                  alt=" call"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="What Is Your Name"
                  className="font-Raleway text-white w-full border-none outline-none  "
                />
              </div>

              {/* phone number input */}

              <div
                className="flex flex-row  w-full h-[60px]    items-center gap-[10px] border border-white/15 rounded-[10px] p-[12px_17px] 
      bg-[linear-gradient(rgba(220,220,220,0.0638)_-18.45%,rgba(221,221,221,0.0286)_115.85%)]
      border-image-source[linear-gradient(93.56deg,rgba(255,255,255,0.144)_4.18%,rgba(255,255,255,0.08)_95.86%)]
      backdrop-blur-[22px]"
              >
                <img
                  src="/Assets/Images/Contactus/call.png"
                  className="in-w-[24px] border-r-2 pr-3     border-gray-500"
                  alt=" call"
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  className="font-Raleway text-white w-full border-none outline-none   "
                />
              </div>

              {/* user Email input */}

              <div
                className="flex flex-row  w-full h-[60px]   items-center gap-[10px] border border-white/15 rounded-[10px] p-[12px_17px] 
      bg-[linear-gradient(rgba(220,220,220,0.0638)_-18.45%,rgba(221,221,221,0.0286)_115.85%)]
      border-image-source[linear-gradient(93.56deg,rgba(255,255,255,0.144)_4.18%,rgba(255,255,255,0.08)_95.86%)]
      backdrop-blur-[22px]"
              >
                <img
                  src="/Assets/Images/Contactus/call.png"
                  className="in-w-[24px] border-r-2 pr-3      border-gray-500"
                  alt=" call"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="font-Raleway text-white w-full border-none outline-none  "
                />
              </div>

              {/* user message input */}
              <textarea
                placeholder="Your Message"
                className="flex flex-row outline-none  font-Raleway text-white w-full  md:min-h-[150px] md:max-h-[200px]  items-center gap-[10px] border border-white/15 rounded-[10px] p-[12px_17px] 
      bg-[linear-gradient(rgba(220,220,220,0.0638)_-18.45%,rgba(221,221,221,0.0286)_115.85%)]
      border-image-source[linear-gradient(93.56deg,rgba(255,255,255,0.144)_4.18%,rgba(255,255,255,0.08)_95.86%)]
      backdrop-blur-[22px]"
              ></textarea>

              <button className="text-blackk w-full bg-secondary px-4 py-4 md:px-5 md:py-5 rounded-[12px] cursor-pointer  font-Secondary font-bold hover:scale-105 transition-all duration-300">
                Send
              </button>
            </form>
            <div className="flex flex-col gap-4 md:flex-row items-center justify-between w-full mt-7 ">
              <div className="flex flex-col gap-2">
                <p className="text-[20px] font-secondary text-white font-[400]">
                  If you have an urgent question to discuss
                </p>
                <p className="text-white text-[14px] font-light font-Secondary">
                  Please fell free to drop us a line in a messenger
                </p>
              </div>
              <div className="w-full md:w-fit ">
                <button className="bg-[#03AC42] w-full md:w-fit items-center justify-center flex flex-row px-5 py-3  hover:scale-105 transition-all delay-100 cursor-pointer rounded-[10px]">
                  <p className="text-white ">Whatsapp</p>
                  <img
                    src="/Assets/Images/Contactus/right_arrow.png"
                    className="w-[24px]"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
