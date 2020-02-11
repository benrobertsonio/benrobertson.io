import React from 'react';
import PropTypes from 'prop-types';

const PostMeta = ({ date, author, permalink, ttr }) => (
  <p className="post-meta">
    <time className="dt-published" dateTime={date} itemProp="datePublished">{date}</time>
    <span itemProp="author" itemScope itemType="http://schema.org/Person">
      <span itemProp="name">{author}</span>
    </span>
    • <a href={permalink} className="u-url">Permalink</a>
    <span>
      {ttr} minute reading time
    </span>
  </p>
);

PostMeta.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
  permalink: PropTypes.string,
  ttr: PropTypes.number
};

export default PostMeta;
