import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="mb-6"
            >
                <h1 className="text-5xl font-bold mb-2">
                    Santhosh Annamalai
                </h1>
                <h2 className="text-2xl font-semibold mb-4">
                    Full Stack Developer
                </h2>
                <p className="text-lg mb-8 max-w-xl mx-auto">
                    Passionate Full Stack Developer with expertise in building dynamic web applications using modern technologies. Focused on creating user-friendly experiences and robust, scalable solutions.
                </p>
                <div className="flex justify-center space-x-6 mt-10">
                    <a href="https://www.linkedin.com/in/santhosh-annamalai" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/santhoshannamalai" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/santhoshannamalai" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
                        <FaDownload />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
