import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Service = () => {
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
            <h2 data-aos="fade-up" className='mt-8 mb-4 text-5xl font-bold text-center'>Services</h2>


            {/* Strength Training Exercises  */}
            <div className='mt-8'>
                <h2 data-aos="fade-up" className='text-2xl font-bold text-[#E6533C] text-center'>Strength Training Exercises</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>

                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Push-Ups</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/6516212/pexels-photo-6516212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Squats</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/7318759/pexels-photo-7318759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Lunges</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/7592988/pexels-photo-7592988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Planks</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/15679567/pexels-photo-15679567/free-photo-of-woman-holding-barbell-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Deadlifts</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/4853657/pexels-photo-4853657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Bench Press</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/3931370/pexels-photo-3931370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Bicep Curls</h2>
                        </div>
                    </div>
                </div>


                {/* Flexibility and Mobility Exercises  */}
                <h2 data-aos="fade-up" className='text-2xl font-bold text-[#E6533C] text-center mt-4'>Flexibility and Mobility Exercises</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Yoga</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Pilates</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/3766217/pexels-photo-3766217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Stretching</h2>
                        </div>
                    </div>
                </div>



                {/* Cardio Exercises  */}
                <h2 data-aos="fade-up" className='text-2xl font-bold text-[#E6533C] text-center mt-4'>Cardio Exercises</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Jogging</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/6295965/pexels-photo-6295965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Jump Rope</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/3771834/pexels-photo-3771834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Cycling </h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Swimming</h2>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="card w-96 mt-4">
                        <img
                            src="https://images.pexels.com/photos/3756521/pexels-photo-3756521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
                            alt="Push Up"
                            className="rounded-xl" />
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Burpees</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;