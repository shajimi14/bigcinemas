import Navbar from "../Navbar/Navbar";
import { FaPlus } from "react-icons/fa";
import "./Shows.css"
import { NavLink } from "react-router-dom";
import checkauth from "../Store/checkauth";
import { collection, getDocs} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";

function Shows(){

    var user = useSelector(store=>store.auth.user)

    const [shows, setShows] = useState([]);
    //const [id, setId] = useState('');
    const usersCollectionRef = collection(db, "shows");

    const getShows = async () => {
        if (!user){
            console.error('User is not logged in');
            return;
        }
        const data = await getDocs(usersCollectionRef);
        setShows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        if(user){
        getShows();
    }},);
    
    
    return (
        <div className="App">
            <Navbar />
            <section className="container text-center mt-5">
                <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 card card-outline">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title Currentshow">Current Shows</h5>
                            </div>
                            <NavLink to={"/Addshows"}>
                                <div className="col d-flex justify-content-end">
                                    <div className="icon"><FaPlus /></div>
                                </div>
                            </NavLink>
                        </div>
                        
                        {shows.map((show) => (
                            <NavLink key={show.id} to={`/${show.id}`}>
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <img src={show.image} alt={show.title} className="card-img-top mb-3" />
                                        <h5 className="card-title">{show.title} {show.showTimes} {show.startDate} to {show.endDate}</h5>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default checkauth(Shows);