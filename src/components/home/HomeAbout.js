import React from 'react';
import Links from './Links'

const HomeAbout = () => {
    return (
        <div className="home-about">
            <p><span className="dark-purple big">function</span>  
            <span className="yellow big"> allie</span>  
            <span className="dark-purple big"> {`{`}</span> </p>
            <div className="indented">
                <div className="indiv-indented">
                    <p className="yellow">full-stack developer</p>
                    <p className="yellow">javascript</p>
                    <p className="yellow">react + redux</p>
                    <p className="yellow">ruby + ruby on rails</p>
                </div>
            </div>
            <p className="dark-purple big"> {`}`} </p>
            <div>
            <Links />
        </div>
        </div>
    );
}

export default HomeAbout;
