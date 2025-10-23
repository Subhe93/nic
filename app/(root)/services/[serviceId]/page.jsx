
"use client";
import { useRef, useState, useEffect } from "react";
import { services } from "../../../lib/services";

export default function ServicePage({ params }) {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const serviceData = services.find((s) => s.id === params.serviceId);
    setService(serviceData);
    setLoading(false);
  }, [params.serviceId]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
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
      setFormLoading(false);
    }
  };

  const [selectedService, setSelectedService] = useState(0);

  function setSelectedServiceHandler(serviceIndex) {
    setSelectedService(serviceIndex);
  }
  const scrollRef = useRef(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="flex flex-col px-4 md:px-7 py-4 md:py-7 relative overflow-hidden ">
      {service.departments.map((department, depIndex) => (
        <div key={depIndex}>
          {department.name === "Marketing Department" && (
            <div className="w-full px-4 md:px-10 py-8 md:py-16 md:pt-72 relative rounded-3xl bg-white mb-6 md:mb-10">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 hidden md:block ">
                <p className="font-black opacity-5 text-[16rem] tracking-[0.1em] inline-block ">
                  {department.name.split(" ")[0]}
                </p>
              </div>

              <div className="flex flex-col ">
                <p className="ml-4 md:ml-10 mb-8 md:mb-16 text-blackk font-Secondary">
                  [{department.name}]
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {department.services.map((s, sIndex) => (
                    <div key={sIndex} className="border-b md:border-r md:border-b-0 border-gray-300 pb-6 md:pb-10">
                      <div className="flex flex-row gap-3 md:gap-5 items-center">
                        <img
                          className="w-8 h-8 md:w-auto md:h-auto"
                          src={s.icon}
                          alt=""
                        />
                        <h2 className="text-lg md:text-xl font-bold font-Secondary">
                          {s.title}
                        </h2>
                      </div>
                      <p className="ml-11 md:ml-[90px] text-gray-400 font-semibold md:mr-32">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {department.name === "Programming Department" && (
            <div className="flex flex-col px-4 md:px-10 relative ">
              <img
                src="/Assets/Images/Services/NIC.png"
                className="absolute -top-16 md:-top-48 -left-5 md:-left-7"
                alt=""
              />
              <div className="absolute block md:block top-10 right-10 w-16 h-16 md:w-52 md:h-52 bg-white opacity-20 rounded-full blur-3xl"></div>

              <div className="flex flex-col md:flex-row text-white font-Secondary z-10">
                <p className="text-sm h-fit mb-5 md:mb-0 md:min-w-[10rem]">
                  [Coders Team]
                </p>

                <div className="text-2xl md:text-4xl flex flex-col gap-6 md:gap-10">
                  <p className="font-semibold text-2xl md:text-4xl font-Main">
                    {department.name}
                  </p>

                  <div className="flex flex-col gap-8 md:gap-16">
                    {department.services.map((s, index) => (
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
                          {index + 1} / {s.title}
                        </h2>

                        <p className="md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-500 text-sm md:text-base md:ml-10">
                          {s.description}
                        </p>

                        {index !== department.services.length - 1 && (
                          <hr className="border-gray-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {department.name === "IT Department" && (
            <div className="flex flex-col bg-white w-full rounded-3xl mt-6 md:mt-10 overflow-hidden">
              <div className=" flex flex-col md:flex-row gap-4 md:gap-10 font-Secondary uppercase px-4 md:px-10 py-6 md:py-16">
                <p className="text-xs md:text-sm">[Uno Team]</p>
                <h2 className="text-2xl md:text-4xl font-bold font-Main">
                  {department.name}
                </h2>
              </div>
              <div className="bg-whitee w-full flex flex-col pt-6 md:pt-10 gap-8 md:gap-32 rounded-t-3xl">
                <div className="w-full overflow-hidden px-4 md:px-16">
                  <div
                    ref={scrollRef}
                    className="flex gap-3 md:gap-4 overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide cursor-pointer select-none"
                    onMouseDown={handleMouseDown}
                  >
                    {department.services.map((category, index) => (
                      <div
                        onClick={() => setSelectedService(index)}
                        key={index}
                        className={`flex flex-row items-center justify-between rounded-full gap-3 md:gap-8 px-4 py-2 md:px-6 md:py-4 text-gray-800 font-medium text-base md:text-lg flex-shrink-0 w-fit ${
                          selectedService === index
                            ? "bg-white"
                            : "bg-transparent"
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
                        src={department.services[selectedService].img}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 my-auto flex flex-col justify-between gap-3 md:gap-5">
                      <h2 className="font-semibold text-2xl md:text-4xl">
                        {department.services[selectedService].title}
                      </h2>
                      <p className="text-base md:text-xl leading-normal">
                        {department.services[selectedService].content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-6 md:mt-10">
        <div className="flex-1 overflow-hidden bg-white flex-col px-6 py-8 md:px-16 md:py-32 rounded-3xl relative">
          <svg
            className="absolute top-0 left-0   md:block"
            viewBox="0 0 716 558"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-432.852 214.771C-265.958 365.551 417.708 87.729 465.429 202.327C509.768 308.805 431.271 471.817 590.91 529.997C693.834 567.508 877.112 508.711 1059.37 548.036C1124.02 561.985 1225.29 581.975 1225.29 581.975M-426.955 191.766C-260.061 342.546 394.135 75.6072 441.855 190.205C486.195 296.683 407.698 459.695 567.336 517.876C670.261 555.387 853.539 496.589 1035.8 535.915C1100.45 549.863 1201.71 569.853 1201.71 569.853M-417.096 172.594C-250.202 323.374 370.561 63.4854 418.282 178.083C462.621 284.562 384.124 447.573 543.763 505.754C646.688 543.265 829.965 484.467 1012.23 523.793C1076.87 537.742 1178.14 557.731 1178.14 557.731M-406.142 151.291C-239.248 302.071 346.988 51.3635 394.709 165.962C439.048 272.44 360.551 435.452 520.189 493.632C623.114 531.143 806.392 472.345 988.653 511.671C1053.3 525.62 1154.57 545.609 1154.57 545.609M-395.188 129.988C-228.294 280.769 323.414 39.2417 371.135 153.84C415.475 260.318 336.978 423.33 496.616 481.51C599.541 519.021 782.819 460.223 965.079 499.549C1029.73 513.498 1130.99 533.487 1130.99 533.487M-387.155 114.367C-220.261 265.147 299.841 27.1199 347.562 141.718C391.901 248.196 313.404 411.208 473.043 469.388C575.967 506.899 759.245 448.102 941.506 487.427C1006.15 501.376 1107.42 521.366 1107.42 521.366M-380.217 100.875C-213.323 251.655 276.268 14.998 323.988 129.596C368.328 236.074 289.831 399.086 449.469 457.266C552.394 494.777 735.672 435.98 917.932 475.305C982.58 489.254 1083.85 509.244 1083.85 509.244M-372.549 85.963C-205.655 236.743 252.694 2.87617 300.415 117.474C344.755 223.952 266.258 386.964 425.896 445.145C528.821 482.656 712.098 423.858 894.359 463.184C959.007 477.132 1060.27 497.122 1060.27 497.122M-364.516 70.3411C-197.622 221.122 229.121 -9.24565 276.842 105.352C321.181 211.831 242.684 374.842 402.323 433.023C505.247 470.534 688.525 411.736 870.786 451.062C935.433 465.011 1063.58 490.691 1063.58 490.691M-357.145 56.006C-190.251 206.786 205.548 -21.3675 253.268 93.2305C297.608 199.709 219.111 362.721 378.74... [truncated]
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
              disabled={formLoading}
            >
              {formLoading ? "Sending..." : "Send"}
            </button>

            {success && <p className="text-center text-sm mt-2">{success}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
