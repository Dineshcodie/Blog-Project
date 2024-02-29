import React from 'react';
import './contact.css'; 

const Contact = () => {
  return (<>
    
    <div className="Contact">
      <h1>Contact Us</h1>
      <p>
        Have a question, suggestion, or just want to share your thoughts?
        We'd love to hear from you. Reach out to us at 
        <span className="ContactDetails"> phno: 9677195647</span> 
        <span className="ContactDetails"> email: saidjn2002@gmail.com</span>.
      </p>
      <p>
        Thank you for being part of the BlogWorld family. Together, let's celebrate the beauty of language
        and the richness of ideas.
      </p>
      <h2>Connect with Us</h2>
      <p>
        Have questions, suggestions, or just want to connect with us? We'd love to hear from you!
        Feel free to reach out through the following channels:
      </p>
      <ul>
        <li>Email: <span className="ContactDetail">dineBlog@gmail.com</span></li>
        <li>Phone: <span className="ContactDetail">9677195644</span></li>
        <li>Social Media:
          <span className="ContactDetail">
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>,
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>,
            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a>
          </span>
        </li>
      </ul>
      <p className="HappyReading"><b>Happy reading!</b></p>
    </div></>
  );
};


export default Contact;
