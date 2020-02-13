import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import theme from '../../gatsby-plugin-theme-ui';

const Nav = ({ links }) => (
  <nav id="nav-main" role="navigation">
    <ul sx={{
      display: 'flex',
      listStyleType: 'none',
      paddingLeft: 0
    }}>
      {links.map(({ to, title }) => (
        <li key={title} sx={{ marginRight: 3 }}>
          <Link sx={theme.styles.a}
            to={to}
          >{title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  links: PropTypes.array
};

export default Nav;
