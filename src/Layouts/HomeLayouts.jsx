import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Scroll from '../pages/Home/Scroll';

const HomeLayouts = () => {

    return (
        <div >
            <Navbar ></Navbar>
            <Scroll></Scroll>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;