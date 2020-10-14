import React, { useState } from 'react';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const useStyle = {
  root: {
    background: '#1c1e24',
    color: 'rgb(87, 89, 95)',
  },
  inner: {
    'padding-top': '80px',
    'padding-bottom': '50px',
  }
};

const Technical = ({
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
            <h2 className="mt-0 mb-16 subtitle1 text-white" data-reveal-delay="200">
            Technologies & Practice
            </h2>
            <div >
              <p className="m-0 mb-32 reveal-from-bottom text-white pl-4" data-reveal-delay="400">
              Our Mission is to Be part of the digitization initiative in our nation by spreading technology in the region’s market and society
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Technical.propTypes = propTypes;
Technical.defaultProps = defaultProps;

export default Technical;