import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#000000] via-[#202020b3] to-[#000000]">
                <div className='max-w-7xl mx-auto'>
                    <Navbar></Navbar>
                    <h2>This is home page</h2>
                </div>
            </div>
            others home Components
        </div>
    );
};

export default Home;