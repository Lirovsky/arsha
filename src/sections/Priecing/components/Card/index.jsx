import { PropTypes } from "prop-types";
import { FaCheck } from "react-icons/fa6";

export default function Card({
  title,
  price,
  icon1 = <FaCheck />,
  icon2 = <FaCheck />,
  textOff1,
  textOff2,
}) {
  return (
    <div className="flex flex-col gap-10 w-full rounded-lg bg-white p-8 shadow-lg border-t-8 border-transparent hover:border-sky-500">
      <p className="font-bold text-lg">{title}</p>
      <p className="flex flex-col text-6xl">
        {price}
        <span className="text-lg font-bold text-sky-500">per month</span>
      </p>
      <div className="text-center sm:text-left">
        <div className="flex items-center gap-2 mb-3">
          <FaCheck />
          <p className="text-lg xl:text-xl">Quam adipiscing vitae proin</p>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <FaCheck />
          <p className="text-lg xl:text-xl">Nulla at volutpat diam uteera</p>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <FaCheck />
          <p className="text-lg xl:text-xl">Nec feugiat nisl pretium</p>
        </div>
        <div className={`flex items-center gap-2 mb-3 ${textOff1}`}>
          {icon1}
          <p className={`text-lg xl:text-xl`}>Nulla at volutpat diam uteera</p>
        </div>
        <div className={`flex items-center gap-2 mb-3 ${textOff2}`}>
          {icon2}
          <p className={`text-lg xl:text-xl`}>Massa ultricies mi quis hendrerit</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  icon1: PropTypes.element,
  icon2: PropTypes.element,
  textOff1: PropTypes.string,
  textOff2: PropTypes.string,
};
