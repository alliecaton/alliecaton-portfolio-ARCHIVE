import React, { Component } from 'react'
import emailjs from 'emailjs-com'

class ContactForm extends Component {
	state = {
		from_name: '',
		email: '',
		subject: '',
		message: '',
	}

	handleChange = e => {
		this.setState(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	handleSubmit = e => {
		e.preventDefault()
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				e.target,
				process.env.REACT_APP_USER_ID
			)
			.then(
				result => {
					console.log(result.text)
					this.setState({ from_name: '', email: '', subject: '', message: '' })
				},
				error => {
					console.log(error.text)
				}
			)
	}

	render() {
		return (
			<div className='indented-no-line'>
				<span className='light-purple'>Please reach out to me at </span>
				<a
					className='yellow email'
					href='mailto:alliecaton3@gmail.com'
					target='_blank'
					rel='noreferrer'>
					alliecaton3@gmail.com
				</a>
				<span className='light-purple'> for inquiries.</span>
			</div>
		)
	}
}

export default ContactForm
