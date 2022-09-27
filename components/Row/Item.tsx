import { FC, useContext } from "react";
import { Movie, Tv } from "../../types/Movie";
import { Skeleton, BoxContent } from "./style";
import { QuickViewContext } from "../../context/QuickViewContext";

export const Item: FC<{ movies: Array<Movie | Tv>; isLoading: boolean }> = ({
  movies,
  isLoading,
}) => {
  const { handleClick } = useContext(QuickViewContext);

  return (
    <BoxContent>
      {movies.map((movie: Movie | Tv) => {
        const {
          original_title,
          original_name,
          name,
          poster_path,
          backdrop_path,
          id,
          title,
        } = movie as Movie | Tv;
        const img =
          backdrop_path !== null
            ? `${process.env.NEXT_PUBLIC_PATH_IMG}${backdrop_path}`
            : `${process.env.NEXT_PUBLIC_PATH_IMG}${poster_path}`;
        return (
          <div onClick={() => handleClick(id)} key={id}>
            {isLoading ? (
              <img
                src={img}
                alt={
                  `${original_title} ` ||
                  ` ${title}` ||
                  ` ${name}` ||
                  ` ${original_name}`
                }
              />
            ) : (
              <Skeleton />
            )}
          </div>
        );
      })}
    </BoxContent>
  );
};
