import React from 'react';
import Description from '../components/about/Description'
import WorkExperience from '../components/about/WorkExperience'

const AboutContainer = ({ id }) => {
    return (
        <div className="about-container" id={id}>
            <Description />
            <WorkExperience />
        </div>
    );
}

export default AboutContainer;
