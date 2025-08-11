import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../Layouts/HomeLayouts';
import Home from '../pages/Home/Home';
import ErrorPage from '../ErrorPage';
import GroupDetails from '../components/GroupDetails';
import Loading from '../components/Loading';
import Register from '../pages/Authentication/Register';
import Login from '../pages/Authentication/Login';
import AllGroup from '../pages/AllGroup/AllGroup';
import CreateGroup from '../pages/Groups/CreateGroup';
import MyGroup from '../pages/Groups/MyGroup';
import UpdateGroup from '../pages/Groups/UpdateGroup';
import PrivateRoute from '../contexts/PrivateRoute';


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
                element: <Login />
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