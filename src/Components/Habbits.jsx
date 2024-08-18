import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Habbits = () => {
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
        <div className='max-w-7xl mx-auto'>
            <h2 data-aos="fade-up" className='text-5xl text-center font-bold'>Change Your Habits</h2>
            <p data-aos="fade-up" className='text-center mt-6 text-[#767575]'>We believe fitness should be accessible to everyone, everywhere, regardless of income or <br /> access to a gym.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 justify-center'>

                {/* first card  */}
                <div data-aos="zoom-in-right" className="card w-72 shadow-xl mx-auto">
                    <figure>
                        <img
                            className='rounded-full'
                            src="https://i.ibb.co/0fgFxCG/image-2.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="font-semibold text-lg">
                            Time
                        </h2>
                        <p className='text-sm text-[#767575]'>We believe fitness should be accessible to everyone</p>
                    </div>
                </div>

                {/* second card  */}
                <div data-aos="zoom-in-right" className="card w-72 shadow-xl mx-auto">
                    <figure>
                        <img
                            className='rounded-full'
                            src="https://i.ibb.co/TRZ0ddq/image-3.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="font-semibold text-lg">
                            Movement
                        </h2>
                        <p className='text-sm text-[#767575]'>We believe fitness should be accessible to everyone</p>
                    </div>
                </div>

                {/* third card  */}
                <div data-aos="zoom-in-left" className="card w-72 shadow-xl mx-auto">
                    <figure>
                        <img
                            className='rounded-full'
                            src="https://i.ibb.co/PYR40Bd/image-4.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="font-semibold text-lg">
                            Practice
                        </h2>
                        <p className='text-sm text-[#767575]'>We believe fitness should be accessible to everyone</p>
                    </div>
                </div>

                {/* fourth card  */}
                <div data-aos="zoom-in-left" className="card w-72 shadow-xl mx-auto">
                    <figure>
                        <img
                            className='rounded-full'
                            src="https://i.ibb.co/HG1Syvc/image-5.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="font-semibold text-lg">
                            Weight Loss
                        </h2>
                        <p className='text-sm text-[#767575]'>We believe fitness should be accessible to everyone</p>
                    </div>
                </div>
            </div>


            {/* banner  */}
            <div data-aos="zoom-in-up" className="bg-[#222222] mt-12 rounded-2xl py-6">
                <div className="flex flex-col lg:flex-row-reverse justify-around items-center">
                    <img
                        src="https://i.ibb.co/Pz3wxLp/Rectangle-22.png"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-8'>
                        <h1 className="text-5xl font-bold">Run an Extra <br />
                            Mile Easily</h1>
                        <p className="py-6 text-[#767575]">
                            We believe fitness should be accessible to everyone, <br /> everywhere, regardless of income or access to a gym. With <br /> hundreds of professional workouts.
                        </p>
                        <button className="btn bg-[#E6533C] text-white rounded-full px-12">Join Now!</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Habbits;