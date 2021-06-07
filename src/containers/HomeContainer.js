import React from 'react';
import HomeAbout from '../components/home/HomeAbout'
import HomePhoto from '../components/home/HomePhoto'

const HomeContainer = ({ id }) => {
    return (

            <div className="home-container" id={id}>
                <HomeAbout /> 
                <HomePhoto />
            </div>

    );
}

export default HomeContainer;
