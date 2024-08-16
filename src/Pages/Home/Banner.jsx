import React, { useState, useEffect } from 'react';
import './Banner.css'; // Import your CSS

const Banner = () => {
    const words = ['healthy', 'fit', 'strong', 'active']; // Array of words
    const [currentWord, setCurrentWord] = useState(words[0]); // Initial word
    const [fade, setFade] = useState(false); // State to manage the fade effect

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentWord(prevWord => {
                    const currentIndex = words.indexOf(prevWord);
                    const nextIndex = (currentIndex + 1) % words.length;
                    return words[nextIndex];
                });
                setFade(false);
            }, 500); // Duration of fade out (matches the CSS animation duration)
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-[#000000] via-[#280404b3] to-[#000000]">
                <div className="hero-content justify-around flex-col lg:flex-row-reverse">
                    <img
                        className='h-auto max-w-96'
                        src="https://i.ibb.co/m5dDV5Q/shirtless-bodybuilder-jumping-place.png"
                        alt="Fitness"
                    />
                    <div className='w-auto lg:w-3/6 ml-4'>
                        <h1 className="text-5xl lg:text-7xl font-bold">
                            Get body in shape & stay{' '}
                            <span className={`word-transition ${fade ? 'fade-out' : 'fade-in'}`}>
                                {currentWord}
                            </span>
                        </h1>
                        <p className="py-6 text-[#767575] max-w-auto">
                            A huge selection of health and fitness content, healthy recipes, and transformation stories to help you get fit and stay fit!
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
