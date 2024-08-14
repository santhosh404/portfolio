import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { Avatar } from '@chakra-ui/react';
import { FaRegBuilding } from "react-icons/fa";

// TechHive Technology Logo
const TechHiveLogo = "https://www.techhivetechnology.com/static/media/header_logo.4c3514906688030ff4a0aceabb0c24c3.svg";

const ExperienceSection = () => {
    return (
        <section id="experience" className="bg-gray-100 text-gray-800 py-16 px-4">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="text-3xl font-bold mb-8 flex justify-center"
                >
                    Experience
                </motion.h2>
                <VerticalTimeline>
                    {/* Timeline Item 3 */}
                    <VerticalTimelineElement
                        date="Apr 2024 - Jul 2024"
                        contentStyle={{ background: '#ffffff', color: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
                        iconStyle={{ background: '#ffb74d', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <div className='flex gap-3 items-center'>
                            <Avatar size={'lg'} src={TechHiveLogo} />
                            <div className='flex flex-col gap-1'>
                                <p className="text-md mt-[0px]">Front End Developer</p>
                                <small className='text-[10px] text-gray-400'>TechHive Technology</small>
                                <div className="flex space-x-2 mt-2">
                                    <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                        Freelance
                                    </span>
                                    <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                        Remote
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm pt-6 text-justify">
                            Manage cab bookings, driver registrations, wallet recharges for drivers, customer and referral systems, and fare adjustments. Integrate charts for detailed summaries and ensure seamless communication between the Admin Dashboard, mobile applications, and the website.
                        </p>
                        <div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    React.js
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    Ant Design
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    Express.js
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    PostgreSQL
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    MUI
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    REST APIs
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    Tailwind CSS
                                </span>
                            </div>
                        </div>
                    </VerticalTimelineElement>


                    {/* Timeline Item 2 */}
                    <VerticalTimelineElement
                        date="Sep 2022 - Apr 2024"
                        contentStyle={{ background: '#ffffff', color: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
                        iconStyle={{ background: '#ffb74d', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <div className='flex gap-3 items-center'>
                            <Avatar size={'lg'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAUVBMVEVHcExCueJJvONIu+Ial8MemsYcmMQ4sNpIu+JJvOMdmsU/td1LvuQcmcUtptBJvOMooswemsUem8ZJu+Mal8NJvONJvONJvOMemsVJvONJvOMxybDOAAAAG3RSTlMAC4L/7mz/FNx2e03Bpy+yXcyUld1+kXu3pOniVC5jAAAAbUlEQVR4Ae3MNRaEQAAEUWDcXe9/z5V8cEIq/f16eqR5ARCtGQAAYzxGsoMUruHMyG/BpwsJCbDSY5NGWGudX1EZVFQrtynJyNEKhiCj52uY5Yvlj3YFqcmqurG1JDIXK79k6RRGNE8raTId7gsIVQeatK9ogAAAAABJRU5ErkJggg==" />
                            <div className='flex flex-col gap-1'>
                                <p className="text-md mt-[0px]">Customer Success Engineer</p>
                                <small className='text-[10px] text-gray-400'>Pillir - Chennai, Tamil Nadu, India</small>
                                <div className="flex space-x-2 mt-2">
                                    <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                        Full-Time
                                    </span>
                                    <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                        On-site
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm pt-6 text-justify">
                            Built a tool for running bulk automation scripts using React JS and Express.js APIs. Integrated with TestRail to create new test runs and automated test cases using Cypress. Developed front-end of B2B applications with low-code platforms, ensuring compatibility across devices.
                        </p>
                        <div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    React.js
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    JavaScript
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    Express.js
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    RestAPI
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    MongoDB
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    React States
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    React Router
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    React Hooks
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    SQL
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    JSON Web Token (JWT)
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    Test Automation
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    Cypress
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    Mobile Application Development
                                </span>

                            </div>
                        </div>
                    </VerticalTimelineElement>

                    {/* Timeline Item 1 */}
                    <VerticalTimelineElement
                        date="March 2021 - May 2021"
                        contentStyle={{ background: '#ffffff', color: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
                        iconStyle={{ background: '#ffb74d', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <div className='flex gap-3 items-center'>
                            <Avatar size={'lg'} name='Best Enlist' />
                            <div className='flex flex-col gap-1'>
                                <p className="text-md mt-[0px]">Software Development Intern</p>
                                <small className='text-[10px] text-gray-400'>BestEnlist - Chennai, Tamil Nadu, India</small>
                                <div className="flex space-x-2 mt-2">
                                    <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                        Internship
                                    </span>
                                    <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                        Remote
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm pt-6 text-justify">
                            Gained hands-on experience in software development, contributing to various projects and learning key aspects of the software development lifecycle.
                        </p>
                        <div>
                            <div className="flex flex-wrap space-x-2 mt-2">
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    React JS
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    JavaScript
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    HTML
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    CSS
                                </span>
                                <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-medium">
                                    Responsive Web Design
                                </span>
                            </div>
                        </div>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    );
};

export default ExperienceSection;
