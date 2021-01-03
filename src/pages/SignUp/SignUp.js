import React from 'react';
import InfoSection  from '../../components/InfoSection/InfoSection';
import {homeObjFour} from './Data';

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default SignUp;