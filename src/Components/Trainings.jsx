import React from 'react';

const Trainings = () => {
    return (
        <div className='mt-16 max-w-7xl mx-auto'>
            <h2 className='text-5xl font-semibold px-2'>Trainings and Exercises</h2>
            <p className='text-xs mt-4 text-[#767575] px-2'>We believe fitness should be accessible to everyone, everywhere, regardless of income <br /> or access to a gym.</p>

            <div className='my-12 grid grid-cols-2 lg:grid-cols-4'>
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