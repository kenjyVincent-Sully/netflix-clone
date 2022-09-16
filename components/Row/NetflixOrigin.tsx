import { FC } from "react";
import { Movie } from "../../types/Movie";
import { Item } from "./Item";

export const NetflixOrigin: FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <div>
      <h2>Seulement sur Netflix</h2>
      <Item movies={movies} isLoading />
    </div>
  );
};
