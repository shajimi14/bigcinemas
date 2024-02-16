import Navbar from "./Components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./App.css"

export default function App() {
  return (
    <div className="App Home">
      <Navbar/>
      <section className="AboutUs z-index mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-sm-12">
                                <div className="mt-4">
                                    <div className="text-content">
                                          <div className="text-center" style={{marginTop:"180px"}}>
                                              {/* <h3 className="pquote">"Lights, Camera, Book! Your seamless ticket to cinematic <br></br>
                                               adventures begins with just a touch."</h3> */}
                                              <NavLink className="btn btn-dark btn-md CA" to={"/Shows"}>Current Shows</NavLink>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </section>
    </div>
  );
}
