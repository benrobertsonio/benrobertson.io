import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'theme-ui';

const TableOfContents = ({ items }) => (
  <ul>
    {items.map(({ url, title }) => <li key={url}>
      <Link href={url}>{title}</Link>
    </li>)}
  </ul>
);

TableOfContents.propTypes = {};

export default TableOfContents;
