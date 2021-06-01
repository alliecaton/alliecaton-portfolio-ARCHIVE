import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import HomeContainer from './HomeContainer';

class MainContainer extends Component {
    render() {
        return (
            <div className="wrapper">
                <NavBar />
                <HomeContainer />
            </div>
        );
    }
}

export default MainContainer;
