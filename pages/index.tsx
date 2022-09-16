import { FC } from "react";
import { GetStaticProps } from "next";
import { Movie as MovieAPI } from "./api/movies";

import { Layout } from "../layout";
import { Banner } from "../components/Banner";
import { Row } from "../components/Row/";
import { Genre, Movie } from "../types/Movie";

const Home: FC<{
  genresList: Genre[];
  netflixOrigin: Movie[];
  topRated: Movie[];
}> = ({ genresList, netflixOrigin, topRated }) => {
  return (
    <Layout>
      <Banner />
      <Row genres={genresList} netflix={netflixOrigin} topRated={topRated} />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const movieAPI = new MovieAPI();
  let genresList: any,
    netflixOrigin: any,
    topRated: any = [];
  await Promise.all([
    movieAPI.getGenresLists(),
    movieAPI.getNetflixOriginals(),
    movieAPI.getTopRated(),
  ]).then((results) => {
    [genresList, netflixOrigin, topRated] = results;
  });

  return {
    props: {
      genresList: genresList.genres,
      netflixOrigin: netflixOrigin.results,
      topRated: topRated.results,
    },
  };
};
