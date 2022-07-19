import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Nav = ({ links }) => (
  <nav id="nav-main" role="navigation">
    <ul style={{
      listStyleType: 'none',
      paddingLeft: 0,
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {links.map(({ to, title }) => (
        <li key={title} style={{ marginLeft: `2rem` }}>
          <Link
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
