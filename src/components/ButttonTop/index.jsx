import { useEffect, useState } from "react";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

import { IoMdArrowUp } from "react-icons/io";

export default function ButtonTop() {
  const [scrolling, setScrolling] = useState(false);

  // Altera o estado quando rolar 760px
  const handleScroll = () => {
    if (window.scrollY > 760) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Inicia o scroll ao carregar a página
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inicia o botão ao carregar a página
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed top-[92vh] right-3 p-3 rounded-full text-2xl cursor-pointer text-white bg-sky-400 hover:bg-sky-500 transition-all duration-300 ${
        !scrolling ? "hidden" : ""
      }`}
    >
      <IoMdArrowUp />
    </button>
  );
}
