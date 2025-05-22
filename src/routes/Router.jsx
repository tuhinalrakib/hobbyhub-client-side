import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../Layouts/HomeLayouts';
import Home from '../components/Home';
import Register from '../components/User/Register';
import AllGroup from '../components/AllGroup/AllGroup';
import PrivateRoute from '../contexts/PrivateRoute';
import Login from '../components/User/Login';
import CreateGroup from '../components/Groups/CreateGroup';
import MyGroup from '../components/Groups/MyGroup';
import ErrorPage from '../components/ErrorPage';


const Router = createBrowserRouter([
    {
        path: "/",
        Component : HomeLayouts,
        children: [
            { index: true, Component: Home },
            {
                path : "register",
                Component : Register
            },
            {
                path : "login",
                element : <Login></Login>
            },
            {
                path : "allgroup",
                element : <PrivateRoute>
                    <AllGroup></AllGroup>
                </PrivateRoute>
            },
            {
                path : "creategroup",
                element : <PrivateRoute>
                    <CreateGroup></CreateGroup>
                </PrivateRoute>
            },
            {
                path : "mygroup",
                element : <PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>
            }
        ]
    },
    {
        path : "*",
        Component : ErrorPage
    }
])

export default Router;