import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../Layouts/HomeLayouts';
import Home from '../components/Home';
import Register from '../components/User/Register';


const Router = createBrowserRouter([
    {
        path: "/",
        loader : ()=>fetch('https://hobbyhub-server.vercel.app/'),
        Component : HomeLayouts,
        children: [
            { index: true, Component: Home },
            {
                path : "register",
                Component : Register
            }
        ]
    }
])

export default Router;