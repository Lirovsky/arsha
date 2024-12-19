import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  const links1 = [
    {
      id: 1,
      link: "Home",
      to: "/",
    },
    {
      id: 2,
      link: "About us",
      to: "/",
    },
    {
      id: 3,
      link: "Services",
      to: "/",
    },
    {
      id: 4,
      link: "Terms of service",
      to: "/",
    },
    {
      id: 5,
      link: "Privacy policy",
      to: "/",
    },
  ];
  const links2 = [
    {
      id: 1,
      link: "Web Design",
      to: "/",
    },
    {
      id: 2,
      link: "Web Development",
      to: "/",
    },
    {
      id: 3,
      link: "Product Management",
      to: "/",
    },
    {
      id: 4,
      link: "Marketing",
      to: "/",
    },
    {
      id: 5,
      link: "Graphic Design",
      to: "/",
    },
  ];
  const links3 = [
    {
      id: 1,
      icon: <FaTwitter />,
      to: "/",
    },
    {
      id: 2,
      icon: <FaFacebook />,
      to: "/",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      to: "/",
    },
    {
      id: 4,
      icon: <FaLinkedin />,
      to: "/",
    },
  ];

  return (
    <div className="pt-10 md:pt-20">
      <div className="container px-10 mx-auto md:py-5 lg:flex lg:px-5">
        <div className="flex flex-col justify-evenly gap-10 mx-auto lg:flex-row">
          <div className="w-full lg:w-2/6">
            <h3 className="pb-3 text-2xl font-bold text-sky-700">ARSHA</h3>
            <address className="pt-5 pb-3">
              <p>A108 Adam Street, New York, NY 535022, United States</p>
            </address>
            <ul>
              <li className="mb-2">
                <span className="font-bold me-2">Phone:</span>
                <a href="#" className="hover:text-sky-500">
                  +1 5589 55488 55
                </a>
              </li>
              <li className="mb-2">
                <span className="font-bold me-2">Email:</span>
                <a href="#" className="hover:text-sky-500">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="pb-3 text-lg font-bold text-sky-700">Useful Links</h3>
            <ul>
              {links1.map((item) => (
                <li key={item.id} className="flex items-center mt-3">
                  <IoIosArrowForward />
                  <a to={item.to} className="cursor-pointer hover:text-sky-500">
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="pb-3 text-lg font-bold text-sky-700">Our Services</h3>
            <ul>
              {links2.map((item) => (
                <li key={item.id} className="flex items-center mt-3">
                  <IoIosArrowForward />
                  <a to={item.to} className="cursor-pointer hover:text-sky-500">
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-2/6">
            <h3 className="pb-3 text-lg font-bold text-sky-700">Our Social Networks</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="flex justify-center gap-4 mt-8 sm:justify-start">
              {links3.map((item) => (
                <a key={item.id} href={item.to}>
                  <div className="bg-sky-500 text-white text-xl p-3 rounded-full hover:bg-sky-700 hover:text-white">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 mt-10 text-white bg-gradient-to-r from-emerald-600 from-10% to-sky-700 to-90%">
        <div className="text-center">
          <p>
            © Copyright <span className="font-bold">Arsha</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
