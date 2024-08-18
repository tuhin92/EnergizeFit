import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { IoIosCheckmarkCircle } from "react-icons/io";

const Pricing = () => {
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
        <div className='max-w-7xl mx-auto my-8'>
            {/* schedule  */}
            <h2 data-aos="zoom-in" className='text-5xl font-bold text-center '>Schedule</h2>


            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10  mt-8'>
                <div data-aos="zoom-in-right" className="card bg-base-100 w-96">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">MONDAY / WEDNESDAY / FRIDAY</h2>
                        {/* time  */}
                        <div className='text-center mt-8  font-semibold'>
                            <h3>5:00 AM - 5:45AM</h3>
                            <h3>6:00 AM - 6:45 AM</h3>
                            <br />
                            <h3>4:15 PM - 5:00 PM</h3>
                            <h3>5:15 PM - 6:00 PM</h3>
                            <h3>6:15 PM - 7:00 PM</h3>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-left" className="card bg-base-100 w-96">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">TUESDAY/THURSDAY
                        </h2>
                        {/* time  */}
                        <div className='text-center mt-8 font-semibold'>
                            <h3>5:00 AM - 5:45AM</h3>
                            <h3>6:00 AM - 6:45 AM</h3>
                            <br />
                            <h3>4:15 PM - 5:00 PM</h3>
                            <h3>5:15 PM - 6:00 PM</h3>
                        </div>
                    </div>
                </div>
            </div>



            {/* pricing  */}
            <h2 data-aos="zoom-in" className='text-5xl font-bold text-center my-12'>Pricing</h2>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {/* first card  */}
                <div data-aos="flip-left" className="card bg-white w-96 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
                    <div className="card-body text-black">
                        <h2 className="text-center text-4xl">Basic</h2>
                        <div className='flex items-center justify-center gap-2'>
                            <h2 className='text-8xl font-semibold'>79</h2>
                            <h2 className='text-4xl font-semibold'>USD</h2>
                        </div>
                        <h2 className='text-4xl text-center'>6 Weeks</h2>
                        <p className='text-base font-semibold text-center text-[#767575] py-4'>Get started with our basic plan.</p>
                        <hr className='mt-2 border-[#767575]' />

                        <div className='mt-4'>
                            <div className='flex items-center gap-3 py-2'>
                                <IoIosCheckmarkCircle />
                                <p className='font-semibold'>Diet Plan</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <IoIosCheckmarkCircle />
                                <p className='font-semibold'>Workout Plan</p>
                            </div>
                            <div className='flex items-center gap-3 py-2'>
                                <IoIosCheckmarkCircle />
                                <p className='font-semibold'>Daily Follow-ups</p>
                            </div>
                        </div>
                        <button className="btn border-none bg-[#E6533C] text-white px-8 mt-6">Get Now!</button>
                    </div>
                </div>


                {/* second card  */}
                <div data-aos="flip-up" className="card bg-[#11a296] w-96 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
                    <div className="card-body text-black">
                        <h2 className="text-center text-4xl">Standard</h2>
                        <div className='flex items-center justify-center gap-2'>
                            <h2 className='text-8xl font-semibold'>99</h2>
                            <h2 className='text-4xl font-semibold'>USD</h2>
                        </div>
                        <h2 className='text-4xl text-center'>8 Weeks</h2>
                        <p className='text-base font-semibold text-center  py-4'>Recommended: Give yourself enough time to fully change.</p>
                        <hr className='mt-2 border-[#767575]' />

                        <div className='mt-4'>
                            <div className='flex items-center gap-3 py-2'>
                                <IoIosCheckmarkCircle />
                                <p className='font-semibold'>Diet Plan</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <IoIosCheckmarkCircle />
                                <p className='font-semibold'>Workout Plan</p>
                            </div>
                            <div className='flex items-center gap-3 py-2'>
                                <IoIosCheckmarkCircle />
                                <p className='font-semibold'>Daily Follow-ups</p>
                            </div>
                        </div>
                        <button className="btn border-none bg-[#E6533C] text-white px-8 mt-6">Get Now!</button>
                    </div>
                </div>


                {/* third card  */}
                <div data-aos="flip-right" className="card bg-white w-96 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
                    <div className="card-body text-black">
                        <h2 className="text-center text-4xl">Premium</h2>
                        <div className='flex items-center justify-center gap-2'>
                            <h2 className='text-8xl font-semibold'>149</h2>
                            <h2 className='text-4xl font-semibold'>USD</h2>
                        </div>
                        <h2 className='text-4xl text-center'>12 Weeks</h2>
                        <p className='text-xl text-center text-[#767575] py-4'>Fully commit  to your body with our Premium plan.</p>
                        <hr className='mt-2 border-[#767575]' />

                        <div className='mt-4'>
                            <div className='flex items-center gap-3 py-2'>
                                <IoIosCheckmarkCircle />
                                <p className='font-semibold'>Diet Plan</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <IoIosCheckmarkCircle />
                                <p className='font-semibold'>Workout Plan</p>
                            </div>
                            <div className='flex items-center gap-3 py-2'>
                                <IoIosCheckmarkCircle />
                                <p className='font-semibold'>Daily Follow-ups</p>
                            </div>
                        </div>
                        <button className="btn border-none bg-[#E6533C] text-white px-8 mt-6">Get Now!</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Pricing;