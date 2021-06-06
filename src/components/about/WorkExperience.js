import React from 'react';

const WorkExperience = () => {
    return (
        <div>
            <p><span className="dark-purple big">function</span>  
            <span className="yellow big"> workExperience<span className="dark-purple">()</span></span>  
            <span className="dark-purple big"> {`{`}</span> </p>
            <div className="indented">
                <div className="indiv-indented">
                    <p><span className="yellow">Associate Producer •</span><span className="teal"> FableVision Studios</span></p>
                    <p className="dark-purple">2019 - 2020</p>
                </div>
                <div className="indiv-indented">
                    <p><span className="yellow">Production Assistant •</span><span className="teal"> FableVision Studios</span></p>
                    <p className="dark-purple">2018 - 2019</p>
                </div>
            </div>
            <p className="dark-purple big"> {`}`} </p>
            <a href="https://www.linkedin.com/in/alliecaton/" className="light-purple nav-link" target="_blank" rel="noreferrer noopener">{`view more ->`} </a>
        </div>
    );
}

export default WorkExperience;
