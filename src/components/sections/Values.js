import { reduce } from 'lodash';
import React, { useState } from 'react';
import { SectionProps } from '../../utils/SectionProps';
// import './../../assets/css/style.css';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const useStyle = {
  root: {
    background: '#fff',
    position: 'relative',
    color: '#fff'
  },
  inner: {   

  },
  detail: {
    'padding-top': '80px',
    color: '#fff',
  },
  overay: {
    
  }
};

const Values = ({
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
      <div style={useStyle.inner}>
        <Image
          src={require('./../../assets/images/Values/Valeo-company-values.webp')}
          alt="Features tile icon 05"
          width={'100%'}
          height={'auto'} />
        </div>
      <div className="overay" >
        <div className="container" style={useStyle.detail}>
          <h2 className="subtitle1 text-white">
          Methodology
          </h2>
          <p className="text-white">
            <ul>
              <li>
              Delivery of products/projects is incremental
              </li>
              <li>
              Every release goes through a strict cycle of system integration testing and user acceptance testing
              </li>
              <li>
              We gradually build a product and close a project till perfection
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}

Values.propTypes = propTypes;
Values.defaultProps = defaultProps;

export default Values;