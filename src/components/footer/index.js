import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <footer id="footer">
    <div className={styles.footer}>
      <div className={styles.wrap}>
        <div className="profiles">
          <a className="no-decoration u-url" href="https://twitter.com/banquos_ghost" rel="me">
            <span className="icon icon--twitter"></span>
            <span className="username">@banquos_ghost</span>
          </a>
          &middot;
          <a className="no-decoration u-url" href="https://github.com/benrobertsonio" rel="me">
            <span className="icon icon--github"></span>
            <span className="username">benrobertsonio</span>
          </a>
          &middot;
          <a className="no-decoration u-url" href="{{ base.url }}/feed.xml" rel="me">
            <span className="icon icon--rss"></span>
            <span className="username">rss</span>
          </a>
        </div>

        <p>
          &copy; {new Date().getFullYear()} <a href="/">Ben Robertson</a>
        </p>
        <p>Proudly built with <a href="https://gatsbyjs.com">Gatsby</a>.</p>
      </div>
    </div>
  </footer>
);


export default Footer;
