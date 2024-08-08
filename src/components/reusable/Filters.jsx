import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Filters = ({ selectedFilter, onFilterChange }) => {
    const filters = ["All", "FSD", "Frontend", "Backend"];

    return (
        <div className="flex flex-wrap justify-center mb-8">
            {filters.map((filter, index) => (
                <motion.button
                    // onClick={() => }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <button
                        key={index}
                        onClick={() => onFilterChange(filter)}
                        className={`mx-2 px-4 py-2 rounded-lg font-semibold 
                        ${selectedFilter === filter
                                ? 'bg-gray-800 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {filter}
                    </button>
                </motion.button>
            ))}
        </div>
    );
};