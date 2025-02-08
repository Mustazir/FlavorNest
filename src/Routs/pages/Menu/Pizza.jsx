import React from "react";
import useMenu from "../../../Shared/useMenu";
import MenuItems from "../../../Shared/MenuItems";
import ButtonP from "../../../Shared/ButtonP";
import pImg from "../../../assets/assets/menu/pizza-bg.jpg";
import Cover from "../../../Shared/Cover";
import { Link, useParams } from "react-router-dom";

const Pizza = () => {
  const [menu] = useMenu();
  const todaysOffer = menu.filter((item) => item.category === "pizza");
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <div className="logo">
        <Cover
          title={"Pizza"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          img={pImg}
        ></Cover>
      </div>

      <div className="max-w-screen-xl mx-auto my-24">
        <div className="p-3 md:grid grid-cols-2 gap-8 mb-8">
          {todaysOffer.map((item) => (
            <MenuItems key={item._id} item={item}></MenuItems>
          ))}
        </div>
        {todaysOffer.length > 0 && (
          <Link to={`/order?category=pizza`}>
            <div className="flex justify-center">
              <ButtonP ButtonInfo={"ORDER YOUR FAVOURITE FOOD"}></ButtonP>
            </div>
          </Link>
        )}
      </div>
      <style>
        {`
          .logo h1 {
            font-size: 45px !important;
          }
          .logo p {
            font-size: 16px !important;
          }
        `}
      </style>
    </div>
  );
};

export default Pizza;
