import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const BMI_calculator = () => {
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
        <div className='mt-16'>
            <h2 data-aos="fade-up" className='max-w-[600px] mx-auto text-5xl font-semibold'>BMI Calculator</h2>
            <p data-aos="zoom-in-up" className='text-sm  my-4 max-w-[600px] mx-auto text-[#767575]'>We believe fitness should be accessible to everyone, everywhere, regardless br of income or access to a gym.</p>



            <div className='mt-12 bg-[#222222] p-12 lg:flex justify-around'>
                <div data-aos="zoom-in-right">
                    <h2 className='text-xl font-semibold'>BMI Calculator Chart</h2>
                    <table className='mt-8 border border-collapse border-[#FFFFFF] w-80 text-[#FFFFFF80]'>
                        <tr>
                            <th className='border border-[#FFFFFF80] p-2 text-center h-[50px] text-[#FFFFFF]'>BMI</th>
                            <th className='border border-[#FFFFFF80] p-2 text-center h-[50px] text-[#FFFFFF]'>Weight Status</th>
                        </tr>
                        <tr>
                            <td className='border border-[#FFFFFF80] p-2 text-center h-[50px]'>Below 18.5</td>
                            <td className='border border-[#FFFFFF80] p-2 text-center h-[50px]'>Underweight</td>
                        </tr>
                        <tr>
                            <td className='border border-[#FFFFFF80] p-2 text-center h-[50px]'>18.5 - 24.9</td>
                            <td className='border border-[#FFFFFF80] p-2 text-center h-[50px]'>Healthy</td>
                        </tr>
                        <tr>
                            <td className='border border-[#FFFFFF80] p-2 text-center h-[50px]'>25.0 - 29.9</td>
                            <td className='border border-[#FFFFFF80] p-2 text-center h-[50px]'>Overweight</td>
                        </tr>
                        <tr>
                            <td className='border border-[#FFFFFF80] p-2 text-center h-[50px]'>30.0 - and Above</td>
                            <td className='border border-[#FFFFFF80] p-2 text-center h-[50px]'>Obese</td>
                        </tr>
                    </table>
                </div>


                <div data-aos="zoom-in-left" className='mt-12 lg:mt-0'>
                    <h2 className='text-xl font-semibold'>Calculate your BMI</h2>
                    <p className='text-xs mt-3 text-[#767575]'>We believe fitness should be accessible to everyone, everywhere, regardless of <br /> income or access to a gym. </p>


                    <form className='mt-4'>
                        <div className='flex gap-2'>
                            <input type="number" placeholder="Height/cm" className="input input-bordered w-full focus:outline-none px-6 bg-[#484848]" required />
                            <input type="number" placeholder="Weight/kg" className="input input-bordered w-full focus:outline-none px-6 bg-[#484848]" required />
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <input type="number" placeholder="Age" className="input input-bordered w-full focus:outline-none px-6 bg-[#484848]" required />
                            <input type="text" placeholder="Sex" className="input input-bordered w-full focus:outline-none px-6 bg-[#484848]" required />
                        </div>
                        <input type="text" placeholder="Select an activity factor" className="input input-bordered w-full focus:outline-none mt-2 bg-[#484848]" required />
                        <button data-aos="fade-up" className="btn bg-[#E6533C] text-white rounded-full w-1/2 mt-4">Calculate</button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default BMI_calculator;