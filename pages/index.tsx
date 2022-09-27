import { FC, useEffect, useState, useContext } from "react";
import { GetStaticProps } from "next";
import { Movie as MovieAPI } from "./api/movies";
import { Layout } from "../layout";
import { Banner } from "../components/Banner";
import { Row } from "../components/Row/";
import { QuickView } from "../components/QuickView";
import { Genre, MediaType, Movie, Tv } from "../types/Movie";

const Home: FC<{
  genresList: Genre[];
  netflixOrigin: Tv[];
  randomMovie: Movie[];
  topRated: Movie[];
}> = ({ genresList, netflixOrigin, topRated, randomMovie }) => {
  const [movie, setMovie] = useState<Movie | any>([]);

  useEffect(() => {
    setMovie(randomMovie[Math.floor(Math.random() * randomMovie.length - 1)]);
  }, []);

  return (
    <Layout>
      <Banner movie={movie} />
      <Row genres={genresList} netflix={netflixOrigin} topRated={topRated} />
      <QuickView />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { Tv, Movie } = MediaType;
  const movieAPI = new MovieAPI();
  let genresList: any,
    netflixOrigin: any,
    randomMovie: any,
    topRated: any = [];
  await Promise.all([
    movieAPI.getGenresLists(Movie),
    movieAPI.getNetflixOriginals(Tv),
    movieAPI.getTrending(Movie),
    movieAPI.getTopRated(Movie),
  ]).then((results) => {
    [genresList, netflixOrigin, randomMovie, topRated] = results;
  });

  return {
    props: {
      genresList: genresList.genres,
      netflixOrigin: netflixOrigin.results,
      randomMovie: randomMovie.results,
      topRated: topRated.results,
    },
  };
};
