import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* schedule  */}
            <h2 className='text-5xl font-bold text-center mt-4'>Schedule</h2>


            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10  mt-8'>
                <div className="card bg-base-100 w-96">
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
                <div className="card bg-base-100 w-96">
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
        </div>
    );
};

export default Pricing;