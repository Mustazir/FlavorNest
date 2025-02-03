import Cover from "../../../Shared/Cover";
import MenuBanner from "./MenuBanner";
import { Helmet } from "react-helmet-async";
import MenuImg from "../../../assets/assets/menu/banner3.jpg"
import Recommends from "../Components/Recommends";

const Menu = () => {
  return (
    <section>
      <Helmet>
        <title>FlavourNest | Menu</title>
       
      </Helmet>

      <Cover img={MenuImg}></Cover>



      <Recommends></Recommends>
      
      <div></div>
    </section>
  );
};

export default Menu;
