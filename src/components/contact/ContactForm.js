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

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            this.setState({from_name: '', email: '', subject: '', message: ''})
        }, (error) => {
            console.log(error.text);
        });

    }

    render() {
        console.log(process.env.REACT_APP_USER_ID, process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_SERVICE_ID);
        return (
            <div className="indented-no-line">
                <form onSubmit={this.handleSubmit}>
                <div className="top-form-flex">
                    <div className="form-flex">

                        <p className="teal">to: <span className="light-purple">alliecaton3@gmail.com</span></p><br></br>

                        <label className="teal">name:</label>
                        <input type="text" value={this.state.from_name} name="from_name" onChange={this.handleChange} />

                        <label className="teal">email:</label>
                        <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />

                        <label className="teal">subject:</label>
                        <input type="text" value={this.state.subject} name="subject" onChange={this.handleChange} />
                    </div>
                    <div className="message-box">
                        <label className="teal" htmlFor="message">message:</label><br></br>
                        <textarea id="message" value={this.state.message} name="message" onChange={this.handleChange}></textarea>
                    </div>
                    </div>
                        <input type="submit" value="Send Message!" />
                </form>
            </div>
        );
    }
}

export default ContactForm;
