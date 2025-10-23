export default function OurClients() {
  const ourClients = [
    { src: "/Assets/Images/OurClients/client_1.png" },
    { src: "/Assets/Images/OurClients/client_2.png" },
    { src: "/Assets/Images/OurClients/client_3.png" },
    { src: "/Assets/Images/OurClients/client_4.png" },
    { src: "/Assets/Images/OurClients/client_5.png" },
    { src: "/Assets/Images/OurClients/client_6.png" },
  ];

  return (
    <div className="flex md:px-7 md:py-7 relative flex-col md:gap-10 items-center"
    key={'OurClients'}>
      <h3 className="font-bold font-Secondary w-fit md:text-[1.5rem] relative leading-[4rem] text-white mx-auto">
        Our Brands
      </h3>
      {/* Scrollable container */}
      <div className="relative w-full  flex items-center justify-center  overflow-x-scroll scrollbar-hide">
        <div className="flex gap-5 md:gap-10 items-center justify-start whitespace-nowrap">
          {ourClients.map((client, index) => (
            <img
              key={index}
              src={client.src}
              className="w-[150px] inline-block"
              alt=""
              draggable="false"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
