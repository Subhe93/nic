export default function WorkRoadMap() {
  const steps = [
    {
      title: "ANALYSIS",
      image: "/Assets/Images/Roadmap/SearchStatus.svg",
    },
    {
      title: "Determining the planning strategy",
      image: "/Assets/Images/Roadmap/Data.svg",
    },
    {
      title: "Designing - Programming",
      image: "/Assets/Images/Roadmap/Scroll.svg",
    },
    {
      title: "Upgrade And Maintenance",
      image: "/Assets/Images/Roadmap/Driver.svg",
    },
    {
      title: "Releasing the final project",
      image: "/Assets/Images/Roadmap/Scroll.svg",
    },
    {
      title: "Release a prototype",
      image: "/Assets/Images/Roadmap/Scroll.svg",
    },
  ];

  return (
    <div className="px-4 md:px-7 py-10 md:py-14 relative">
      <div className="bg-secondary py-14 md:py-24 px-6 md:px-10 rounded-3xl flex flex-col   gap-10">
        {/* Heading */}
        <div className=" ml-10 ">
          <p className="mb-4 text-sm md:text-base text-black uppercase tracking-wider">
            [WORK ROADMAP]
          </p>
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl font-Main text-black ">
            We work with clear steps <br className="hidden md:block" /> and a
            fixed strategy
          </h2>
        </div>

        {/* Roadmap Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full bg-white rounded-3xl px-6 md:px-12 py-10 md:py-16 bg-opacity-30">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white px-6 md:px-7 py-6 md:py-8 rounded-3xl flex flex-col justify-between min-h-[40vh] md:min-h-[50vh] lg:min-h-[55vh] shadow-md hover:shadow-lg transition-all"
            >
              {/* Step Number */}
              <p className="text-primary font-bold text-xl md:text-3xl">
                {index + 1}
              </p>

              {/* Step Title & Icon */}
              <div className="flex flex-col items-start gap-3 md:gap-5">
                <img src={step.image} className="w-12 md:w-16" alt="" />
                <p className="font-bold text-lg md:text-2xl">{step.title}</p>
              </div>

              {/* Background Image */}
              <img
                src={step.image}
                className="absolute opacity-20 md:opacity-30 w-[120px] md:w-[180px] lg:w-[200px] right-2 bottom-2"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
