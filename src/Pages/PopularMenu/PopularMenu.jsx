import { useEffect, useState } from "react";
import SectionTitle from "../../Components/Container/SectionTitle/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(
          (items) => items.category === "popular"
        );

        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="my-10 md:my-24">
      {/* section title */}

      <SectionTitle
        SubHeading={"From Our Menu"}
        Heading={"Popular Items"}
      ></SectionTitle>

      {/* find each menu */}

      <div className="grid  md:grid-cols-2 gap-8 ">
        {menu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center mt-5 md:mt-10">
        <button className="text-sm md:text-xl font-inter font-medium pb-1 px-5 uppercase border-b-2 rounded-md border-[#1F2937]">
          View full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
