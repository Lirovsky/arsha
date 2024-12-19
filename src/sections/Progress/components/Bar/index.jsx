import { PropTypes } from "prop-types";

export default function Bar({ title, percentage }) {
  return (
    <div>
      <div className="flex justify-between text-sky-700 font-semibold">
        <span>{title}</span>
        <span>{percentage}%</span>
      </div>
      <div className="bg-sky-200 h-3 mt-1">
        <div className={`bg-sky-700 w-[${percentage}%] h-full`}></div>
      </div>
    </div>
  );
}

Bar.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.string,
};
