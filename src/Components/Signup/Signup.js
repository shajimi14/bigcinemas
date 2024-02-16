import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockCheck, TbLockCode } from "react-icons/tb";
import { useState } from "react";
import { app, db } from "../firebase";
import { collection, addDoc} from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
import checkguest from "../Store/checkguest";
import "./Signup.css"

function Signup(){

    const navigate = useNavigate();

    const dbref = collection(db, 'userdata')

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { email, password, password_confirmation } = form;

        if (password !== password_confirmation) {
            alert("Passwords don't match");
            return;
        }
            const adduser = await app.auth().createUserWithEmailAndPassword(email, password);
            if(adduser){
                const adddata = await addDoc(dbref, form)
                if(adddata){
                    console.log("Success")
                }
                navigate('/AdminLogin')
            }
            else{
                alert("error")
            }
            
        } catch (error) {
            alert(error.message);
        }
    };

    return(
        <div className="App Section">
            <Navbar/>
            <div className="container Adminform">
                
                <form onSubmit={handleSubmit} className="col-sm-8 offset-sm-2 col-md-4 offset-md-4 card car">
                    <h2 className="text-center pt-3 pb-4">Signup</h2>
                        <div className="form-group mb-4" onChange={onChange}>
                            <input type="text" name="name" errormessage="Username should be 3-10 characters" placeholder="Username" className="form-control fa/FaRegUser" pattern="^[A-Za-z0-9]{3,16}$" required/>
                            <div className="icon-container">
                                <FaRegUser/>
                            </div>
                        </div>
                        <div className="form-group mb-4" onChange={onChange}>
                            <input type="email" name="email" errormessage="It should be a valid Email address!" placeholder="Email" className="form-control" required/>
                            <div className="icon-container">
                                <HiOutlineMail/>
                            </div>
                        </div>
                        <div className="form-group mb-4" onChange={onChange}>
                            <input type="Password" name="password" errormessage="Password should be 7-15 characters" placeholder="Password" className="form-control" pattern="^[A-Za-z0-9!@#$%^&*]{7,15}$" required/>
                            <div className="icon-container">
                                <TbLockCode/>
                            </div>
                        </div>
                        <div className="form-group mb-4" onChange={onChange}>
                            <input type="Password" name="password_confirmation" errormessage="Passwords don't match" placeholder="Confirm Password" className="form-control" required/>
                            <div className="icon-container">
                                <TbLockCheck/>
                            </div>
                        </div>
                        <div className="form-group mt-2 pb-2">
                            <input type="submit" className="btn btn-block CreateAccount" value="Create Account"/>
                        </div>
                        <div className="text-center pt-1 pb-2">
                            <p className="Already">
                                Already have an account?
                                <NavLink to={"/AdminLogin"} className="LoginBtn">
                                    Login
                                </NavLink>
                            </p>
                        </div>
                 </form>
            </div>
        </div>
    )
}

export default checkguest(Signup);