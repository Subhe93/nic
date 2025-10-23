import Link from "next/link";
import Loading from "./BrandBlogSkeleton"
export default function BrandsPage() {
  const cards = [
    {
      src: "/Assets/Images/Brands/bg.jpg",
      alt: "Brand 1",
      name: "Brand 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, turpis sed malesuada placerat, urna dui tristique ligula, sed ultricies ligula turpis in lectus. Donec sed mi a neque fermentum consectetur.",
    },
    {
      src: "/Assets/Images/Brands/bg.jpg",
      alt: "Brand 2",
      name: "Brand 2",
      description:
        "Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      src: "/Assets/Images/Brands/bg.jpg",
      alt: "Brand 3",
      name: "Brand 3",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sit amet mauris vitae ligula lacinia ultrices.",
    },
  ];

  return (

    // <div className="md:mx-7 flex flex-col justify-center mt-5">
    //    <div className="grid md:grid-cols-2 mx-auto  gap-5 md:gap-20">
    //   <Loading />
    //   <Loading />
    //    </div>
    // </div>
    <div className="md:mx-7 flex flex-col justify-center mt-5" key={'brands'}>
      <div className="grid md:grid-cols-2 mx-auto gap-20">
        {cards.map((card, index) => (
          <Link href="/brands/nike" key={index}>
            <div
              key={index}
              className="relative w-full cursor-pointer group h-full min-w-[350px] md:min-w-[500px] md:min-h-[400px] min-h-[415px] lg:min-w-[600px] lg:min-h-[400px]"
            >
              <div className="inverted-radius-brands min-w-full min-h-full relative overflow-hidden rounded-[18px]">
                <img
                  src={card.src}
                  className="absolute top-0 left-0 group-hover:scale-105 transition-all duration-75 z-10 w-full h-full object-cover rounded-[18px]"
                  alt={card.alt}
                />
              </div>

              {/* Text Box */}
              <div className="bg-white rounded-[20px] absolute bottom-3 left-3 z-20 p-4 sm:p-5 mr-24 md:mr-28 lg:mr-28">
                {card.description}
              </div>

              {/* Icon Box */}
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] bg-secondary rounded-[18px] absolute bottom-3 right-3 z-30 flex items-center justify-center group-hover:scale-105 transition-all duration-75">
                <img
                  src="/Assets/Images/Brands/arrow.png"
                  className="w-[28px]  h-[28px] sm:w-[34px] sm:h-[34px] lg:w-[38px] lg:h-[38px]"
                  alt="Arrow"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
