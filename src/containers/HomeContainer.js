import React from 'react';
import HomeAbout from '../components/home/HomeAbout'
import HomePhoto from '../components/home/HomePhoto'

const HomeContainer = () => {
    return (
        <div>
            <div className="home-container">
                <HomeAbout />
                <HomePhoto />
            </div>
            <div>
                {/* outside of flexbox console.log links */}
            </div>
        </div>
    );
}

export default HomeContainer;
