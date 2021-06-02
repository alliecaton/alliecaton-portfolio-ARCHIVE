import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-parent">
                <Link 
                    to="homecontainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link">home</Link>
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
        );
    }
}

export default NavBar;
