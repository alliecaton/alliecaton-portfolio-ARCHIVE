import React from 'react';

const Description = () => {
    return (
        <div className="about-parent">
            <p><span className="dark-purple big">function</span>  
            <span className="yellow big"> aboutAllie<span className="dark-purple">()</span></span>  
            <span className="dark-purple big"> {`{`}</span> </p>
            <div className="indented">
                <div className="indiv-indented">
                    <p className="yellow">I'm Allie, a full-stack web developer interested in building simple, clean, effective websites and applications with people who are similarly passionate.</p>
                    <p className="yellow">In my free time, I dabble in building electronic hardware, drawing, reading, and mooning over my mechanical keyboard. 
                    </p>
                    <p className="yellow">Here are a few technologies I've been working and experimenting with recently:</p>
                    <ul>
                        <p className="teal"> <span className="light-purple">{`>`}</span> Javascript (ES6+)</p>
                        <p className="teal"><span className="light-purple">{`>`}</span>  Ruby + Ruby on Rails</p>
                        <p className="teal"><span className="light-purple">{`>`}</span> React</p>
                        <p className="teal"><span className="light-purple">{`>`}</span> Vue.js</p>
                        <p className="teal"><span className="light-purple">{`>`}</span> Typescript</p>
                    </ul>
                </div>
            </div>
            <p className="dark-purple big"> {`}`} </p>
            <div>
        </div>
        </div>
    );
}

export default Description;
