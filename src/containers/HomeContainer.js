import React from 'react';
import HomeAbout from '../components/home/HomeAbout'
import HomePhoto from '../components/home/HomePhoto'
import Links from '../components/home/Links'

const HomeContainer = () => {
    return (
        <div>
            <div className="home-container">
                <HomeAbout />
                <HomePhoto />
            </div>
            <div>
                <Links />
            </div>
        </div>
    );
}

export default HomeContainer;
