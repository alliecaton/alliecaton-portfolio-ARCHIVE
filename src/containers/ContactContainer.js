import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import { AiFillGithub, AiOutlineDownload, AiFillLinkedin } from 'react-icons/ai'
import resume from '../assets/resume.pdf'

const ContactContainer = ({ id }) => {
	return (
		<div className='contact-container-top'>
			<p>
				<span className='dark-purple big'>class</span>
				<span className='yellow big'> Contact</span>
				<span className='dark-purple big'> {`{`}</span>{' '}
			</p>
			<div className='vertical-line'>
				<div id={id}>
					<ContactForm />
				</div>
			</div>
			<p className='dark-purple big'> {`}`} </p>

			<div className='credits'>
				<p className='teal'>console.log(credits, goodbye)</p>
				<p className='light-purple'>
					{`>>`} design inspired by my favorite text editor theme,{' '}
					<a
						className='paragraph-link light-purple'
						href='https://sailorhg.github.io/fairyfloss/'
						target='_blank'
						rel='noreferrer noopener'>
						Fairyfloss
					</a>
				</p>
				<div className='light-purple'>
					{`>>`} thanks for visiting! :)
					<div className='dark-purple big icons indented-no-line'>
						<a
							href='https://github.com/alliecaton'
							className='icon'
							target='_blank'
							rel='noreferrer noopener'>
							<AiFillGithub />
						</a>
						<a
							href={resume}
							target='_blank'
							rel='noreferrer noopener'
							className='icon'>
							<AiOutlineDownload />
						</a>
						<a
							href='https://www.linkedin.com/in/alliecaton/'
							className='icon'
							target='_blank'
							rel='noreferrer noopener'>
							<AiFillLinkedin />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactContainer
