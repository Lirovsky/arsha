import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";

import Title from "../../components/Title";
import Maps from "./components/Maps";
import Form from "./components/Form";

export default function Contact() {
  const contact = [
    {
      icon: <BsGeoAlt />,
      title: "Location:",
      link: "#",
      text: "A108 Adam Street, New York, NY 535022",
    },
    {
      icon: <BsEnvelope />,
      title: "Email:",
      link: "#",
      text: "info@example.com",
    },
    {
      icon: <BsPhone />,
      title: "Call:",
      link: "#",
      text: "+1 5589 55488 55",
    },
  ];
  return (
    <div id="contact" className="bg-gray-100">
      <div className="container mx-auto py-14">
        <Title title={"Contact"} />
        <p className="text-center text-lg pt-5 pb-16 px-10 md:px-0">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
          quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
          suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="flex flex-col gap-10 mt-10 px-10 lg:flex-row lg:items-stretch">
          <div className="px-5 py-10 w-full text-lg border-y-8 border-sky-500 bg-white lg:w-8/12">
            {contact.map((item) => (
              <div key={item.title} className="flex items-center py-4">
                <a
                  href={item.link}
                  className="bg-sky-100 text-sky-500 text-xl p-3 rounded-full hover:bg-sky-700 hover:text-white"
                >
                  {item.icon}
                </a>
                <div className="ps-3">
                  <h5 className="font-bold text-xl text-sky-600">
                    {item.title}
                    <br />
                    <span className="font-normal text-lg">{item.text}</span>
                  </h5>
                </div>
              </div>
            ))}
            <div className="mt-10">
              <Maps />
            </div>
          </div>

          <div className="w-full text-lg lg:flex lg:justify-center">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
