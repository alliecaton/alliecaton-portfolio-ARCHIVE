import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class ContactForm extends Component {

    state = {
        from_name: '', 
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

        emailjs.sendForm('service_36eqziu', 'template_mb1ober', e.target, 'user_k8P1ZIwiNW2urIBeetEiU')
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
                    <input type="text" name="from_name" onChange={this.handleChange} />

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
