import ImageSkills from "../../img/skills.png";
import Bar from "./components/Bar";

export default function Progress() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="container px-10 mx-auto flex flex-col items-center justify-evenly gap-10 lg:flex-row md:text-left md:px-0 lg:px-5">
        <div className="w-full m-auto py-4">
          <img src={ImageSkills} className="w-full mx-auto animate-updown" />
        </div>
        <div className="w-full mx-auto md:ps-5">
          <h3 className="text-2xl text-sky-600 font-semibold md:text-4xl">
            Voluptatem dignissimos provident quasi corporis voluptates
          </h3>
          <p className="text-lg italic py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="w-full flex flex-col gap-5">
            <Bar title="HTML" width="w-[100%]" percentage="100" />
            <Bar title="CSS" width="w-[90%]" percentage="90" />
            <Bar title="JAVASCRIPT" width="w-[75%]" percentage="75" />
            <Bar title="PHOTOSHOP" width="w-[55%]" percentage="55" />
          </div>
        </div>
      </div>
    </div>
  );
}
