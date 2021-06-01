import React, { Component } from 'react';
import NavBar from '../components/NavBar'

class MainContainer extends Component {
    render() {
        return (
            <div className="wrapper">
                <NavBar />
                main container
            </div>
        );
    }
}

export default MainContainer;
