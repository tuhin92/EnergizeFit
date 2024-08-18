import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Banner = () => {
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
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-[#000000] via-[#280404b3] to-[#000000]">
                <div className="hero-content justify-around flex-col lg:flex-row-reverse">
                    <img
                        data-aos="fade-up"
                        className='h-auto max-w-96'
                        src="https://i.ibb.co/m5dDV5Q/shirtless-bodybuilder-jumping-place.png"
                        alt="Fitness"
                    />
                    <div className='w-auto lg:w-3/6 ml-4'>
                        {/* <h3 className='text-xl lg:text-2xl font-bold'> */}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Get body in shape & stay healthy',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Get body in shape & stay fit',
                                1000,
                                'Get body in shape & stay strong',
                                1000,
                                'Get body in shape & stay active',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        {/* </h3> */}

                        {/* <h1 className="text-5xl lg:text-7xl font-bold">
                            Get body in shape & stay{' '}
                            <span className={`word-transition ${fade ? 'fade-out' : 'fade-in'}`}>
                                {currentWord}
                            </span>
                        </h1> */}
                        <p data-aos="fade-up" className="py-6 text-[#767575] max-w-auto">
                            A huge selection of health and fitness content, healthy recipes, and transformation stories to help you get fit and stay fit!
                        </p>
                        <div data-aos="fade-up" className='flex gap-4'>
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
