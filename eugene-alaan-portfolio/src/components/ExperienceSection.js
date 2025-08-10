import React from 'react';
import './ExperienceSection.css'; // Assuming you will create a CSS file for styles

const ExperienceSection = () => {
    return (
        <section className="experience-section">
            <h2>Experience</h2>
            <div className="experience-item">
                <img src="path/to/pexels-image.jpg" alt="Fligno Software" className="experience-image" />
                <div className="experience-details">
                    <h3>WordPress Developer</h3>
                    <h4>Fligno Software Philippines INC</h4>
                    <p>Duration: 4 years and 2 months</p>
                    <p>
                        As a WordPress Developer at Fligno Software, I have honed my skills in developing and maintaining
                        WordPress websites, optimizing performance, and ensuring responsive design. My role involved
                        collaborating with designers and clients to deliver high-quality web solutions.
                    </p>
                </div>
            </div>
            {/* Additional experience items can be added here */}
        </section>
    );
};

export default ExperienceSection;