import { FC, Fragment } from "react";
import { Genre } from "../../types/Movie";
import { ItemGenres } from "./ItemGenres";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TitleSection } from "./style";
export const Genres: FC<{ genres: Genre[] }> = ({ genres }) => {
  return (
    <Fragment>
      {genres.map((genre: Genre, i: number) => (
        <Fragment key={`${genre.id}-${i}`}>
          <TitleSection>
            <h2>{genre.name}</h2>
            <div>
              Tout explorer
              <ArrowForwardIosIcon />
            </div>
          </TitleSection>
          <ItemGenres id={genre.id} />
        </Fragment>
      ))}
    </Fragment>
  );
};
