import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src="src\assets\logo.png" alt="Logo" className="logo-image" />
                    </div>
                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>We are committed to delivering the best services to our customers. Our focus is on providing quality and innovative solutions in the medical equipment industry.</p>
                </div>
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>26-Griffin Housing Scheme, Near Mughalpura, Lahore-Pakistan</p>
                    <p>Email: contact@alrafay.com.pk</p>
                    <p>Phone: 042-36882284</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
