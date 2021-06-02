import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import ContactContainer from './ContactContainer'

class MainContainer extends Component {
    render() {
        return (
            <div className="wrapper">
                <NavBar />
                <HomeContainer id="homecontainer" />
                <AboutContainer id="aboutcontainer" />
                <ProjectsContainer id="projectscontainer" />
                <ContactContainer id="contactcontainer" />
            </div>
        );
    }
}

export default MainContainer;
