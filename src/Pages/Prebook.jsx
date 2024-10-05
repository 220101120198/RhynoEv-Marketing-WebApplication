import React from 'react';

import CommonSection from "../Components/UI/commonSection";

import Helmet from "../Components/Helmet/Helmet";

import BuyingForm from '../Components/UI/Buyingform';

const Prebook = () => {
  return( <Helmet title='About Us'>
    <CommonSection title='Prebook Now'/>
    <h1>Booking and Payment Method</h1>
    <BuyingForm/>
  </Helmet>
  );
};

export default Prebook;