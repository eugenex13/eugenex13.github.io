import React from 'react';
import './PortfolioSection.css'; // Assuming you will create a separate CSS file for this section

const PortfolioSection = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A brief description of Project One.',
            link: 'https://example.com/project-one',
            image: 'path/to/image1.jpg' // Replace with actual image path from src/assets/images
        },
        {
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            link: 'https://example.com/project-two',
            image: 'path/to/image2.jpg' // Replace with actual image path from src/assets/images
        },
        {
            title: 'Project Three',
            description: 'A brief description of Project Three.',
            link: 'https://example.com/project-three',
            image: 'path/to/image3.jpg' // Replace with actual image path from src/assets/images
        }
    ];

    return (
        <section className="portfolio-section">
            <h2 className="portfolio-title">My Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="portfolio-item" key={index}>
                        <img src={project.image} alt={project.title} className="portfolio-image" />
                        <h3 className="portfolio-item-title">{project.title}</h3>
                        <p className="portfolio-item-description">{project.description}</p>
                        <a href={project.link} className="portfolio-item-link" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection;