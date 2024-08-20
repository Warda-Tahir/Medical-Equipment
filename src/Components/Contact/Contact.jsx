import React from 'react';
import './Contact.css'; // Make sure to create this CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-subheading"> You can contact us any way that is convenient for you. We are available 24/7 via fax or email.
                    You can also use a quick contact form below or visit our medical center personally.
                </p>
                <p className="contact-subheading">
                    We would be happy to answer your questions.
                </p>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Phone" />
            </div>
          </div>

          <div className="form-group">
            <textarea id="message" name="message" placeholder="Message" required></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-info-container">
        <h2 className="contact-info-heading">Contact Information</h2>

        <h3 className="social-icons-heading">Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="company-info">
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>(123) 456-7890</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Location</h3>
              <p>1234 Example St, City, Country</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
