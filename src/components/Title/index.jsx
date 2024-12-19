import { PropTypes } from "prop-types";

export default function Title({ title }) {
  return (
    <div className="m-auto text-center relative">
      <h2 className="font-bold pb-4 text-2xl uppercase text-sky-700 lg:text-4xl">
        {title}
        <span
          className="
                        before:content-[''] before:absolute before:block before:w-32 before:h-px before:bg-sky-400 before:bottom-px before:left-[calc(50%-60px)] 
                        after:content-[''] after:absolute after:block after:w-10 after:h-1 after:bg-sky-700 after:bottom-0 after:left-[calc(50%-20px)]"
        ></span>
      </h2>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
