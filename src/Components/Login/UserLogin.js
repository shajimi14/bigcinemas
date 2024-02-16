import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockCode } from "react-icons/tb";
import "./UserLogin.css"

export default function UserLogin(){
    return(
        <div className="App UserLoginSection">
            <Navbar/>
            <div className="container UserformLogin mt-5">
                <div className="mb-4 text-center">
                    <NavLink to={"/AdminLogin"}><input type="submit" className="btn UsersadminLogin mr-3" value="Admin"/></NavLink>
                    <input type="submit" className="btn LoginUsers ml-3" value="User"/>
                </div>
                <form className="col-sm-8 offset-sm-2 col-md-4 offset-md-4 card carLoginUser">
                    <h2 className="text-center pt-3 pb-4">User Login</h2>
                        <div className="form-group mb-4">
                            <input type="email" placeholder="Email" className="form-control" required/>
                            <div className="icon-containerLoginUser">
                                <HiOutlineMail/>
                            </div>
                        </div>
                        <div className="form-group mb-4">
                            <input type="Password" placeholder="Password" className="form-control" pattern="^[A-Za-z0-9!@#$%^&*]{7,15}$" required/>
                            <div className="icon-containerLoginUser">
                                <TbLockCode/>
                            </div>
                        </div>
                        <div className="form-group mt-2 pb-2">
                            <input type="submit" className="btn btn-block LoginUser" value="Login"/>
                        </div>
                        <div className="text-center pt-1 pb-2">
                            <p className="DonthaveUser">
                                Don't have an account?
                                <NavLink to={"/Signup"} className="SignupBtnUser">
                                    Signup
                                </NavLink>
                            </p>
                        </div>
                 </form>
            </div>
        </div>
    )
}