import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
    {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        link: '#',
    },
    {
        title: 'Project 2',
        description: 'A brief description of Project 2.',
        link: '#',
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 3.',
        link: '#',
    },
    {
        title: 'Project 4',
        description: 'A brief description of Project 4.',
        link: '#',
    },
    {
        title: 'Project 5',
        description: 'A brief description of Project 5.',
        link: '#',
    },
    // Add more projects as needed
];

const ProjectsSection = () => {
    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

    return (
        <section id="projects" className="bg-white py-16 px-4">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="text-3xl font-bold mb-8"
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProjects.map((project, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                className="text-blue-500 hover:text-blue-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
                <motion.button
                    onClick={() => setShowAll(!showAll)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                >
                    {showAll ? 'View Less' : 'View More'}
                </motion.button>
            </div>
        </section>
    );
};

export default ProjectsSection;
