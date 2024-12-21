import React from 'react';
import './Contact.css'; // Add a CSS file for styling the Contact section.

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/andrew-charnovich/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/acharnovich" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:charnovich@gmail.com">Email Me</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;