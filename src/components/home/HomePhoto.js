import React from 'react';
import image from '../../assets/portrait.jpg'


const HomePhoto = () => {
    return (
        <div className="home-photo">
            <img className="portrait" alt="portrait of Allie Caton" src={image} />
        </div>
    );
}

export default HomePhoto;
