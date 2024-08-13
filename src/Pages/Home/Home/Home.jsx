import React from 'react';
import Banner from '../Banner';
import Habbits from '../../../Components/Habbits';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-[#000000] via-[#280404b3] to-[#000000]'>
            <Banner></Banner>
            <Habbits></Habbits>
        </div>
    );
};

export default Home;