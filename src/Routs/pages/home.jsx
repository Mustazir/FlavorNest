import Banner from "./Components/Banner";
import Catagory from "./Components/Catagory";
import Contact from "./Components/Contact";
import FeaturedItem from "./Components/FeaturedItem";
import Info from "./Components/Info";
import Recommends from "./Components/Recommends";
import Review from "./Components/Review";
import PopulerMenu from "./PopulerMenu";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FlavourNest | Home</title>
        
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto ">
        <Catagory></Catagory>
        <Info></Info>
        <PopulerMenu></PopulerMenu>
        <Contact></Contact>
        <Recommends></Recommends>
      </div>
      <FeaturedItem></FeaturedItem>
      <div className="max-w-screen-xl mx-auto ">
         <Review ></Review>
      </div>
     
    </div>
  );
};

export default Home;
