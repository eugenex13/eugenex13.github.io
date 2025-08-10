import React from 'react';
import './ContactSection.css'; // Assuming you will create a separate CSS file for this section

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p>If you have any questions or would like to work together, feel free to reach out!</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="contact-info">
                <h3>Or reach me at:</h3>
                <p>Email: eugene@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </section>
    );
};

export default ContactSection;