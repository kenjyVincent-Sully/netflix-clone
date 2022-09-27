import { FC } from "react";
import { MovieDetail, Genre } from "../../types/Movie";
import { DetailStyle } from "./style";
import { formatMinuteToReadable } from "../../helper/Text";

export const Detail: FC<{ detail: MovieDetail }> = ({ detail }) => {
  const {
    overview,
    release_date,
    genres,
    vote_average,
    vote_count,
    production_companies,
    runtime,
  } = detail;
  const date = new Date(`${release_date}`);

  return (
    <DetailStyle>
      <div className="tag-left">
        <span>
          Recommandé à {Math.ceil((vote_count * vote_average) / 100)} %
        </span>
        <span>{date.getFullYear()}</span>
        <span>{formatMinuteToReadable(runtime)}</span>

        <p>{overview}</p>
      </div>

      <div className="tag-right">
        <p>
          <span> Distribution : </span>
          {production_companies
            .map((companie: Genre) => companie.name)
            .join(", ")}
        </p>
        <p>
          <span>Genres : </span>
          {genres.map((genre: Genre) => genre.name).join(", ")}
        </p>
      </div>
    </DetailStyle>
  );
};
