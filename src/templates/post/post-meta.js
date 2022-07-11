import React from 'react';
import PropTypes from 'prop-types';
import VisuallyHidden from '@reach/visually-hidden';

const PostMeta = ({ date, author, permalink, ttr }) => (
  <div>
    <time
      className="dt-published"
      dateTime={date}
      itemProp="datePublished"
    >
      {date}
    </time>
    <span> • </span>

    <VisuallyHidden>
      <span itemProp="author" itemScope itemType="http://schema.org/Person">
        <span itemProp="name">{author}</span>
        <span> • </span>
      </span>
    </VisuallyHidden>
    <span>{ttr} min read</span>
    <span> • </span>
    <a href={permalink} className="u-url">Permalink</a>
    <span> • </span>

  </div>
);

PostMeta.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
  permalink: PropTypes.string,
  ttr: PropTypes.number
};

export default PostMeta;
