import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./Components/Aboutus/AboutUs";
import Signup from "./Components/Signup/Signup";
import AdminLogin from "./Components/Login/AdminLogin";
import UserLogin from "./Components/Login/UserLogin";
import Shows from "./Components/Shows/Shows";
import Addshows from "./Components/Shows/AddShows";

const Router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/AboutUs', element: <AboutUs/>},
    { path: '/Signup', element:<Signup/>},
    { path: '/AdminLogin', element:<AdminLogin/>},
    { path: '/UserLogin', element:<UserLogin/>},
    { path: '/Shows', element:<Shows/>},
    { path: '/Addshows', element:<Addshows/>}
]);

export default Router;