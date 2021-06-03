import React, { Component } from 'react';
import{ init } from 'emailjs-com';

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

    render() {
        console.log(this.state)
        return (
            <div className="top-form-flex">
                <form className="form-flex">
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
