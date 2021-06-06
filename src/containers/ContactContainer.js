import React from 'react';
import ContactForm from '../components/contact/ContactForm'

const ContactContainer = ({ id }) => {
    return (
        <div className="contact-container-top">
                <p><span className="dark-purple big">class</span>  
                <span className="yellow big"> Contact</span>  
                <span className="dark-purple big"> {`{`}</span> </p>
            <div className="vertical-line">
                <div id={id}>
                    <ContactForm />
                </div>
            </div>
            <p className="dark-purple big"> {`}`} </p>
            <p className="teal">console.log(goodbye)</p>
            <p className="light-purple">{`>>`} thanks for visiting! :) </p>
            <p className="light-purple">{`>>`} design inspired by my favorite text editor theme, <a href="https://sailorhg.github.io/fairyfloss/">Fairyfloss</a></p>
        </div>
    );
}

export default ContactContainer;
