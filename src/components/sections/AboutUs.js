import React, { useState } from 'react';
import { SectionProps } from '../../utils/SectionProps';
// import './../../assets/css/style.css';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const useStyle = {
  root: {
    background: '#fff',
    color: 'rgb(87, 89, 95)',
    'padding-top': '100px',
  },
  inner: {
    'padding-top': '80px',
    'padding-bottom': '80px',
  }
};

const AboutUs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  

  return (
    <section
      // {...props}
      style={useStyle.root}
    >
      <div className="container">
        <div style={useStyle.inner}>
          <div className="hero-content">
            <h2 className="mt-0 mb-16 subtitle1 text-dark" data-reveal-delay="200">
              About Us
            </h2>
            <div className="container-sm">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Founded by an X-Software Engineer and IT Project Manager with over 12+ years in in IT spanning the Banking & Finance, Health and Education sectors. With his leadership and expertise and a diverse team of creative, hard working engineers and designers. We aim to provide cost-effective apps to small and midsized companies and organizations avoiding all greedy business models.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutUs.propTypes = propTypes;
AboutUs.defaultProps = defaultProps;

export default AboutUs;