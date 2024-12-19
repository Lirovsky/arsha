import ImageAccordion from "../../img/why-us.png";
import Accordion from "../../components/Accordion";

export default function Questions() {
  return (
    <div className="w-full pt-20 pb-10 bg-gray-100">
      <div className="container px-10 mx-auto flex flex-col items-center justify-evenly gap-10 lg:flex-row md:text-left md:px-0 lg:px-5">
        <div className="w-full m-auto py-4 lg:order-2">
          <img
            src={ImageAccordion}
            alt="Imagem de um banco de dados"
            className="w-full mx-auto animate-updown"
          />
        </div>
        <div className="w-full mx-auto md:ps-5">
          <h3 className="text-2xl text-sky-600 md:text-4xl">
            Eum ipsam laborum deleniti{" "}
            <span className="font-semibold">velit pariatur architecto aut nihil </span>
          </h3>
          <p className="text-lg py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
          <div className="w-full">
            <Accordion
              icon="01"
              title="Non consectetur a erat nam at lectus urna duis?"
              answer="Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
            />
            <Accordion
              icon="02"
              title="Feugiat scelerisque varius morbi enim nunc?"
              answer="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
            />
            <Accordion
              icon="03"
              title="Dolor sit amet consectetur adipiscing elit?"
              answer="Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
