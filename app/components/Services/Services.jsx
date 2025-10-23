export default function Services(){

  const services = [
    {
      title: "UI UX Design",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
      description:
        "Create stunning user interfaces and exceptional user experiences. Our UI/UX design services focus on intuitive navigation, visual appeal, and user satisfaction to help your business stand out in the digital world.",
    },
    {
      title: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description:
        "Build powerful, responsive websites and web applications using cutting-edge technologies. From simple landing pages to complex enterprise solutions, we deliver scalable and secure web solutions tailored to your needs.",
    },
    {
      title: "Mobile Application",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      description:
        "Develop innovative mobile applications for iOS and Android platforms. Our expert team creates user-friendly, feature-rich mobile solutions that help your business reach customers on their preferred devices.",
    },
    {
      title: "Saas",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      description:
        "Transform your business with custom Software as a Service solutions. We develop cloud-based applications that provide scalability, accessibility, and continuous value to your customers while reducing operational costs.",
    },
    {
      title: "IT Support",
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2",
      description:
        "Get reliable technical support and maintenance services for your IT infrastructure. Our dedicated team provides 24/7 support, system optimization, and troubleshooting to keep your business running smoothly.",
    },
    
  ]
    return (
      <div className="flex flex-col  w-full md:px-16 md:py-16   relative"
      key={'services'}>
        {/* <p className="text-[10rem] font-bold text-[#4D4650] ">
          <span className="text-secondary">W</span>
          <span className="bg-gradient-to-r from-secondary to-[#4D4650] text-transparent bg-clip-text">
            e
          </span>
          are best
        </p> */}

        <div className="text-[15vw] md:ml-10 font-bold text-[#4D4650]">
          <span className="text-secondary">W</span>
          <span className="relative inline-block align-top w-[5vw]    ">
            {/* Left yellow half */}
            <span className="absolute text-secondary clip-right-half">e</span>
            {/* Right black half */}
            <span className="absolute text-[#4D4650] clip-left-half ">e</span>
          </span>
          <span> are best</span>
        </div>
        {/* white spotlight */}
        <div className="absolute hidden md:block top-10 right-10 w-52 h-52 bg-white opacity-20 rounded-full blur-3xl"></div>

        {/* UI UX Design */}

        {services.map((service, index) => {
          
          return (
            <div className="mx-3 md:mx-0 " key={index}>
              <div className="flex flex-col md:flex-row relative gap-5   md:mx-0 justify-between md:items-center group hover:ml-10 transition-all duration-500 delay-300 hover:cursor-pointer py-16   ">
                <div className="flex flex-row gap-3 items-center    ">
                  <div className="flex justify-center items-center bg-white rounded-xl w-fit px-4 py-4 group-hover:bg-secondary transition-colors duration-500 delay-300">
                    <img src="/Assets/Images/Services/ui_ux.png" alt="" />
                  </div>

                  <p className="capitalize text-white md:text-2xl font-bold">
                    {service.title}
                  </p>
                   
                </div>
                <p className="text-white text-opacity-60 font-Secondary md:w-[32vw] md:mr-16">
                  {service.description}
                </p>
                <img
                  src={service.image}
                  className="w-52 group-hover:opacity-100 hidden md:block  group-hover:rotate-15 opacity-0 transition-all rounded-2xl delay-100 duration-500 group-hover:scale-150 "
                  alt=""
                />
                {/* // if not the last element, add a horizontal line */}
              </div>
              {
                index !== services.length - 1 && (
                  <hr className="border-gray-600 w-full" />
                )
              }
            </div>
          );
        
          
})}

        {/* white spotlight */}
        <div className="absolute top-1/2 -translate-y-1/2  hidden md:block  left-10 w-52 h-52 bg-white opacity-20 rounded-full blur-3xl"></div>
      </div>
    );
}