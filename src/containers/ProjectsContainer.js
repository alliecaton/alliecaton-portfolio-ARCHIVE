import React from 'react';
import Projects from '../components/projects/Projects'

const ProjectsContainer = ({ id }) => {
    return (
        <div className="">
                <p><span className="dark-purple big">class</span>  
                <span className="yellow big"> Projects</span>  
                <span className="dark-purple big"> {`{`}</span> </p>
            <div className="vertical-line">
                <div className="projects-container" id={id}>
                    <Projects />
                </div>
            </div>
            <p className="dark-purple big"> {`}`} </p>
        </div>
    );
}

export default ProjectsContainer;
