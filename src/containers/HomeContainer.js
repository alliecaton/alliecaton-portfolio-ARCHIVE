import React from 'react';
import HomeAbout from '../components/home/HomeAbout'
import HomePhoto from '../components/home/HomePhoto'

const HomeContainer = () => {
    return (
        <div className="home-container">
            <HomeAbout />
            <HomePhoto />
        </div>
    );
}

export default HomeContainer;
