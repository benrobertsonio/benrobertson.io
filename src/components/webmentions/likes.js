import React from 'react'


function Author({ author: { name, url } }) {
  return <a href={url}>{name}</a>
}

export default function Likes({ mentions }) {
  let likes = mentions.filter(({ likeOf }) => (typeof likeOf === 'string'))

  if (likes.length === 1) {
    return <p sx={{ fontSize: "0" }}>Liked by <Author author={likes[0].author} /></p>
  }

  if (likes.length > 1 && likes.length < 3) {
    const firstLike = likes[0].author;
    const secondLike = likes[1].author;

    return (
      <p sx={{ fontSize: "0" }}>Liked by <Author author={firstLike} /> and <Author author={secondLike} /></p>
    )
  }

  if (likes.length === 3) {
    const firstLike = likes[0].author;
    const secondLike = likes[1].author;
    const thirdLike = likes[2].author;

    return (
      <p sx={{ fontSize: "0" }}>Liked by <Author author={firstLike} />, <Author author={secondLike} />, and <Author author={thirdLike} /></p>
    )
  }

  if (likes.length > 3) {
    const firstLike = likes[0].author;
    const secondLike = likes[1].author;

    const count = likes.length - 2;

    return (
      <p sx={{ fontSize: "0" }}>Liked by <Author author={firstLike} />, <Author author={secondLike} />, and {count} other people.</p>
    )
  }

  return null;
}
