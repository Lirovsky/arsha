import Accordion from "../../components/Accordion";
import Title from "../../components/Title";

export default function FAQ() {
  return (
    <div className="w-full py-10 bg-gray-200">
      <div className="container mx-auto py-14">
        <Title title={"Frequently Asked Questions"} />
        <p className="text-center text-lg pt-5 pb-16 px-10 md:px-0">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
          quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
          suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="w-10/12 mx-auto">
          <Accordion
            title="Non consectetur a erat nam at lectus urna duis?"
            answer="Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Feugiat pretium nibh ipsum consequat."
          />
          <Accordion
            title="Feugiat scelerisque varius morbi enim nunc?"
            answer="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
          />
          <Accordion
            title="Dolor sit amet consectetur elit ugbe bit alon?"
            answer="Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis."
          />
          <Accordion
            title="Tempus quam pellentesque nec rasbas turg hit?"
            answer="Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in."
          />
          <Accordion
            title="Tortor vitae lugus ber ig purus faucibus ornare?"
            answer="Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque."
          />
        </div>
      </div>
    </div>
  );
}
