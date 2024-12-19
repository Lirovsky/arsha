import { PropTypes } from "prop-types";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function Accordion({ icon = <FaRegQuestionCircle />, title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="p-4 my-4 bg-white">
      <button onClick={handleAccordion} className="flex justify-between w-full">
        <p
          className={`flex items-center text-lg text-start pe-5 transition-all duration-300 hover:text-sky-500 ${
            accordionOpen && "text-sky-500"
          }`}
        >
          <span className="me-2 text-sky-500 text-2xl font-bold">{icon}</span>
          {title}
        </p>

        {accordionOpen ? (
          <IoIosArrowDown className="text-4xl -rotate-180 transition-all duration-300 text-sky-500 " />
        ) : (
          <IoIosArrowDown className="text-4xl transition-all duration-300 text-sky-500" />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 
                ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div
          className={`text-lg overflow-hidden transition-all duration-300
                    ${accordionOpen ? "pt-5" : "pt-0"}`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
