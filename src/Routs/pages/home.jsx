import Banner from "./Components/Banner";
import Catagory from "./Components/Catagory";
import Contact from "./Components/Contact";
import Info from "./Components/Info";
import Recommends from "./Components/Recommends";
import PopulerMenu from "./PopulerMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Info></Info>
            <PopulerMenu></PopulerMenu>
            <Contact></Contact>
            <Recommends></Recommends>
        </div>
    );
};

export default Home;