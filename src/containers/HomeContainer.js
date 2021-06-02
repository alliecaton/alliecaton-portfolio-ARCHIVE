import React from 'react';
import HomeAbout from '../components/home/HomeAbout'
import HomePhoto from '../components/home/HomePhoto'

const HomeContainer = ({ id }) => {
    return (
        <div>
            <div className="home-container" id={id}>
                <HomeAbout /> 
                <HomePhoto />
            </div>
        </div>
    );
}

export default HomeContainer;
