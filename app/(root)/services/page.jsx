"use client";
import { useRef, useState } from "react";



export default function ServicesPage() {

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch(`https://api.nicgroup.co/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccess("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };




  const detaildServices = [
    {
      title: "Network Configuration",
      img: "/Assets/Images/Services/Server_bro.png",
      icon: "/Assets/Images/Services/data.png",
      content:
        "Website design and developmentOur skilled developers create visually stunning, user-friendly websites tailored to your business objectives. We leverage the latest technologies and best practices to ensure your website stands out and delivers a seamless user experience.",
    },
    {
      title: "Security Solutions",
      img: "/Assets/Images/Services/Server_bro.png",
      icon: "/Assets/Images/Services/security_solutions.png",
      content:
        "Website design and developmentOur skilled developers create visually stunning, user-friendly websites tailored to your business objectives. We leverage the latest technologies and best practices to ensure your website stands out and delivers a seamless user experience.",
    },
    {
      title: "Maintenance",
      img: "/Assets/Images/Services/Server_bro.png",
      icon: "/Assets/Images/Services/gear.png",
      content:
        "Website design and developmentOur skilled developers create visually stunning, user-friendly websites tailored to your business objectives. We leverage the latest technologies and best practices to ensure your website stands out and delivers a seamless user experience.",
    },
    {
      title: "Backup Solutions",
      img: "/Assets/Images/Services/Server_bro.png",
      icon: "/Assets/Images/Services/driver.png",
      content:
        "Website design and developmentOur skilled developers create visually stunning, user-friendly websites tailored to your business objectives. We leverage the latest technologies and best practices to ensure your website stands out and delivers a seamless user experience.",
    },
    {
      title: "IT Infrustructure",
      img: "/Assets/Images/Services/Server_bro.png",
      icon: "/Assets/Images/Services/it.png",
      content:
        "Website design and developmentOur skilled developers create visually stunning, user-friendly websites tailored to your business objectives. We leverage the latest technologies and best practices to ensure your website stands out and delivers a seamless user experience.",
    },
  ];

  const [selectedService, setSelectedService] = useState(0);

  function setSelectedServiceHandler(serviceIndex) {
    setSelectedService(serviceIndex);
  }
  const scrollRef = useRef(null);

  // Enable drag-to-scroll
  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    if (!slider) return;

    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const generalServices = [
    {
      title: "Website Design",
      description:
        "Implementing creative, efficient tactics to expand your business quickly, enhancing visibility and scalability in your market.",
    },
    {
      title: "Software Development",
      description:
        "Implementing creative, efficient tactics to expand your business quickly, enhancing visibility and scalability in your market.",
    },
    {
      title: "Digital Tools",
      description:
        "Implementing creative, efficient tactics to expand your business quickly, enhancing visibility and scalability in your market.",
    },
    {
      title: "Application",
      description:
        "Implementing creative, efficient tactics to expand your business quickly, enhancing visibility and scalability in your market.",
    },
    {
      title: "Tech Solutions",
      description:
        "Implementing creative, efficient tactics to expand your business quickly, enhancing visibility and scalability in your market.",
    },
  ];

  return (
    <div className="flex flex-col px-4 md:px-7 py-4 md:py-7 relative overflow-hidden ">
      {/* Marketing Department Section */}
      <div className="w-full px-4 md:px-10 py-8 md:py-16 md:pt-72 relative rounded-3xl bg-white mb-6 md:mb-10">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 hidden md:block ">
          <p className="font-black opacity-5 text-[16rem] tracking-[0.1em] inline-block ">
            Marketing
          </p>
        </div>

        <div className="flex flex-col ">
          <p className="ml-4 md:ml-10 mb-8 md:mb-16 text-blackk font-Secondary">
            [Marketing Department]
          </p>

          {/* Marketing Content - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Online Brand Promotion */}
            <div className="border-b md:border-r md:border-b-0 border-gray-300 pb-6 md:pb-10">
              <div className="flex flex-row gap-3 md:gap-5 items-center">
                <img
                  className="w-8 h-8 md:w-auto md:h-auto"
                  src="/Assets/Images/Services/monitor-mobbile.png"
                  alt=""
                />
                <h2 className="text-lg md:text-xl font-bold font-Secondary">
                  Online Brand Promotion
                </h2>
              </div>
              <p className="ml-11 md:ml-[90px] text-gray-400 font-semibold md:mr-32">
                We specialize in developing comprehensive online brand promotion
                strategies to help your business gain visibility, reach your
                target audience, and build a strong brand presence in the
                digital space.
              </p>
            </div>

            {/* Marketing Performance Analysis */}
            <div className="pb-6 md:pb-10 border-b border-gray-300">
              <div className="grid grid-cols-[auto_1fr] gap-3 md:gap-5 items-start md:pl-10">
                <img
                  className="w-8 h-8 md:w-auto md:h-auto"
                  src="/Assets/Images/Services/status-up.png"
                  alt=""
                />
                <h2 className="text-lg md:text-xl font-bold font-Secondary my-auto">
                  Marketing Performance Analysis
                </h2>
                <p className="col-start-2 text-gray-400 font-semibold md:mr-32">
                  Our experienced team analyses your marketing efforts,
                  leveraging data-driven insights to evaluate performance,
                  identify areas of improvement, and optimize your marketing
                  campaigns for maximum impact.
                </p>
              </div>
            </div>

            {/* Digital Advertising Campaigns */}
            <div className="pt-6 md:pt-16 border-b md:border-r md:border-b-0 border-gray-300 pb-6 md:pb-10">
              <div className="flex flex-row gap-3 md:gap-5 items-center">
                <img
                  className="w-8 h-8 md:w-auto md:h-auto"
                  src="/Assets/Images/Services/book-saved.png"
                  alt=""
                />
                <h2 className="text-lg md:text-xl font-bold font-Secondary">
                  Digital Advertising Campaigns
                </h2>
              </div>
              <p className="ml-11 md:ml-[90px] text-gray-400 font-semibold md:mr-32">
                We design and execute targeted digital advertising campaigns
                across various platforms to boost your brand's visibility,
                generate leads, and drive conversions.
              </p>
            </div>

            {/* Social Media Management */}
            <div className="pt-6 md:pt-16">
              <div className="grid grid-cols-[auto_1fr] gap-3 md:gap-5 items-start md:pl-10">
                <img
                  className="w-8 h-8 md:w-auto md:h-auto"
                  src="/Assets/Images/Services/category-2.png"
                  alt=""
                />
                <h2 className="text-lg md:text-xl font-bold font-Secondary my-auto">
                  Social Media Management
                </h2>
                <p className="col-start-2 text-gray-400 font-semibold md:mr-32">
                  Our experts create and manage engaging social media content,
                  helping you effectively connect with your audience, enhance
                  brand engagement, and establish a strong social media
                  presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programming Department Section */}
      <div className="flex flex-col px-4 md:px-10 relative ">
        {/* NIC Shape bg */}
        <img
          src="Assets/Images/Services/NIC.png"
          className="absolute -top-16 md:-top-48 -left-5 md:-left-7"
          alt=""
        />
        {/* White spotlight */}
        <div className="absolute block md:block top-10 right-10 w-16 h-16 md:w-52 md:h-52 bg-white opacity-20 rounded-full blur-3xl"></div>

        {/* the grid  */}
        {/* <div className="grid grid-cols-[1] md:grid-cols-[10rem_1fr] text-white font-Secondary z-10">
          <p className="text-sm h-fit mb-5 md:mb-0">[Coders Team]</p>
          <div className="text-2xl md:text-4xl flex flex-col gap-6 md:gap-10">
            <p className="font-semibold text-2xl md:text-4xl font-Main">
              Programming <br /> Department
            </p>
            <div className="flex flex-col gap-8 md:gap-16">
              {generalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-3 md:gap-5 flex-col group w-full md:w-3/4"
                >
                  <h2
                    className="w-fit 
    md:text-black md:bg-none md:bg-clip-border md:text-current
    bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent
    md:group-hover:bg-gradient-to-r md:group-hover:from-secondary md:group-hover:to-primary md:group-hover:bg-clip-text md:group-hover:text-transparent 
    transition-all duration-500 text-lg md:text-xl"
                  >
                    {index + 1} / {service.title}
                  </h2>

                  <p className="md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-500 text-sm md:text-base md:ml-10">
                    {service.description}
                  </p>
                  {index !== generalServices.length - 1 && (
                    <hr className="border-gray-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row text-white font-Secondary z-10">
          <p className="text-sm h-fit mb-5 md:mb-0 md:min-w-[10rem]">
            [Coders Team]
          </p>

          <div className="text-2xl md:text-4xl flex flex-col gap-6 md:gap-10">
            <p className="font-semibold text-2xl md:text-4xl font-Main">
              Programming <br /> Department
            </p>

            <div className="flex flex-col gap-8 md:gap-16">
              {generalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-3 md:gap-5 flex-col group w-full md:w-3/4"
                >
                  <h2
                    className="w-fit 
              md:text-black md:bg-none md:bg-clip-border md:text-current
              bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent
              md:group-hover:bg-gradient-to-r md:group-hover:from-secondary md:group-hover:to-primary md:group-hover:bg-clip-text md:group-hover:text-transparent 
              transition-all duration-500 text-lg md:text-xl"
                  >
                    {index + 1} / {service.title}
                  </h2>

                  <p className="md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-500 text-sm md:text-base md:ml-10">
                    {service.description}
                  </p>

                  {index !== generalServices.length - 1 && (
                    <hr className="border-gray-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* IT Department Section */}
      <div className="flex flex-col bg-white w-full rounded-3xl mt-6 md:mt-10 overflow-hidden">
        <div className=" flex flex-col md:flex-row gap-4 md:gap-10 font-Secondary uppercase px-4 md:px-10 py-6 md:py-16">
          <p className="text-xs md:text-sm">[Uno Team]</p>
          <h2 className="text-2xl md:text-4xl font-bold font-Main">
            IT Department
          </h2>
        </div>
        <div className="bg-whitee w-full flex flex-col pt-6 md:pt-10 gap-8 md:gap-32 rounded-t-3xl">
          <div className="w-full overflow-hidden px-4 md:px-16">
            <div
              ref={scrollRef}
              className="flex gap-3 md:gap-4 overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide cursor-pointer select-none"
              onMouseDown={handleMouseDown}
            >
              {detaildServices.map((category, index) => (
                <div
                  onClick={() => setSelectedService(index)}
                  key={index}
                  className={`flex flex-row items-center justify-between rounded-full gap-3 md:gap-8 px-4 py-2 md:px-6 md:py-4 text-gray-800 font-medium text-base md:text-lg flex-shrink-0 w-fit ${
                    selectedService === index ? "bg-white" : "bg-transparent"
                  }`}
                >
                  <img
                    className="w-6 h-6 md:w-auto md:h-auto"
                    src={category.icon}
                    draggable="false"
                  />
                  <p className="font-semibold">{category.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 md:px-0 pb-6 md:pb-0">
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
              <div className="flex-1">
                <img
                  className="w-full h-auto"
                  src={detaildServices[selectedService].img}
                  alt=""
                />
              </div>
              <div className="flex-1 my-auto flex flex-col justify-between gap-3 md:gap-5">
                <h2 className="font-semibold text-2xl md:text-4xl">
                  {detaildServices[selectedService].title}
                </h2>
                <p className="text-base md:text-xl leading-normal">
                  {detaildServices[selectedService].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-6 md:mt-10">
        {/* Contact Info */}
        <div className="flex-1 overflow-hidden bg-white flex-col px-6 py-8 md:px-16 md:py-32 rounded-3xl relative">
          <svg
            className="absolute top-0 left-0   md:block"
            viewBox="0 0 716 558"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-432.852 214.771C-265.958 365.551 417.708 87.729 465.429 202.327C509.768 308.805 431.271 471.817 590.91 529.997C693.834 567.508 877.112 508.711 1059.37 548.036C1124.02 561.985 1225.29 581.975 1225.29 581.975M-426.955 191.766C-260.061 342.546 394.135 75.6072 441.855 190.205C486.195 296.683 407.698 459.695 567.336 517.876C670.261 555.387 853.539 496.589 1035.8 535.915C1100.45 549.863 1201.71 569.853 1201.71 569.853M-417.096 172.594C-250.202 323.374 370.561 63.4854 418.282 178.083C462.621 284.562 384.124 447.573 543.763 505.754C646.688 543.265 829.965 484.467 1012.23 523.793C1076.87 537.742 1178.14 557.731 1178.14 557.731M-406.142 151.291C-239.248 302.071 346.988 51.3635 394.709 165.962C439.048 272.44 360.551 435.452 520.189 493.632C623.114 531.143 806.392 472.345 988.653 511.671C1053.3 525.62 1154.57 545.609 1154.57 545.609M-395.188 129.988C-228.294 280.769 323.414 39.2417 371.135 153.84C415.475 260.318 336.978 423.33 496.616 481.51C599.541 519.021 782.819 460.223 965.079 499.549C1029.73 513.498 1130.99 533.487 1130.99 533.487M-387.155 114.367C-220.261 265.147 299.841 27.1199 347.562 141.718C391.901 248.196 313.404 411.208 473.043 469.388C575.967 506.899 759.245 448.102 941.506 487.427C1006.15 501.376 1107.42 521.366 1107.42 521.366M-380.217 100.875C-213.323 251.655 276.268 14.998 323.988 129.596C368.328 236.074 289.831 399.086 449.469 457.266C552.394 494.777 735.672 435.98 917.932 475.305C982.58 489.254 1083.85 509.244 1083.85 509.244M-372.549 85.963C-205.655 236.743 252.694 2.87617 300.415 117.474C344.755 223.952 266.258 386.964 425.896 445.145C528.821 482.656 712.098 423.858 894.359 463.184C959.007 477.132 1060.27 497.122 1060.27 497.122M-364.516 70.3411C-197.622 221.122 229.121 -9.24565 276.842 105.352C321.181 211.831 242.684 374.842 402.323 433.023C505.247 470.534 688.525 411.736 870.786 451.062C935.433 465.011 1063.58 490.691 1063.58 490.691M-357.145 56.006C-190.251 206.786 205.548 -21.3675 253.268 93.2305C297.608 199.709 219.111 362.721 378.749 420.901C481.674 458.412 664.952 399.614 847.212 438.94C911.86 452.889 1062.43 484.132 1062.43 484.132M-351.448 44.9285C-184.554 195.709 181.974 -33.4893 229.695 81.1086C274.034 187.587 195.538 350.599 355.176 408.779C458.101 446.29 641.378 387.492 823.639 426.818C888.287 440.767 1069.22 470.924 1069.22 470.924M-345.38 33.1265C-178.485 183.907 158.401 -45.6112 206.122 68.9868C250.461 175.465 171.964 338.477 331.602 396.657C434.527 434.168 617.805 375.37 800.066 414.696C864.713 428.645 1076.5 456.772 1076.5 456.772M-338.835 20.3996C-171.941 171.18 134.827 -57.733 182.548 56.865C226.888 163.343 148.391 326.355 308.029 384.535C410.954 422.046 594.232 363.249 776.492 402.574C841.14 416.523 1085.23 439.79 1085.23 439.79M-336.237 1.72644C-169.342 152.507 111.254 -69.855 158.975 44.743C203.314 151.221 124.817 314.233 284.455 372.413C387.38 409.924 570.658 351.127 752.919 390.452C817.566 404.401 1092.99 424.694 1092.99 424.694"
              stroke="url(#paint0_radial_226_681)"
              strokeOpacity="0.4"
              strokeWidth="2"
            />
            <defs>
              <radialGradient
                id="paint0_radial_226_681"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(408.292 362.314) rotate(-152.787) scale(889.014 276.951)"
              >
                <stop stopColor="#799BFF" stopOpacity="0.9" />
                <stop offset="1" stopColor="#799BFF" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

                {/* the old grid */}
          {/* <div className="grid grid-cols-[1] md:grid-cols-[100px_1fr] gap-6 md:gap-10">
          
            <div>
              <p className="uppercase text-sm md:text-base">[Call Us]</p>
            </div>
            <div className="flex flex-col gap-6 md:gap-10">
              <p className="font-Main font-bold uppercase text-2xl md:text-[3rem]">
                Let's Work <br /> With us
              </p>
              <ul className="flex flex-col gap-4 md:gap-5">
                <li className="flex flex-row items-center gap-3">
                  <div className="flex items-center justify-center p-2 md:px-2 md:py-2 rounded-full bg-secondary">
                    <img
                      className="w-4 h-4 md:w-auto md:h-auto"
                      src="/Assets/Images/Services/telephone.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-base">Tel</p>
                    <p className="font-semibold text-base md:text-[1.2rem]">
                      310-437-2766
                    </p>
                  </div>
                </li>

                <li className="flex flex-row items-center gap-3">
                  <div className="flex items-center justify-center p-2 md:px-2 md:py-2 rounded-full bg-secondary">
                    <img
                      className="w-4 h-4 md:w-auto md:h-auto"
                      src="/Assets/Images/Services/sms.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-base">Mail</p>
                    <p className="font-semibold text-base md:text-[1.2rem]">
                      unreal@outlook.com
                    </p>
                  </div>
                </li>

                <li className="flex flex-row items-center gap-3">
                  <div className="flex items-center justify-center p-2 md:px-2 md:py-2 rounded-full bg-secondary">
                    <img
                      className="w-4 h-4 md:w-auto md:h-auto"
                      src="/Assets/Images/Services/location.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-base">Address</p>
                    <p className="font-semibold text-base md:text-[1.2rem]">
                      706 Campfire Ave. Meriden, CT 06450
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-[100px]">
              <p className="uppercase text-sm md:text-base">[Call Us]</p>
            </div>
            <div className="flex flex-col gap-6 md:gap-10 flex-1">
              <p className="font-Main font-bold uppercase text-2xl md:text-[3rem]">
                Let's Work <br /> With us
              </p>
              <ul className="flex flex-col gap-4 md:gap-5">
                <li className="flex flex-row items-center gap-3">
                  <div className="flex items-center justify-center p-2 md:px-2 md:py-2 rounded-full bg-secondary">
                    <img
                      className="w-4 h-4 md:w-auto md:h-auto"
                      src="/Assets/Images/Services/telephone.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-base">Tel</p>
                    <p className="font-semibold text-base md:text-[1.2rem]">
                      310-437-2766
                    </p>
                  </div>
                </li>

                <li className="flex flex-row items-center gap-3">
                  <div className="flex items-center justify-center p-2 md:px-2 md:py-2 rounded-full bg-secondary">
                    <img
                      className="w-4 h-4 md:w-auto md:h-auto"
                      src="/Assets/Images/Services/sms.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-base">Mail</p>
                    <p className="font-semibold text-base md:text-[1.2rem]">
                      unreal@outlook.com
                    </p>
                  </div>
                </li>

                <li className="flex flex-row items-center gap-3">
                  <div className="flex items-center justify-center p-2 md:px-2 md:py-2 rounded-full bg-secondary">
                    <img
                      className="w-4 h-4 md:w-auto md:h-auto"
                      src="/Assets/Images/Services/location.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-base">Address</p>
                    <p className="font-semibold text-base md:text-[1.2rem]">
                      706 Campfire Ave. Meriden, CT 06450
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 px-6 py-8 md:px-16 md:py-32 bg-white flex-col rounded-3xl relative"
        >
          <div className="flex justify-center w-full flex-col items-center gap-4 md:gap-5 font-Secondary">
            <div className="flex rounded-2xl bg-whitee justify-center gap-0 w-full px-4 py-2">
              <span className="border-r border-gray-400 py-3 pr-3 md:pr-5 flex">
                <img
                  className="w-4 h-4 md:w-auto md:h-auto"
                  src="/Assets/Images/Services/profile.png"
                  alt=""
                />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="outline-none px-3 bg-whitee w-full text-sm md:text-base"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex rounded-2xl bg-whitee justify-center gap-0 w-full px-4 py-2">
              <span className="border-r border-gray-400 py-3 pr-3 md:pr-5 flex">
                <img
                  className="w-4 h-4 md:w-auto md:h-auto"
                  src="/Assets/Images/Services/profile.png"
                  alt=""
                />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="outline-none px-3 bg-whitee w-full text-sm md:text-base"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex rounded-2xl bg-whitee justify-center gap-0 w-full px-4 py-2">
              <span className="border-r border-gray-400 py-3 pr-3 md:pr-5 flex">
                <img
                  className="w-4 h-4 md:w-auto md:h-auto"
                  src="/Assets/Images/Services/profile.png"
                  alt=""
                />
              </span>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="outline-none px-3 bg-whitee w-full text-sm md:text-base"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <textarea
                name="message"
                className="rounded-2xl w-full p-4 md:p-7 max-h-40 outline-none bg-whitee text-sm md:text-base"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-secondary w-full px-6 py-3 md:px-10 md:py-5 rounded-2xl text-sm md:text-base"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {success && <p className="text-center text-sm mt-2">{success}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
