import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Assignments from "../pages/Assignments/Assignments";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/assignments',
                element: <Assignments></Assignments>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);


export default Router;