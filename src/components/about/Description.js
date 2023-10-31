import React from 'react'

const Description = () => {
  return (
    <div className="about-parent">
      <span className="dark-purple big">function</span>
      <span className="yellow big">
        &nbsp;aboutAllie<span className="dark-purple">()</span>
      </span>
      <div className="indented">
        <div className="indiv-indented">
          <p className="yellow">
            I'm Allie, a full-stack web developer. I'm interested in building
            clean and effective applications with people who are similarly
            passionate.
          </p>
          <p className="yellow">
            In my free time, I dabble in building electronic hardware, drawing,
            reading, and mooning over my mechanical keyboard.
          </p>
          <p className="yellow">
            Here are a few technologies I've been working with recently:
          </p>
          <ul>
            <p className="teal">
              <span className="light-purple">{`>`}</span> JavaScript +
              TypeScript
            </p>
            <p className="teal">
              <span className="light-purple">{`>`}</span> Vue 3
            </p>
            <p className="teal">
              <span className="light-purple">{`>`}</span> React
            </p>
            <p className="teal">
              <span className="light-purple">{`>`}</span> NodeJS + Express
            </p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Description
