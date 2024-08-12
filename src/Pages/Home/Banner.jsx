import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero  min-h-screen bg-gradient-to-r from-[#000000] via-[#280404b3] to-[#000000]">
                <div className="hero-content justify-around flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/c611CkK/limor-zellermayer-Jt-Ox-BIXI4-Lw-unsplash-removebg-preview.png"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-3/6'>
                        <h1 className="text-7xl font-bold">Get body in shape & stay healthy</h1>
                        <p className="py-6">
                        A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;