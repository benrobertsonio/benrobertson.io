import React from 'react';
import styles from './footer.module.css';
/** @jsx jsx */
import { jsx, Link, Container, Flex, Box } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';
import theme from '../../gatsby-plugin-theme-ui';

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
    <Container>
      <Flex sx={{ justifyContent: 'center' }} as="nav" aria-label="Footer">
        {links.map(({ title, url, icon }) => (
          <Link
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
          </Link>
        ))}

      </Flex>
      <Box sx={{ textAlign: 'center', fontSize: 1 }}>
        <p>
          &copy; {new Date().getFullYear()} <GatsbyLink sx={theme.styles.a} href="/">Ben Robertson</GatsbyLink>
        </p>
        <p>Proudly built with <Link href="https://www.gatsbyjs.com">Gatsby</Link>.</p>
      </Box>
    </Container>

  </footer>
);


export default Footer;
