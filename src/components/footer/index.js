import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import LoadTime from '../load-time';

const links = [
  {
    title: 'Twitter',
    url: 'https://twitter.com/benrobertsonio',
  },
  {
    title: 'Github',
    url: 'https://github.com/benrobertsonio',
  },
  {
    title: 'RSS',
    url: '/feed.xml',
  },
];

const Footer = () => (
  <footer id="footer">
    <p>
      &copy; {new Date().getFullYear()} <GatsbyLink to="/">Ben Robertson</GatsbyLink>
    </p>
    <p><LoadTime /></p>
    <nav aria-label="Footer">
      <ul>
        {links.map(({ title, url }) => (
          <li key={title}><a className="u-url" href={url} rel="me">{title}</a></li>
        ))}

      </ul>

    </nav>

    <p>Proudly built with <a href="https://www.gatsbyjs.com">Gatsby</a>.</p>


  </footer>
);


export default Footer;
