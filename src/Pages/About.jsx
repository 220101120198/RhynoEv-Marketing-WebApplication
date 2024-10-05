import React from "react";

import CommonSection from "../Components/UI/commonSection";

import Helmet from "../Components/Helmet/Helmet";

import AboutSection from "../Components/UI/AboutSection";

const About = () => {
  return( <Helmet title='About Us'>
    <CommonSection title='About Us'/>
    <AboutSection/>
  </Helmet>
  );
};

export default About;