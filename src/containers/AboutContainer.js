import React from 'react';
import Description from '../components/about/Description'
import WorkExperience from '../components/about/WorkExperience'

const AboutContainer = ({ id }) => {
    return (
        <div className="about-container-top">
                <p><span className="dark-purple big">class</span>  
                <span className="yellow big"> About</span>  
                <span className="dark-purple big"> {`{`}</span> </p>
            <div className="vertical-line">
                <div className="about-container" id={id}>
                    <Description />
                    <WorkExperience />
                </div>
            </div>
            <p className="dark-purple big"> {`}`}</p>
        </div>
        
    );
}

export default AboutContainer;
