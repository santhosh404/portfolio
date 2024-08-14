import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filters } from './reusable/Filters';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
    {
        title: '#1 Rental Stores for Market Place',
        description: 'This project is a rental equipment platform that allows users to view and book rental equipment, and owners to list their stores and manage rentals. The platform features secure payment processing, booking logs, and comprehensive user and admin interfaces.',
        link: 'https://rentit-store.netlify.app',
        skills: ["ReactJS", "ExpressJS", "MongoDB", "NodeJS", "JWT", "AWS-S3", "Formik"],
        image: "https://images.unsplash.com/photo-1505758480-67e8d1b6fcec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "FSD"
    },
    {
        title: '#2 React Expense App',
        description: "This project helps users manage and track daily expenses efficiently. It allows easy logging of daily expenses and provides a quick view of the current day's spending. Users can also analyze their overall expenses through date-wise analytics, making it easier to identify spending patterns and manage budgets effectively.",
        link: 'https://reactexpenses.onrender.com',
        skills: ["ReactJS", "ExpressJS", "MongoDB", "NodeJS", "JWT", "Formik"],
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXhwZW5zZXN8ZW58MHx8MHx8fDA%3D",
        tag: "FSD"
    },
    {
        title: '#3 Chat App Using Websocket',
        description: 'The chat app is a real-time messaging platform that enables seamless communication between users. It features one-on-one chats, allowing users to share text messages, emojies. The user-friendly interface supports. Additionally, the app is designed to be responsive, working smoothly across mobile and web platforms, ensuring you can chat anytime, anywhere.',
        link: 'https://ping-kar.netlify.app',
        skills: ["ReactJS", "ExpressJS", "MongoDB", "NodeJS", "JWT"],
        image: "https://plus.unsplash.com/premium_photo-1684761949804-fd8eb9a5b6cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
        tag: "FSD"
    },
    {
        title: '#4 Event Management',
        description: 'Event management app contains List of events where user can book events and view booked events and has admin to do all CRUD operations',
        link: '#',
        skills: ["ReactJS", "ExpressJS", "MongoDB", "NodeJS", "JWT", "Role based authentication", "AntDesign", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1653821355703-abbdc0b819bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV2ZW50JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
        tag: "FSD"
    },
    {
        title: 'Assign Mentor to Students and Vice-versa',
        description: 'The project is an API for managing mentors and students within an educational or training environment. The API facilitates creating, retrieving, and assigning mentors and students. It provides endpoints to create new mentors and students, retrieve all or specific mentors and students, and assign students to mentor and vice versa',
        link: 'https://documenter.getpostman.com/view/19527033/2sA3QwbpRW',
        skills: ["ExpressJS", "MongoDB", "NodeJS"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVudG9ycyUyMHN0dWRlbnRzfGVufDB8fDB8fHww",
        tag: "Backend"
    },
    {
        title: 'Hall Booking Based on Availability',
        description: 'This Hall Booking Collection contains APIs related to managing rooms and customers. It provides endpoints for creating rooms, booking rooms for specific customers, listing all rooms with their booking details, and retrieving details of a single room. Additionally, it includes endpoints for creating customers, listing all customers with their room details, and getting the booking count for each customer.',
        link: 'https://documenter.getpostman.com/view/19527033/2sA3QsBYSU',
        skills: ["ExpressJS", "MongoDB", "NodeJS"],
        image: "https://media.istockphoto.com/id/1218436318/photo/close-up-shot-of-an-unrecognizable-man-holding-his-smart-phone-while-using-a-laptop.webp?b=1&s=170667a&w=0&k=20&c=D05fGngA9gdNAiXkqGviZq_Y88p8D8Q8JE5hdAVY1To=",
        tag: "Backend"
    },
    {
        title: 'Working With File Systems',
        description: 'This project provides a simple file management system using Node.js and Express.js, file system. It includes two main API endpoints for creating a file with the current timestamp and retrieving all files in a specified folder. The folder location is configurable via environment variables. And used moment.js for handling the current date and time stamps',
        link: 'https://documenter.getpostman.com/view/19527033/2sA3Qqes9w',
        skills: ["ExpressJS", "MongoDB", "NodeJS", "fs"],
        image: "https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsZSUyMHN5c3RlbXN8ZW58MHx8MHx8fDA%3D",
        tag: "Backend"
    },
    {
        title: 'Password Reset',
        description: 'This project includes the password reset feature such sending the password reset mail to respective email id and after successfull reset of password, updates the db in a secure token based manner',
        link: 'https://documenter.getpostman.com/view/19527033/2sA3Qwbpj1',
        skills: ["ExpressJS", "MongoDB", "NodeJS", "fs"],
        image: "https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzZXQlMjBwYXNzd29yZHxlbnwwfHwwfHx8MA%3D%3D",
        tag: "Backend"
    },
    {
        title: 'Library Management using ReactJS',
        description: 'Users can navigate through three tabs: Dashboard, Authors, and Books. The Dashboard displays all information, including top books and authors. The Authors tab lists all authors, with options to create, edit, and delete authors, and all forms are validated with Formik. Similarly, the Books tab shows all books, allowing users to create, edit, and delete books, with forms also validated using Formik.',
        link: 'https://formik-library-management-react.netlify.app/',
        skills: ["ReactJS", "Mock API", "Context API", "TailWind CSS", "Chakra UI", "formik"],
        image: "https://images.unsplash.com/photo-1700683533670-2a9eaf3206dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGlicmFyeSUyME1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
        tag: "Frontend"
    },
    {
        title: 'Shopping Cart using Redux',
        description: 'This feature enables users to adjust product quantities in their cart, with real-time updates to the actual price and offer price based on the quantity and discount percentage. Users can remove items from the cart and view both the original total price without discounts and the total discount amount. The total and subtotal prices are dynamically updated to reflect any changes.',
        link: 'https://shoppingcart-redux-demo.netlify.app',
        skills: ["ReactJS", "Mock API", "react-redux", "redux-toolkit", "TailWind CSS", "Chakra UI"],
        image: "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmclMjBjYXJ0fGVufDB8fDB8fHww",
        tag: "Frontend"
    },
    {
        title: 'React Blog List',
        description: 'This Project demonstrates the react router dom feature and a pagination like ui.',
        link: 'https://bloglist-demo.netlify.app/',
        skills: ["ReactJS", "react-router-dom", "TailWind CSS", "Chakra UI"],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
        tag: "Frontend"
    },
    {
        title: 'React Todo App',
        description: 'This project consists of CRUD operation along with filter using react js. User can create, update, delete, read the todo items, update the status (ie. Completed and Not Completed) and also able to filter the todos',
        link: 'https://react-todo-demo.netlify.app/',
        skills: ["ReactJS", "TailWind CSS", "Chakra UI"],
        image: "https://plus.unsplash.com/premium_photo-1683262038148-2ac280407276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRvZG8lMjBhcHB8ZW58MHx8MHx8fDA%3D",
        tag: "Frontend"
    },
];

const ProjectsSection = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [projectCount, setProjectCount] = useState(4)

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        if (filter === "All") {
            setFilteredProjects(projectsData);
            setProjectCount(4)
        } else {
            const filtered = projectsData.filter(project =>
                project.tag === filter
            );
            setFilteredProjects(filtered);
        }
    };

    return (
        <section id="projects" className="bg-white py-16 px-4">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="text-3xl font-bold mb-8 flex flex-col justify-center items-center"
                >
                    Projects
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-8 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 "
                    >
                        <a
                            href={'https://github.com/santhosh404?tab=repositories'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-3'
                        >
                            <FaGithub className='h-5 w-5' />
                            View Github
                        </a>
                    </motion.button>
                </motion.h2>

                {/* Filters */}
                <Filters selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20">
                    {filteredProjects.slice(0, projectCount).map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <div className='flex flex-col gap-3'>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4 truncate-multiline text-justify">{project.description}</p>
                                <div className="my-4">
                                    {project?.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="inline-block bg-blue-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='w-full '
                                >
                                    <a
                                        href={project.link}
                                        className="mt-5 block w-full bg-gray-800 px-6 py-3 text-white font-semibold rounded-4xl hover:bg-gray-700"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {
                                            project.tag === "Backend" ? "View API Docs" : "View"
                                        }
                                    </a>
                                </motion.button>
                            </div>

                        </motion.div>
                    ))}
                </div>
                {
                    projectCount < filteredProjects.length && (
                        <motion.button
                            onClick={() => setProjectCount(prev => prev + 4)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="mt-8 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700"
                        >

                            View More
                        </motion.button>
                    )
                }

            </div>
        </section>
    );
};

export default ProjectsSection;
