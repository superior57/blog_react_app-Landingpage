import React from 'react';
// import sections
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';

import AboutUs from '../components/sections/AboutUs';
import Technical from '../components/sections/Technical';
import Values from '../components/sections/Values';
import Contactus from '../components/sections/Contactus';

const Home = () => {

  return (
    <>
      <AboutUs />
      <Technical />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Values />
      <Testimonial topDivider />
      <Contactus />
    </>
  );
}

export default Home;