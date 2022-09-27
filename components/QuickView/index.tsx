import { useContext, useState, useEffect, FC } from "react";
import Dialog from "@mui/material/Dialog";
import { QuickViewContext } from "../../context/QuickViewContext";
import { Movie as MovieAPI } from "../../pages/api/movies";
import { Movie, MovieDetail } from "../../types/Movie";
import { HeroBanner } from "./HeroBanner";
import { Detail } from "./Detail";
import { SimilarMovies } from "./SimilarMovies";

export const QuickView: FC = () => {
  const [movie, setMovie] = useState<MovieDetail | any>([]);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const { handleClick, open, idMovie, mediaType } =
    useContext(QuickViewContext);

  useEffect(() => {
    idMovie &&
      new MovieAPI()
        .getDetails(idMovie as number, mediaType)
        .then((results) => {
          setMovie(results);
          setIsLoading(true);
        })
        .catch((err) => console.log(err));

    idMovie &&
      new MovieAPI()
        .getSimilarMovies(idMovie as number, mediaType)
        .then(({ results }) => {
          setSimilarMovies(
            results.filter((item: Movie) => !!item.backdrop_path),
          );
          setIsLoading(true);
        })
        .catch((err) => console.log(err));
    setIsLoading(false);
  }, [idMovie, isLoading]);

  return (
    <>
      {isLoading && (
        <Dialog
          open={open}
          onClose={() => handleClick(idMovie)}
          maxWidth="lg"
          scroll="body"
        >
          <HeroBanner movie={movie} />
          <Detail detail={movie} />
          <SimilarMovies similarMovies={similarMovies} />
        </Dialog>
      )}
    </>
  );
};
