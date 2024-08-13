import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero  min-h-screen ">
                <div className="hero-content justify-around flex-col lg:flex-row-reverse">
                    <img
                        className='h-auto max-w-96'
                        src="https://i.ibb.co/m5dDV5Q/shirtless-bodybuilder-jumping-place.png" />
                    <div className='w-auto lg:w-3/6'>
                        <h1 className="text-5xl lg:text-7xl font-bold">Get body in shape & stay healthy</h1>
                        <p className="py-6 text-[#767575] max-w-auto">
                            A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!
                        </p>
                        <div className='flex gap-4'>
                            <button className="btn bg-[#E6533C] text-white rounded-full px-8">Join Club Now!</button>
                            <button className="btn btn-outline rounded-full px-8">Download App</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;