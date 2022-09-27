import { FC } from "react";
import { Genre, Movie, Tv } from "../../types/Movie";
import { ContentRow } from "./style";
import { Genres } from "./Genres";
import { TopRated } from "./TopRated";
import { NetflixOrigin } from "./NetflixOrigin";

export const Row: FC<{
  genres: Genre[];
  netflix: Tv[];
  topRated: Movie[];
}> = ({ genres, topRated, netflix }) => {
  return (
    <ContentRow>
      <TopRated movies={topRated} />
      <NetflixOrigin movies={netflix} />
      <Genres genres={genres} />
    </ContentRow>
  );
};
