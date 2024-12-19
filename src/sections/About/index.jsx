import { IoCheckmarkDone } from "react-icons/io5";
import Title from "../../components/Title";

export default function About() {
  return (
    <div id="about" className="bg-white">
      <div className="container mx-auto py-14">
        <Title title={"About"} />
        <div className="container flex flex-col px-10 py-10 mx-auto text-lg md:text-left md:px-0 lg:flex-row lg:px-5 lg:gap-10">
          <div className="w-full m-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-2 pt-5">
              <IoCheckmarkDone className="text-sky-500 text-2xl" />
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="flex items-center gap-2 pt-5">
              <IoCheckmarkDone className="text-sky-500 text-2xl" />
              <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
            <div className="flex items-center gap-2 pt-5">
              <IoCheckmarkDone className="text-sky-500 text-2xl" />
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <div className="w-full mx-auto pt-5 lg:pt-0">
            <p className="mb-10">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <a
              href="#"
              className="px-6 py-2 text-lg border rounded-lg transition text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
