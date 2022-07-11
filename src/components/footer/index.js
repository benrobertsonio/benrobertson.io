import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const links = [
  {
    title: '@benrobertsonio',
    url: 'https://twitter.com/benrobertsonio',
    icon: 'twitter'
  },
  {
    title: 'benrobertsonio',
    url: 'https://github.com/benrobertsonio',
    icon: 'github'
  },
  {
    title: 'rss',
    url: '/feed.xml',
    icon: 'rss'
  },
];

const Footer = () => (
  <footer id="footer" sx={{
    pt: 5,
    pb: 3
  }}>
    <div>
      <nav aria-label="Footer">
        {links.map(({ title, url, icon }) => (
          <a
            key={title}
            className="u-url"
            href={url}
            rel="me"
            sx={{
              mr: 3,
              fontSize: 1
            }}
          >
            {/* <span className="icon icon--twitter"></span> */}
            <span>{title}</span>
          </a>
        ))}

      </nav>
      <div style={{ textAlign: 'center', fontSize: 1 }}>
        <p>
          &copy; {new Date().getFullYear()} <GatsbyLink to="/">Ben Robertson</GatsbyLink>
        </p>
        <p>Proudly built with <a href="https://www.gatsbyjs.com">Gatsby</a>.</p>
      </div>
    </div>

  </footer>
);


export default Footer;
