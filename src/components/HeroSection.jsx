import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import { FiChevronsDown } from 'react-icons/fi';

const HeroSection = () => {

    const scrollToSection = () => {
        window.scrollTo({
            top: window.innerHeight, // scrolls down by the height of the viewport
            behavior: 'smooth',
        });
    };

    return (
        <section id='aboutme' className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center px-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="mb-6"
            >
                <h1 className="text-5xl font-bold mb-2">
                    {'<Santhosh Annamalai />'}
                </h1>
                <h2 className="text-2xl font-semibold mb-4">
                    🧑🏻‍💻 Full Stack Developer
                </h2>
                <p className="text-lg mb-8 max-w-[1000px] mx-auto text-justify">
                    Passionate Full Stack Developer with over 1.5 years of experience in the IT industry, specializing in building dynamic web applications using modern technologies. Proficient in ReactJS, ExpressJS, and MongoDB, I have a proven track record of delivering high-quality projects that meet client needs. Recently, I successfully completed a freelance project for Chennai Cabs, where I developed an Admin management dashboard. This project, now live, showcases my ability to handle end-to-end development and deliver robust solutions in a timely manner. Additionally, I am constantly seeking to expand my skill set and stay updated with the latest industry trends to create impactful web applications.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-end space-y-4 md:space-y-0 md:space-x-6 mt-10">
                    <a href="https://www.linkedin.com/in/santhosh-annamalai-a32ba31a3/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-yellow-400">
                        <FaLinkedin className='w-6 h-6' />
                    </a>
                    <a href="https://github.com/santhosh404" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-yellow-400">
                        <FaGithub className='w-6 h-6' />
                    </a>
                    <a href="https://drive.google.com/file/d/1r9ax_HeJS-KDN4h9DO5tItqzO8wanN2a/view?usp=sharing" download className="flex items-center text-2xl hover:text-yellow-400">
                        <AiOutlineDownload className='w-6 h-6' />
                    </a>
                </div>
            </motion.div>

            {/* Scroll Down Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0, duration: 1 }}
                className="absolute bottom-10 cursor-pointer"
                onClick={scrollToSection}
            >
                <FiChevronsDown className="h-16 w-16 animate-bounce hover:text-yellow-400" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
