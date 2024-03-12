import { NavLink } from "react-router-dom";
import Login from './Login';
import Movies from './Movies';

function Navbar() {
    return <nav className="navbar navbar-expand-sm  " style={{backgroundColor:"black"}}>
        <div className="navbar-brand">
            <h4 style={{color:"red",fontFamily:"serif"}}> Big <span style={{color:"white"}}>Cinemas</span></h4>
        </div>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        >
            <ul className="navbar-nav mx-auto  " style={{fontSize:"18px"}} >
                <li className="nav-item" >
                <NavLink to={"/"} className="nav-link  " style={{color:"red ",  fontFamily:"serif"}}>
                    Home
                </NavLink>
                
                </li>
                <li className="nav-item">
                <NavLink to={"/Movies"} className="nav-link" style={{color:"red ",  fontFamily:"serif"}}>
                    Movies
                </NavLink>
                
                </li>
                <li className="nav-item">
                <NavLink to={"/Orders"} className="nav-link"style={{color:"red ", fontFamily:"serif"}}>
                   Orders
                </NavLink>
                
                </li>
                <li className="nav-item">
                <NavLink to={"/Signup"} className="nav-link"style={{color:"red ", fontFamily:"serif"}}>
                 Signup
                </NavLink></li>
                <li className="nav-item">
                <NavLink to={"/Crud"} className="nav-link"style={{color:"red ", fontFamily:"serif"}}>
             admin
                </NavLink></li>
             
               
                
            </ul>
        </div>
    </nav>;
}

export default Navbar;