import React from 'react';

const ProjectsContainer = ({ id }) => {
    return (
        <div className="about-container-top">
                <p><span className="dark-purple big">class</span>  
                <span className="yellow big"> Projects</span>  
                <span className="dark-purple big"> {`{`}</span> </p>
            <div className="vertical-line">
                <div className="about-container" id={id}>
                    projects
                </div>
            </div>
            <p className="dark-purple big"> {`}`} </p>
        </div>
    );
}

export default ProjectsContainer;
