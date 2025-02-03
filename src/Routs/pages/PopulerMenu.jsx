import { useEffect, useState } from "react";
import Title from "../../Shared/title";
import MenuItems from "../../Shared/MenuItems";
import useMenu from "../../Shared/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const populerItem = menu.filter((item) => item.category === "popular");

 

  return (
    <section className="my-32">
      <Title
        heading={"FROM OUR MENU"}
        subheading={"---Check it out---"}
      ></Title>

      <div className="p-3 md:grid grid-cols-2 gap-8 mb-8">
        {populerItem.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <button className="btn btn-outline btn-accent mx-auto items-center flex">
        View Full Menu
      </button>
    </section>
  );
};

export default PopulerMenu;
