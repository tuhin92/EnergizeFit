import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { TypeAnimation } from 'react-type-animation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

// Import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";

const About = () => {
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
    }, []);

    return (
        <div className='max-w-7xl mx-auto my-6 p-4'>
            {/* Hero banner */}
            <div
                data-aos="fade-up"
                className="hero min-h-96 rounded-2xl p-4"
                style={{
                    backgroundImage: "url(https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}>
                <div className="hero-content rounded-2xl hero-overlay text-center">
                    <div className="max-w-4xl">
                        <h2 data-aos="zoom-in" className='text-5xl font-semibold text-center'>
                            About <span className='text-[#E6533C]'>Us</span>
                        </h2>
                        <TypeAnimation
                            sequence={[
                                'Welcome to EnergizeFit, where fitness meets empowerment. Our gym is more than just a place to work out; its a community where individuals of all ages and fitness levels come together to achieve their goals, build discipline, and enhance their well-being',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>

            <div className="hero  min-h-96 mt-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Swiper
                        data-aos="fade-up"
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        autoplay={{
                            delay: 1500, // 1.5 seconds
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/4943931/pexels-photo-4943931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/3025027/pexels-photo-3025027.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/3838701/pexels-photo-3838701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/2261478/pexels-photo-2261478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/4047039/pexels-photo-4047039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/7673594/pexels-photo-7673594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.pexels.com/photos/7991614/pexels-photo-7991614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                    </Swiper>
                    <div data-aos="fade-up">
                        <h1 className="text-4xl font-bold">Our Mission</h1>
                        <p className="py-6 max-w-2xl text-[#767575]">
                            At EnergizeFit, our mission is to inspire and empower you to reach your full potential through fitness. We believe that fitness is not just about physical strength, but also about mental and emotional resilience. Our goal is to support your journey toward a healthier, stronger, and more confident you.
                        </p>
                        <button className="btn bg-[#E6533C] text-white rounded-lg px-8">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="hero  min-h-96 mt-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos="fade-up"
                        src="https://img.freepik.com/free-photo/group-gymnastic-acrobatic-caucasian-men_155003-3508.jpg?t=st=1724099243~exp=1724102843~hmac=7149abc5f415e43d8ae3c7ce6993c8ab5d230a10cf71f8962e622cad0e01de3c&w=996"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div data-aos="fade-up">
                        <h1 className="text-4xl font-bold">Instructors</h1>
                        <p className="py-6 max-w-2xl text-[#767575]">
                            Our team of dedicated and certified trainers is here to guide you every step of the way. With a deep passion for fitness and a commitment to your success, our trainers bring both expertise and motivation to help you achieve your goals. Whether you're a beginner or a seasoned athlete, our instructors tailor their approach to meet your individual needs.
                        </p>
                        <button className="btn bg-[#E6533C] text-white rounded-lg px-8">Learn More</button>
                    </div>
                </div>
            </div>

            {/* what we offer */}
            <div>
                <h1 data-aos="fade-up" className="text-4xl font-bold text-center mt-8">What We Offer</h1>
                <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-24 justify-items-center'>
                    {/* card 1  */}
                    <div data-aos="flip-left" className="card bg-base-100 w-80 rounded-xl">
                        <div className="card-body">
                            <div className='border-2 p-8 rounded-xl'>
                                <h2 className="text-2xl font-semibold text-center text-[#E6533C]">Classes for All Levels</h2>
                                <p className='py-2 text-[#767575]'>We offer a wide range of classes tailored to different fitness levels and goals. Whether you're starting out or looking to push your limits, we have a class for you.</p>
                            </div>
                        </div>
                    </div>


                    {/* second card  */}
                    <div data-aos="flip-left" className="card bg-base-100 w-80 rounded-xl">
                        <div className="card-body">
                            <div className='border-2 p-8 rounded-xl'>
                                <h2 className="text-2xl font-semibold text-center text-[#E6533C]">Classes for All Levels</h2>
                                <p className='py-2 text-[#767575]'>We offer a wide range of classes tailored to different fitness levels and goals. Whether you're starting out or looking to push your limits, we have a class for you.</p>
                            </div>
                        </div>
                    </div>

                    {/* third card  */}
                    <div data-aos="flip-right" className="card bg-base-100 w-80 rounded-xl">
                        <div className="card-body">
                            <div className='border-2 p-8 rounded-xl'>
                                <h2 className="text-2xl font-semibold text-center text-[#E6533C]">Classes for All Levels</h2>
                                <p className='py-2 text-[#767575]'>We offer a wide range of classes tailored to different fitness levels and goals. Whether you're starting out or looking to push your limits, we have a class for you.</p>
                            </div>
                        </div>
                    </div>

                    {/* fourth card  */}
                    <div data-aos="flip-right" className="card bg-base-100 w-80 rounded-xl">
                        <div className="card-body">
                            <div className='border-2 p-8 rounded-xl'>
                                <h2 className="text-2xl font-semibold text-center text-[#E6533C]">Classes for All Levels</h2>
                                <p className='py-2 text-[#767575]'>We offer a wide range of classes tailored to different fitness levels and goals. Whether you're starting out or looking to push your limits, we have a class for you.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            {/* contact us  */}
            <div>
                <h1 data-aos="fade-up" className="text-4xl font-bold text-center mt-12">Contact Us</h1>
                <div className=' flex justify-evenly mt-12'>
                    <div data-aos="zoom-in" className='bg-red-700 p-4 rounded-2xl'>
                        <button>
                            <SiGmail className='h-12 w-12'></SiGmail>
                        </button>
                    </div>
                    <div data-aos="zoom-in" className='bg-[#08ba4d] p-4 rounded-2xl'>
                        <button>
                            <IoLogoWhatsapp className='h-12 w-12'></IoLogoWhatsapp>
                        </button>
                    </div>
                    <div data-aos="zoom-in" className='bg-blue-700 p-4 rounded-2xl'>
                        <button>
                            <FaFacebookF className='h-12 w-12'></FaFacebookF>
                        </button>
                    </div>
                    <div data-aos="zoom-in" className='bg-cyan-600 p-4 rounded-2xl'>
                        <button>
                            <FaTelegramPlane className='h-12 w-12'></FaTelegramPlane>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
