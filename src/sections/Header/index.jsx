import ImageHeader from "../../img/hero-img.png";

export default function Header() {
  return (
    <div
      id="home"
      className=" w-full pt-20 pb-10 bg-gradient-to-r from-emerald-600 from-10% to-sky-700 to-90%"
    >
      <div className="container flex flex-col items-center justify-evenly gap-10 px-10 mx-auto text-center md:flex-row md:text-left md:px-0 lg:px-5">
        <div className="w-full m-auto py-4 md:order-2">
          <img
            src={ImageHeader}
            alt="Desenho de diversos eletrônicos e planilhas"
            className="w-full mx-auto animate-updown"
          />
        </div>
        <div className="w-full mx-auto text-white md:ps-5">
          <h2 className="font-bold text-2xl pb-4 lg:text-4xl">
            Better Solutions For Your Business
          </h2>
          <p className="pb-8 text-lg">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <a href="#" className="py-2 px-5 rounded-full bg-sky-500 hover:bg-sky-400">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
