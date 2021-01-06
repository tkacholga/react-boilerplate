import React from 'react';
import PropTypes from 'prop-types';

// components
import Footer from '../Footer';
import FooterAddress from '../FooterAddress';
import Navbar from '../Navbar';
import ScrollButton from '../../ScrollButton';

const PageLayout = props => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <FooterAddress />
      <Footer />
      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default PageLayout;
