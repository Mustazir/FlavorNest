import MenuBanner from "./MenuBanner";
import { Helmet } from "react-helmet-async";

import Recommends from "../Components/Recommends";
import TodaysOffer from "./TodaysOffer";
import Dessert from "./Dessert";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <section>
      <Helmet>
        <title>FlavourNest | Menu</title>
      </Helmet>
      <MenuBanner></MenuBanner>

      <div className="max-w-screen-xl mx-auto">
        <TodaysOffer></TodaysOffer>
      </div>
      <Dessert></Dessert>
      <Pizza></Pizza>
    </section>
  );
};

export default Menu;
