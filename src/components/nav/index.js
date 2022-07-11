import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Nav = ({ links }) => (
  <nav id="nav-main" role="navigation">
    <ul style={{
      listStyleType: 'none',
      paddingLeft: 0
    }}>
      {links.map(({ to, title }) => (
        <li key={title} style={{ marginRight: 3 }}>
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
