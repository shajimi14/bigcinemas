import Navbar from "../Navbar/Navbar";
//import { NavLink } from "react-router-dom";
import checkauth from "../Store/checkauth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { collection, addDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "./AddShows.css"

function Addshows(){

    var user = useSelector(store=>store.auth.user);
    const navigate = useNavigate();

    const [newtitle, setNewTitle] = useState("");
    const [selectedShowTimes, setSelectedShowTimes] = useState([]);
    const [selectedStartDate, setSelectedStartDate] = useState("");
    const [selectedEndDate, setSelectedEndDate] = useState("");
    const [newimage, setNewImage] = useState("");

    const usersCollectionRef = collection(db, "shows");
    const imageRef = ref(storage, `image/${newimage.title + v4()}`)

    const handleShowTimeChange = (time) => {
        const isChecked = selectedShowTimes.includes(time);
    
        if (isChecked) {
            setSelectedShowTimes((prevTimes) => prevTimes.filter((prevTime) => prevTime !== time));
        } else {
            setSelectedShowTimes((prevTimes) => [...prevTimes, time]);
        }
    };

    const handleStartDateChange = (event) => {
        setSelectedStartDate(event.target.value);
    };
    
    const handleEndDateChange = (event) => {
        setSelectedEndDate(event.target.value);
    };    

    const addShows = async () => {
        if (!user){
            alert('User is not logged in');
            return;
        }

        const showData = {
            title: newtitle,
            showTimes: selectedShowTimes,
            startDate: selectedStartDate,
            endDate: selectedEndDate,
        };

        try {
            await addDoc(usersCollectionRef, showData);
            uploadBytes(imageRef, newimage);
            setNewTitle("");
            setSelectedShowTimes([]);
            setSelectedStartDate("");
            setSelectedEndDate("");
            navigate('/Shows');
        }catch (error) {
            alert("Error adding show:", error);
        }
    };

    return(
        <div className="App AddShowSec">
            <Navbar/>
            <div className="container AddShowsForm mt-5">

                <form className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 card car">
                    <h2 className="headingaddshow text-center pt-3 pb-4">Add Show</h2>
                        <div className="form-group mb-4">
                            <label className="AddShows-Labelname">Movie Name:</label>
                            <input type="text" className="form-control" pattern="^[A-Za-z0-9]{3,16}$" required
                            value={newtitle} onChange={(event) => {setNewTitle(event.target.value)}}/>
                        </div>

                        <div className="form-group overflow-auto d-flex">
                            <label className="AddShows-Labelname">Show Times:</label>
                                {['11:00am', '2:30pm', '6:00pm', '9:30pm'].map((time) => (
                                    <div className="form-check ml-2" key={time}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={`showTime-${time}`}
                                            name={`showTime-${time}`}
                                            checked={selectedShowTimes.includes(time)}
                                            onChange={() => handleShowTimeChange(time)}
                                        />
                                        <label className="Showtimelabel form-check-label" htmlFor={`showTime-${time}`}>
                                            {time}
                                        </label>
                                    </div>
                                ))}
                        </div>

                        <div className="form-group">
                            <label className="AddShows-Labelname" htmlFor="startDate">Start Date:</label>
                                <input
                                type="date"
                                className="form-control"
                                id="startDate"
                                name="startDate"
                                value={selectedStartDate}
                                onChange={handleStartDateChange}
                                required
                                />
                        </div>

                        <div className="form-group">
                            <label className="AddShows-Labelname" htmlFor="endDate">End Date:</label>
                                <input
                                type="date"
                                className="form-control"
                                id="endDate"
                                name="endDate"
                                value={selectedEndDate}
                                onChange={handleEndDateChange}
                                required
                                />
                        </div>

                        <div className="AddShows-Labelname form-group">
                            <label htmlFor="image">Upload Image:</label>
                                <input
                                type="file"
                                className="form-control-file"
                                id="image"
                                name="image"
                                onChange={(event) => {setNewImage(event.target.files[0])}}
                                required
                                />
                        </div>

                        <div className="form-group mt-2 pb-2">
                            <input type="submit" className="btn btn-block CreateAccount" value="Add"
                            onClick={addShows}/>
                        </div>
                 </form>
            </div>
        </div>
    )
}

export default checkauth(Addshows);