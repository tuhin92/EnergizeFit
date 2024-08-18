import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Trainings = () => {
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
        <div className='mt-16 max-w-7xl mx-auto'>
            <h2 data-aos="fade-up" className='text-5xl font-semibold px-2'>Trainings and Exercises</h2>
            <p data-aos="zoom-in-up" className='text-xs mt-4 text-[#767575] px-2'>We believe fitness should be accessible to everyone, everywhere, regardless of income <br /> or access to a gym.</p>

            <div data-aos="zoom-in-up" className='my-12 grid grid-cols-2 lg:grid-cols-4'>
                <img className='h-[202px] w-full object-cover' src="https://i.ibb.co/QKSW7cn/image-8.png" alt="" />
                <img className='h-[202px] w-full lg:col-span-2 object-cover' src="https://i.ibb.co/gjvxtDx/image-6.png" alt="" />
                <img className='h-[202px] w-full object-cover' src="https://i.ibb.co/xH8k7wz/image-11.png" alt="" />
                <img className='h-[202px] w-full lg:col-span-2 object-cover' src="https://i.ibb.co/FwpvHwp/image-7.png" alt="" />
                <img className='h-[202px] w-full object-cover' src="https://i.ibb.co/9yQ5WSM/image-10.png" alt="" />
                <img className='h-[202px] w-full object-cover' src="https://i.ibb.co/1K9C4Nd/image-9.png" alt="" />
            </div>
        </div>
    );
};

export default Trainings;