import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Title from "../../components/Title";

import Team1 from "../../img/team/team-1.jpg";
import Team2 from "../../img/team/team-2.jpg";
import Team3 from "../../img/team/team-3.jpg";
import Team4 from "../../img/team/team-4.jpg";

export default function Team() {
  const team = [
    {
      id: 1,
      img: Team1,
      name: "Walter White",
      charge: "Chief Executive Officer",
      text: "Explicabo voluptatem mollitia et repellat qui dolorum quasi.",
      socialIcon1: <BsTwitter />,
      socialLink1: "#",
      socialIcon2: <BsFacebook />,
      socialLink2: "#",
      socialIcon3: <BsInstagram />,
      socialLink3: "#",
      socialIcon4: <BsLinkedin />,
      socialLink4: "#",
    },
    {
      id: 2,
      img: Team2,
      name: "Sarah Jhonson",
      charge: "Product Manager",
      text: "Aut maiores voluptates amet et quis qui senda para lug.",
      socialIcon1: <BsTwitter />,
      socialLink1: "#",
      socialIcon2: <BsFacebook />,
      socialLink2: "#",
      socialIcon3: <BsInstagram />,
      socialLink3: "#",
      socialIcon4: <BsLinkedin />,
      socialLink4: "#",
    },
    {
      id: 3,
      img: Team3,
      name: "William Anderson",
      charge: "CTO",
      text: "Quisquam facilis cum velit laborum corrupti fuga rerum quia.",
      socialIcon1: <BsTwitter />,
      socialLink1: "#",
      socialIcon2: <BsFacebook />,
      socialLink2: "#",
      socialIcon3: <BsInstagram />,
      socialLink3: "#",
      socialIcon4: <BsLinkedin />,
      socialLink4: "#",
    },
    {
      id: 4,
      img: Team4,
      name: "Amanda Jepson",
      charge: "Accountant",
      text: "Dolorum tempora officiis odit laborum officiis et et accusamus.",
      socialIcon1: <BsTwitter />,
      socialLink1: "#",
      socialIcon2: <BsFacebook />,
      socialLink2: "#",
      socialIcon3: <BsInstagram />,
      socialLink3: "#",
      socialIcon4: <BsLinkedin />,
      socialLink4: "#",
    },
  ];

  return (
    <div id="team" className="bg-gray-100">
      <div className="container mx-auto py-14">
        <Title title={"Team"} />
        <p className="text-center text-lg pt-5 pb-16 px-10 md:px-0">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
          quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
          suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="columns-1 lg:columns-2 px-10 lg:px-0">
          {team.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-10 p-8 mt-4  w-full rounded-lg first:mt-0 bg-white shadow-lg transition-al duration-300 hover:-translate-y-2 sm:flex-row"
            >
              <div className="w-40">
                <img src={item.img} alt="" className="rounded-full" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl font-semibold text-sky-500">{item.name}</p>
                <p className="text-lg">{item.charge}</p>
                <hr className="my-3 sm:w-1/4" />
                <p className="text-lg">{item.text}</p>
                <div className="flex justify-center gap-2 mt-5 sm:justify-start">
                  <a href={item.socialLink1}>
                    <div className="bg-sky-100 text-sky-500 text-xl p-3 rounded-full hover:bg-sky-700 hover:text-white">
                      {item.socialIcon1}
                    </div>
                  </a>
                  <a href={item.socialLink2}>
                    <div className="bg-sky-100 text-sky-500 text-xl p-3 rounded-full hover:bg-sky-700 hover:text-white">
                      {item.socialIcon2}
                    </div>
                  </a>
                  <a href={item.socialLink3}>
                    <div className="bg-sky-100 text-sky-500 text-xl p-3 rounded-full hover:bg-sky-700 hover:text-white">
                      {item.socialIcon3}
                    </div>
                  </a>
                  <a href={item.socialLink4}>
                    <div className="bg-sky-100 text-sky-500 text-xl p-3 rounded-full hover:bg-sky-700 hover:text-white">
                      {item.socialIcon4}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
