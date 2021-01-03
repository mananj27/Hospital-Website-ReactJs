import React from 'react';
import {homeObjThree,homeObjFour} from './Data';
import InfoSection from '../../components/InfoSection/InfoSection';

const Home = () => {
    return (
        <>
           <InfoSection {...homeObjThree} /> 
           <InfoSection {...homeObjFour} />
        </>
    );
};

export default Home