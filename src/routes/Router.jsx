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
import UserProfile from '../components/User/UserProfile';
import GroupDetails from '../components/GroupDetails';
import UpdateGroup from '../components/Groups/UpdateGroup';


const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        children: [
            { index: true, Component: Home },
            {
                path: "register",
                Component: Register
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "allgroup",
                loader: () => fetch('https://hobby-hub-server-ten.vercel.app/groups'),
                element: <PrivateRoute>
                    <AllGroup></AllGroup>
                </PrivateRoute>
            },
            {
                path: "creategroup",
                element: <PrivateRoute>
                    <CreateGroup></CreateGroup>
                </PrivateRoute>
            },
            {
                path: "mygroups",
                loader: () => fetch(`https://hobby-hub-server-ten.vercel.app/groups`),
                element: <PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>
            },
            {
                path: "groups/:id",
                element: <PrivateRoute>
                    <GroupDetails></GroupDetails>
                </PrivateRoute>
            },
            {
                path: "updateGroup/:id",
                loader: ({ params }) => fetch(`https://hobby-hub-server-ten.vercel.app/groups/${params.id}`),
                // loader: () => fetch(`https://hobby-hub-server-ten.vercel.app/groups`),
                element: <PrivateRoute><UpdateGroup /></PrivateRoute>
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }


])

export default Router;