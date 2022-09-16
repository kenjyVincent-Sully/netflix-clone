import { FC } from "react";
import { Genre, Movie } from "../../types/Movie";
import { ContentRow } from "./style";
import { RowGenres } from "./RowGenres";
import { TopRated } from "./TopRated";
import { NetflixOrigin } from "./NetflixOrigin";

export const Row: FC<{
  genres: Genre[];
  netflix: Movie[];
  topRated: Movie[];
}> = ({ genres, topRated, netflix }) => {
  return (
    <ContentRow>
      <TopRated movies={topRated} />
      <NetflixOrigin movies={netflix} />
      <RowGenres genres={genres} />
    </ContentRow>
  );
};
