import React from 'react'
import {Link} from 'react-router-dom';
import google from '../assets/images/google store.png'
import apple from '../assets/images/applestore.png'
import microsoft from '../assets/images/microsoft.png'
export default function Footer() {
    return (
        <>
        <footer className="footer p-4 mt-4">
            <div className="container">
            <ul className="list-style-none  p-0">
                <li className="list-inline d-inline  ml-0">
                    <Link className="text-white text-decoration-none " to="/">Home</Link>
                </li>
                <li className="list-inline d-inline ml-0">
                    <Link className="text-white text-decoration-none" to="/">Terms and Condition</Link>
                </li>
                <li className="list-inline d-inline ml-0">
                    <Link className="text-white text-decoration-none" to="/">Privacy Policy</Link>
                </li >
                <li className="list-inline d-inline ml-0">
                    <Link className="text-white text-decoration-none" to="/">Collection Management</Link>
                </li>
                <li className="list-inline d-inline ml-0">
                    <Link className="text-white text-decoration-none" to="/">Help</Link>
                </li>
                <li className="list-inline d-inline ml-0">
                    <Link className="text-white text-decoration-none" to="/">Manage Account</Link>
                </li>
            </ul>
            <p className="ml-0 mt-2">Copyright &copy; 2021 Demo Streaming. All right Reserved</p>
            <div className="row gx-0 mx-0 my-4">
                <div className="col-lg-6 col-12 px-0">
                <i class="fa fa-facebook-square fa-2x mr-2"></i>
                <i class="fa fa-twitter fa-2x mr-2"></i>
                <i class="fa fa-instagram fa-2x mr-2"></i>
                </div>
                <div className="col-lg-6 col-12 px-0">
                        <div className="d-inline mr-1 mb-1">
                            <img src={google} width="150px" height="60px" className="rounded mr-2 " alt="" />
                        </div>
                        <div className="d-inline mr-1 mb-1">
                            <img src={microsoft} width="150px" height="40px" className="rounded mr-2 " alt="" />
                        </div>
                        <div className="d-inline mr-1 mb-1">
                            <img src={apple} width="150px" height="40px" className="rounded mr-2 " alt="" />
                        </div>
                </div>
            </div>
            </div>
        </footer>
            
        </>
    )
}
