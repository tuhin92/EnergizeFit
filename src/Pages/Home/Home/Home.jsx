import React from 'react';
import Banner from '../Banner';
import Habbits from '../../../Components/Habbits';
import Trainings from '../../../Components/Trainings';
import BMI_calculator from '../../../Components/BMI_calculator';
import Team from '../../../Components/Team';

const Home = () => {
    return (
        <div className='pb-12 bg-gradient-to-r from-[#000000] via-[#280404b3] to-[#000000] p-2'>
            <Banner></Banner>
            <Habbits></Habbits>
            <Trainings></Trainings>
            <BMI_calculator></BMI_calculator>
            <Team></Team>
        </div>
    );
};

export default Home;