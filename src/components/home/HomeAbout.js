import React from 'react'
import Links from './Links'

const HomeAbout = () => {
  return (
    <div>
      <p>
        <span className="dark-purple big">function</span>
        <span className="yellow big">
          {' '}
          allieCaton<span className="dark-purple">()</span>
        </span>
        <span className="dark-purple big"> {`{`}</span>{' '}
      </p>
      <div className="indented">
        <div className="indiv-indented">
          <p className="yellow">full-stack developer</p>
        </div>
      </div>
      <p className="dark-purple big"> {`}`} </p>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default HomeAbout
