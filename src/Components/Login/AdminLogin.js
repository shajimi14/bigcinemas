import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockCode } from "react-icons/tb";
import { useState } from "react";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from '../Store/authslice';
import checkguest from "../Store/checkguest";
import "./AdminLogin.css"

function AdminLogin(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { email, password} = form;

            const userCredential = await app.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            if(user){
                dispatch(setUser({
                    uid: user.uid,
                    email: user.email,
                  }));
                navigate('/Shows');
                console.log("loggedin")
            }
            else{
                alert("error")
            }
            
        }catch (error) {
            alert(error.message);
        }
    }

    return(
        <div className="App AdminLoginSection">
            <Navbar/>
            <div className="container AdminformLogin mt-5">
                <div className="mb-4 text-center">
                    <input type="submit" className="btn adminLogin mr-3" value="Admin"/>
                    <NavLink to={"/UserLogin"}><input type="submit" className="btn userLogin ml-3" value="User"/></NavLink>
                </div>
                <form onSubmit={handleSubmit} className="col-sm-8 offset-sm-2 col-md-4 offset-md-4 card carLogin">
                    <h2 className="text-center pt-3 pb-4">Admin Login</h2>
                        <div className="form-group mb-4" onChange={onChange}>
                            <input type="email" name="email" errormessage="It should be a valid Email address!" placeholder="Email" className="form-control" required/>
                            <div className="icon-containerLogin">
                                <HiOutlineMail/>
                            </div>
                        </div>
                        <div className="form-group mb-4" onChange={onChange}>
                            <input type="Password" name="password" errormessage="Password should be 7-15 characters" placeholder="Password" className="form-control" pattern="^[A-Za-z0-9!@#$%^&*]{7,15}$" required/>
                            <div className="icon-containerLogin">
                                <TbLockCode/>
                            </div>
                        </div>
                        <div className="form-group mt-2 pb-2">
                            <input type="submit" className="btn btn-block LoginAdmin" value="Login"/>
                        </div>
                        <div className="text-center pt-1 pb-2">
                            <p className="Donthave">
                                Don't have an account?
                                <NavLink to={"/Signup"} className="SignupBtn">
                                    Signup
                                </NavLink>
                            </p>
                        </div>
                 </form>
            </div>
        </div>
    )
}

export default checkguest(AdminLogin);