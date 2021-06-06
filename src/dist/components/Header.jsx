import React from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <>
        <header className="header">
        <Navbar collapseOnSelect expand="lg" className="navbar container" variant="dark" >
            <Navbar.Brand>
            <h4>DEMO Streaming</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto ">
                        <Nav.Link className="remove-margin" >
                             <Link  to='/' className="text-decoration-none text-white nav_link ">HOME</Link>
                        </Nav.Link>
                        <Button className="btn text-white">Start your Trial</Button> 
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
       </header>   
        </>
    )
}
