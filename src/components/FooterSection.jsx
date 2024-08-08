import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterSection = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="mb-4">Feel free to reach out to me via email or connect with me on social media!</p>
                <div className="flex mt-10 justify-center mb-6">
                    <a
                        href="https://www.linkedin.com/in/santhosh-annamalai-a32ba31a3/"
                        className="mx-3 text-blue-400 hover:text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/santhosh404"
                        className="mx-3 text-gray-400 hover:text-gray-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="mailto:santhoshmathi2002@gmail.com"
                        className="mx-3 text-red-400 hover:text-red-500"
                        aria-label="Email"
                    >
                        <FaEnvelope size={30} />
                    </a>
                </div>
                <p className="text-sm text-gray-400">
                    &copy; 2024 Santhosh Annamalai. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default FooterSection;
