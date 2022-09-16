import { FC, useState, useEffect, Fragment } from "react";
import { Movie as MovieAPI } from "../../pages/api/movies";
import { Movie } from "../../types/Movie";
import { Skeleton, ContentImg, BoxContent } from "./style";

export const ItemGenres: FC<{ id: number }> = ({ id }) => {
  const [movies, setMovies] = useState<Movie | any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    new MovieAPI()
      .getGenre(id.toString())
      .then(({ results }) => {
        setMovies(results);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

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
