import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const Team = () => {
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
        <div className='max-w-7xl mx-auto mt-16'>
            <h2 data-aos="fade-up" className='text-center text-5xl font-semibold'>Meet Our Team</h2>
            <p data-aos="zoom-in-up" className='text-xs text-[#767575] text-center mt-3'>We believe fitness should be accessible to everyone, everywhere, regardless of income or <br /> access to a gym.</p>


            <div className='mt-12 rounded-xl p-6 bg-[#222222] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div data-aos="zoom-in-up" className='relative h-[320px] w-full card'>
                    <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/18502123/pexels-photo-18502123/free-photo-of-young-man-in-sports-clothing-posing-with-a-dumbbell.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='absolute bottom-4 left-8'>
                        <h2 className='text-white text-3xl font-bold'>Jerome Bell</h2>
                        <p>Trainer</p>
                    </div>
                </div>

                <div data-aos="zoom-in-up" className='relative h-[320px] w-full card'>
                    <img className='h-[320px] w-full object-cover card' src="https://images.pexels.com/photos/20340521/pexels-photo-20340521/free-photo-of-portrait-of-woman-exercising-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='absolute bottom-4 left-8'>
                        <h2 className='text-white text-3xl font-bold'>Cameron Williamson</h2>
                        <p>Trainer</p>
                    </div>
                </div>


                <div data-aos="zoom-in-up" className='relative h-[320px] w-full card'>
                    <img className='h-[320px] w-full object-cover card' src="https://images.pexels.com/photos/15549974/pexels-photo-15549974/free-photo-of-young-woman-in-sportswear-standing-at-the-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='absolute bottom-4 left-8'>
                        <h2 className='text-white text-3xl font-bold'>Darrell Steward</h2>
                        <p>Trainer</p>
                    </div>
                </div>


                <div data-aos="zoom-in-up" className='relative h-[320px] w-full card'>
                    <img className='h-[320px] w-full object-cover card' src="https://images.pexels.com/photos/20060599/pexels-photo-20060599/free-photo-of-young-woman-in-gym-clothing-holding-a-kettlebell-at-the-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='absolute bottom-4 left-8'>
                        <h2 className='text-white text-3xl font-bold'>Dianne Russell</h2>
                        <p>Trainer</p>
                    </div>
                </div>

                <div data-aos="zoom-in-up" className='relative h-[320px] w-full card'>
                    <img className='h-[320px] w-full object-cover card' src="https://images.pexels.com/photos/17210052/pexels-photo-17210052/free-photo-of-portrait-of-man-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='absolute bottom-4 left-8'>
                        <h2 className='text-white text-3xl font-bold'>Cody Fisher</h2>
                        <p>Trainer</p>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className='relative h-[320px] w-full card'>
                    <img className='h-[320px] w-full object-cover card' src="https://images.pexels.com/photos/20340536/pexels-photo-20340536/free-photo-of-man-exercising-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='absolute bottom-4 left-8'>
                        <h2 className='text-white text-3xl font-bold'>Theresa Webb</h2>
                        <p>Trainer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;