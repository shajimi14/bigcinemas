import React from 'react';
import './Movies.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


function Movies() {
  return (
   <div>
    <Navbar/>
    <div className="row ">
      <div className="col-md-3 mb-2 mt-2">
        <div className="card " >
          <div className="card-body ">
            <img className="card-img-top" src="https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg"  />
            <Link to="/Bookings">Go to Second Page</Link>


          </div>
          
        </div>

      </div>

      <div className="col-md-3 mb-2 mt-2">
        <div className="card">
          <div className="card-body">
            < img className="card-img-top" src="https://cdn.siasat.com/wp-content/uploads/2023/01/MV5BMDI5ZTVmMmMtZjg1Ny00NzNkLWFkMDctZDlmMzQ4MDcyODZlXkEyXkFqcGdeQXVyMzM1NDY1MD_wuoujVQ-647x1024.jpg" alt="Card image" />
            {/* <button className='btn btn-block   mt-2' style={{background:"black", color:"red"}}>Book Now</button> */}

          </div>
        </div>
      </div>

      <div className="col-md-3 mb-2 mt-2">
        <div className="card" >
          <div className="card-body">
            <img className="card-img-top" src="https://moviegalleri.net/wp-content/gallery/ny-2023/13-Movie-Happy-New-Year-2023-Wishes-Poster.jpg" alt="Card image" />
            {/* <button className='btn btn-block   mt-2' style={{background:"black", color:"red"}}>Book Now</button> */}

          </div>
        </div>
      </div>

      <div className="col-md-3 mb-2 mt-2">
        <div className="card" >
          <div className="card-body" >
            <img className="card-img-top" src="https://m.media-amazon.com/images/M/MV5BYTY1M2Y4ZjctZTM0YS00ZjMyLWEyN2QtMWU4YWMzMmIxZGM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg" alt="Card image" />
            {/* <button className='btn btn-block   mt-2' style={{background:"black", color:"red"}}>Book Now</button> */}
            <a href=""></a>

          </div>
        </div>
      </div>

      <div className="col-md-3 mb-2 mt-2">
        <div className="card" >
          <div className="card-body">
            <img className="card-img-top" src="https://www.youloveit.com/uploads/posts/2023-09/1695832211_youloveit_com_disney_wish_poster.jpg" alt="Card image" />
            {/* <button className='btn btn-block   mt-2' style={{background:"black", color:"red"}}>Book Now</button> */}

          </div>
        </div>

      </div>
      <div className="col-md-3 mb-2 mt-2">
        <div className="card" >
          <div className="card-body">
            <img className="card-img-top" src="https://pbs.twimg.com/media/Fw-bg-CaIAA6jiK?format=jpg&name=4096x4096" alt="Card image" />
            {/* <button className='btn btn-block   mt-2' style={{background:"black", color:"red"}}>Book Now</button> */}

          </div>
        </div>
      </div>
      <div className="col-md-3 mb-2 mt-2">
        <div className="card" >
          <div className="card-body">
            <img className="card-img-top" src="https://w0.peakpx.com/wallpaper/324/121/HD-wallpaper-new-2023-movie-john-wick-4-poster-movie.jpg" alt="Card image" />
            {/* <button className='btn btn-block   mt-2' style={{background:"black", color:"red"}}>Book Now</button> */}

          </div>
        </div>
      </div>
      <div className="col-md-3 mb-2 mt-2">
        <div className="card" >
          <div className="card-body">
            <img className="card-img-top" src="https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-International-01.jpeg?fit=1382%2C2048&quality=80&strip=info&ssl=1" alt="Card image" />
            {/* <button className='btn btn-block   mt-2' style={{background:"black", color:"red"}}>Book Now</button> */}

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Movies;
