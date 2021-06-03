import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div className="top-form-flex">
                <form className="form-flex">
                    <label className="teal">name:</label>
                    <input type="text" />

                    <label className="teal">email:</label>
                    <input type="text" />

                    <label className="teal">subject:</label>
                    <input type="text" />

                    <label className="teal" for="message">message:</label>
                    <textarea id="message"></textarea>
                </form>
            </div>
        );
    }
}

export default ContactForm;
