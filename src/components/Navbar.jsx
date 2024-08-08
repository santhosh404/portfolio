import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const navVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="bg-gray-800 p-4 fixed w-full z-10"
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex justify-between items-center'>
                    <h1
                        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 p-2 drop-shadow-lg"
                    >
                        {'<SA />'}
                    </h1>
                    <div className="md:hidden">
                        <button onClick={handleToggle}>
                            <FaBars className="text-white text-2xl" />
                        </button>
                    </div>
                </div>

                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } md:flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center`}
                >
                    <motion.button
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.9 }}
                        className="block md:inline-block"
                    >
                        <a href="#aboutme" className="text-white font-semibold hover:text-yellow-400 p-2">
                            About Me
                        </a>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.9 }}
                        className="block md:inline-block"
                    >
                        <a href="#experience" className="text-white font-semibold hover:text-yellow-400 p-2">
                            Experience
                        </a>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.9 }}
                        className="block md:inline-block"
                    >
                        <a href="#projects" className="text-white font-semibold hover:text-yellow-400 p-2">
                            Projects
                        </a>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.9 }}
                        className="block md:inline-block"
                    >
                        <a href="#skills" className="text-white font-semibold hover:text-yellow-400 p-2">
                            Skills
                        </a>
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
