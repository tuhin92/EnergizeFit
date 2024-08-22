import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: false,    // Animation triggers every time you scroll
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', AOS.refresh);
        return () => {
            window.removeEventListener('scroll', AOS.refresh);
        };
    }, [])
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-[#E6533C]">EnergizeFit</h2>
                    <p className="text-gray-400">
                        We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-[#E6533C] transition">
                            <FaFacebookF className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#E6533C] transition">
                            <FaTwitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#E6533C] transition">
                            <FaInstagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#E6533C] transition">
                            <FaLinkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
                <div className="space-y-4 md:col-span-2 md:flex md:flex-col md:justify-center">
                    <div className="text-gray-400 flex justify-around">
                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-lg">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition">Home</a></li>
                                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition">Reviews</a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-lg">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-400 border-t border-gray-700 pt-4">
                <p>&copy; 2024 EnergizeFit. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;