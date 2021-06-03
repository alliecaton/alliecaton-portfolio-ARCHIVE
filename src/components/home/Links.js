import React from 'react';
import { AiFillGithub, AiOutlineDownload, AiFillLinkedin } from 'react-icons/ai'
import resume from '../../assets/resume.pdf'

const Links = () => {
    return (
        <div className="links">
            <p className="teal">console.log(github, resume, linkedin)</p>
            <p className="light-purple">{`>> `} 
                <span className="dark-purple big icons">
                    <a href="https://github.com/alliecaton" className="icon" target="_blank" rel="noreferrer noopener"><AiFillGithub  /></a> 
                    <a href={resume} target="_blank" rel="noreferrer noopener" className="icon"><AiOutlineDownload /></a>
                    <a href="https://www.linkedin.com/in/alliecaton/" className="icon" target="_blank" rel="noreferrer noopener"><AiFillLinkedin /></a>
                </span>
            </p>
        </div>
    );
}

export default Links;
