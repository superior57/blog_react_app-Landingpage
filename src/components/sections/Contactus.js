import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Input from '../elements/Input';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const useStyle = {
  root: {
    background: 'rgb(28, 30, 36)',
    color: 'rgb(87, 89, 95)',
    'padding-top': '80px',
    'padding-bottom': '80px',    
  },
  inner: {
    display: 'flex',
    'align-items': 'start',
  }

};

const Contactus = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      // {...props}
      style={useStyle.root}
      id="contactus"
    >
      <div className="container">
        <div >
          <div className={splitClasses}>
            <div className="split-item" style={useStyle.inner}>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="subtitle1 text-white">
                  Contact Us
                </h2>
                  <p className="m-0">
                  Email
                  </p>
                  <h4 className="subtitle1 text-white">
                  info@nalmar.io
                  </h4>
                  <p className="m-0">
                  Whatsapp
                  </p>
                  <h4 className="subtitle1 text-white">
                  +966-562666638
                  </h4>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  

                <div className="card">
                  <h4 className="subtitle1 text-dark">
                  Got a project in mind?
                  </h4>       
                  <Input className="mb-12" id="fullname" type="name" label="Subscribe" labelHidden  placeholder="Full Name" required>
                  </Input>
                  <Input className="mb-12" id="email" type="email" label="Subscribe" labelHidden  placeholder="Email address" required>
                  </Input>
                  <Input className="mb-12" id="company_name" type="email" label="Subscribe" labelHidden placeholder="Company name">
                  </Input>
                  <Input className="mb-12" id="phone_number" type="email" label="Subscribe" labelHidden  placeholder="Phone number">
                  </Input>
                  <Input className="mb-12" id="about_project" type="email" label="Subscribe" labelHidden  placeholder="About project" required>
                  </Input>
                  <Button className='button button-primary button-wide-mobile button-sm'>
                  Send message
                  </Button>

                </div>
                
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

Contactus.propTypes = propTypes;
Contactus.defaultProps = defaultProps;

export default Contactus;