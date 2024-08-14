import React from 'react';
import Banner from '../Banner';
import Habbits from '../../../Components/Habbits';
import Trainings from '../../../Components/Trainings';

const Home = () => {
    return (
        <div className='pb-12 bg-gradient-to-r from-[#000000] via-[#280404b3] to-[#000000]'>
            <Banner></Banner>
            <Habbits></Habbits>
            <Trainings></Trainings>
        </div>
    );
};

export default Home;