import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from '../Store/authslice';
import { NavLink } from "react-router-dom";

export default function Navbar(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.auth.user);

    const handleLogout = async () => {
        try {
          dispatch(removeUser());
      
          setTimeout(() => {
            console.clear();
            console.log('Console cleared after logout.');
            navigate('/AdminLogin');
            console.log('Navigated to AdminLogin after console clear.');
          }, 1);

        } catch (error) {
          alert(error.message);
        }
    };

    return(
        <nav className="navbar navbar-dark navbar-expand-sm nav">
            <div className="navbar-brand">BIG CINEMAS</div>

            <div>
            <button
                className="bts navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>

            <div className="collapse navbar-collapse mr-auto" id="navbarNav">

                <ul className="navbar-nav ml-auto">
                    {user && (user.id !== null || user.username === "guest") ? (<li className="nav-link"><NavLink to={"/Shows"} className="li" activeclassname="active">Shows</NavLink></li>) : <li className="nav-link"><NavLink to={"/"} className="li" activeclassname="active">Home</NavLink></li>}
                    <li className="nav-link"><NavLink to={"/AboutUs"} className="li" activeclassname="active">About us</NavLink></li>
                    {!user &&<li className="nav-link"><NavLink to={"/Signup"} className="li" activeclassname="active">Signup</NavLink></li>}
                    {user?
                        <li className="nav-link">
                            <span className="li" activeclassname="active" onClick={handleLogout}>Logout</span>
                        </li>:<li className="nav-link"><NavLink to={"/AdminLogin"} className="li" activeclassname="active">Login</NavLink></li>
                    }
                </ul>
            </div>

        </nav>
    )
}