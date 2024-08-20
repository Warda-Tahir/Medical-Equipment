import React, { useState } from 'react';
import './Services.css';
import ultrasoundImage from '../../assets/slider1.jpg'; 
import ctScanImage from '../../assets/slider2.jpg'; 
import xrayImage from '../../assets/slider3.jpg'; 
import sparePartsImage1 from '../../assets/Transducer.jpg'; 
import sparePartsImage2 from '../../assets/xray-tube.jpg'; 
import sparePartsImage3 from '../../assets/endocavity.jpg';

const servicesData = [
    {
        title: 'Ultrasound',
        image: ultrasoundImage,
        description: 'Ultrasound machines are crucial in modern medicine. They help visualize muscles, tendons, and many internal organs, aiding in diagnosing various conditions. This technology is non-invasive and safe, using sound waves to create images of the inside of the body, which are then displayed on a monitor. It’s widely used in obstetrics to monitor the development of the fetus during pregnancy.',
    },
    {
        title: 'CT Scan',
        image: ctScanImage,
        description: 'CT Scanners offer detailed cross-sectional images of the body, providing more information than regular X-rays. This technology helps in diagnosing diseases and assessing the internal structures of the body, such as bones, blood vessels, and soft tissues. CT scans are essential for detecting cancer, heart disease, and internal injuries, enabling doctors to make more accurate diagnoses and treatment plans.',
    },
    {
        title: 'X-ray Machines',
        image: xrayImage,
        description: 'X-ray machines are fundamental in medical diagnostics. They use electromagnetic waves to create images of the inside of the body, particularly bones. X-rays are commonly used to detect fractures, infections, or tumors. The images produced are crucial for diagnosing and planning the treatment of various conditions, ensuring patients receive the appropriate care.',
    },
    {
        title: 'Spare Parts',
        images: [
            { 
                src: sparePartsImage1, 
                heading: 'Ultrasound Transducer', 
                subheading: 'High-frequency transducer for detailed imaging in obstetrics and cardiology.' 
            },
            { 
                src: sparePartsImage2, 
                heading: 'X-Ray Tube', 
                subheading: 'Durable tube for consistent and clear radiographic images.' 
            },
            { 
                src: sparePartsImage3, 
                heading: 'Endocavity Probe', 
                subheading: 'Specialized probe for high-resolution endocavity scanning.' 
            },
        ],
        
    },
];

const Services = () => {
    const [activeService, setActiveService] = useState(servicesData[0]);

    return (
        <div className="services-container">
            <div className="services-sidebar">
                {servicesData.map((service, index) => (
                    <button 
                        key={index} 
                        className={`service-tab ${activeService.title === service.title ? 'active' : ''}`}
                        onClick={() => setActiveService(service)}
                        aria-selected={activeService.title === service.title}
                    >
                        {service.title}
                    </button>
                ))}
            </div>
            <div className="services-content">
                {activeService.images ? (
                    <div className="spare-parts-content">
                        <div className="spare-parts-images">
                            {activeService.images.map((item, index) => (
                                <div key={index} className="spare-part-item">
                                    <img src={item.src} alt={`Spare part ${index + 1}`} className="spare-part-image" />
                                    <div className="spare-part-info">
                                        <h3 className="spare-part-heading">{item.heading}</h3>
                                        <p className="spare-part-subheading">{item.subheading}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        <img 
                            src={activeService.image} 
                            alt={`Image of ${activeService.title}`} 
                            className="service-image" 
                        />
                        <div className="services-text">
                            <h2>{activeService.title}</h2>
                            <p>{activeService.description}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Services;