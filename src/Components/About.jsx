import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
// import { FaRegHandPointRight } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

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
    }, [])
    return (
        <div className='max-w-7xl mx-auto my-6'>
            <div
                className="hero min-h-96 rounded-2xl"
                style={{
                    backgroundImage: "url(https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}>
                <div className="hero-content rounded-2xl hero-overlay text-center">
                    <div className="max-w-4xl">
                        <h2 data-aos="zoom-in" className='text-5xl font-semibold text-center'>About <span className='text-[#E6533C]'>Us</span></h2>

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Welcome to EnergizeFit, where fitness meets empowerment. Our gym is more than just a place to work out; its a community where individuals of all ages and fitness levels come together to achieve their goals build discipline and enhance their well-being',1000, // wait 1s before replacing "Mice" with
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;