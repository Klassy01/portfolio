import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields!');
      return;
    }

    // Send form data to backend
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormSubmitted(true);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        alert('There was an issue sending your message. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      {formSubmitted ? (
        <div className="confirmation-message">
          <h3>Thank you for reaching out!</h3>
          <p>We have received your message, and here are the next steps:</p>
            <li>We will review your message.</li>
            <li>A team member will get back to you shortly via email.</li>
            <li>If necessary, we will arrange a follow-up meeting.</li>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
