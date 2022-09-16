import { FC } from "react";
import { Movie } from "../../types/Movie";
import { Item } from "./Item";

export const TopRated: FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <div>
      <h2>Les mieux notés</h2>
      <Item movies={movies} isLoading />
    </div>
  );
};
