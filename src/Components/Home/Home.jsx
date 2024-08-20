import React from 'react';
import './Home.css';
import Slider from '../Slider/Slider'; 
import medicalEquipmentImage from '../../assets/equipment.jpg'; 
import ultrasoundImage from '../../assets/ultrasound.jpg'; 
import ctScanImage from '../../assets/ctscan.jpg'; 
import xrayImage from '../../assets/x-ray.jpg'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleButtonClick = () => {
        navigate('/services'); // Navigate to the Services page
    };

    return (
        <div className="home">
            <Slider className="slider-with-padding" />
            <div className="differentiators">
                <h2>What Makes Us Different</h2>
                <div className="icons-container">
                    <div className="icon-item">
                        <div className="icon-circle">
                            <i className="fas fa-stethoscope"></i>
                        </div>
                        <h3>Quality Equipment</h3>
                        <p className="subheading">Providing top-notch medical tools.</p>
                    </div>
                    <div className="icon-item">
                        <div className="icon-circle">
                            <i className="fas fa-microscope"></i>
                        </div>
                        <h3>Innovative Solutions</h3>
                        <p className="subheading">Cutting-edge technology for better care.</p>
                    </div>
                    <div className="icon-item">
                        <div className="icon-circle">
                            <i className="fas fa-user-md"></i>
                        </div>
                        <h3>Expert Support</h3>
                        <p className="subheading">Professional service you can trust.</p>
                    </div>
                </div>
            </div>
            
            <div className="image-section">
                <img src={medicalEquipmentImage} alt="Medical Equipment" className="background-image" />
                <div className="overlay-text">
                    <h2>Advanced</h2>
                    <h2>Medical Equipment</h2>
                    <p>Your trusted partner in healthcare innovation.</p>
                </div>
            </div>

            <div className="our-services">
                <h2>Our Services</h2>
                <p className="services-text">We provide a wide range of high-quality medical equipment tailored to meet the needs of modern healthcare facilities. Our commitment to excellence ensures that you receive the best products and support available.</p>
            </div>

            <div className="image-grid">
                <div className="image-grid-item">
                    <img src={ultrasoundImage} alt="Ultrasound Equipment" />
                    <button className="button-on-image" onClick={handleButtonClick}>
                        <i className="fas fa-chevron-right"></i> 
                        Ultrasound
                    </button>
                </div>
                <div className="image-grid-item">
                    <img src={ctScanImage} alt="CT Scan Equipment" />
                    <button className="button-on-image" onClick={handleButtonClick}>
                        <i className="fas fa-chevron-right"></i> 
                        CT Scanner
                    </button>
                </div>
                <div className="image-grid-item">
                    <img src={xrayImage} alt="X-Ray Equipment" />
                    <button className="button-on-image" onClick={handleButtonClick}>
                        <i className="fas fa-chevron-right"></i> 
                        X-Ray
                    </button>
                </div>
            </div>

            <div className="contact-box-horizontal">
                <div className="contact-form-container">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out to us!</p>
                    <form className="contact-form-horizontal">
                        <div className="form-group-horizontal">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group-horizontal">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group-horizontal">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className="form-group-horizontal">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="2" required></textarea>
                        </div>
                        <button type="submit" className="submit-button-horizontal">Submit</button>
                    </form>
                </div>
                <div className="info-container">
                    <h3>Stay Connected</h3>
                    <p>Follow us on social media for updates and more information.</p>
                    <div className="social-icons-horizontal">
                        <div className="s-icon-item">
                            <div className="socialicon-circle">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                        <div className="s-icon-item">
                            <div className="socialicon-circle">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="s-icon-item">
                            <div className="socialicon-circle">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="s-icon-item">
                            <div className="socialicon-circle">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
