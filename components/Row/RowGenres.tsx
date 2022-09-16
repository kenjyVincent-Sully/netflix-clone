import { FC, useState, useEffect, Fragment } from "react";
import { Movie as MovieAPI } from "../../pages/api/movies";
import { Movie, Genre } from "../../types/Movie";

import { ItemGenres } from "./ItemGenres";

export const RowGenres: FC<{ genres: Genre[] }> = ({ genres }) => {
  return (
    <Fragment>
      {genres.map((genre: Genre, i: number) => (
        <Fragment key={`${genre.id}-${i}`}>
          <h2>{genre.name}</h2>
          <ItemGenres id={genre.id} />
        </Fragment>
      ))}
    </Fragment>
  );
};
