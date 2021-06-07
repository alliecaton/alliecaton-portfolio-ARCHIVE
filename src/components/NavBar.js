import React from 'react';
import { Link } from 'react-scroll'

const NavBar = () => {
    
        return (
            <>
            <div className="navbar-home-container">
                <Link 
                    to="homecontainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link home-icon">✦</Link>
                </div>
            <div className="nav-large">
            <div className="navbar-parent">
                <Link 
                    to="aboutcontainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link">about</Link> 
               <Link 
                    to="projectscontainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link">projects</Link> 
               <Link 
                    to="contactcontainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link">contact</Link> 
            </div>
            </div>
            </>
        );
    }



export default NavBar;
