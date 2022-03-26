import React from 'react';

export function Movie({ title, releaseDate, memo }) {
  console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);

  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}
export const MemoizedMovie = React.memo(Movie);