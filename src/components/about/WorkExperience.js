import React from 'react'

const WorkExperience = () => {
  return (
    <div className="about-parent">
      <span className="dark-purple big">function</span>
      <span className="yellow big">
        {' '}
        workExperience<span className="dark-purple">()</span>
      </span>
      <div className="indented">
        <div className="indiv-indented">
          <div>
            <span className="yellow">Freelance Developer</span>
          </div>
          <div className="dark-purple">2023 - Current</div>
        </div>

        <div className="indiv-indented">
          <div>
            <span className="yellow">Frontend Software Engineer •</span>
            <span className="teal"> The Atlas for Cities</span>
          </div>
          <div className="dark-purple">2020 - 2023</div>
        </div>

        <div className="indiv-indented">
          <div>
            <span className="yellow">Associate Producer •</span>
            <span className="teal"> FableVision Studios</span>
          </div>
          <div className="dark-purple">2019 - 2020</div>
        </div>

        <div className="indiv-indented">
          <div>
            <span className="yellow">Production Assistant •</span>
            <span className="teal"> FableVision Studios</span>
          </div>
          <div className="dark-purple">2018 - 2019</div>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/alliecaton/"
        className="light-purple nav-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        {`view more ->`}{' '}
      </a>
    </div>
  )
}

export default WorkExperience
