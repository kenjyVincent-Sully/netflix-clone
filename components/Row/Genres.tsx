import { FC, Fragment } from "react";
import { Genre } from "../../types/Movie";
import { ItemGenres } from "./ItemGenres";

export const Genres: FC<{ genres: Genre[] }> = ({ genres }) => {
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
