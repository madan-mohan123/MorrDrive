import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div className="row gx-0 mx-auto my-2 mb-4 container">
            <div className="col-lg-3 col-md-3 col-sm-6 ">
            <Link to='/series' className="text-decoration-none text-white rounded m-2">
                <div className="d-flex justify-content-center align-items-center rounded" id="series">
                 <h3>Series</h3>
                </div>
                </Link>
                <p className="text-center m-2">Popular Series</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 ">
            <Link to='/movies' className="text-decoration-none text-white  m-2"> 
                <div className="d-flex justify-content-center align-items-center rounded" id="movies">
               <h3>Movies</h3>
               </div>
               </Link>
               <p className="text-center m-2">Popular Movies</p>
            </div>
        </div>
            
        </>
    )
}
