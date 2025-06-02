import React, { use, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { AuthContext } from '../contexts/AuthContext';

const usersFetch = async (email) => {
    return fetch(`https://hobbyhub-server.onrender.com/users?email=${email}`).then(res=>res.json())
}

const HomeLayouts = () => {
    const {user} = use(AuthContext)
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user?.email) {
            usersFetch(user.email).then(setUserData);
        }
    }, [user?.email]);

    return (
        <div >
            <Navbar userData={userData}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;