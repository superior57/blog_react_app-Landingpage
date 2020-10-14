import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from './../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const useStyle = {
  root: {
    background: '#fff',
    padding: '80px 0',
  }
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  return (
    <section
      style={useStyle.root}
    >
      <div className="container">
        <div >
          <h2 className="subtitle1 text-dark">
            Our Products
          </h2>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                <Image
                      src={require('./../../assets/images/App dev/1.png')}
                      alt="Features tile icon 02"
                      width={'200px'}
                      height={'200px'} />
                  <p className="text-sm mb-0">
                    {/* description about this app.  */}
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                <Image
                      src={require('./../../assets/images/App dev/2.jpg')}
                      alt="Features tile icon 02"
                      width={'100%'}
                      height={'200px'} />
                  <p className="text-sm mb-0">
                    {/* description about this app.  */}
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                <Image
                      src={require('./../../assets/images/App dev/3.jpg')}
                      alt="Features tile icon 02"
                      width={'100%'}
                      height={'200px'} />
                  <p className="text-sm mb-0">
                    {/* description about this app.  */}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;