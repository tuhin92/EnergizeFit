import React from 'react';
import { FaRegHandPointRight } from "react-icons/fa6";

const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-12'>
            <h2 className='text-5xl font-semibold text-center'>About Us</h2>

            <div className='text-[#d0d0d0] px-10'>
                <p className='my-4'>Welcome to EnergizeFit, where fitness meets empowerment. Our gym is more than just a place to work out; it's a community where individuals of all ages and fitness levels come together to achieve their goals, build discipline, and enhance their well-being.</p>

                <h4 className='text-2xl text-[#E6533C] font-semibold'>Our Mission</h4>

                <p className='my-4'>At EnergizeFit, our mission is to inspire and empower you to reach your full potential through fitness. We believe that fitness is not just about physical strength, but also about mental and emotional resilience. Our goal is to support your journey toward a healthier, stronger, and more confident you.</p>

                <h4 className='text-2xl text-[#E6533C] font-semibold'>Instructors</h4>

                <p className='my-4'>Our team of dedicated and certified trainers is here to guide you every step of the way. With a deep passion for fitness and a commitment to your success, our trainers bring both expertise and motivation to help you achieve your goals. Whether you're a beginner or a seasoned athlete, our instructors tailor their approach to meet your individual needs.</p>

                <h4 className='text-2xl text-[#E6533C] font-semibold'>Training Environment</h4>

                <p className='my-4'>Our state-of-the-art gym is designed to provide a safe, motivating, and supportive environment for all members. From cutting-edge equipment to a variety of workout spaces, we have everything you need to excel in your fitness journey. Whether you're here for strength training, cardio, or flexibility, you'll find the resources and community support you need.</p>

                <div className='my-6'>
                    <h4 className='text-2xl text-[#E6533C] font-semibold'>What We Offer</h4>
                    <div className='px-8'>
                        <div className='flex gap-6 my-2'>
                            <FaRegHandPointRight className='mt-2'></FaRegHandPointRight>
                            <p>Classes for All Levels: We offer a wide range of classes tailored to different fitness levels and goals. Whether you're starting out or looking to push your limits, we have a class for you.</p>
                        </div>
                        <div className='flex gap-6 my-2'>
                            <FaRegHandPointRight className='mt-2'></FaRegHandPointRight>
                            <p>Diverse Workout Options: EnergizeFit offers a variety of workout options, including strength training, cardio, HIIT, yoga, and more, so you can find the workout that suits you best.</p>
                        </div>
                        <div className='flex gap-6 my-2'>
                            <FaRegHandPointRight className='mt-2'></FaRegHandPointRight>
                            <p>Comprehensive Fitness Programs: Our structured programs are designed to help you build strength, increase endurance, and improve overall fitness. We provide personalized plans to ensure you achieve your goals.</p>
                        </div>
                        <div className='flex gap-6 my-2'>
                            <FaRegHandPointRight className='mt-2'></FaRegHandPointRight>
                            <p>Focus on Well-being: Beyond just workouts, we emphasize holistic well-being, offering nutrition advice, mental wellness support, and recovery programs to help you maintain a balanced lifestyle.</p>
                        </div>
                    </div>
                </div>

                <h4 className='text-2xl text-[#E6533C] font-semibold'>Join Us</h4>
                <p className='my-4'>We invite you to join the EnergizeFit community and take the first step towards a healthier, fitter, and more confident you. Whether your goal is to build muscle, lose weight, or simply stay active, EnergizeFit is here to support your journey.

                    Visit our gym, meet our trainers, and experience the EnergizeFit difference. No matter where you are in your fitness journey, we're here to help you every step of the way.</p>


                <h4 className='text-2xl text-[#E6533C] font-semibold'>Contact Us</h4>
                <p className='my-4'>For inquiries, class schedules, and membership information, please call 9999243492.</p>
            </div>
        </div>
    );
};

export default About;