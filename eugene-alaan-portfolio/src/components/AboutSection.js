import React from 'react';
import './AboutSection.css'; // Assuming you will create a separate CSS file for this section

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    Hi, I'm Eugene S. Alaan, a passionate WordPress developer with over 4 years of experience in creating dynamic and responsive websites. My journey in web development began with a fascination for technology and design, leading me to specialize in WordPress.
                </p>
                <p>
                    I hold a degree in Computer Science, which has equipped me with a solid foundation in programming and web technologies. I enjoy tackling challenges and continuously improving my skills to deliver high-quality solutions for my clients.
                </p>
                <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blogging.
                </p>
            </div>
            <div className="about-image">
                <img src="path_to_your_image_from_pexels" alt="Eugene S. Alaan" />
            </div>
        </section>
    );
};

export default AboutSection;