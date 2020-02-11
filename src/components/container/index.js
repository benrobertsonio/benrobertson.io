import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Container = ({ Element = 'div', children, large }) => (
  <Element sx={{
    width: '90%',
    maxWidth: large ? '1210px' : '748px',
    margin: '0 auto'
  }}>
    {children}
  </Element>
);

Container.propTypes = {
  Element: PropTypes.string,
  children: PropTypes.node
};

export default Container;
