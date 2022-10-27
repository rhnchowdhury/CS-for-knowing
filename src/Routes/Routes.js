import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import CheckOut from "../Pages/CheckOut";
import Courses from "../Pages/Courses";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import List from "../Pages/List";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/subject`)
            },

            {
                path: '/list/:id',
                element: <List></List>,
                loader: ({ params }) => fetch(`http://localhost:5000/subject/${params.id}`)
                // loader: () => fetch(`http://localhost:5000/subject/01`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/subject/${params.id}`)
            }
        ]
    }
]);