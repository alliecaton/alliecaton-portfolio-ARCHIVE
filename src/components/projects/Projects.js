import React, { Component } from 'react';
import { projectData } from './data'
import Project from './Project'

class Projects extends Component {
    
    renderProjects = () => {
        return projectData.map(project => (
            <div key={project.id} className="proj-block">
                <Project 
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
                id={project.id}
                />
            </div>
        ))
    }
    
    render() {
        return (
            <div className="projects-container">
                {this.renderProjects()}
            </div>
        );
    }
}

export default Projects;
