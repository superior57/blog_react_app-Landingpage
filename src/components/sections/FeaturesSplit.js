import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const useStyle = {
  root: {
    background: 'rgb(243, 243, 243)',
    color: 'rgb(87, 89, 95)',
    'padding-top': '80px',
    'padding-bottom': '80px',
  },
  inner: {
    'padding-top': '80px',
    'padding-bottom': '80px',
  }
};

const FeaturesSplit = ({
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
    >
      <div className="container">
        <div >
          <div className={splitClasses}>
          <h2 className="mt-0 mb-16 subtitle1 text-dark" data-reveal-delay="200">
              Case Studies
            </h2>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12 text-dark">
                  Our Vision
                  </h3>
                <p className="m-0">
                Be in the top 5% of small to medium app development companies in the region
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12 text-dark">
                  Our Mission
                  </h3>
                <p className="m-0">
                Be part of the digitization initiative in our nation by spreading technology in the region’s market and society
                  </p>
                
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
              <h3 className="mt-0 mb-12 text-dark">
                  Task Force
                  </h3>
                  <p>
                  <ul>
                    <li>Carefully selected after rigorous interviews & testing</li>
                    <li>Dedicated</li>
                    <li>Hard Workers</li>
                    <li>Ethical</li>
                    <li>Problems Solvers</li>
                    <li>Creative</li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Our Engineers/engineers.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;