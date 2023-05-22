import React from 'react'

const Description = () => {
	return (
		<div className='about-parent'>
			<p>
				<span className='dark-purple big'>function</span>
				<span className='yellow big'>
					aboutAllie<span className='dark-purple'>()</span>
				</span>
				<span className='dark-purple big'> {`{`}</span>
			</p>
			<div className='indented'>
				<div className='indiv-indented'>
					<p className='yellow'>
						I'm Allie, a full-stack web developer with a strong leaning towards
						frontend development. I'm interested in building simple, clean,
						effective websites and applications with people who are similarly
						passionate. I have experience with creating designs in Sketch &
						Zeplin, and bringing them through to fruition with code.
					</p>
					<p className='yellow'>
						In my free time, I dabble in building electronic hardware, drawing,
						reading, and mooning over my mechanical keyboard.
					</p>
					<p className='yellow'>
						Here are a few technologies I've been working with recently:
					</p>
					<ul>
						<p className='teal'>
							<span className='light-purple'>{`>`}</span> JavaScript +
							TypeScript
						</p>
						<p className='teal'>
							<span className='light-purple'>{`>`}</span> Vue (Options API +
							Composition API)
						</p>
						<p className='teal'>
							<span className='light-purple'>{`>`}</span> React
						</p>
						<p className='teal'>
							<span className='light-purple'>{`>`}</span> NodeJS + Express
						</p>
					</ul>
				</div>
			</div>
			<p className='dark-purple big'> {`}`} </p>
			<div></div>
		</div>
	)
}

export default Description
