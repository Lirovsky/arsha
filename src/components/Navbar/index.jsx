import { useState, useEffect } from "react";
import ScrollSpy from "react-scrollspy-navigation";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Trocar a visibilidade
  const handleNav = () => {
    setNav(!nav);
  };

  // Altera o scrolling para true ou false
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  // Inicia a função de scrolling quando a página carrega
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "About", link: "#about" },
    { id: 3, title: "Services", link: "#services" },
    { id: 4, title: "Portfólio", link: "#portfolio" },
    { id: 5, title: "Team", link: "#team" },
    { id: 6, title: "Contact", link: "#contact" },
  ];

  return (
    <div
      className={`flex items-center justify-between px-8 h-20 w-full mx-auto fixed text-white lg:px-16 transition-all duration-500 z-10 ${
        scrolling && "bg-sky-800/90 h-24"
      }`}
    >
      {/* Desktop */}
      <h1 className="text-3xl font-bold md:text-xl lg:text-2xl">ARSHA</h1>
      <ul className="hidden md:flex ms-auto gap-2 lg:gap-6">
        <ScrollSpy activeClass="active-menu">
          {navItems.map((item) => (
            <a
              href={item.link}
              key={item.id}
              className="px-2 py-3 text-lg text-white transition-all hover:text-sky-500  lg:text-xl"
            >
              {item.title}
            </a>
          ))}
        </ScrollSpy>
      </ul>
      <a
        href="#"
        className="hidden md:flex ms-3 px-5 py-1 text-lg text-white border-2 border-sky-500 rounded-full transition hover:bg-sky-500 lg:ms-5 lg:px-7 lg:py-3"
      >
        Get Started
      </a>

      {/* Mobile */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <FaXmark size={40} /> : <FaBars size={40} />}
      </div>
      <ul
        className={`flex transition-all duration-500 flex-col fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-100 bg-sky-800/90 ${
          !nav ? "left-[-100%]" : ""
        }`}
      >
        <h1 className="text-3xl font-bold mt-7 mb-5 ms-8">ARSHA</h1>
        <ScrollSpy activeClass="active-menu">
          {navItems.map((item) => (
            <a
              href={item.link}
              onClick={handleNav}
              key={item.id}
              className="ms-8 px-2 py-3 text-2xl  text-white transition hover:text-sky-500"
            >
              {item.title}
            </a>
          ))}
        </ScrollSpy>
      </ul>
    </div>
  );
}
