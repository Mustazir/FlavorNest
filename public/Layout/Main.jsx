
import { Outlet } from 'react-router-dom';
import Nav from '../../src/Routs/pages/Components/Nav';
import Footer from '../../src/Routs/pages/Components/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;