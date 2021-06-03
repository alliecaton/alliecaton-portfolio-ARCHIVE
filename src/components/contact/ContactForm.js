import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class ContactForm extends Component {

    state = {
        name: '', 
        email: '',
        subject: '', 
        message: ''
    }

    handleChange = (e) => {
        this.setState(prevState => ({
                ...prevState, 
                [e.target.name]: e.target.value, 
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('process.env.REACT_APP_SERVICE_ID', 'process.env.REACT_APP_TEMPLATE_ID', e.target, 'process.env.REACT_APP_YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


    }

    render() {
        return (
            <div className="top-form-flex">
                <form className="form-flex" onSubmit={this.handleSubmit}>
                    <label className="teal">name:</label>
                    <input type="text" name="name" onChange={this.handleChange} />

                    <label className="teal">email:</label>
                    <input type="text" name="email" onChange={this.handleChange} />

                    <label className="teal">subject:</label>
                    <input type="text" name="subject" onChange={this.handleChange} />

                    <label className="teal" htmlFor="message">message:</label>
                    <textarea id="message" name="message" onChange={this.handleChange}></textarea>

                    <input type="submit" value="Send!" />
                </form>
            </div>
        );
    }
}

export default ContactForm;
