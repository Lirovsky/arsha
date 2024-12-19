import { BsDribbble, BsFileEarmarkText, BsSpeedometer2, BsStack } from "react-icons/bs";
import Title from "../../components/Title";

export default function Services() {
  const cards = [
    {
      id: 1,
      icon: <BsDribbble />,
      title: "Lorem Ipsum",
      text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
      id: 2,
      icon: <BsFileEarmarkText />,
      title: "Sed ut perspici",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolores.",
    },
    {
      id: 3,
      icon: <BsSpeedometer2 />,
      title: "Magni Dolores",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia nups.",
    },
    {
      id: 4,
      icon: <BsStack />,
      title: "Nemo Enim",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    },
  ];
  return (
    <div id="services" className="bg-gray-100">
      <div className="container mx-auto py-14">
        <Title title={"Services"} />
        <p className="text-center text-lg pt-5 pb-16 px-10 md:px-0">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
          quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
          suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-10 px-10 xl:gap-10">
          {cards.map((item) => (
            <div
              key={item.id}
              className="w-full bg-white py-8 px-4 shadow-lg md:w-60 lg:w-52 xl:w-64"
            >
              <div className="text-sky-500 text-3xl">{item.icon}</div>
              <h5 className="py-5 text-lg font-semibold">{item.title}</h5>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
