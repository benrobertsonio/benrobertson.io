import React from 'react';

const TableOfContents = ({ items }) => (
  <div>
    <h2>Contents</h2>
    <ul>
      {items.map(({ url, title }) => <li key={url}>
        <a href={url}>{title}</a>
      </li>)}
    </ul>
  </div >
);

export default TableOfContents;
