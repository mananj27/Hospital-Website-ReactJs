import React from 'react';
import {homeObjTwo,homeObjThree,homeObjFour} from './Data';
import InfoSection from '../../components/InfoSection/InfoSection';

const Home = () => {
    return (
        <>
           <InfoSection {...homeObjTwo} /> 
           <InfoSection {...homeObjThree} /> 
           <InfoSection {...homeObjFour} />
        </>
    );
};

export default Home
