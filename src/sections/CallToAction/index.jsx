export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 from-10% to-sky-700 to-90% md:px-10">
      <div className="container py-20 px-10 mx-auto text-white ">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="w-full text-center md:w-9/12 md:text-left">
            <h4 className="font-semibold text-3xl mb-5">Call To Action</h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <a
            href="#"
            className="mt-5 px-6 py-3 text-lg text-white border-2 border-sky-500 rounded-full transition hover:bg-sky-500 lg:mt-0"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
