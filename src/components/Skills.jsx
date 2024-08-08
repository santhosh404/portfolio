import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaGithub } from 'react-icons/fa';
import { DiCss3, DiJavascript1, DiMongodb, DiMysql, DiGit } from 'react-icons/di';
import { SiExpress, SiGraphql, SiRedux, SiCypress } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact size={50} className="text-blue-600" /> },
    { name: 'JavaScript', icon: <DiJavascript1 size={50} className="text-yellow-400" /> },
    { name: 'Express.js', icon: <SiExpress size={50} className="text-gray-600" /> },
    // { name: 'JWT', icon: <SiJwt size={50} className="text-yellow-600" /> },
    { name: 'GraphQL', icon: <SiGraphql size={50} className="text-purple-600" /> },
    { name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-600" /> },
    { name: 'MongoDB', icon: <DiMongodb size={50} className="text-green-800" /> },
    { name: 'Redux', icon: <SiRedux size={50} className="text purple-600" /> },
    { name: 'MySQL', icon: <DiMysql size={50} className="text-blue-600" /> },
    { name: 'AWS', icon: <FaAws size={50} className="text-orange-500" /> },
    // { name: 'WebSocket', icon: <SiWebsocket size={50} className="text-gray-600" /> },
    { name: 'Cypress', icon: <SiCypress size={50} className="text-green-600" /> },
    { name: 'Git', icon: <DiGit size={50} className="text-red-600" /> },
    { name: 'GitHub', icon: <FaGithub size={50} className="text-black" /> },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="bg-gray-100 py-16 px-4">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="text-3xl font-bold mb-8"
                >
                    Skills
                </motion.h2>
                <div className="overflow-hidden relative">
                    <motion.div
                        className="flex space-x-8 py-4"
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                    >
                        <div className="flex space-x-8">
                            {skills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center">
                                    <div className="p-4">{skill.icon}</div>
                                    <p className="mt-2 text-md font-medium">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-8">
                            {skills.map((skill) => (
                                <div key={skill.name + '-2'} className="flex flex-col items-center">
                                    <div className="p-4">{skill.icon}</div>
                                    <p className="mt-2 text-md font-medium">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
