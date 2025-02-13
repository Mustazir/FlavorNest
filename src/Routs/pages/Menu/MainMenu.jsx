import React from "react";
import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner";
import TodaysOffer from "./TodaysOffer";
import useMenu from "../../../Shared/useMenu";
import Cover from "../../../Shared/Cover";
import MenuItems from "../../../Shared/MenuItems";
import ButtonP from "../../../Shared/ButtonP";
import Card from "../../../Shared/Card";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const [menu] = useMenu();

  // "popular" বাদ দিয়ে ক্যাটাগরি লিস্ট তৈরি
  const uniqueCategories = [
    "offered",
    ...[...new Set(menu.map((item) => item.category))].filter(
      (category) => category !== "offered" && category !== "popular"
    ),
  ];

  return (
    <div>
      <Helmet>
        <title>FlavourNest | Menu</title>
      </Helmet>

      <MenuBanner />
      <TodaysOffer />

      <div className="max-w-screen-xl mx-auto">
        {uniqueCategories.map((category) => {
          const categoryMenu = menu.filter(
            (item) => item.category === category
          );

          return categoryMenu.length > 0 ? (
            <div key={category}>
              <Cover
                title={category.toUpperCase()}
                subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
                {categoryMenu.map((item) => (
                  <Card
                    key={item._id}
                    name={item.name}
                    description={item.recipe}
                    img={item.image}
                  />
                ))}
              </div>
              <Link to={`/order/${category}`}>
                <div className="flex justify-center my-8">
                  <ButtonP ButtonInfo="ORDER YOUR FAVOURITE FOOD" />
                </div>
              </Link>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default MainMenu;
