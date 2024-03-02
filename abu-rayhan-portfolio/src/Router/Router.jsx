import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import MyStack from "../Pages/MyStack";
import FeaturedProject from "../Pages/FeaturedProject";
import GetInTouch from "../Pages/GetInTouch";
import ProjectDetails from "../Pages/ProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'skills',
                element: <MyStack />
            },
            {
                path: 'about',
                element: <AboutUs />
            },
            {
                path: 'projects',
                element: <FeaturedProject />
            },
            {
                path: 'details/:detailsId',
                element: <ProjectDetails />,
                loader: () => fetch('../projects.json')
            },
            {
                path: 'contact',
                element: <GetInTouch />
            }
        ]
    }
])

export default router;