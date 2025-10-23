import { Breadcrumb, Drawer } from "antd";
import Link from "next/link";
export default function BrandDetails() {
  return (
    <div className="md:mx-7 mx-3">
      <div className="md:px-14 md:pb-7 pt-14 pb-7 px-3 font-Main md:pt-24 rounded-b-3xl bg-[#D2D4FF]   mb-7 "key={'BrandDetails'}>
        <Breadcrumb
          separator=">"
          items={[
            { title: <Link href="/">Home</Link> },
            {
              title: <Link href='/'>test</Link>,
            },
          ]}
        />
        <h2 className="font-Main font-bold md:text-[3rem] capitalize">test</h2>
      </div>
      <img
        src="/Assets/Images/Brands/bg.jpg"
        className="min-w-full object-cover max-h-[430px] rounded-[20px]"
        alt=""
      />
      <p className="font-Raleway font-[18px] md:mt-10 mt-3  text-white lg:w-[800px] md:w-[500px]  text-center w-fit mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
        voluptatibus error similique dignissimos quae sed blanditiis. Debitis
        quo inventore amet! Veniam necessitatibus id illum similique nulla
        architecto ipsa molestias itaque fuga tenetur dolores alias nesciunt
        incidunt ullam saepe consectetur quidem, eligendi iste debitis dolorem
        recusandae vero illo. Quibusdam, alias nobis.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-5 lg:gap-10 mt-3 md:mt-10">
        <img
          src="/Assets/Images/Brands/bg.jpg"
          alt=""
          className="rounded-[20px]"
        />
        <img
          src="/Assets/Images/Brands/bg.jpg"
          alt=""
          className="rounded-[20px]"
        />
        <img
          src="/Assets/Images/Brands/bg.jpg"
          alt=""
          className="rounded-[20px]"
        />
      </div>

      <div className="flex flex-col md:mx-20 mx-3 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10 items-center lg:mt-10  mt-3 md:max-h-[430px]">
          <p className="font-Raleway text-[18px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            officiis aliquid modi dignissimos nihil ipsum quo, quibusdam
            incidunt, fugiat, ratione cupiditate saepe iusto! Eius doloremque,
            quisquam adipisci quos molestiae nulla saepe perspiciatis doloribus
            debitis iusto ipsam vel fugiat repudiandae natus. Placeat, maiores?
            Minima aliquam vitae neque hic eius alias fugiat iure dignissimos
            reiciendis doloribus architecto tempora, sunt sit voluptates maxime.
          </p>
          <img
            src="/Assets/Images/Brands/bg.jpg"
            className="rounded-[20px] max-h-[430px] object-cover w-full "
            alt=""
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10 items-center lg:mt-10  mt-3 md:max-h-[430px]">
          <img
            src="/Assets/Images/Brands/bg.jpg"
            className="rounded-[20px] max-h-[430px] object-cover w-full "
            alt=""
          />
          <p className="font-Raleway text-[18px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            officiis aliquid modi dignissimos nihil ipsum quo, quibusdam
            incidunt, fugiat, ratione cupiditate saepe iusto! Eius doloremque,
            quisquam adipisci quos molestiae nulla saepe perspiciatis doloribus
            debitis iusto ipsam vel fugiat repudiandae natus. Placeat, maiores?
            Minima aliquam vitae neque hic eius alias fugiat iure dignissimos
            reiciendis doloribus architecto tempora, sunt sit voluptates maxime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10 items-center lg:mt-10  mt-3 md:max-h-[430px]">
          <p className="font-Raleway text-[18px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            officiis aliquid modi dignissimos nihil ipsum quo, quibusdam
            incidunt, fugiat, ratione cupiditate saepe iusto! Eius doloremque,
            quisquam adipisci quos molestiae nulla saepe perspiciatis doloribus
            debitis iusto ipsam vel fugiat repudiandae natus. Placeat, maiores?
            Minima aliquam vitae neque hic eius alias fugiat iure dignissimos
            reiciendis doloribus architecto tempora, sunt sit voluptates maxime.
          </p>
          <img
            src="/Assets/Images/Brands/bg.jpg"
            className="rounded-[20px] max-h-[430px] object-cover w-full "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
