import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    const navLinks = (
        <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
            <li>
                <NavLink 
                    to="/" 
                    onClick={handleLinkClick}
                    className={({ isActive }) => 
                        isActive ? 'text-blue-500' : 'text-gray-500'
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/service" 
                    onClick={handleLinkClick}
                    className={({ isActive }) => 
                        isActive ? 'text-blue-500' : 'text-gray-500'
                    }
                >
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/price&schedule" 
                    onClick={handleLinkClick}
                    className={({ isActive }) => 
                        isActive ? 'text-blue-500' : 'text-gray-500'
                    }
                >
                    Price & Schedule
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/about" 
                    onClick={handleLinkClick}
                    className={({ isActive }) => 
                        isActive ? 'text-blue-500' : 'text-gray-500'
                    }
                >
                    About Us
                </NavLink>
            </li>
        </ul>
    );

    return (
        <div className="navbar max-w-7xl mx-auto py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div 
                        tabIndex={0} 
                        role="button" 
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setIsOpen(!isOpen)} // Toggle the dropdown
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {isOpen && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow w-52">
                            {navLinks}
                        </ul>
                    )}
                </div>
                <Link to="/" className="text-2xl font-bold text-[#E6533C]">EnergizeFit</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
