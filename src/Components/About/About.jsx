import React from 'react';
import './About.css'; // Ensure the CSS file is imported
import medicalEquipmentImage from '../../assets/about.jpg';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src={medicalEquipmentImage} alt="Medical Equipment" />
            </div>
            <div className="about-content">
                <h1>About Us</h1>
                <p>
                    At Al Rafay Traders, we are dedicated to providing top-quality medical equipment and exceptional repair services. Specializing in the repair and maintenance of medical machine spare parts, we ensure that your equipment remains in optimal working condition. Our team of experts is committed to delivering reliable solutions and outstanding customer service.
                </p>
                <p>
                    We offer a comprehensive range of medical equipment tailored to meet the needs of healthcare facilities. From diagnostic tools to therapeutic machines, we strive to support healthcare professionals with the best tools available. Trust us to be your partner in maintaining and upgrading your medical equipment.
                </p>
            </div>
        </div>
    );
};

export default About;
