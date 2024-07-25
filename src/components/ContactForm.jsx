import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPaperPlane } from "react-icons/fa";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            '***', //  EmailJS Service ID
            '***', //  EmailJS Template ID
            formData, 
            '***' //   EmailJS User ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((err) => {
            console.error('Failed to send email. Error: ', err);
            alert('Failed to send email. Please try again later.');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='contact-text'>
                <h1>Let's Get in Touch!</h1>
                <FaPaperPlane />
            </div>
            <div className='contact-boxes'>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>
            <button type="submit">Send Email</button>
            </div>
        </form>
    );
};

export default ContactForm;