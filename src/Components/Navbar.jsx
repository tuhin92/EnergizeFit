import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <div className="border border-[#323131b3] rounded-full flex space-x-4">
    <li>
      <NavLink 
        to="/" 
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
        className={({ isActive }) => 
          isActive ? 'text-blue-500' : 'text-gray-500'
        }
      >
        About Us
      </NavLink>
    </li>
  </div>
    </>
    return (
        <div className="navbar  max-w-7xl mx-auto py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
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