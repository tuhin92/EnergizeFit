import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer max-w-7xl mx-auto  text-base-content p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <aside>
                    <h2 className='text-6xl font-extrabold text-[#E6533C]'>EnergizeFit</h2>
                    <p className='mt-4 text-[#767575]'>
                        We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.
                    </p>
                </aside>
                <nav className='text-base font-normal mx-auto'>
                    <h6 className="footer-title text-2xl font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='text-base font-normal mx-auto'>
                    <h6 className="footer-title text-2xl font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;