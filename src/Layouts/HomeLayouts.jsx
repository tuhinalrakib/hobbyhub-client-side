import React, { Suspense, use } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { AuthContext } from '../contexts/AuthContext';
import Scroll from '../pages/Scroll';

// const userData = (email)=>{
//     return fetch(`https://hobbyhub-server.onrender.com/users?email=${email}`).then(res=>res.json())
// }

const HomeLayouts = () => { 
    const { user } = use(AuthContext)
    console.log(user)

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