import React from 'react';

const Project = (props) => {
    return (
        <div>
            <p><span className="dark-purple big">function</span>  
            <span className="yellow big"> {props.title}</span>  
            <span className="dark-purple big"> {`{`}</span> </p>
            <div className="indented">
                <div className="indiv-indented">
                    <p className="yellow">{props.description}</p>
                </div>
            </div>
            <p className="dark-purple big"> {`}`} </p>
            <a href="https://www.linkedin.com/in/alliecaton/" className="light-purple nav-link" target="_blank" rel="noreferrer noopener">{props.github}</a>
            <a href="https://www.linkedin.com/in/alliecaton/" className="light-purple nav-link" target="_blank" rel="noreferrer noopener">{props.demo}</a>
        </div>
    );
}

export default Project;
