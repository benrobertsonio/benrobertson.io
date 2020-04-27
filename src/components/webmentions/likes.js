import React from 'react'
import { Text, Link, jsx } from 'theme-ui';
/** @jsx jsx */


function Author({ author: { name, url } }) {
  return <Link href={url}>{name}</Link>
}

export default function Likes({ mentions }) {
  let likes = mentions.filter(({ likeOf }) => (typeof likeOf === 'string'))

  if (likes.length === 1) {
    return <Text sx={{ fontSize: "0" }}>Liked by <Author author={likes[0].author} /></Text>
  }

  if (likes.length > 1 && likes.length < 3) {
    const firstLike = likes[0].author;
    const secondLike = likes[1].author;

    return (
      <Text sx={{ fontSize: "0" }}>Liked by <Author author={firstLike} /> and <Author author={secondLike} /></Text>
    )
  }

  if (likes.length === 3) {
    const firstLike = likes[0].author;
    const secondLike = likes[1].author;
    const thirdLike = likes[2].author;

    return (
      <Text sx={{ fontSize: "0" }}>Liked by <Author author={firstLike} />, <Author author={secondLike} />, and <Author author={thirdLike} /></Text>
    )
  }

  if (likes.length > 3) {
    const firstLike = likes[0].author;
    const secondLike = likes[1].author;

    const count = likes.length - 2;

    return (
      <Text sx={{ fontSize: "0" }}>Liked by <Author author={firstLike} />, <Author author={secondLike} />, and {count} other people.</Text>
    )
  }

  return null;
}
