import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { Link, Heading, Box, jsx } from 'theme-ui';

const TableOfContents = ({ items }) => (
  <Box sx={{
    marginTop: 1,

    '@media screen and (min-width: 1200px)': {
      position: 'sticky',
      top: 5,
      marginLeft: 5
    }
  }}>
    <Heading>Contents</Heading>
    <ul>
      {items.map(({ url, title }) => <li key={url}>
        <Link href={url}>{title}</Link>
      </li>)}
    </ul>
  </Box >
);

TableOfContents.propTypes = {};

export default TableOfContents;
