import Brand1 from "../../img/clients/client-1.png";
import Brand2 from "../../img/clients/client-2.png";
import Brand3 from "../../img/clients/client-3.png";
import Brand4 from "../../img/clients/client-4.png";
import Brand5 from "../../img/clients/client-5.png";
import Brand6 from "../../img/clients/client-6.png";

export default function Brands() {
  const brands = [
    { id: 1, img: Brand1, alt: "Logotipo da empresa Myob" },
    { id: 2, img: Brand2, alt: "Logotipo da empresa Belibo" },
    { id: 3, img: Brand3, alt: "Logotipo da empresa LifeGroups" },
    { id: 4, img: Brand4, alt: "Logotipo da empresa Lilly" },
    { id: 5, img: Brand5, alt: "Logotipo da empresa Cítrus" },
    { id: 6, img: Brand6, alt: "Logotipo da empresa Trustly" },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {brands.map((item) => (
            <div
              key={item.id}
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 h-16 w-44 flex items-center justify-center"
            >
              <img src={item.img} alt={item.alt} className=" h-full p-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
