import React from 'react'
import Description from '../components/about/Description'
import WorkExperience from '../components/about/WorkExperience'

const AboutContainer = ({ id }) => {
  return (
    <div className="about-container-top">
      <p>
        <span className="dark-purple big">class</span>
        <span className="yellow big"> About</span>
      </p>
      <div className="vertical-line">
        <div className="about-container" id={id}>
          <Description />
          <WorkExperience />
        </div>
      </div>
    </div>
  )
}

export default AboutContainer
