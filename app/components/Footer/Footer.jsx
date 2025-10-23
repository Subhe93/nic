// import { Link } from "react-router-dom";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex bg-blackk px-5 py-7 md:px-7 md:py-7"
    
    key={'Footer'}>
      <div className="flex flex-col bg-[#D2D4FF] w-full gap-7 md:gap-10 rounded-3xl px-7 py-10 md:px-20 md:py-16 font-Secondary">
        {/* Top Section - Logo, Socials, Contact, QR */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-7 md:gap-10">
          {/* Logo & Socials */}
          <div className="flex flex-col items-center md:items-start gap-5 md:gap-10">
            <img
              src="/Assets/Images/Logo.png"
              alt="Logo"
              className="w-[200px] md:w-[300px]"
            />
            <ul className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5">
              {["Linkedin", "Facebook", "Instagram"].map((platform) => (
                <li key={platform}>
                  <Link href={"#"} className="flex items-center text-blackk font-Secondary gap-2">
                    <p>{platform}</p>
                    <img
                      src="/Assets/Images/Footer/top-right.png"
                      width={24}
                      alt=""
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col text-center md:text-left">
            <h3 className="font-bold">UAE-Dubai</h3>
            <p>+71 51 150 6543</p>
            <p>info@name.com</p>
            <p>Friedrichstr. 114, 10117 Berlin, Germany</p>
          </div>

          {/* QR Code */}
          <div>
            <img
              src="/Assets/Images/Footer/qr-code.png"
              alt="QR Code"
              className="w-24 md:w-auto"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full border-blackk my-5" />

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-7">
          {["About Us", "Our Work", "Culture", "Career", "Blog"].map((item) => (
            <button
              key={item}
              className="rounded-full px-4 py-2 md:px-5 md:py-2 bg-transparent border-[1px] border-blackk text-blackk font-bold"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
