import React from 'react';

const BMI_calculator = () => {
    return (
        <div className='mt-16'>
            <h2 className='max-w-[600px] mx-auto text-5xl font-semibold'>BMI Calculator</h2>
            <p className='text-sm  my-4 max-w-[600px] mx-auto'>We believe fitness should be accessible to everyone, everywhere, regardless br of income or access to a gym.</p>



            <div className='mt-12 bg-[#222222] p-8'>
                <div>
                    <h2 className='text-xl font-semibold'>BMI Calculator Chart</h2>
                    <table className='mt-4 border border-collapse border-[#FFFFFF] w-80'>
                        <tr>
                            <th className='border border-[#FFFFFF] p-2 text-center h-[50px]'>BMI</th>
                            <th className='border border-[#FFFFFF] p-2 text-center h-[50px]'>Weight Status</th>
                        </tr>
                        <tr>
                            <td className='border border-[#FFFFFF] p-2 text-center h-[50px]'>Below 18.5</td>
                            <td className='border border-[#FFFFFF] p-2 text-center h-[50px]'>Underweight</td>
                        </tr>
                        <tr>
                            <td className='border border-[#FFFFFF] p-2 text-center h-[50px]'>18.5 - 24.9</td>
                            <td className='border border-[#FFFFFF] p-2 text-center h-[50px]'>Healthy</td>
                        </tr>
                        <tr>
                            <td className='border border-[#FFFFFF] p-2 text-center h-[50px]'>25.0 - 29.9</td>
                            <td className='border border-[#FFFFFF] p-2 text-center h-[50px]'>Overweight</td>
                        </tr>
                        <tr>
                            <td className='border border-[#FFFFFF] p-2 text-center h-[50px]'>30.0 - and Above</td>
                            <td className='border border-[#FFFFFF] p-2 text-center h-[50px]'>Obese</td>
                        </tr>
                    </table>
                </div>


                <div>
                    
                </div>


            </div>
        </div>
    );
};

export default BMI_calculator;