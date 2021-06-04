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
            this.setState({from_name: '', email: '', subject: '', message: ''})
        }, (error) => {
            console.log(error.text);
        });

    }

    render() {
        console.log(this.state)
        return (
            <div className="top-form-flex">
                <form className="form-flex" onSubmit={this.handleSubmit}>
                    <label className="teal">name:</label>
                    <input type="text" value={this.state.from_name} name="from_name" onChange={this.handleChange} />

                    <label className="teal">email:</label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />

                    <label className="teal">subject:</label>
                    <input type="text" value={this.state.subject} name="subject" onChange={this.handleChange} />

                    <label className="teal" htmlFor="message">message:</label>
                    <textarea id="message" value={this.state.message} name="message" onChange={this.handleChange}></textarea>

                    <input type="submit" value="Send!" />
                </form>
            </div>
        );
    }
}

export default ContactForm;
