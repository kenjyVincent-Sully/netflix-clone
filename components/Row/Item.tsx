import { FC } from "react";
import { Movie } from "../../types/Movie";
import { Skeleton, BoxContent } from "./style";

export const Item: FC<{ movies: Movie[]; isLoading: boolean }> = ({
  movies,
  isLoading,
}) => {
  return (
    <BoxContent>
      {movies.map((movie: Movie) => {
        const { original_title, poster_path, backdrop_path, id, title } = movie;
        const img =
          backdrop_path !== null
            ? `${process.env.NEXT_PUBLIC_PATH_IMG}${backdrop_path}`
            : `${process.env.NEXT_PUBLIC_PATH_IMG}${poster_path}`;
        return (
          <div key={id}>
            {isLoading ? (
              <img src={img} alt={`${original_title} ` || ` ${title}`} />
            ) : (
              <Skeleton />
            )}
          </div>
        );
      })}
    </BoxContent>
  );
};
