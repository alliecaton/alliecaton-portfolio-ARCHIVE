import React from 'react';
import image from '../../assets/glassesjamie.jpg'


const HomePhoto = () => {
    return (
        <div className="home-photo">
            <img className="portrait" src={image} />
        </div>
    );
}

export default HomePhoto;
