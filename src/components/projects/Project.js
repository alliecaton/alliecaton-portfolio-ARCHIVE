import React from 'react';
import { AiFillGithub } from 'react-icons/ai'

const Project = (props) => {
    return (
        <div>
            <p><span className="dark-purple big">function</span>  
            <span className="yellow big"> {props.title}<span className="dark-purple">()</span></span>  
            <span className="dark-purple big"> {`{`}</span> </p>
            <div className="indented">
                <div className="indiv-indented">
                    <p className="yellow">{props.description}</p>
                    <p className="teal">{props.tech}</p>
                </div>
                    <a href={props.github} className="light-purple" target="_blank" rel="noreferrer noopener"><AiFillGithub className="gh-button"/></a>
                    <a href={props.demo} className="light-purple proj-link" target="_blank" rel="noreferrer noopener"><button>demo</button></a>
            </div>
            <p className="dark-purple big"> {`}`} </p>
        </div>
    );
}

export default Project;
