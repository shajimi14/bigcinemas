import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Movies from "./components/Movies";
import Crud from "./components/Crud";
import Bookings from "./components/Bookings";

const router = createBrowserRouter([
    
    { path: '/', element: <App/> },
    { path: 'Signup', element: <Signup/> },
    { path: 'Movies', element: <Movies/> },
    { path: 'Crud', element: <Crud/> },
    { path: 'Bookings', element: <Bookings/> },
]);

export default router;