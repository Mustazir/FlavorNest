import Banner from "./Components/Banner";
import Catagory from "./Components/Catagory";
import Contact from "./Components/Contact";
import FeaturedItem from "./Components/FeaturedItem";
import Info from "./Components/Info";
import Recommends from "./Components/Recommends";
import PopulerMenu from "./PopulerMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto ">
        <Catagory></Catagory>
        <Info></Info>
        <PopulerMenu></PopulerMenu>
        <Contact></Contact>
        <Recommends></Recommends>
      </div>
      <FeaturedItem></FeaturedItem>
    </div>
  );
};

export default Home;
