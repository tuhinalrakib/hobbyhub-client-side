import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../Layouts/HomeLayouts';
import Home from '../components/Home';

// const dataPromise = fetch("https://hobbyhub-server.vercel.app/home").then(res=>res.json())

const Router = createBrowserRouter([
    {
        path: "/",
        loader : ()=>fetch('https://hobbyhub-server.vercel.app/'),
        Component : HomeLayouts,
        children: [
            { index: true, Component: Home }
        ]
    }
])

export default Router;