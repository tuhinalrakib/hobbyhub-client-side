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
import Loading from '../components/Loading';


const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        hydrateFallbackElement: <Loading></Loading>,
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
                loader: () => fetch('https://hobbyhub-server.onrender.com/groups'),
                element: <PrivateRoute>
                    <AllGroup></AllGroup>
                </PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "creategroup",
                element: <PrivateRoute>
                    <CreateGroup></CreateGroup>
                </PrivateRoute>
            },
            {
                path: "mygroups",
                loader: () => fetch(`https://hobbyhub-server.onrender.com/groups`),
                element: <PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "groups/:id",
                loader: ({ params }) => fetch(`https://hobbyhub-server.onrender.com/groups/${params.id}`),
                element: <PrivateRoute>
                    <GroupDetails></GroupDetails>
                </PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "updateGroup/:id",
                loader: ({ params }) => fetch(`https://hobbyhub-server.onrender.com/groups/${params.id}`),
                // loader: () => fetch(`https://hobbyhub-server.onrender.com/groups`),
                element: <PrivateRoute><UpdateGroup /></PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }


])

export default Router;