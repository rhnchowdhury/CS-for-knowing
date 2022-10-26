import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";
import List from "../Pages/List";

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
            }
        ]
    }
]);