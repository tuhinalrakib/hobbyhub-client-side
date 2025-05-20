import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../components/Footer';

const HomeLayouts = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;