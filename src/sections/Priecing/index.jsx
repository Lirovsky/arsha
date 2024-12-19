import { IoClose } from "react-icons/io5";

import Title from "../../components/Title";
import Card from "./components/Card";

export default function Priecing() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-14">
        <Title title={"Priecing"} />
        <p className="text-center text-lg pt-5 pb-16 px-10 md:px-0">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
          quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
          suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="columns-1 lg:columns-3 px-10 lg:px-0">
          <Card
            title="Free Plan"
            price="$0"
            icon1={<IoClose />}
            icon2={<IoClose />}
            textOff1="text-gray-400 line-through"
            textOff2="text-gray-400 line-through"
          />
          <Card
            title="Business Plan"
            price="$29"
            icon2={<IoClose />}
            textOff2="text-gray-400 line-through"
          />
          <Card title="Developer Plan" price="$49" />
        </div>
      </div>
    </div>
  );
}
