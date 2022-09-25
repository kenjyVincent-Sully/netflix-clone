import { FC, useContext } from "react";
import { Movie } from "../../types/Movie";
import { Skeleton, BoxContent } from "./style";
import { QuickViewContext } from "../../context/QuickViewContext";

export const Item: FC<{ movies: Movie[]; isLoading: boolean }> = ({
  movies,
  isLoading,
}) => {
  const { handleClick } = useContext(QuickViewContext);

  return (
    <BoxContent>
      {movies.map((movie: Movie) => {
        const { original_title, poster_path, backdrop_path, id, title } = movie;
        const img =
          backdrop_path !== null
            ? `${process.env.NEXT_PUBLIC_PATH_IMG}${backdrop_path}`
            : `${process.env.NEXT_PUBLIC_PATH_IMG}${poster_path}`;
        return (
          <div onClick={() => handleClick(id)} key={id}>
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
